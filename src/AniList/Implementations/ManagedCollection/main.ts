import {
  type ManagedCollection,
  type ManagedCollectionChangeset,
  type ManagedCollectionProviding,
  type SourceManga,
} from "@paperback/types";

import {
  managedCustomCollectionQuery,
  managedStatusCollectionQuery,
  type ManagedCollectionMedia,
  type ManagedCustomCollectionQueryVariables,
  type ManagedStatusCollectionQueryVariables,
} from "../../GraphQL/ManagedCollection";
import { viewerQuery, type Viewer } from "../../GraphQL/Viewer";
import makeRequest from "../../Services/Requests";
import { parseTitleDetails } from "../shared/parsers";

export class ManagedCollectionImplementation implements ManagedCollectionProviding {
  // The MediaListCollection query does not show lists without entries. Using the
  // sectionOrder setting which does show all lists but this has no easy way to
  // get the status type of a list.
  async getManagedLibraryCollections(): Promise<ManagedCollection[]> {
    const viewer = await makeRequest<Viewer>(viewerQuery, true);

    let statuses = {
      Reading: { status: "CURRENT", matched: false },
      Planning: { status: "PLANNING", matched: false },
      Completed: { status: "COMPLETED", matched: false },
      "Completed Manga": { status: "COMPLETED", matched: false },
      "Completed One Shot": { status: "COMPLETED", matched: false },
      "Completed Novel": { status: "COMPLETED", matched: false },
      Dropped: { status: "DROPPED", matched: false },
      Paused: { status: "PAUSED", matched: false },
      Rereading: { status: "REPEATING", matched: false },
    };

    return viewer.Viewer.mediaListOptions.mangaList.sectionOrder.map((list) => {
      let isCustomList;
      let statusType;

      const statusList = statuses[list as keyof typeof statuses];

      if (statusList && statusList.matched == false) {
        isCustomList = "false";
        statusType = statuses[list as keyof typeof statuses].status;
        statuses[list as keyof typeof statuses].matched = true;
      } else {
        isCustomList = "true";
        statusType = "null";
      }

      return {
        id: `${viewer.Viewer.id.toString()}-${isCustomList}-${statusType}-${list.toLowerCase().replaceAll(" ", "-")}`,
        title: list,
      };
    });
  }

  async commitManagedCollectionChanges(_changeset: ManagedCollectionChangeset): Promise<void> {
    throw new Error(
      "Pushing changes to AniList via collection management is not supported at this moment, use progress tracking instead.",
    );
  }

  async getSourceMangaInManagedCollection(
    managedCollection: ManagedCollection,
  ): Promise<SourceManga[]> {
    const results: SourceManga[] = [];

    const [userId, isCustomListString, status] = managedCollection.id.split("-", 4);
    const isCustomList = isCustomListString === "true";

    const query = isCustomList ? managedCustomCollectionQuery : managedStatusCollectionQuery;

    const variables: ManagedCustomCollectionQueryVariables | ManagedStatusCollectionQueryVariables =
      isCustomList ? { userId: +userId, chunk: 1 } : { userId: +userId, chunk: 1, status };

    while (true) {
      const result = await makeRequest<
        ManagedCollectionMedia,
        ManagedCustomCollectionQueryVariables | ManagedStatusCollectionQueryVariables
      >(query, true, variables);

      const { lists, hasNextChunk } = result.MediaListCollection;

      const matchingList = lists.find((list) => list.name === managedCollection.title);
      if (matchingList) {
        results.push(...matchingList.entries.map((entry) => parseTitleDetails(entry.media)));
      }

      const isLastChunkWithTarget =
        lists.some(
          (list) => list.name === managedCollection.title && list.isCustomList === isCustomList,
        ) && lists.at(-1)!.name !== managedCollection.title;

      if (!hasNextChunk || isLastChunkWithTarget) break;

      variables.chunk += 1;
    }

    return results;
  }
}
