/* SPDX-License-Identifier: GPL-3.0-or-later */
/* Copyright © 2026 Inkdex */

import { ContentRating, type ExtensionInfo, SourceIntents } from "@paperback/types";

export default {
  name: "MangaUpdates",
  description:
    "Extension that integrates with mangaupdates.com for tracking and collection management.",
  version: "1.0.0-alpha.6",
  icon: "icon.png",
  language: "en",
  contentRating: ContentRating.EVERYONE,
  capabilities: [
    // TODO: SourceIntents.COLLECTION_MANAGEMENT
    SourceIntents.DISCOVER_SECTION_PROVIDING,
    SourceIntents.PROGRESS_PROVIDING,
    SourceIntents.SETTINGS_FORM_PROVIDING,
    SourceIntents.SEARCH_RESULT_PROVIDING,
  ],
  badges: [],
  developers: [
    {
      name: "IntermittentlyRupert",
      github: "https://github.com/IntermittentlyRupert",
    },
  ],
} as ExtensionInfo;
