import {
    PagedResults,
    SearchFilter,
    SearchQuery,
    SearchResultItem,
    SearchResultsProviding,
    SortingOption,
} from "@paperback/types";
import {
    discoverSectionsAndSearchQuery,
    DiscoverSectionsAndSearchVariables,
} from "../../GraphQL/DiscoverSectionsAndSearch";
import { CountryCode, MediaSort } from "../../GraphQL/General";
import {
    genreQuery,
    genres,
    Tags,
    tagsQuery,
} from "../../GraphQL/SearchFilter";
import makeRequest from "../../Services/Requests";
import { getItems } from "../helper";
import { MangaImplementation } from "../Manga/main";

export class SearchResultsImplementation
    extends MangaImplementation
    implements SearchResultsProviding
{
    async getSearchFilters(): Promise<SearchFilter[]> {
        const genres = await makeRequest<genres>(genreQuery, false);
        const tags = await makeRequest<Tags>(tagsQuery, false);
        const filters: SearchFilter[] = [];

        filters.push({
            type: "multiselect",
            id: "CountryOfOrigin",
            title: "Country of Origin",
            options: Object.keys(CountryCode).map((x) => ({ id: x, value: x })),
            value: {},
            allowExclusion: false,
            allowEmptySelection: true,
            maximum: 1,
        });

        filters.push({
            type: "multiselect",
            id: "genres",
            title: "Genres",
            options: genres.GenreCollection.map((x) => ({
                id: x.replaceAll(" ", "_"),
                value: x,
            })),
            value: {},
            allowExclusion: true,
            allowEmptySelection: true,
            maximum: undefined,
        });

        filters.push({
            type: "multiselect",
            id: "tags",
            title: "Tags",
            options: tags.MediaTagCollection.map((x) => ({
                id: x.name.replaceAll(" ", "_").replaceAll("'", ""),
                value: x.name,
            })),
            value: {},
            allowExclusion: true,
            allowEmptySelection: true,
            maximum: undefined,
        });

        return filters;
    }

    async getSortingOptions(query: SearchQuery): Promise<SortingOption[]> {
        void query;

        const sortingOptions: SortingOption[] = [];
        for (const key of Object.keys(
            MediaSort,
        ) as (keyof typeof MediaSort)[]) {
            const sortingOption = MediaSort[key];
            sortingOptions.push({
                id: sortingOption.id,
                label: sortingOption.label,
            });
        }

        return sortingOptions;
    }

    async getSearchResults(
        query: SearchQuery,
        metadata?: number,
        sortingOption?: SortingOption,
    ): Promise<PagedResults<SearchResultItem>> {
        const includedgenre: string[] = [];
        const excludedgenre: string[] = [];
        const includedtags: string[] = [];
        const excludedtags: string[] = [];
        let countryfilter: string = "";
        for (const filter of query.filters) {
            if (filter.id === "CountryOfOrigin") {
                const countries = (filter.value ?? {}) as Record<
                    string,
                    "included" | "excluded"
                >;
                for (const country of Object.entries(countries)) {
                    countryfilter = country[0];
                }
            }
            if (filter.id === "genres") {
                const genres = (filter.value ?? {}) as Record<
                    string,
                    "included" | "excluded"
                >;
                for (const genre of Object.entries(genres)) {
                    switch (genre[1]) {
                        case "included":
                            includedgenre.push(genre[0].replaceAll("_", " "));
                            break;
                        case "excluded":
                            excludedgenre.push(genre[0].replaceAll("_", " "));
                            break;
                    }
                }
            }
            if (filter.id === "tags") {
                const tags = (filter.value ?? {}) as Record<
                    string,
                    "included" | "excluded"
                >;
                for (const tag of Object.entries(tags)) {
                    switch (tag[1]) {
                        case "included":
                            includedtags.push(tag[0].replaceAll("_", " "));
                            break;
                        case "excluded":
                            excludedtags.push(tag[0].replaceAll("_", " "));
                            break;
                    }
                }
            }
        }

        const variables: DiscoverSectionsAndSearchVariables = {
            page: metadata ?? 1,
            sort: sortingOption!.id,
        };

        if (includedgenre.length > 0) {
            variables.genreIn = includedgenre;
        }
        if (excludedgenre.length > 0) {
            variables.genreNotIn = excludedgenre;
        }
        if (includedtags.length > 0) {
            variables.tagsIn = includedtags;
        }
        if (excludedtags.length > 0) {
            variables.tagsNotIn = excludedtags;
        }
        if (countryfilter.length > 0) {
            variables.countryOfOrigin = countryfilter;
        }

        if (query.title) {
            variables.search = query.title;
        }

        return getItems<SearchResultItem>(
            discoverSectionsAndSearchQuery,
            variables,
            metadata,
        );
    }
}
