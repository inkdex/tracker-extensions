/* SPDX-License-Identifier: GPL-3.0-or-later */
/* Copyright © 2026 Inkdex */

export const genresQuery = `
query Query {
  GenreCollection
}
`;

export const tagsQuery = `
query Query {
  MediaTagCollection {
    isAdult
    name
  }
}
`;

export type Genres = {
  GenreCollection: string[];
};

export type Tags = {
  MediaTagCollection: TagsMediaTag[];
};

type TagsMediaTag = {
  isAdult: boolean;
  name: string;
};
