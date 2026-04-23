import { ContentRating, type ExtensionInfo, SourceIntents } from "@paperback/types";

export default {
  name: "MangaUpdates",
  description:
    "Extension that integrates with mangaupdates.com for tracking and collection management.",
  version: "1.0.0-alpha.5",
  icon: "icon.png",
  language: "en",
  contentRating: ContentRating.EVERYONE,
  capabilities:
    SourceIntents.SETTINGS_FORM_PROVIDING |
    SourceIntents.DISCOVER_SECTION_PROVIDING |
    SourceIntents.SEARCH_RESULT_PROVIDING |
    SourceIntents.PROGRESS_PROVIDING,
  // TODO: SourceIntents.COLLECTION_MANAGEMENT
  badges: [],
  developers: [
    {
      name: "IntermittentlyRupert",
      github: "https://github.com/IntermittentlyRupert",
    },
  ],
} as ExtensionInfo;
