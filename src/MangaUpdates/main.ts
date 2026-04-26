/* SPDX-License-Identifier: GPL-3.0-or-later */
/* Copyright © 2026 Inkdex */

import { BasicRateLimiter, type Extension, type MangaProviding } from "@paperback/types";

import { DiscoverSectionImplementation } from "./Implementations/DiscoverSection/main";
import { applyMixins } from "./Implementations/helper";
import { MangaImplementation } from "./Implementations/Manga/main";
import { MangaProgressImplementation } from "./Implementations/MangaProgress/main";
import { SearchResultsImplementation } from "./Implementations/SearchResults/main";
import { SettingsFormImplementation } from "./Implementations/SettingsForm/main";
import MangaUpdatesInterceptor from "./Services/Interceptor";

export interface MangaUpdatesImplementation
  extends
    DiscoverSectionImplementation,
    MangaImplementation,
    MangaProgressImplementation,
    SearchResultsImplementation,
    SettingsFormImplementation {}

export class MangaUpdatesExtension implements Omit<Extension, keyof MangaProviding> {
  mainRateLimiter = new BasicRateLimiter("main", {
    numberOfRequests: 5,
    bufferInterval: 1,
    ignoreImages: true,
  });
  mainInterceptor = new MangaUpdatesInterceptor("main");

  async initialise(): Promise<void> {
    this.mainRateLimiter.registerInterceptor();
    this.mainInterceptor.registerInterceptor();
  }
}

applyMixins(MangaUpdatesExtension, [
  SettingsFormImplementation,
  SearchResultsImplementation,
  DiscoverSectionImplementation,
  MangaImplementation,
  MangaProgressImplementation,
]);

export const MangaUpdates = new MangaUpdatesExtension();
