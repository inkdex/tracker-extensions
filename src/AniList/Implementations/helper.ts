import { ContentRating, PagedResults } from "@paperback/types";
import {
    DiscoverSectionsAndSearch,
    DiscoverSectionsAndSearchVariables,
} from "../GraphQL/DiscoverSectionsAndSearch";
import { MediaFormat, MediaStatus } from "../GraphQL/General";
import makeRequest from "../Services/Requests";
import {
    getPreferredTitleSetting,
    getSynonymsSetting,
} from "./SettingsForm/form";

// Reusable helper to pick the preferred title with robust fallbacks
export type AniListTitle = {
    english?: string | null;
    romaji?: string | null;
    native?: string | null;
};

export type PreferredTitle = {
    text: string;
    language: "english" | "romaji" | "native" | "none";
};

export function getPreferredTitle(title: AniListTitle): PreferredTitle {
    const pref = getPreferredTitleSetting(); // "romaji" | "english" | "native"
    const order: Array<"english" | "romaji" | "native"> = (() => {
        switch (pref) {
            case "english":
                return ["english", "romaji", "native"];
            case "romaji":
                return ["romaji", "english", "native"];
            case "native":
                return ["native", "english", "romaji"];
        }
    })();

    for (const lang of order) {
        const value = (title?.[lang] ?? "").toString().trim();
        if (value.length > 0 && value.toLowerCase() !== "null") {
            return { text: value, language: lang };
        }
    }

    return { text: "No title", language: "none" };
}

export async function getItems<ResultItemType>(
    query: string,
    queryVariables: DiscoverSectionsAndSearchVariables,
    needsAuth: boolean,
    metadata: number | undefined,
): Promise<PagedResults<ResultItemType>> {
    const items: ResultItemType[] = [];

    const json = await makeRequest<
        DiscoverSectionsAndSearch,
        DiscoverSectionsAndSearchVariables
    >(query, needsAuth, queryVariables);
    const searchResults = json.Page.media;

    for (const searchResult of searchResults) {
        let title = "";
        switch (searchResult.format) {
            case "NOVEL":
                title += "(" + MediaFormat.NOVEL.label + ") ";
                break;
            case "ONE_SHOT":
                title += "(" + MediaFormat.ONE_SHOT.label + ") ";
        }

        const picked = getPreferredTitle(searchResult.title);
        title += picked.text;
        if (
            getSynonymsSetting() === true &&
            searchResult.synonyms.length > 0 &&
            picked.language !== "english"
        ) {
            title += " / " + searchResult.synonyms[0];
        }

        const contentRating: ContentRating = searchResult.isAdult
            ? ContentRating.ADULT
            : searchResult.genres.some((e) => e == "ecchi")
              ? ContentRating.MATURE
              : ContentRating.EVERYONE;

        let subtitle;
        switch (searchResult.status) {
            case MediaStatus.FINISHED.id: {
                if (!searchResult.chapters && !searchResult.volumes) {
                    subtitle = MediaStatus.FINISHED.label;
                    break;
                }
                const chapterAndVolumes = [
                    searchResult.chapters
                        ? "Chs. " + searchResult.chapters.toString()
                        : "",
                    searchResult.volumes
                        ? "Vols. " + searchResult.volumes.toString()
                        : "",
                ];
                subtitle = chapterAndVolumes.join(" ");

                break;
            }

            case MediaStatus.NOT_YET_RELEASED.id:
                subtitle = MediaStatus.NOT_YET_RELEASED.label;
                break;
            case MediaStatus.CANCELLED.id:
                subtitle = MediaStatus.CANCELLED.label;
                break;
            case MediaStatus.HIATUS.id:
                subtitle = MediaStatus.HIATUS.label;
                break;
            case MediaStatus.RELEASING.id:
                subtitle = MediaStatus.RELEASING.label;
        }

        items.push({
            mangaId: searchResult.id.toString(),
            title,
            imageUrl: searchResult.coverImage.large,
            contentRating,
            subtitle,
        } as ResultItemType);
    }

    metadata = json.Page.pageInfo.hasNextPage ? (metadata ?? 1) + 1 : undefined;

    return {
        items,
        metadata,
    };
}

/* eslint-disable */
export function applyMixins(derivedCtor: any, constructors: any[]) {
    constructors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            Object.defineProperty(
                derivedCtor.prototype,
                name,
                Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
                    Object.create(null),
            );
        });
    });
}
