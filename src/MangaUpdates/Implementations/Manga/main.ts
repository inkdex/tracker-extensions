/* SPDX-License-Identifier: GPL-3.0-or-later */
/* Copyright © 2026 Inkdex */

import { type MangaProviding, type SourceManga } from "@paperback/types";

import { makeRequest } from "../../Services/Requests";
import { manga } from "../Shared/parser/main";

export class MangaImplementation implements MangaProviding {
  async getMangaDetails(mangaId: string): Promise<SourceManga> {
    const logPrefix = "[getMangaDetails]";
    console.log(`${logPrefix} start: ${mangaId}`);

    const series = await makeRequest("/v1/series/{id}", "GET", {
      params: { id: mangaId },
      query: {},
    });

    const result = {
      mangaId,
      mangaInfo: manga.parseMangaInfo(series),
    };
    console.log(`${logPrefix} complete: ${JSON.stringify(result)}`);

    return result;
  }
}
