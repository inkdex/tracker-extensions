/* SPDX-License-Identifier: GPL-3.0-or-later */
/* Copyright © 2026 Inkdex */

export const titleViewQuery = `
query Query($id: Int) {
  Media(id: $id) {
    averageScore
    bannerImage
    coverImage {
      extraLarge
      large
      medium
    }
    chapters
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
    synonyms
    tags {
      id
      name
    }
    title {
      english
      native
      romaji
    }
    volumes
  }
}
`;

export interface TitleViewQueryVariables {
  id: number;
}

export type TitleView = {
  Media: TitleViewMedia;
};

export type TitleViewMedia = {
  averageScore: number | null;
  bannerImage: string | null;
  chapters: number | null;
  coverImage: TitleViewCoverImage;
  description: string | null;
  format: string;
  genres: string[];
  id: number;
  isAdult: boolean;
  staff: TitleViewStaff;
  status: string;
  synonyms: string[];
  tags: TitleViewTag[];
  title: TitleViewTitle;
  volumes: number | null;
};

type TitleViewCoverImage = {
  extraLarge: string;
  large: string;
  medium: string;
};

export type TitleViewStaff = {
  edges: TitleViewStaffEdge[];
};

export type TitleViewStaffEdge = {
  node: TitleViewStaffNode;
  role: string;
};

export type TitleViewStaffNode = {
  name: TitleViewStaffName;
};

export type TitleViewStaffName = {
  full: string;
};

export type TitleViewTag = {
  id: string;
  name: string;
};

export type TitleViewTitle = {
  english: string | null;
  romaji: string | null;
  native: string | null;
};
