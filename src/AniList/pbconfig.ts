import { ContentRating, SourceInfo, SourceIntents } from "@paperback/types";

export default {
    name: "AniList",
    description:
        "Extension that integrates with anilist.co for tracking and collection management.",
    version: "1.0.0-alpha.9",
    icon: "icon.png",
    language: "en",
    contentRating: ContentRating.EVERYONE,
    capabilities:
        SourceIntents.SETTINGS_UI |
        SourceIntents.DISCOVER_SECIONS |
        SourceIntents.MANGA_SEARCH |
        SourceIntents.MANGA_PROGRESS,
    // SourceIntents.COLLECTION_MANAGEMENT,
    badges: [],
    developers: [
        {
            name: "Celarye",
            website: "https://celarye.dev",
            github: "https://github.com/Celarye",
        },
    ],
} as SourceInfo;
