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

import {
  discoverSectionsAndSearchQuery,
  type DiscoverSectionsAndSearchVariables,
} from "../../GraphQL/DiscoverSectionsAndSearch";
import { MediaSort } from "../../GraphQL/General";
import { getItems } from "../helper";
import { MangaImplementation } from "../Manga/main";
import { AniListAdvancedSearchForm, type SearchMetadata } from "./form";

export class SearchResultsImplementation
  extends MangaImplementation
  implements SearchResultsProviding
{
  async getAdvancedSearchForm(query: SearchQuery<SearchMetadata>): Promise<AdvancedSearchForm> {
    return new AniListAdvancedSearchForm(query);
  }

  async getSortingOptions(query: SearchQuery<SearchMetadata>): Promise<SortingOption[]> {
    void query;

    const sortingOptions: SortingOption[] = [];
    for (const key of Object.keys(MediaSort) as (keyof typeof MediaSort)[]) {
      const sortingOption = MediaSort[key];
      sortingOptions.push({
        id: sortingOption.id,
        label: sortingOption.label,
      });
    }

    return sortingOptions;
  }

  async getSearchResults(
    query: SearchQuery<SearchMetadata>,
    metadata: number | undefined,
    sortingOption: SortingOption | undefined,
  ): Promise<PagedResults<SearchResultItem>> {
    let needsAuth = false;

    const variables: DiscoverSectionsAndSearchVariables = {
      page: metadata ?? 1,
      sort: sortingOption!.id,
    };

    if (query.title) {
      variables.search = query.title;
    }

    const meta = query.metadata ?? {};

    if (meta.genres) {
      const includedGenres: string[] = [];
      const excludedGenres: string[] = [];
      for (const [id, state] of Object.entries(meta.genres)) {
        switch (state) {
          case "included":
            includedGenres.push(id.replaceAll("_", " "));
            break;
          case "excluded":
            excludedGenres.push(id.replaceAll("_", " "));
            break;
        }
      }
      if (includedGenres.length > 0) variables.genreIn = includedGenres;
      if (excludedGenres.length > 0) variables.genreNotIn = excludedGenres;
    }

    if (meta.formats) {
      const includedFormats: string[] = [];
      const excludedFormats: string[] = [];
      for (const [id, state] of Object.entries(meta.formats)) {
        switch (state) {
          case "included":
            includedFormats.push(id);
            break;
          case "excluded":
            excludedFormats.push(id);
            break;
        }
      }
      if (includedFormats.length > 0) variables.formatIn = includedFormats;
      if (excludedFormats.length > 0) variables.formatNotIn = excludedFormats;
    }

    if (meta.publishingStatuses) {
      const includedStatuses: string[] = [];
      const excludedStatuses: string[] = [];
      for (const [id, state] of Object.entries(meta.publishingStatuses)) {
        switch (state) {
          case "included":
            includedStatuses.push(id);
            break;
          case "excluded":
            excludedStatuses.push(id);
            break;
        }
      }
      if (includedStatuses.length > 0) variables.statusIn = includedStatuses;
      if (excludedStatuses.length > 0) variables.statusNotIn = excludedStatuses;
    }

    if (meta.countryOfOrigin) {
      variables.countryOfOrigin = meta.countryOfOrigin[0];
    }

    if (meta.sourceMaterials && meta.sourceMaterials.length > 0) {
      variables.sourceIn = meta.sourceMaterials;
    }

    if (meta.startYears) {
      const startYears = meta.startYears.split("-").map((x) => Number(x));

      if (
        startYears.length > 0 &&
        startYears.length <= 2 &&
        !startYears.includes(NaN) &&
        startYears.every((x) => x >= 0 && x <= 9999)
      ) {
        switch (startYears.length) {
          case 1:
            variables.startDateGreater =
              Number((startYears[0] - 1).toString().padStart(4, "0")) * 10000;
            variables.startDateLesser =
              Number((startYears[0] + 1).toString().padStart(4, "0")) * 10000;
            break;
          case 2:
            if (startYears[0] <= startYears[1]) {
              variables.startDateGreater =
                Number(startYears[0].toString().padStart(4, "0")) * 10000;
              variables.startDateLesser = Number(startYears[1].toString().padStart(4, "0")) * 10000;
            }
            break;
        }
      }
    }

    if (meta.chapterCounts) {
      const chapterCounts = meta.chapterCounts.split("-").map((x) => Number(x));

      if (
        chapterCounts.length > 0 &&
        chapterCounts.length <= 2 &&
        !chapterCounts.includes(NaN) &&
        chapterCounts.every((x) => x >= 0)
      ) {
        switch (chapterCounts.length) {
          case 1:
            variables.chaptersGreater = chapterCounts[0] - 1;
            variables.chaptersLesser = chapterCounts[0] + 1;
            break;
          case 2:
            if (chapterCounts[0] <= chapterCounts[1]) {
              variables.chaptersGreater = chapterCounts[0];
              variables.chaptersLesser = chapterCounts[1];
            }
            break;
        }
      }
    }

    if (meta.volumeCounts) {
      const volumeCounts = meta.volumeCounts.split("-").map((x) => Number(x));

      if (
        volumeCounts.length > 0 &&
        volumeCounts.length <= 2 &&
        !volumeCounts.includes(NaN) &&
        volumeCounts.every((x) => x >= 0)
      ) {
        switch (volumeCounts.length) {
          case 1:
            variables.volumesGreater = volumeCounts[0] - 1;
            variables.volumesLesser = volumeCounts[0] + 1;
            break;
          case 2:
            if (volumeCounts[0] <= volumeCounts[1]) {
              variables.volumesGreater = volumeCounts[0];
              variables.volumesLesser = volumeCounts[1];
            }
            break;
        }
      }
    }

    if (meta.flags) {
      for (const [id, state] of Object.entries(meta.flags)) {
        switch (id) {
          case "adult":
            switch (state) {
              case "included":
                variables.isAdult = true;
                break;
              case "excluded":
                variables.isAdult = false;
                break;
            }
            break;
          case "doujin":
            switch (state) {
              case "included":
                variables.isLicensed = false;
                break;
              case "excluded":
                variables.isLicensed = true;
                break;
            }
            break;
          case "trackedTitles":
            switch (state) {
              case "included":
                variables.onList = true;
                needsAuth = true;
                break;
              case "excluded":
                variables.onList = false;
                needsAuth = true;
                break;
            }
            break;
        }
      }
    }

    if (meta.tags) {
      const includedTags: string[] = [];
      const excludedTags: string[] = [];
      for (const [id, state] of Object.entries(meta.tags)) {
        switch (state) {
          case "included":
            includedTags.push(id.replaceAll("_", " ").replaceAll("?", "'"));
            break;
          case "excluded":
            excludedTags.push(id.replaceAll("_", " ").replaceAll("?", "'"));
            break;
        }
      }
      if (includedTags.length > 0) variables.tagIn = includedTags;
      if (excludedTags.length > 0) variables.tagNotIn = excludedTags;
    }

    return getItems<SearchResultItem>(
      discoverSectionsAndSearchQuery,
      variables,
      needsAuth,
      metadata,
    );
  }
}
