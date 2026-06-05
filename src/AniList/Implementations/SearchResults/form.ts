/* SPDX-License-Identifier: GPL-3.0-or-later */
/* Copyright © 2026 Inkdex */

import {
  AdvancedSearchForm,
  InputRow,
  LabelRow,
  Section,
  SelectRow,
  TriStateSelectRow,
  TriStateSelectSection,
  type ListSectionElement,
  type FlowSectionElement,
  type SearchQuery,
  type Tag,
  SelectSection,
} from "@paperback/types";

import { CountryCode, MediaFormat, MediaSourceMaterial, MediaStatus } from "../../GraphQL/General";
import { type Genres, genresQuery, type Tags, tagsQuery } from "../../GraphQL/SearchFilters";
import makeRequest from "../../Services/Requests";

export type SearchMetadata = {
  genres?: { [id: string]: "included" | "excluded" };
  formats?: { [id: string]: "included" | "excluded" };
  publishingStatuses?: { [id: string]: "included" | "excluded" };
  countryOfOrigin?: string[];
  sourceMaterials?: string[];
  startYears?: string;
  chapterCounts?: string;
  volumeCounts?: string;
  flags?: { [id: string]: "included" | "excluded" };
  tags?: { [id: string]: "included" | "excluded" };
};

export class AniListAdvancedSearchForm extends AdvancedSearchForm {
  private genreOptions: Tag[] = [];
  private tagOptions: Tag[] = [];

  private optionsLoaded = false;
  private loadError?: Error;

  private genres: Record<string, "included" | "excluded">;
  private formats: Record<string, "included" | "excluded">;
  private statuses: Record<string, "included" | "excluded">;
  private countryOfOrigin: string[];
  private sourceMaterials: string[];
  private startYears: string;
  private chapterCounts: string;
  private volumeCounts: string;
  private flags: Record<string, "included" | "excluded">;
  private tags: Record<string, "included" | "excluded">;

  constructor(searchQuery: SearchQuery<SearchMetadata>) {
    super();

    this.loadOptions()
      .then(({ genres, tags }) => {
        this.genreOptions = genres.GenreCollection.map((x) => ({
          id: x.replaceAll(" ", "_"),
          title: x,
        }));
        this.tagOptions = tags.MediaTagCollection.map((x) => ({
          id: x.name.replaceAll(" ", "_").replaceAll("'", "?"),
          title: x.name,
        }));
        this.optionsLoaded = true;
      })
      .catch((error: Error) => {
        this.loadError = error;
      })
      .finally(() => {
        this.reloadForm();
      });

    const meta = searchQuery.metadata ?? {};

    this.genres = { ...meta.genres };
    this.formats = { ...meta.formats };
    this.statuses = { ...meta.publishingStatuses };
    this.countryOfOrigin = meta.countryOfOrigin ?? [];
    this.sourceMaterials = meta.sourceMaterials ?? [];
    this.startYears = meta.startYears ?? "";
    this.chapterCounts = meta.chapterCounts ?? "";
    this.volumeCounts = meta.volumeCounts ?? "";
    this.flags = { ...meta.flags };
    this.tags = { ...meta.tags };
  }

  private async loadOptions(): Promise<{ genres: Genres; tags: Tags }> {
    const searchFiltersQueryDate = Number(Application.getState("search-filters-query-date") ?? 0);

    if (searchFiltersQueryDate + 604800 > new Date().valueOf() / 1000) {
      const genres = JSON.parse(Application.getState("genres") as string) as Genres;
      const tags = JSON.parse(Application.getState("tags") as string) as Tags;
      return { genres, tags };
    }

    const genres = await makeRequest<Genres>(genresQuery, false);
    const tags = await makeRequest<Tags>(tagsQuery, false);

    Application.setState(JSON.stringify(genres), "genres");
    Application.setState(JSON.stringify(tags), "tags");
    Application.setState(String(new Date().valueOf() / 1000), "search-filters-query-date");

    return { genres, tags };
  }

