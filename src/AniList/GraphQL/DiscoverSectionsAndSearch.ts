export const discoverSectionsAndSearchQuery = `
query Query(
  $page: Int
  $countryOfOrigin: CountryCode
  $search: String
  $formatIn: [MediaFormat]
  $formatNotIn: [MediaFormat]
  $statusIn: [MediaStatus]
  $statusNotIn: [MediaStatus]
  $genreIn: [String]
  $genreNotIn: [String]
  $tagsIn: [String]
  $tagsNotIn: [String]
  $sort: [MediaSort]
) {
  Page(page: $page, perPage: 50) {
    pageInfo {
      hasNextPage
    }
    media(
      type: MANGA
      countryOfOrigin: $countryOfOrigin
      search: $search
      format_in: $formatIn
      format_not_in: $formatNotIn
      status_in: $statusIn
      status_not_in: $statusNotIn
      genre_in: $genreIn
      genre_not_in: $genreNotIn
      tag_in: $tagsIn
      tag_not_in: $tagsNotIn
      sort: $sort
    ) {
      chapters
      coverImage {
        extraLarge
        large
        medium
      }
      format
      genres
      id
      isAdult
      status
      title {
        english
        native
        romaji
      }
      volumes
    }
  }
}
`;

export type DiscoverSectionsAndSearchVariables = {
    page: number;
    sort: string;
    countryOfOrigin?: string;
    search?: string;
    format_in?: string[];
    format_not_in?: string[];
    status_in?: string[];
    status_not_in?: string[];
    genreIn?: string[];
    genreNotIn?: string[];
    tagsIn?: string[];
    tagsNotIn?: string[];
};

export type DiscoverSectionsAndSearch = {
    Page: DiscoverSectionsAndSearchPage;
};

type DiscoverSectionsAndSearchPage = {
    pageInfo: DiscoverSectionsAndSearchPageInfo;
    media: DiscoverSectionsAndSearchMedia[];
};

type DiscoverSectionsAndSearchPageInfo = {
    hasNextPage: boolean;
};

type DiscoverSectionsAndSearchMedia = {
    chapters: number | null;
    coverImage: DiscoverSectionsAndSearchCoverImage;
    format: string;
    genres: string[];
    id: number;
    isAdult: boolean;
    status: string;
    title: DiscoverSectionsAndSearchTitle;
    volumes: number | null;
};

type DiscoverSectionsAndSearchCoverImage = {
    extraLarge: string;
    large: string;
    medium: string;
};

type DiscoverSectionsAndSearchTitle = {
    english: string | null;
    native: string | null;
    romaji: string | null;
};
