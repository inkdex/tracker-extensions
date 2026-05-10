/* SPDX-License-Identifier: GPL-3.0-or-later */
/* Copyright © 2026 Inkdex */

import { type MangaProviding, type SourceManga } from "@paperback/types";

import {
  type TitleView,
  titleViewQuery,
  type TitleViewQueryVariables,
} from "../../GraphQL/TitleView";
import makeRequest from "../../Services/Requests";
import { parseTitleDetails } from "../shared/parsers";

export class MangaImplementation implements MangaProviding {
  async getMangaDetails(mangaId: string): Promise<SourceManga> {
    const queryVariables: TitleViewQueryVariables = {
      id: Number(mangaId),
    };

    const result = await makeRequest<TitleView, TitleViewQueryVariables>(
      titleViewQuery,
      false,
      queryVariables,
    );

    return parseTitleDetails(result.Media);
  }
}
