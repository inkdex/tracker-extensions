import {
  type Chapter,
  type ChapterReadActionQueueProcessingResult,
  Form,
  type MangaProgress,
  type MangaProgressProviding,
  type SourceManga,
  type TrackedMangaChapterReadAction,
} from "@paperback/types";

import { makeRequest } from "../../Services/Requests";
import { MU } from "../Shared/models/main";
import { session } from "../Shared/parser/main";
import { MangaProgressForm } from "./form";

interface ParsedAction {
  ids: string[];
  type: "update" | "addition" | "noop";
  actions: TrackedMangaChapterReadAction[];
  payload: MU.MUListsSeriesModelUpdateV1;
}

interface ParsedActionError {
  ids: string[];
  type: "error";
  actions: TrackedMangaChapterReadAction[];
  error: Error;
}

const DEFAULT_LIST_ID = 0; // Reading List

export class MangaProgressImplementation implements MangaProgressProviding {
  async getMangaProgressManagementForm(sourceManga: SourceManga): Promise<Form> {
    session.assertMustBeAuthenticated();
    return new MangaProgressForm(sourceManga.mangaId);
  }

  async getMangaProgress(sourceManga: SourceManga): Promise<MangaProgress | undefined> {
    session.assertMustBeAuthenticated();

    const logPrefix = "[getMangaProgress]";
    console.log(`${logPrefix} start: ${sourceManga.mangaId}`);

    const progressInfo = await makeRequest(
      "/v1/lists/series/{seriesId}",
      "GET",
      {
        params: { seriesId: sourceManga.mangaId },
        query: {},
      },
      false,
    );
    if (progressInfo == null) {
      return undefined;
    }

    const lastReadChapter: Chapter = {
      chapterId: String(progressInfo.status?.chapter ?? 0),
      sourceManga,
      langCode: "unknown",
      chapNum: progressInfo.status?.chapter ?? 0,
    };

    console.log(
      `${logPrefix} complete: ${JSON.stringify({ mangaId: sourceManga.mangaId, lastReadChapter })}`,
    );

    return { sourceManga, lastReadChapter };
  }

  async processChapterReadActionQueue(
    actions: TrackedMangaChapterReadAction[],
  ): Promise<ChapterReadActionQueueProcessingResult> {
    const logPrefix = "[processChapterReadActionQueue]";
    const successfulItems: string[] = [];
    const failedItems: string[] = [];
    try {
      console.log(`${logPrefix} starts - received ${actions.length} action(s)`);

      const mangaActions = actions.reduce<Record<string, TrackedMangaChapterReadAction[]>>(
        (acc, action) => {
          if (acc[action.sourceManga.mangaId] == null) {
            acc[action.sourceManga.mangaId] = [];
          }
          acc[action.sourceManga.mangaId].push(action);
          return acc;
        },
        {},
      );

      const operations = await Promise.all(
        Object.entries(mangaActions).map(([mangaId, actions]) =>
          this.parseMangaActions(mangaId, actions),
        ),
      );

      const updates: ParsedAction[] = [];
      const additions: ParsedAction[] = [];
      for (const operation of operations) {
        switch (operation.type) {
          case "update":
            updates.push(operation);
            break;
          case "addition":
            additions.push(operation);
            break;
          case "noop":
            successfulItems.push(...operation.ids);
            break;
          default:
            failedItems.push(...operation.ids);
        }
      }

      // Apply the operations in bulk (MU has a 1 per 5 second rate limit
      // for these APIs).
      if (updates.length > 0) {
        try {
          const body = updates.map((op) => op.payload);
          console.log(`${logPrefix} applying list updates: ${JSON.stringify(body)}`);
          await makeRequest("/v1/lists/series/update", "POST", {
            body,
          });
          successfulItems.push(...updates.flatMap((op) => op.ids));
        } catch (e) {
          console.log(`${logPrefix} list updates failed`);
          console.log(e);
          failedItems.push(...updates.flatMap((op) => op.ids));
        }
      }
      if (updates.length > 0 && additions.length > 0) {
        await Application.sleep(5);
      }
      if (additions.length > 0) {
        try {
          const body = additions.map((op) => op.payload);
          console.log(`${logPrefix} applying list additions: ${JSON.stringify(body)}`);
          await makeRequest("/v1/lists/series", "POST", { body });
          successfulItems.push(...additions.flatMap((op) => op.ids));
        } catch (e) {
          console.log(`${logPrefix} list additions failed`);
          console.log(e);
          failedItems.push(...additions.flatMap((op) => op.ids));
        }
      }

      return { successfulItems, failedItems };
    } catch (e) {
      console.log(`${logPrefix} failed - unhandled error`);
      console.log(e);
      // still report any successes we managed to get
      return {
        successfulItems,
        failedItems: actions.map((a) => a.id).filter((id) => !successfulItems.includes(id)),
      };
    }
  }

  async parseMangaActions(
    mangaId: string,
    actions: TrackedMangaChapterReadAction[],
  ): Promise<ParsedAction | ParsedActionError> {
    try {
      const seriesId = parseInt(mangaId);

      const listInfo = await makeRequest(
        "/v1/lists/series/{seriesId}",
        "GET",
        { params: { seriesId }, query: {} },
        false,
      );

      const listChapter = listInfo?.status?.chapter ?? 0;
      const listVolume = listInfo?.status?.volume ?? 0;

      // MangaUpdates can't handle zero or decimal numbered
      // chapters/volumes. Also, never decrease a user's progress.
      const actionChapter = Math.max(
        ...actions.map((a) => Math.floor(a.chapterNum || 1)),
        listChapter,
      );
      const actionVolume = Math.max(
        ...actions.map((a) => Math.floor(a.chapterVolume || 1)),
        listVolume,
      );

      let type: ParsedAction["type"];
      if (listInfo == null) {
        type = "addition";
      } else if (actionChapter > listChapter || actionVolume > listVolume) {
        type = "update";
      } else {
        type = "noop";
      }

      return {
        ids: actions.map((a) => a.id),
        type,
        actions,
        payload: {
          series: { id: seriesId },
          list_id: listInfo?.list_id ?? DEFAULT_LIST_ID,
          status: { chapter: actionChapter, volume: actionVolume },
        },
      };
    } catch (e) {
      console.log(`[parseAction] parse error: ${JSON.stringify(actions)}`);
      console.log(e);
      return {
        ids: actions.map((a) => a.id),
        type: "error",
        actions,
        error: e as Error,
      };
    }
  }
}
