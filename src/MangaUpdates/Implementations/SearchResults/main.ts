/* SPDX-License-Identifier: GPL-3.0-or-later */
/* Copyright © 2026 Inkdex */

import {
  type AdvancedSearchForm,
  type PagedResults,
  type SearchQuery,
  type SearchResultItem,
  type SearchResultsProviding,
  type SortingOption,
} from "@paperback/types";

import { makeRequest } from "../../Services/Requests";
import { MangaImplementation } from "../Manga/main";
import { MU } from "../Shared/models/main";
import { MangaUpdatesAdvancedSearchForm, type SearchMetadata } from "./form";
import * as search from "./parser";

export class SearchResultsImplementation
  extends MangaImplementation
  implements SearchResultsProviding
{
  async getAdvancedSearchForm(query: SearchQuery<SearchMetadata>): Promise<AdvancedSearchForm> {
    return new MangaUpdatesAdvancedSearchForm(query);
  }

  async getSortingOptions(query: SearchQuery<SearchMetadata>): Promise<SortingOption[]> {
    void query;
    return [
      { id: search.SearchOrderBy.none, label: "Default" },
      { id: search.SearchOrderBy.year, label: "Year" },
      { id: search.SearchOrderBy.title, label: "Title" },
      { id: search.SearchOrderBy.rating, label: "Rating" },
    ];
  }

  async getSearchResults(
    query: SearchQuery<SearchMetadata>,
    metadata: number | undefined,
    sortingOption: SortingOption | undefined,
  ): Promise<PagedResults<SearchResultItem>> {
    const logPrefix = "[getSearchResults]";
    console.log(`${logPrefix} starts`);
    try {
      const body: MU.MUSeriesSearchRequestV1 & {
        page: number;
        perpage: number;
      } = {
        page: metadata ?? 1,
        perpage: 25,
        search: query.title || undefined,
        orderby: search.toSearchOrder(sortingOption),
      };

      if (body.page < 1) {
        return { items: [], metadata: { nextPage: -1 } };
      }

      const meta = query.metadata ?? {};

      const includedGenres: string[] = [];
      const excludedGenres: string[] = [];
      for (const source of [meta.demographics, meta.genres]) {
        if (!source) continue;
        for (const [id, state] of Object.entries(source)) {
          const value = id.replaceAll("_", " ");
          if (state === "included") includedGenres.push(value);
          else if (state === "excluded") excludedGenres.push(value);
        }
      }
      if (includedGenres.length > 0) body.genre = includedGenres;
      if (excludedGenres.length > 0) body.exclude_genre = excludedGenres;

      if (meta.categories) {
        const categories = meta.categories
          .split(",")
          .map((c) => c.trim())
          .filter((c) => c.length > 0);
        if (categories.length > 0) body.category = categories;
      }

      if (meta.licensed === "included") body.licensed = "yes";
      else if (meta.licensed === "excluded") body.licensed = "no";

      if (meta.types) {
        const includedTypes: string[] = [];
        for (const [id, state] of Object.entries(meta.types)) {
          if (state === "included") includedTypes.push(id.replaceAll("_", " "));
        }
        if (includedTypes.length > 0) body.filter_types = includedTypes;
      }

      if (meta.status) {
        body.filters = [meta.status];
      }

      if (meta.list) {
        body.list = meta.list;
      }

      console.log(`${logPrefix} searching: ${JSON.stringify(body)}`);
      const response = await makeRequest(
        "/v1/series/search",
        "POST",
        { body },
        { allowAnonymous: true },
      );

      const results = search.parseSearchResults(response.results || []);
      const hasNextPage = body.page * body.perpage < (response.total_hits ?? 0);
      const nextPage = hasNextPage ? body.page + 1 : -1;
      console.log(`${logPrefix} got results: ${JSON.stringify({ results, nextPage })}`);

      const pagedResults = { items: results, metadata: nextPage };
      console.log(`${logPrefix} complete`);
      return pagedResults;
    } catch (e) {
      console.log(`${logPrefix} error`);
      console.log(e);
      throw e;
    }
  }
}
