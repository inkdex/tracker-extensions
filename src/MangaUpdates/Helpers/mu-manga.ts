import { ContentRating, type MangaInfo } from "@paperback/types";
import type { MUSeriesModelV1 } from "./mu-api";

export const ADULT_GENRES = ["Adult", "Hentai", "Smut"];
export const MATURE_GENRES = ["Ecchi"];

function parseStatus(
    status: string,
): "ONGOING" | "ABANDONED" | "HIATUS" | "COMPLETED" | "UNKNOWN" {
    // NOTE: There can be a decent amount of variation in the format here.
    //
    // Series with multiple seasons (e.g. manhwa) may have something like:
    //
    //   > 38 Chapters (Ongoing)
    //   >
    //   > S1: 38 Chapters (Complete) 1~38
    //   > S2: (TBA)
    //
    // It might also be in reverse order (with the most recent season first)
    //
    // Cancelled series can have something like:
    //
    //   > 4 Volumes (Incomplete due to the artist's death)
    //
    // Make sure to handle everything we reasonably can.
    const statusMatches =
        /\(([a-zA-Z]+)\)/g
            .exec(status)
            ?.slice(1)
            .map((match) => match.toLowerCase()) || [];

    if (statusMatches.some((match) => match.includes("ongoing"))) {
        return "ONGOING";
    }

    if (statusMatches.some((match) => match.includes("hiatus"))) {
        return "HIATUS";
    }

    if (
        statusMatches.some(
            (match) =>
                match.includes("incomplete") || match.includes("discontinued"),
        )
    ) {
        return "ABANDONED";
    }

    if (statusMatches.some((match) => match.includes("complete"))) {
        return "COMPLETED";
    }

    return "UNKNOWN";
}

export function getContentRating(manga: MUSeriesModelV1): ContentRating {
    const genres = (manga.genres ?? [])
        .map((g) => g.genre)
        .filter((g) => g != null);

    if (genres.some((g) => ADULT_GENRES.includes(g))) {
        return ContentRating.ADULT;
    }

    if (genres.some((g) => MATURE_GENRES.includes(g))) {
        return ContentRating.MATURE;
    }

    return ContentRating.EVERYONE;
}

export function parseMangaInfo(series: MUSeriesModelV1): MangaInfo {
    const titles = [
        series.title,
        ...(series.associated || []).map((associated) => associated?.title),
    ].filter((title): title is string => !!title);

    return {
        primaryTitle: titles[0] ?? "",
        secondaryTitles: titles.slice(1),
        synopsis: series.description || "",
        thumbnailUrl: series.image?.url?.original || "",

        author: series.authors
            ?.filter((author) => author?.type === "Author" && author.name)
            .map((author) => author.name)
            .join(", "),
        artist: series.authors
            ?.filter((author) => author?.type === "Artist" && author.name)
            .map((author) => author.name)
            .join(", "),

        status: parseStatus(series.status || ""),

        rating: series?.bayesian_rating,
        contentRating: getContentRating(series),
    };
}
