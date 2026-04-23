import {
  ButtonRow,
  Form,
  LabelRow,
  NavigationRow,
  Section,
  SelectRow,
  StepperRow,
} from "@paperback/types";
import { makeRequest } from "../../Services/Requests";
import { manga, session } from "../Shared/parser/main";

interface FormState {
  title: string;
  rating: string;
  status: string;

  listId: string | undefined;
  listOptions: { id: string; title: string }[];

  chapter: number;
  volume: number;

  score: number;
}

class DeletionForm extends Form {
  result: { status: string; reason: string } | null = null;

  constructor(
    private readonly mangaId: string,
    private readonly onFormWillClose: (didDelete: boolean) => unknown,
  ) {
    super();
  }

  override formWillDisappear() {
    this.onFormWillClose(this.result != null);
  }

  override getSections() {
    if (this.result != null) {
      const success = this.result.status === "success";
      return [
        Section("deleted", [
          LabelRow("deleted", {
            title: success ? "Deleted" : this.result.status.toUpperCase(),
            subtitle: success
              ? "The title has been succesfully deleted from your media list"
              : this.result.reason,
          }),
        ]),
      ];
    }

    return [
      Section(
        {
          id: "delete",
          footer: "WARNING: All media list data will be deleted, this action can not be undone",
        },
        [
          ButtonRow("delete", {
            title: "Delete",
            onSelect: Application.Selector(this as DeletionForm, "onDelete"),
          }),
        ],
      ),
    ];
  }

  async onDelete() {
    const logPrefix = "[onDelete]";
    try {
      console.log(`${logPrefix} start: ${this.mangaId}`);

      const result = await makeRequest(
        "/v1/lists/series/delete",
        "POST",
        { body: [parseInt(this.mangaId)] },
        false,
      );
      if (result == null) {
        throw new Error("Failed to delete.");
      }

      this.result = result;

      console.log(`${logPrefix} complete: ${this.mangaId} - ${JSON.stringify(this.result)}`);
    } catch (e) {
      console.log(`${logPrefix} failed: ${this.mangaId}`);
      console.log(e);
      this.result = { status: "error", reason: String(e as Error) };
    } finally {
      this.reloadForm();
    }
  }
}

export class MangaProgressForm extends Form {
  loading: boolean = true;
  loadingMessage: string | null = null;
  initialState: FormState | null = null;
  state: FormState | null = null;
  error: Error | null = null;

  constructor(private readonly mangaId: string) {
    super();
  }

  override get requiresExplicitSubmission(): boolean {
    return true;
  }

  override formWillAppear(): void {
    session.assertMustBeAuthenticated();
    void this.loadData();
  }

  override async formDidSubmit(): Promise<void> {
    await this.saveChanges();
  }

  override getSections() {
    if (this.loading) {
      return [
        Section("loading", [
          LabelRow("loading", {
            title: this.loadingMessage ?? "Loading...",
            subtitle: this.loadingMessage
              ? "This is caused by MangaUpdates API rate limits. We'll be done as fast as we can."
              : "",
          }),
        ]),
      ];
    }

    if (this.error != null || this.state == null) {
      return [
        Section("error", [
          LabelRow("error", {
            title: "Error",
            subtitle: String(this.error ?? "Something went wrong."),
          }),
        ]),
      ];
    }

    return [
      Section({ id: "information", header: "Information" }, [
        LabelRow("title", {
          title: "Title",
          value: this.state.title,
        }),
        LabelRow("rating", {
          title: "Rating",
          value: this.state.rating,
        }),
        LabelRow("status", {
          title: "Status",
          value: this.state.status,
        }),
      ]),

      Section({ id: "progress", header: "Progress" }, [
        SelectRow("list-id", {
          title: "List",
          value: this.state.listId != null ? [this.state.listId] : [],
          options: this.state.listOptions,
          minItemCount: 0,
          maxItemCount: 1,
          onValueChange: Application.Selector(this as MangaProgressForm, "setList"),
        }),
        StepperRow("chapter", {
          title: "Chapters",
          subtitle: "The highest read chapter number",
          value: this.state.chapter,
          minValue: 0,
          maxValue: 99999,
          stepValue: 1,
          loopOver: false,
          onValueChange: Application.Selector(this as MangaProgressForm, "setChapter"),
        }),
        StepperRow("volume", {
          title: "Volumes",
          subtitle: "The highest read volume number",
          value: this.state.volume,
          minValue: 0,
          maxValue: 99999,
          stepValue: 1,
          loopOver: false,
          onValueChange: Application.Selector(this as MangaProgressForm, "setVolume"),
        }),
      ]),

      Section({ id: "score", header: "Score" }, [
        StepperRow("score", {
          title: "Score",
          subtitle: "Warning: Setting this to 0 will delete the rating from MangaUpdates.",
          value: this.state.score,
          minValue: 0,
          maxValue: 10,
          stepValue: 0.1,
          loopOver: false,
          onValueChange: Application.Selector(this as MangaProgressForm, "setScore"),
        }),
      ]),

      Section(
        {
          id: "delete",
          footer: "Delete the title from your media list",
        },
        [
          NavigationRow("delete", {
            title: "Delete",
            form: new DeletionForm(this.mangaId, (didDelete) => this.deletionFormClosed(didDelete)),
          }),
        ],
      ),
    ];
  }

