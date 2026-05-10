import type { TitleViewMedia } from "./TitleView";

export const managedStatusCollectionQuery = `
query MediaListCollection(
  $userId: Int
  $chunk: Int
  $status: MediaListStatus
) {
  MediaListCollection(
    userId: $userId
    type: MANGA
    chunk: $chunk
    perChunk: 500
    status: $status
  ) {
    lists {
      name
      isCustomList
      entries {
        media {
          averageScore
          bannerImage
          coverImage {
            extraLarge
            large
            medium
          }
          description
          format
          genres
          id
          isAdult
          staff {
            edges {
              node {
                name {
                  full
                }
              }
              role
            }
          }
          status
          tags {
            id
            name
          }
          title {
            english
            native
            romaji
          }
          synonyms
        }
      }
    }
    hasNextChunk
  }
}
`;

export const managedCustomCollectionQuery = `
query MediaListCollection(
  $userId: Int
  $chunk: Int
) {
  MediaListCollection(
    userId: $userId
    type: MANGA
    chunk: $chunk
    perChunk: 500
  ) {
    lists {
      name
      isCustomList
      entries {
        media {
          averageScore
          bannerImage
          coverImage {
            extraLarge
            large
            medium
          }
          description
          format
          genres
          id
          isAdult
          staff {
            edges {
              node {
                name {
                  full
                }
              }
              role
            }
          }
          status
          tags {
            id
            name
          }
          title {
            english
            native
            romaji
          }
          synonyms
        }
      }
    }
    hasNextChunk
  }
}
`;

export type ManagedStatusCollectionQueryVariables = {
  userId: number;
  chunk: number;
  status: string;
};

export type ManagedCustomCollectionQueryVariables = {
  userId: number;
  chunk: number;
};

export type ManagedCollectionMedia = {
  MediaListCollection: ManagedCollectionsMediaListCollection;
};

export type ManagedCollectionsMediaListCollection = {
  hasNextChunk: boolean;
  lists: ManagedCollectionsLists[];
};

export type ManagedCollectionsLists = {
  name: string;
  isCustomList: boolean;
  entries: ManagedCollectionsEntries[];
};

export type ManagedCollectionsEntries = {
  media: TitleViewMedia;
};
