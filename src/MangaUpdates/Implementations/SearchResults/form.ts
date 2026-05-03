/* SPDX-License-Identifier: GPL-3.0-or-later */
/* Copyright © 2026 Inkdex */

import {
  AdvancedSearchForm,
  InputRow,
  LabelRow,
  Section,
  SelectRow,
  type SearchQuery,
  type Tag,
  TriStateSelectRow,
} from "@paperback/types";

import { makeRequest } from "../../Services/Requests";
import { MU } from "../Shared/models/main";

type StatusId = NonNullable<MU.MUSeriesSearchRequestV1["filters"]>[number];
type GenreItem = MU.MUGenreModelStatsV1;
type ListItem = MU.MUListsModelV1;

const TYPE_OPTIONS: Tag[] = [
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
].map((t) => ({ id: t.replaceAll(" ", "_"), title: t }));

const STATUS_OPTIONS: Array<{ id: StatusId | ""; title: string }> = [
  { id: "", title: "Any" },
  { id: "scanlated", title: "Only show completely scanlated manga" },
  { id: "completed", title: "Only show completed (including oneshots) manga" },
  { id: "oneshots", title: "Only show one shots" },
  { id: "no_oneshots", title: "Exclude one shots" },
  { id: "some_releases", title: "Only show manga with at least one release" },
  { id: "no_releases", title: "Only show manga with no releases" },
];

const STATE_GENRES = "mu-genres";
const STATE_LISTS = "mu-lists";
const STATE_QUERY_DATE = "mu-search-filters-query-date";
const CACHE_TTL_SECONDS = 604800;

export type SearchMetadata = {
  demographics?: Record<string, "included" | "excluded">;
  genres?: Record<string, "included" | "excluded">;
  categories?: string;
  licensed?: "included" | "excluded";
  types?: Record<string, "included" | "excluded">;
  status?: StatusId | "";
  list?: string;
};

export class MangaUpdatesAdvancedSearchForm extends AdvancedSearchForm {
  private demographicOptions: Tag[] = [];
  private genreOptions: Tag[] = [];
  private listOptions: Tag[] = [];

  private optionsLoaded = false;
  private loadError?: Error;

  private demographics: Record<string, "included" | "excluded">;
  private genres: Record<string, "included" | "excluded">;
  private categories: string;
  private licensed: "" | "included" | "excluded";
  private types: Record<string, "included" | "excluded">;
  private status: StatusId | "";
  private list: string;

  constructor(searchQuery: SearchQuery<SearchMetadata>) {
    super();

    this.loadOptions()
      .then(({ genres, lists }) => {
        this.demographicOptions = genres
          .filter((g) => g.demographic && g.genre)
          .map((g) => ({ id: g.genre!.replaceAll(" ", "_"), title: g.genre! }));
        this.genreOptions = genres
          .filter((g) => !g.demographic && g.genre)
          .map((g) => ({ id: g.genre!.replaceAll(" ", "_"), title: g.genre! }));
        this.listOptions = lists
          .filter((l) => l.list_id != null && l.title != null)
          .map((l) => ({ id: String(l.list_id!), title: l.title! }));
        this.optionsLoaded = true;
      })
      .catch((error: Error) => {
        this.loadError = error;
      })
      .finally(() => {
        this.reloadForm();
      });

    const meta = searchQuery.metadata ?? {};

    this.demographics = { ...meta.demographics };
    this.genres = { ...meta.genres };
    this.categories = meta.categories ?? "";
    this.licensed = meta.licensed ?? "";
    this.types = { ...meta.types };
    this.status = meta.status ?? "";
    this.list = meta.list ?? "";
  }

  private async loadOptions(): Promise<{ genres: GenreItem[]; lists: ListItem[] }> {
    const cachedAt = Number(Application.getState(STATE_QUERY_DATE) ?? 0);

    if (cachedAt + CACHE_TTL_SECONDS > new Date().valueOf() / 1000) {
      const genres = JSON.parse(Application.getState(STATE_GENRES) as string) as GenreItem[];
      const lists = JSON.parse(Application.getState(STATE_LISTS) as string) as ListItem[];
      return { genres, lists };
    }

    const [genres, lists] = await Promise.all([
      makeRequest("/v1/genres", "GET", {}),
      makeRequest("/v1/lists", "GET", {}),
    ]);

    Application.setState(JSON.stringify(genres), STATE_GENRES);
    Application.setState(JSON.stringify(lists), STATE_LISTS);
    Application.setState(String(new Date().valueOf() / 1000), STATE_QUERY_DATE);

    return { genres, lists };
  }

