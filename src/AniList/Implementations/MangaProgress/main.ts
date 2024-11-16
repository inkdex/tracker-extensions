import {
    Chapter,
    ChapterReadActionQueueProcessingResult,
    Form,
    MangaProgress,
    MangaProgressProviding,
    SourceManga,
    TrackedMangaChapterReadAction,
} from "@paperback/types";
import {
    MediaListStatus,
    TitleProgress,
    titleProgressMutationMutation,
    TitleProgressMutationVariables,
    titleProgressQuery,
    TitleProgressQueryVeriables,
} from "../../GraphQL/Tracking";
import { Viewer, viewerQuery } from "../../GraphQL/Viewer";
import makeRequest from "../../Services/Requests";
import { TrackingForm } from "./form";

export class MangaProgressImplementation implements MangaProgressProviding {
    async getMangaProgressManagementForm(
        sourceManga: SourceManga,
    ): Promise<Form> {
        const viewer = await makeRequest<Viewer>(viewerQuery, true);

        return new TrackingForm(viewer, Number(sourceManga.mangaId));
    }

    async getMangaProgress(
        sourceManga: SourceManga,
    ): Promise<MangaProgress | undefined> {
        const viewer = await makeRequest<Viewer>(viewerQuery, true);

        const queryVariables: TitleProgressQueryVeriables = {
            userId: viewer.Viewer.id,
            mediaId: Number(sourceManga.mangaId),
        };

        let mediaList;
        try {
            const json = await makeRequest<
                TitleProgress,
                TitleProgressQueryVeriables
            >(titleProgressQuery, false, queryVariables);
            mediaList = json.MediaList;
        } catch (error) {
            if (!error?.toString().includes("[404]")) {
                throw error;
            }

            return;
        }

        const lastReadChapter: Chapter = {
            chapterId: String(mediaList.progress + 1),
            sourceManga,
            langCode: "unknown",
            chapNum: mediaList.progress + 1,
        };

        const lastReadTime = new Date(0);
        lastReadTime.setUTCSeconds(mediaList.updatedAt);

        const mangaProgress: MangaProgress = {
            sourceManga,
            lastReadChapter,
            lastReadTime,
            userRating: mediaList.score,
        };

        return mangaProgress;
    }

    async processChapterReadActionQueue(
        actions: TrackedMangaChapterReadAction[],
    ): Promise<ChapterReadActionQueueProcessingResult> {
        const viewer = await makeRequest<Viewer>(viewerQuery, true);

        const prog: ChapterReadActionQueueProcessingResult = {
            successfulItems: [],
            failedItems: [],
        };

        for (const action of actions) {
            try {
                const queryVariables: TitleProgressQueryVeriables = {
                    userId: viewer.Viewer.id,
                    mediaId: Number(action.sourceManga.mangaId),
                };

                let mediaList;
                try {
                    const json = await makeRequest<
                        TitleProgress,
                        TitleProgressQueryVeriables
                    >(titleProgressQuery, false, queryVariables);
                    mediaList = json.MediaList;
                } catch (error) {
                    if (!error?.toString().includes("[404]")) {
                        prog.failedItems.push(action.sourceManga.mangaId);
                        continue;
                    }
                }

                if (
                    mediaList?.progress &&
                    mediaList.progress >= action.readChapter.chapNum
                ) {
                    prog.successfulItems.push(action.sourceManga.mangaId);
                    continue;
                }

                const mutationVariables: TitleProgressMutationVariables = {
                    userId: viewer.Viewer.id,
                    mediaId: Number(action.sourceManga.mangaId),
                    progress: action.readChapter.chapNum,
                };

                if (
                    !mediaList?.progressVolumes ||
                    (action.readChapter.volume &&
                        mediaList.progressVolumes >= action.readChapter.volume)
                ) {
                    mutationVariables.progressVolumes =
                        action.readChapter.volume ?? 1;
                }

                if (!mediaList) {
                    mutationVariables.status = MediaListStatus.CURRENT.id;
                    mutationVariables.progressVolumes =
                        action.readChapter.volume ?? 1;
                }

                await makeRequest<
                    TitleProgress,
                    TitleProgressMutationVariables
                >(titleProgressMutationMutation, true, mutationVariables);

                prog.successfulItems.push(action.sourceManga.mangaId);
            } catch {
                prog.failedItems.push(action.sourceManga.mangaId);
            }
        }

        return prog;
    }
}
