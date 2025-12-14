import { ContentRating, SourceInfo, SourceIntents } from "@paperback/types";

export default {
  name: "MangaUpdates",
  description:
    "Extension that integrates with mangaupdates.com for tracking and collection management.",
  version: "1.0.0-alpha.2",
  icon: "icon.png",
  language: "en",
  contentRating: ContentRating.EVERYONE,
  capabilities:
    SourceIntents.SETTINGS_UI |
    SourceIntents.DISCOVER_SECIONS |
    SourceIntents.MANGA_SEARCH |
    SourceIntents.MANGA_PROGRESS,
  // TODO: SourceIntents.COLLECTION_MANAGEMENT - not yet implemented,
  badges: [],
  developers: [
    {
      name: "IntermittentlyRupert",
      github: "https://github.com/IntermittentlyRupert",
    },
  ],
} as SourceInfo;
