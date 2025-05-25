export const tagsQuery = `
query Query {
  MediaTagCollection {
    id
    name
    category
    isAdult
  }
}
`;

export const genreQuery = `
query Query {
  GenreCollection
}
`;

export type Tags = {
    MediaTagCollection: MediaTag[];
};

export type genres = {
    GenreCollection: string[];
};

type MediaTag = {
    id: number;
    name: string;
    category: string;
    isAdult: boolean;
};
