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
import { MediaSort } from "../../GraphQL/General";
import { getItems } from "../helper";
import { MangaImplementation } from "../Manga/main";

export class SearchResultsImplementation
    extends MangaImplementation
    implements SearchResultsProviding
{
    async getSearchFilters(): Promise<SearchFilter[]> {
        const wip: SearchFilter = {
            type: "multiselect",
            id: "wip",
            title: "Work in Progress",
            options: [{ id: "wip", value: "Work in Progress" }],
            value: {},
            allowExclusion: false,
            allowEmptySelection: true,
            maximum: undefined,
        };

        return [wip];
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
        const variables: DiscoverSectionsAndSearchVariables = {
            page: metadata ?? 1,
            sort: sortingOption!.id,
        };

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
