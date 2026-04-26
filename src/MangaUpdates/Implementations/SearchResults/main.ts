/* SPDX-License-Identifier: GPL-3.0-or-later */
/* Copyright © 2026 Inkdex */

import {
  type PagedResults,
  type SearchFilter,
  type SearchQuery,
  type SearchResultItem,
  type SearchResultsProviding,
  type SortingOption,
} from "@paperback/types";

import { makeRequest } from "../../Services/Requests";
import { MangaImplementation } from "../Manga/main";
import { MU } from "../Shared/models/main";
import * as search from "./parser";

const TYPE_LIST = [
  "Artbook",
  "Doujinshi",
  "Drama CD",
  "Filipino",
  "French",
  "German",
  "Indonesian",
  "Malaysian",
  "Manga",
  "Manhua",
  "Manhwa",
  "Nordic",
  "Novel",
  "OEL",
  "Spanish",
  "Thai",
  "Vietnamese",
].map((t) => ({ id: t.replaceAll(" ", "_"), value: t }));

const STATUS_LIST = [
  { id: "scanlated", value: "Only show completely scanlated manga" },
  {
    id: "completed",
    value: "Only show completed (including oneshots) manga",
  },
  { id: "oneshots", value: "Only show one shots" },
  { id: "no_oneshots", value: "Exclude one shots" },
  { id: "some_releases", value: "Only show manga with at least one release" },
  { id: "no_releases", value: "Only show manga with no releases" },
] satisfies Array<{
  id: NonNullable<MU.MUSeriesSearchRequestV1["filters"]>[number];
  value: string;
}>;

enum Filter {
  demographic = "demographic",
  genre = "genre",
  category = "category",
  licensed = "licensed",
  type = "type",
  status = "status",
  list = "list",
}

const getMultiSelection = (
  value: string | Record<string, "included" | "excluded">,
  selectionType: "included" | "excluded",
) => {
  if (typeof value === "string") {
    return selectionType === "included" && value ? [value] : [];
  }

  return Object.entries(value)
    .filter(([id, selection]) => {
      void id;
      return selection === selectionType;
    })
    .map(([id]) => id);
};

const getBooleanSelection = (
  value: string | Record<string, "included" | "excluded">,
  optionName: string,
) => {
  if (typeof value === "string" || value[optionName] == null) {
    return undefined;
  }

  return value[optionName] === "included";
};

export class SearchResultsImplementation
  extends MangaImplementation
  implements SearchResultsProviding
{
  async getSearchFilters(): Promise<SearchFilter[]> {
    const [genres, lists] = await Promise.all([
      makeRequest("/v1/genres", "GET", {}),
      makeRequest("/v1/lists", "GET", {}),
    ]);

    return [
      {
        type: "multiselect",
        id: Filter.demographic,
        title: "Demographic",
        options: genres
          .filter((g) => g.demographic)
          .map((g) => ({
            id: g.genre!.replaceAll(" ", "_"),
            value: g.genre!,
          })),
        value: {},
        allowExclusion: true,
        allowEmptySelection: true,
        maximum: undefined,
      },
      {
        type: "multiselect",
        id: Filter.genre,
        title: "Genre",
        options: genres
          .filter((g) => !g.demographic)
          .map((g) => ({
            id: g.genre!.replaceAll(" ", "_"),
            value: g.genre!,
          })),
        value: {},
        allowExclusion: true,
        allowEmptySelection: true,
        maximum: undefined,
      },
      {
        type: "input",
        id: Filter.category,
        title: "Categories/Tags",
        placeholder: 'List the categories you want to include, separated by a ","',
        value: "",
      },
      {
        type: "multiselect",
        id: Filter.licensed,
        title: "Licensed",
        options: [{ id: "licensed", value: "Licensed" }],
        value: {},
        allowExclusion: true,
        allowEmptySelection: true,
        maximum: undefined,
      },
      {
        type: "multiselect",
        id: Filter.type,
        title: "Type",
        options: TYPE_LIST,
        value: {},
        allowExclusion: false,
        allowEmptySelection: true,
        maximum: undefined,
      },
      {
        type: "dropdown",
        id: Filter.status,
        title: "Status",
        options: STATUS_LIST,
        value: "",
      },
      {
        type: "dropdown",
        id: Filter.list,
        title: "List",
        options: lists.map((l) => ({
          id: String(l.list_id!),
          value: `Only show manga on my ${l.title} list`,
        })),
        value: "",
      },
    ];
  }

  async getSortingOptions(query: SearchQuery): Promise<SortingOption[]> {
    void query;
    return [
      { id: search.SearchOrderBy.none, label: "Default" },
      { id: search.SearchOrderBy.year, label: "Year" },
      { id: search.SearchOrderBy.title, label: "Title" },
      { id: search.SearchOrderBy.rating, label: "Rating" },
    ];
  }

  async getSearchResults(
    query: SearchQuery,
    metadata?: number,
    sortingOption?: SortingOption,
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

      for (const filter of query.filters) {
        switch (filter.id as Filter) {
          case Filter.demographic:
          case Filter.genre:
            body.genre = [
              ...(body.genre ?? []),
              ...getMultiSelection(filter.value, "included").map((g) => g.replaceAll("_", " ")),
            ];
            body.exclude_genre = [
              ...(body.exclude_genre ?? []),
              ...getMultiSelection(filter.value, "excluded").map((g) => g.replaceAll("_", " ")),
            ];
            break;
          case Filter.category:
            break;
          case Filter.licensed: {
            const licensed = getBooleanSelection(filter.value, "licensed");
            if (licensed != null) {
              body.licensed = licensed ? "yes" : "no";
            }
            break;
          }
          case Filter.type:
            body.filter_types = getMultiSelection(filter.value, "included").map((t) =>
              t.replaceAll("_", " "),
            );
            break;
          case Filter.status:
            body.filters = getMultiSelection(
              filter.value,
              "included",
            ) as MU.MUSeriesSearchRequestV1["filters"];
            break;
          case Filter.list:
            if (typeof filter.value === "string" && filter.value) {
              body.list = filter.value;
            }
            break;
          default:
            console.log(`${logPrefix} unknown filter: ${filter.id}`);
            break;
        }
      }

      console.log(`${logPrefix} searching: ${JSON.stringify(body)}`);
      const response = await makeRequest("/v1/series/search", "POST", {
        body,
      });

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
