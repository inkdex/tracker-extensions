import type { SearchResultItem, SortingOption } from "@paperback/types";

import type { MU } from "../Shared/models/main";
import { manga } from "../Shared/parser/main";

type ApiResult = Exclude<MU.MUSeriesSearchResponseV1["results"], undefined>[0];

export interface ResultInfo {
  id: string;
  title: string;
  image: string;
}

export const SearchOrderBy = {
  none: "none",
  title: "title",
  year: "year",
  rating: "rating",
  score: "score",
  rank: "rank",
  date_added: "date_added",
  week_pos: "week_pos",
  month1_pos: "month1_pos",
  month3_pos: "month3_pos",
  month6_pos: "month6_pos",
  year_pos: "year_pos",
  list_reading: "list_reading",
  list_wish: "list_wish",
  list_complete: "list_complete",
  list_unfinished: "list_unfinished",
} as const satisfies {
  [Order in NonNullable<MU.MUSeriesSearchRequestV1["orderby"]> & "none"]: Order;
};
export function toSearchOrder(
  sortingOption: SortingOption | undefined,
): MU.MUSeriesSearchRequestV1["orderby"] {
  if (sortingOption?.id === SearchOrderBy.none) {
    return undefined;
  }
  return sortingOption != null && sortingOption.id in SearchOrderBy
    ? (sortingOption.id as MU.MUSeriesSearchRequestV1["orderby"])
    : undefined;
}

export function parseSearchResults(results: ApiResult[]): SearchResultItem[] {
  return results
    .map<SearchResultItem | null>((result) => {
      const mangaId = result.record?.series_id;
      const title = result.hit_title ?? result.record?.title;
      const imageUrl = result.record?.image?.url?.original ?? "";
      const contentRating =
        result.record != null ? manga.getContentRating(result.record) : undefined;

      if (!mangaId || !title) {
        console.log(
          `[parseSearchResults] ignoring invalid search result: ${JSON.stringify(result)}`,
        );
        return null;
      }

      return { mangaId: String(mangaId), title, imageUrl, contentRating };
    })
    .filter((info): info is SearchResultItem => info !== null);
}
