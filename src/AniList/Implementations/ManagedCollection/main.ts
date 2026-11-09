import {
  type ManagedCollection,
  type ManagedCollectionChange,
  type ManagedCollectionChangeFailure,
  type ManagedCollectionItems,
  type ManagedCollectionProviding,
  type SourceManga,
} from "@paperback/types";

import {
  managedCustomCollectionQuery,
  type ManagedCollectionMedia,
  type ManagedCustomCollectionQueryVariables,
} from "../../GraphQL/ManagedCollection";
import { viewerQuery, type Viewer } from "../../GraphQL/Viewer";
import makeRequest from "../../Services/Requests";
import { parseTitleDetails } from "../shared/parsers";

export class ManagedCollectionImplementation implements ManagedCollectionProviding {
  // The MediaListCollection query does not show lists without entries. Using the
  // sectionOrder setting which does show all lists but this has no easy way to
  // get the status type of a list.
  async getManagedCollections(): Promise<ManagedCollection[]> {
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

  async applyManagedCollectionChanges(
    _changes: ManagedCollectionChange[],
  ): Promise<ManagedCollectionChangeFailure[]> {
    throw new Error(
      "Pushing changes to AniList via collection management is not supported at this moment, use progress tracking instead.",
    );
  }

  async getManagedCollectionItems(
    collections: ManagedCollection[],
  ): Promise<ManagedCollectionItems[]> {
    if (collections.length === 0) return [];

    const [userId] = collections[0].id.split("-", 1);
    const variables: ManagedCustomCollectionQueryVariables = { userId: +userId, chunk: 1 };

    // A list can span several chunks, so accumulate entries per list.
    const itemsByList = new Map<string, SourceManga[]>();

    while (true) {
      const result = await makeRequest<
        ManagedCollectionMedia,
        ManagedCustomCollectionQueryVariables
      >(managedCustomCollectionQuery, true, variables);

      const { lists, hasNextChunk } = result.MediaListCollection;

      for (const list of lists) {
        const key = `${list.isCustomList}-${list.name}`;
        const items = itemsByList.get(key) ?? [];
        items.push(...list.entries.map((entry) => parseTitleDetails(entry.media)));
        itemsByList.set(key, items);
      }

      if (!hasNextChunk) break;

      variables.chunk += 1;
    }

    return collections.map((collection) => {
      const isCustomList = collection.id.split("-", 2)[1] === "true";
      return {
        collectionId: collection.id,
        items: itemsByList.get(`${isCustomList}-${collection.title}`) ?? [],
      };
    });
  }
}