  ////////////////

  async setList(listIds: string[]): Promise<void> {
    this.state!.listId = listIds[0];
  }

  async setChapter(chapter: number): Promise<void> {
    this.state!.chapter = chapter;
    this.reloadForm();
  }

  async setVolume(volume: number): Promise<void> {
    this.state!.volume = volume;
    this.reloadForm();
  }

  async setScore(score: number): Promise<void> {
    this.state!.score = score;
    this.reloadForm();
  }

  deletionFormClosed(didDelete: boolean): void {
    if (didDelete) {
      this.loading = true;
      this.reloadForm();

      void this.loadData(true);
    }
  }

  ////////////////

  async loadData(overrideExistingState = false) {
    const logPrefix = "[loadProgressData]";
    try {
      console.log(`${logPrefix} start: ${this.mangaId}`);

      const [mangaInfo, mangaLists, progressInfo, ratingInfo] = await Promise.all([
        makeRequest("/v1/series/{id}", "GET", {
          params: { id: this.mangaId },
          query: {},
        }),
        makeRequest("/v1/lists", "GET", {}),
        makeRequest(
          "/v1/lists/series/{seriesId}",
          "GET",
          { params: { seriesId: this.mangaId }, query: {} },
          false,
        ),
        makeRequest("/v1/series/{id}/rating", "GET", { params: { id: this.mangaId } }, false),
      ]);
      console.log(`${logPrefix} data fetch complete: ${this.mangaId}`);

      const parsed = manga.parseMangaInfo(mangaInfo);

      this.initialState = {
        title: parsed.primaryTitle,
        rating: String(parsed.rating ?? "-"),
        status: parsed.status ?? "-",

        listId: progressInfo?.list_id != null ? String(progressInfo.list_id) : undefined,
        listOptions: mangaLists
          .filter((l) => l.list_id != null && l.title != null)
          .map((l) => ({ id: String(l.list_id!), title: l.title! })),

        chapter: progressInfo?.status?.chapter ?? 0,
        volume: progressInfo?.status?.volume ?? 0,

        score: ratingInfo?.rating ?? 0,
      };
      if (this.state == null || overrideExistingState) {
        this.state = { ...this.initialState };
      }

      console.log(`${logPrefix} complete: ${this.mangaId} - ${JSON.stringify(this.initialState)}`);
    } catch (e) {
      console.log(`${logPrefix} failed: ${this.mangaId}`);
      console.log(e);
      this.error = e as Error;
    } finally {
      this.loading = false;
      this.reloadForm();
    }
  }

  async saveChanges(): Promise<void> {
    const logPrefix = "[submitProgressFormChanges]";
    try {
      const id = parseInt(this.mangaId);
      const prev = this.initialState!;
      const next = this.state!;
      console.log(
        `${logPrefix} start: ${this.mangaId} ${JSON.stringify({ initialState: prev, submittedState: next })}`,
      );

      const actions: {
        message: string;
        action: () => Promise<unknown>;
      }[] = [];

      // Progress
      const progressChanged =
        prev.chapter !== next.chapter || prev.volume !== next.volume || prev.listId !== next.listId;
      const list = {
        body: [
          {
            series: { id },
            list_id: parseInt(next.listId ?? "-1"),
            status: { volume: next.volume, chapter: next.chapter },
          },
        ],
      };
      if (progressChanged) {
        if (next.listId == null) {
          actions.push({
            message: "Deleting from list",
            action: async () =>
              makeRequest("/v1/lists/series/delete", "POST", {
                body: [id],
              }),
          });
        } else if (prev.listId == null) {
          actions.push({
            message: "Adding to list",
            action: () => makeRequest("/v1/lists/series", "POST", list),
          });
        } else {
          actions.push({
            message: "Updating in list",
            action: () => makeRequest("/v1/lists/series/update", "POST", list),
          });
        }
      }

      // Score
      if (prev.score !== next.score) {
        if (next.score > 0) {
          actions.push({
            message: "Adding rating",
            action: () =>
              makeRequest("/v1/series/{id}/rating", "PUT", {
                params: { id },
                body: { rating: next.score },
              }),
          });
        } else {
          actions.push({
            message: "Deleting rating",
            action: () =>
              makeRequest("/v1/series/{id}/rating", "DELETE", {
                params: { id },
              }),
          });
        }
      }

      // MangaUpdates rate limits mutations to 1 every 5 seconds! This
      // sucks, but it's only a problem if the user updates their progress
      // and score in the same operation.
      const alert = `Applying changes (this might take a few seconds)`;
      for (const [i, { message, action }] of actions.entries()) {
        console.log(`${logPrefix} action [${i + 1}/${actions.length}]: ${message}`);
        if (actions.length > 1) {
          this.loading = true;
          this.loadingMessage = `${alert}: ${message}...`;
          this.reloadForm();
        }

        await action();

        if (i < actions.length - 1) {
          await Application.sleep(5);
        }
      }
      console.log(`${logPrefix} complete - ${actions.length} actions`);
    } catch (e) {
      console.log(`${logPrefix} failed`);
      console.log(e);
      throw e;
    } finally {
      this.loading = false;
      this.loadingMessage = null;
      this.reloadForm();
    }
  }
}
