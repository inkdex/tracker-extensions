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
import makeRequest from "../../Services/Requests";
import { TrackingForm } from "./form";

export class MangaProgressImplementation implements MangaProgressProviding {
    async getMangaProgressManagementForm(
        sourceManga: SourceManga,
    ): Promise<Form> {
        const viewerId = Number(Application.getState("viewer-id"));

        if (isNaN(viewerId)) {
            throw new Error(
                "You are not authenticated, please log in through the AniList settings",
            );
        }

        return new TrackingForm(viewerId, Number(sourceManga.mangaId));
    }

    async getMangaProgress(
        sourceManga: SourceManga,
    ): Promise<MangaProgress | undefined> {
        const viewerId = Number(Application.getState("viewer-id"));

        if (isNaN(viewerId)) {
            throw new Error(
                "You are not authenticated, please log in through the AniList settings",
            );
        }

        const queryVariables: TitleProgressQueryVeriables = {
            userId: viewerId,
            mediaId: Number(sourceManga.mangaId),
        };

        let mediaList;
        try {
            const json = await makeRequest<
                TitleProgress,
                TitleProgressQueryVeriables
            >(titleProgressQuery, true, queryVariables);
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
        const viewerId = Number(Application.getState("viewer-id"));

        const prog: ChapterReadActionQueueProcessingResult = {
            successfulItems: [],
            failedItems: [],
        };

        if (isNaN(viewerId)) {
            return prog;
        }

        const latestChapters: Map<string, number> = new Map();
        for (const action of actions) {
            if (
                latestChapters.get(action.sourceManga.mangaId) ??
                0 < Math.floor(action.readChapter.chapNum)
            ) {
                latestChapters.set(
                    action.sourceManga.mangaId,
                    Math.floor(action.readChapter.chapNum),
                );
            }
        }

        for (const action of actions) {
            if (
                latestChapters.get(action.sourceManga.mangaId) !=
                action.readChapter.chapNum
            ) {
                prog.successfulItems.push(action.sourceManga.mangaId);
                continue;
            }

            try {
                const queryVariables: TitleProgressQueryVeriables = {
                    userId: viewerId,
                    mediaId: Number(action.sourceManga.mangaId),
                };

                let mediaList;
                try {
                    const json = await makeRequest<
                        TitleProgress,
                        TitleProgressQueryVeriables
                    >(titleProgressQuery, true, queryVariables);
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
                    userId: viewerId,
                    mediaId: Number(action.sourceManga.mangaId),
                    progress: Math.floor(action.readChapter.chapNum),
                };

                if (
                    !mediaList?.progressVolumes ||
                    (action.readChapter.volume &&
                        mediaList.progressVolumes >= action.readChapter.volume)
                ) {
                    mutationVariables.progressVolumes =
                        Math.floor(action.readChapter.volume ?? 1) - 1;
                }

                if (!mediaList) {
                    mutationVariables.status = MediaListStatus.CURRENT.id;
                    mutationVariables.progressVolumes =
                        Math.floor(action.readChapter.volume ?? 1) - 1;
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
