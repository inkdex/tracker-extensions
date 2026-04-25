import {
  type DiscoverSection,
  type DiscoverSectionItem,
  type DiscoverSectionProviding,
  DiscoverSectionType,
  type FeaturedCarouselItem,
  type PagedResults,
  type ProminentCarouselItem,
  type SimpleCarouselItem,
} from "@paperback/types";

import { makeRequest } from "../../Services/Requests";
import { MU } from "../Shared/models/main";
import { manga } from "../Shared/parser/main";

interface MangaUpdatesDiscoverSectionItem
  extends
    Omit<FeaturedCarouselItem, "type">,
    Omit<ProminentCarouselItem, "type">,
    Omit<SimpleCarouselItem, "type"> {}

enum DiscoverSectionId {
  trendingNow = "trending-now",
  allTimePopular = "all-time-popular",
  popularManga = "popular-manga",
  popularManhwa = "popular-manhwa",
  top100Manga = "top-100-manga",
}

export class DiscoverSectionImplementation implements DiscoverSectionProviding {
  async getDiscoverSections(): Promise<DiscoverSection[]> {
    const trending_now: DiscoverSection = {
      id: DiscoverSectionId.trendingNow,
      title: "Trending Now",
      type: DiscoverSectionType.featured,
    };

    const popular_manga: DiscoverSection = {
      id: DiscoverSectionId.popularManga,
      title: "Popular Manga",
      type: DiscoverSectionType.simpleCarousel,
    };
    const popular_manhwa: DiscoverSection = {
      id: DiscoverSectionId.popularManhwa,
      title: "Popular Manhwa",
      type: DiscoverSectionType.simpleCarousel,
    };

    const top_100_manga: DiscoverSection = {
      id: DiscoverSectionId.top100Manga,
      title: "Top 100 Manga",
      type: DiscoverSectionType.prominentCarousel,
    };

    return [trending_now, popular_manga, popular_manhwa, top_100_manga];
  }

  async getDiscoverSectionItems(
    section: DiscoverSection,
    metadata: number | undefined, // hasNextPage flag
  ): Promise<PagedResults<DiscoverSectionItem>> {
    const logPrefix = "[getDiscoverSectionItems]";

    const body: MU.MUSeriesSearchRequestV1 & {
      page: number;
      perpage: number;
    } = {
      page: metadata ?? 1,
      perpage: 20,
      exclude_genre: manga.unsafeGenres,
    };

    if (body.page < 0) {
      return { items: [], metadata: -1 };
    }

    try {
      console.log(`${logPrefix} starts: ${section.id}, page=${body.page}`);

      switch (section.id as DiscoverSectionId) {
        case DiscoverSectionId.trendingNow:
          body.orderby = "week_pos";
          break;
        case DiscoverSectionId.popularManga:
          body.type = ["Manga"];
          body.orderby = "year_pos";
          break;
        case DiscoverSectionId.popularManhwa:
          body.type = ["Manhwa"];
          body.orderby = "year_pos";
          break;
        case DiscoverSectionId.top100Manga:
          body.orderby = "rating";
          body.perpage = 100;
          break;
        default:
          console.log(`${logPrefix} unknown section: ${section.id}`);
          body.orderby = "rating";
          break;
      }

      const page = await makeRequest("/v1/series/search", "POST", { body }, false);
      const results = (page?.results ?? []).map((r) => r.record);

      const items = results
        .filter((r) => r != null)
        .map((r) => ({
          ...manga.parseMangaInfo(r),
          mangaId: String(r.series_id ?? ""),
        }))
        .map((m) => {
          const item: MangaUpdatesDiscoverSectionItem = {
            mangaId: m.mangaId,
            title: m.primaryTitle,
            imageUrl: m.thumbnailUrl,
            contentRating: m.contentRating,
            subtitle: m.status,
          };
          return item as DiscoverSectionItem;
        });

      const resultsReturned = (body.page - 1) * body.perpage + results.length;
      const resultsAvailable = page?.total_hits ?? 0;
      const nextPage = resultsReturned < resultsAvailable ? body.page + 1 : -1;

      console.log(
        `${logPrefix} complete: ${section.id}, page=${body.page} nextPage=${nextPage} results=${results.length} resultsAvailable=${resultsAvailable}`,
      );

      return { items, metadata: nextPage };
    } catch (e) {
      console.log(`${logPrefix} failed: ${section.id}, page=${body.page}`);
      console.log(e);
      throw e;
    }
  }
}
