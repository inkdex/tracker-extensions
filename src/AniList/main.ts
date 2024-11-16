import { BasicRateLimiter, Extension } from "@paperback/types";
import { DiscoverSectionImplementation } from "./Implementations/DiscoverSection/main";
import { applyMixins } from "./Implementations/helper";
import { MangaImplementation } from "./Implementations/Manga/main";
import { MangaProgressImplementation } from "./Implementations/MangaProgress/main";
import { SearchResultsImplementation } from "./Implementations/SearchResults/main";
import { SettingsFormImplementation } from "./Implementations/SettingsForm/main";
import AniListInterceptor from "./Services/Interceptor";

export interface AniListImplementation
    extends SettingsFormImplementation,
        SearchResultsImplementation,
        DiscoverSectionImplementation,
        MangaImplementation,
        MangaProgressImplementation {}

export class AniListExtension implements Extension {
    mainRateLimiter = new BasicRateLimiter("main", {
        numberOfRequests: 1,
        bufferInterval: 2,
        ignoreImages: true,
    });
    mainInterceptor = new AniListInterceptor("main");

    async initialise(): Promise<void> {
        this.mainRateLimiter.registerInterceptor();
        this.mainInterceptor.registerInterceptor();
    }
}

applyMixins(AniListExtension, [
    SettingsFormImplementation,
    SearchResultsImplementation,
    DiscoverSectionImplementation,
    MangaImplementation,
    MangaProgressImplementation,
]);

export const AniList = new AniListExtension();
