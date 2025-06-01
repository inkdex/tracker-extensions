import { MangaProviding, SourceManga } from "@paperback/types";
import { parseMangaInfo } from "../../Helpers/mu-manga";
import { makeRequest } from "../../Helpers/mu-request";

export class MangaImplementation implements MangaProviding {
    async getMangaDetails(mangaId: string): Promise<SourceManga> {
        const logPrefix = "[getMangaDetails]";
        console.log(`${logPrefix} start: ${mangaId}`);

        const series = await makeRequest("/v1/series/{id}", "GET", {
            params: { id: mangaId },
            query: {},
        });

        const result = {
            mangaId,
            mangaInfo: parseMangaInfo(series),
        };
        console.log(`${logPrefix} complete: ${JSON.stringify(result)}`);

        return result;
    }
}