  override getSections(): (ListSectionElement | FlowSectionElement)[] {
    if (this.loadError) {
      return [
        Section("error", [
          LabelRow("error", {
            title: "Error",
            subtitle: this.loadError.toString(),
          }),
        ]),
      ];
    }

    if (!this.optionsLoaded) {
      return [Section("loading", [LabelRow("loading", { title: "Loading..." })])];
    }

    return [
      Section(
        {
          id: "filters",
        },
        [
          TriStateSelectRow("genres", {
            title: "Genres",
            layout: "flow",
            value: this.genres,
            items: this.genreOptions,
            allowExclusion: true,
            allowEmptySelection: true,
            onValueChange: Application.Selector(
              this as AniListAdvancedSearchForm,
              "handleGenresChange",
            ),
          }),
        ],
      ),
      TriStateSelectSection(this, {
        id: "formats",
        header: "Formats",
        layout: "list",
        value: this.formats,
        items: Object.values(MediaFormat).map((x) => ({
          id: x.id,
          title: x.label,
        })),
        allowExclusion: true,
        allowEmptySelection: true,
      }),
      TriStateSelectSection(this, {
        id: "publishing-statuses",
        header: "Publishing Statuses",
        layout: "list",
        value: this.statuses,
        items: Object.values(MediaStatus).map((x) => ({
          id: x.id,
          title: x.label,
        })),
        allowExclusion: true,
        allowEmptySelection: true,
      }),
      SelectSection(this, {
        id: "country-of-origin",
        header: "Country of Origin",
        layout: "list",
        value: this.countryOfOrigin,
        items: Object.values(CountryCode).map((x) => ({ id: x.id, title: x.label })),
        minItemCount: 0,
        maxItemCount: 1,
      }),
      Section({ id: "advanced-filters" }, [
        SelectRow("source-materials", {
          title: "Source Materials",
          layout: "list",
          value: this.sourceMaterials,
          options: Object.values(MediaSourceMaterial).map((x) => ({
            id: x.id,
            title: x.label,
          })),
          minItemCount: 0,
          maxItemCount: Object.values(MediaSourceMaterial).length,
          onValueChange: Application.Selector(
            this as AniListAdvancedSearchForm,
            "handleSourceMaterialsChange",
          ),
        }),
      ]),
      TriStateSelectSection(this, {
        id: "flags",
        header: "Flags",
        layout: "list",
        value: this.flags,
        items: [
          { id: "adult", title: "Adult" },
          { id: "doujin", title: "Doujin" },
          { id: "trackedTitles", title: "Tracked Titles" },
        ],
        allowExclusion: true,
        allowEmptySelection: true,
      }),

      Section({ id: "tags" }, [
        TriStateSelectRow("tags", {
          title: "Tags",
          layout: "flow",
          value: this.tags,
          items: this.tagOptions,
          allowExclusion: true,
          allowEmptySelection: true,
          onValueChange: Application.Selector(
            this as AniListAdvancedSearchForm,
            "handleTagsChange",
          ),
        }),
      ]),
      Section(
        {
          id: "ranges",
          header: "Ranges",
          footer: 'For each field, give a single value or two values separated by "-" for a range.',
        },
        [
          InputRow("start-years", {
            title: "Start Years",
            value: this.startYears,
            onValueChange: Application.Selector(
              this as AniListAdvancedSearchForm,
              "handleStartYearsChange",
            ),
          }),
          InputRow("chapter-counts", {
            title: "Chapter Counts",
            value: this.chapterCounts,
            onValueChange: Application.Selector(
              this as AniListAdvancedSearchForm,
              "handleChapterCountsChange",
            ),
          }),
          InputRow("volume-counts", {
            title: "Volume Counts",
            value: this.volumeCounts,
            onValueChange: Application.Selector(
              this as AniListAdvancedSearchForm,
              "handleVolumeCountsChange",
            ),
          }),
        ],
      ),
    ];
  }

  async handleGenresChange(value: Record<string, "included" | "excluded">): Promise<void> {
    this.genres = value;
  }

  async handleSourceMaterialsChange(value: string[]): Promise<void> {
    this.sourceMaterials = value;
  }

  async handleStartYearsChange(value: string): Promise<void> {
    this.startYears = value;
  }

  async handleChapterCountsChange(value: string): Promise<void> {
    this.chapterCounts = value;
  }

  async handleVolumeCountsChange(value: string): Promise<void> {
    this.volumeCounts = value;
  }

  async handleTagsChange(value: Record<string, "included" | "excluded">): Promise<void> {
    this.tags = value;
  }

  override getSearchQueryMetadata(): SearchMetadata {
    const result: SearchMetadata = {};

    if (Object.keys(this.genres).length > 0) result.genres = this.genres;
    if (Object.keys(this.formats).length > 0) result.formats = this.formats;
    if (Object.keys(this.statuses).length > 0) result.publishingStatuses = this.statuses;

    if (this.countryOfOrigin.length === 1) result.countryOfOrigin = this.countryOfOrigin;
    if (this.sourceMaterials.length > 0) result.sourceMaterials = this.sourceMaterials;
    if (this.startYears) result.startYears = this.startYears;
    if (this.chapterCounts) result.chapterCounts = this.chapterCounts;
    if (this.volumeCounts) result.volumeCounts = this.volumeCounts;

    if (Object.keys(this.flags).length > 0) result.flags = this.flags;

    if (Object.keys(this.tags).length > 0) result.tags = this.tags;

    return result;
  }
}
