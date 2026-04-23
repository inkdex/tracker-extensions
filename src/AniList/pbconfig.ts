import { ContentRating, type ExtensionInfo, SourceIntents } from "@paperback/types";

export default {
  name: "AniList",
  description: "Extension that integrates with anilist.co for tracking and collection management.",
  version: "1.0.0-alpha.12",
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
      name: "Celarye",
      website: "https://celarye.dev",
      github: "https://github.com/Celarye",
    },
  ],
} as ExtensionInfo;