  override getSections() {
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
      Section({ id: "filters", header: "Filters" }, [
        TriStateSelectRow("demographics", {
          title: "Demographic",
          layout: "list",
          value: this.demographics,
          items: this.demographicOptions,
          allowExclusion: true,
          allowEmptySelection: true,
          onValueChange: Application.Selector(
            this as MangaUpdatesAdvancedSearchForm,
            "handleDemographicsChange",
          ),
        }),
        TriStateSelectRow("genres", {
          title: "Genre",
          layout: "list",
          value: this.genres,
          items: this.genreOptions,
          allowExclusion: true,
          allowEmptySelection: true,
          onValueChange: Application.Selector(
            this as MangaUpdatesAdvancedSearchForm,
            "handleGenresChange",
          ),
        }),
        InputRow("categories", {
          title: "Categories/Tags",
          value: this.categories,
          onValueChange: Application.Selector(
            this as MangaUpdatesAdvancedSearchForm,
            "handleCategoriesChange",
          ),
        }),
        TriStateSelectRow("licensed", {
          title: "Licensed",
          layout: "list",
          value: this.licensed ? { licensed: this.licensed } : {},
          items: [{ id: "licensed", title: "Licensed" }],
          allowExclusion: true,
          allowEmptySelection: true,
          maximum: 1,
          onValueChange: Application.Selector(
            this as MangaUpdatesAdvancedSearchForm,
            "handleLicensedChange",
          ),
        }),
        TriStateSelectRow("types", {
          title: "Type",
          layout: "list",
          value: this.types,
          items: TYPE_OPTIONS,
          allowExclusion: false,
          allowEmptySelection: true,
          onValueChange: Application.Selector(
            this as MangaUpdatesAdvancedSearchForm,
            "handleTypesChange",
          ),
        }),
        SelectRow("status", {
          title: "Status",
          value: [this.status],
          options: STATUS_OPTIONS,
          minItemCount: 1,
          maxItemCount: 1,
          onValueChange: Application.Selector(
            this as MangaUpdatesAdvancedSearchForm,
            "handleStatusChange",
          ),
        }),
        SelectRow("list", {
          title: "List",
          value: [this.list],
          options: [{ id: "", title: "Any" }, ...this.listOptions],
          minItemCount: 1,
          maxItemCount: 1,
          onValueChange: Application.Selector(
            this as MangaUpdatesAdvancedSearchForm,
            "handleListChange",
          ),
        }),
      ]),
    ];
  }

  async handleDemographicsChange(value: Record<string, "included" | "excluded">): Promise<void> {
    this.demographics = value;
  }

  async handleGenresChange(value: Record<string, "included" | "excluded">): Promise<void> {
    this.genres = value;
  }

  async handleCategoriesChange(value: string): Promise<void> {
    this.categories = value;
  }

  async handleLicensedChange(value: Record<string, "included" | "excluded">): Promise<void> {
    this.licensed = value.licensed ?? "";
  }

  async handleTypesChange(value: Record<string, "included" | "excluded">): Promise<void> {
    this.types = value;
  }

  async handleStatusChange(value: string[]): Promise<void> {
    this.status = (value[0] ?? "") as StatusId | "";
  }

  async handleListChange(value: string[]): Promise<void> {
    this.list = value[0] ?? "";
  }

  override getSearchQueryMetadata(): SearchMetadata {
    const result: SearchMetadata = {};

    if (Object.keys(this.demographics).length > 0) result.demographics = this.demographics;
    if (Object.keys(this.genres).length > 0) result.genres = this.genres;
    if (this.categories) result.categories = this.categories;
    if (this.licensed) result.licensed = this.licensed;
    if (Object.keys(this.types).length > 0) result.types = this.types;
    if (this.status) result.status = this.status;
    if (this.list) result.list = this.list;

    return result;
  }
}
