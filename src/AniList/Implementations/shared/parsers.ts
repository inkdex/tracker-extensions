import { ContentRating, type SourceManga, type Tag, type TagSection } from "@paperback/types";

import { MediaFormat, MediaStatus } from "../../GraphQL/General";
import type { TitleViewMedia } from "../../GraphQL/TitleView";
import { getSynonymsSetting } from "../SettingsForm/form";

export function parseTitleDetails(input: TitleViewMedia): SourceManga {
  const mangaId = input.id.toString();

  let synopsis = input.description
    ? input.description.replaceAll(/<br>|<i>|<\/i>|<a.*?>|<\/a>/g, "")
    : "No description";
  synopsis +=
    input.synonyms.length > 0 ? "\n\nSynonyms: " + input.synonyms.join(", ") + "\n\n" : "";

  const secondaryTitles = [];
  for (const title of Object.values(input.title)) {
    if (title == undefined) {
      continue;
    }

    secondaryTitles.push(title);
  }
  for (const synonym of input.synonyms) {
    secondaryTitles.push(synonym);
  }

  let primaryTitle = input.title.english ?? input.title.romaji ?? input.title.native ?? "No Title";
  if (getSynonymsSetting() == true && input.synonyms.length > 0 && !input.title.english) {
    primaryTitle += "\n" + input.synonyms[0];
  }

  let status;
  switch (input.status) {
    case MediaStatus.FINISHED.id:
      status = MediaStatus.FINISHED.label;
      break;
    case MediaStatus.NOT_YET_RELEASED.id:
      status = MediaStatus.NOT_YET_RELEASED.label;
      break;
    case MediaStatus.CANCELLED.id:
      status = MediaStatus.CANCELLED.label;
      break;
    case MediaStatus.HIATUS.id:
      status = MediaStatus.HIATUS.label;
      break;
    case MediaStatus.RELEASING.id:
      status = MediaStatus.RELEASING.label;
  }

  let author, artist;
  for (const staff of input.staff.edges) {
    if (staff.role.startsWith("Story & Art")) {
      author = staff.node.name.full;
      artist = undefined;
      break;
    }
    if (!author && (staff.role.startsWith("Story") || staff.role.startsWith("Original Story"))) {
      author = staff.node.name.full;
      if (author && artist) break;
    }
    if (staff.role.startsWith("Art")) {
      artist = staff.node.name.full;
      if (author && artist) break;
    }
  }

  const rating = input.averageScore ? input.averageScore / 100 : undefined;

  const genres: Tag[] = [];
  for (const genre of input.genres) {
    genres.push({
      id: genre.replaceAll(" ", "_").toLowerCase(),
      title: genre,
    });
  }

  const tags: Tag[] = [];
  for (const tag of input.tags) {
    tags.push({
      id: tag.id.toString().replaceAll(" ", "_").toLowerCase(),
      title: tag.name,
    });
  }

  const tagGroups: TagSection[] = [
    { id: "genres", title: "Genres", tags: genres },
    { id: "tags", title: "Tags", tags: tags },
  ];

  const contentRating: ContentRating = input.isAdult
    ? ContentRating.ADULT
    : genres.some((e) => e.id == "ecchi")
      ? ContentRating.MATURE
      : ContentRating.EVERYONE;

  const artworkUrls = [input.coverImage.extraLarge];

  if (input.bannerImage != null) {
    artworkUrls.push(input.bannerImage);
  }

  const additionalInfo: Record<string, string> = {
    Format:
      input.format == MediaFormat.MANGA.id
        ? MediaFormat.MANGA.label
        : input.format == MediaFormat.NOVEL.id
          ? MediaFormat.NOVEL.label
          : MediaFormat.ONE_SHOT.label,
  };

  return {
    mangaId,
    mangaInfo: {
      thumbnailUrl: input.coverImage.extraLarge,
      synopsis,
      primaryTitle,
      secondaryTitles,
      contentRating,
      status,
      artist,
      author,
      bannerUrl: input.bannerImage ?? undefined,
      rating,
      tagGroups,
      artworkUrls,
      shareUrl: "https://anilist.co/manga/" + mangaId,
      additionalInfo,
    },
  };
}
