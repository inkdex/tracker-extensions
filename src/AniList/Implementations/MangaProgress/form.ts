import {
    ButtonRow,
    ButtonRowProps,
    Form,
    FormItemElement,
    FormSectionElement,
    InputRow,
    InputRowProps,
    LabelRow,
    LabelRowProps,
    NavigationRow,
    NavigationRowProps,
    Section,
    SelectRow,
    SelectRowProps,
    ToggleRow,
    ToggleRowProps,
} from "@paperback/types";
import {
    MediaListStatus,
    TitleProgress,
    TitleProgressDeletion,
    titleProgressDeletionMutation,
    TitleProgressDeletionVariables,
    TitleProgressMediaList,
    titleProgressMutationMutation,
    TitleProgressMutationVariables,
    titleProgressQuery,
    TitleProgressQueryVeriables,
} from "../../GraphQL/Tracking";
import { Viewer } from "../../GraphQL/Viewer";
import makeRequest from "../../Services/Requests";

export class TrackingForm extends Form {
    viewer: Viewer;
    sourceMangaId: number;
    loadRequest?: Promise<unknown>;
    titleProgress?: TitleProgress;
    error?: Error;

    constructor(viewer: Viewer, sourceMangaId: number) {
        super();
        this.viewer = viewer;
        this.sourceMangaId = sourceMangaId;
    }

    override formWillAppear(): void {
        const queryVariables: TitleProgressQueryVeriables = {
            userId: this.viewer.Viewer.id,
            mediaId: this.sourceMangaId,
        };

        this.loadRequest = makeRequest<
            TitleProgress,
            TitleProgressQueryVeriables
        >(titleProgressQuery, true, queryVariables)
            .then((titleProgress) => {
                this.titleProgress = titleProgress;
            })
            .catch((error: Error) => {
                if (!error?.toString().includes("[404]")) {
                    this.error = error;
                }

                const newTitleProgressMediaList: TitleProgressMediaList = {
                    advancedScores: {},
                    completedAt: {
                        day: null,
                        month: null,
                        year: null,
                    },
                    createdAt: Date.now() / 1000,
                    customLists: {},
                    hiddenFromStatusLists: false,
                    notes: null,
                    private: false,
                    progress: 0,
                    progressVolumes: 0,
                    repeat: 0,
                    score: 0,
                    startedAt: {
                        day: null,
                        month: null,
                        year: null,
                    },
                    status: "CURRENT",
                    updatedAt: Date.now() / 1000,
                };

                const newTitleProgress: TitleProgress = {
                    MediaList: newTitleProgressMediaList,
                };

                this.titleProgress = newTitleProgress;
            })
            .finally(() => {
                this.reloadForm();
            });
    }

    get requiresExplicitSubmission(): boolean {
        return true;
    }

    override async formDidSubmit(): Promise<void> {
        if (this.titleProgress == undefined) {
            return;
        }

        const titleProgress = this.titleProgress.MediaList;

        const mutationVariables: TitleProgressMutationVariables = {
            userId: this.viewer.Viewer.id,
            mediaId: this.sourceMangaId,
            status: titleProgress.status,
            score: titleProgress.score,
            progress: titleProgress.progress,
            progressVolumes: titleProgress.progressVolumes,
            repeat: titleProgress.repeat,
            private: titleProgress.private,
            notes: titleProgress.notes,
            hiddenFromStatusLists: titleProgress.hiddenFromStatusLists,
            //customLists: Object.keys(titleProgress.customLists),
            //advancedScores: Object.values(titleProgress.advancedScores),
        };

        await makeRequest<TitleProgress, TitleProgressMutationVariables>(
            titleProgressMutationMutation,
            true,
            mutationVariables,
        );
    }

    override formDidCancel(): void {
        return;
    }

    override getSections(): FormSectionElement[] {
        const sections: FormSectionElement[] = [];

        if (this.titleProgress == undefined && this.error == undefined) {
            return [
                Section("loading", [
                    LabelRow("loading", { title: "Loading..." }),
                ]),
            ];
        }

        if (this.error != undefined) {
            return [
                Section("error", [
                    LabelRow("error", {
                        title: "Error",
                        subtitle: this.error.toString(),
                    }),
                ]),
            ];
        }

        const titleProgress = this.titleProgress!.MediaList;

        if (titleProgress.id == undefined) {
            sections.push(this.getNewMediaListEntrySection());
        }

        const trackingSections: FormSectionElement[] = [
            ...this.getProgressSections(),
            ...this.getScoreSections(),
            this.getPrivacySection(),
            this.getNotesSection(),
        ];

        // TODO: Add support for custom lists

        for (const trackingSection of trackingSections) {
            sections.push(trackingSection);
        }

        if (titleProgress.id != undefined) {
            sections.push(this.getDeleteSection());
        }

        return sections;
    }

    getNewMediaListEntrySection(): FormSectionElement {
        const newMediaListEntryLabelProps: LabelRowProps = {
            title: "New Media List Entry",
            subtitle: "Selecting Done will add this item to your media list",
        };

        return Section("newMediaListEntry", [
            LabelRow("newMediaListEntry", newMediaListEntryLabelProps),
        ]);
    }

    getProgressSections(): FormSectionElement[] {
        const titleProgress = this.titleProgress!.MediaList;

        const statusOptions = [];
        for (const key of Object.keys(
            MediaListStatus,
        ) as (keyof typeof MediaListStatus)[]) {
            const statusOption = MediaListStatus[key];
            statusOptions.push({
                id: statusOption.id,
                title: statusOption.label,
            });
        }

        const statusProps: SelectRowProps = {
            title: "Status",
            value: [titleProgress.status.toString()],
            minItemCount: 0,
            maxItemCount: 1,
            options: statusOptions,
            onValueChange: Application.Selector(
                this as TrackingForm,
                "statusUpdate",
            ),
        };

        const chapterProgressProps: InputRowProps = {
            title: "Chapters",
            value: titleProgress.progress.toString(),
            onValueChange: Application.Selector(
                this as TrackingForm,
                "chapterProgressUpdate",
            ),
        };

        const volumeProgressProps: InputRowProps = {
            title: "Volumes",
            value: titleProgress.progressVolumes.toString(),
            onValueChange: Application.Selector(
                this as TrackingForm,
                "volumeProgressUpdate",
            ),
        };

        const rereadCountProps: InputRowProps = {
            title: "Reread Count",
            value: titleProgress.repeat.toString(),
            onValueChange: Application.Selector(
                this as TrackingForm,
                "rereadCountUpdate",
            ),
        };

        return [
            Section({ id: "status", header: "Status" }, [
                SelectRow("status", statusProps),
            ]),
            Section({ id: "chapterProgress", header: "Chapter Progress" }, [
                InputRow("chapterProgress", chapterProgressProps),
            ]),
            Section({ id: "volumeProgress", header: "Volume Progress" }, [
                InputRow("volumeProgress", volumeProgressProps),
            ]),
            Section({ id: "rereadCount", header: "Reread Count" }, [
                InputRow("rereadCount", rereadCountProps),
            ]),
        ];
    }

    async statusUpdate(newStatus: string[]): Promise<void> {
        this.titleProgress!.MediaList.status = newStatus[0];
    }

    async chapterProgressUpdate(newChapterProgress: string): Promise<void> {
        const chapterProgress = Number(newChapterProgress);

        if (isNaN(chapterProgress)) {
            this.reloadForm();
            return;
        }

        this.titleProgress!.MediaList.progress = chapterProgress;
    }

    async volumeProgressUpdate(newVolumeProgress: string): Promise<void> {
        const volumeProgress = Number(newVolumeProgress);

        if (isNaN(volumeProgress)) {
            this.reloadForm();
            return;
        }

        this.titleProgress!.MediaList.progressVolumes = volumeProgress;
    }

    async rereadCountUpdate(newRereadCount: string): Promise<void> {
        const rereadCount = Number(newRereadCount);

        if (isNaN(rereadCount)) {
            this.reloadForm();
            return;
        }

        this.titleProgress!.MediaList.repeat = rereadCount;
    }

    getScoreSections(): FormSectionElement[] {
        const scoreProps: InputRowProps = {
            title: "Score ",
            value: this.titleProgress!.MediaList.score.toString(),
            onValueChange: Application.Selector(
                this as TrackingForm,
                "scoreUpdate",
            ),
        };

        // TODO: Add support for advanced scores

        return [
            Section({ id: "score", header: "Score" }, [
                InputRow("score", scoreProps),
            ]),
        ];
    }

    async scoreUpdate(newScore: string): Promise<void> {
        const score = Number(newScore);

        if (isNaN(score) || 0 > score || score > 10) {
            this.reloadForm();
            return;
        }

        this.titleProgress!.MediaList.score = score;
    }

    getPrivacySection(): FormSectionElement {
        const titleProgress = this.titleProgress!.MediaList;

        const privateProps: ToggleRowProps = {
            title: "Private",
            value: titleProgress.private,
            onValueChange: Application.Selector(
                this as TrackingForm,
                "privateUpdate",
            ),
        };

        const hiddenFromStatusListsProps: ToggleRowProps = {
            title: "Hidden From Status Lists",
            value: titleProgress.hiddenFromStatusLists,
            onValueChange: Application.Selector(
                this as TrackingForm,
                "hiddenFromStatusListsUpdate",
            ),
        };

        const rows: FormItemElement<unknown>[] = [
            ToggleRow("private", privateProps),
            ToggleRow("hiddenFromStatusLists", hiddenFromStatusListsProps),
        ];

        return Section({ id: "privacy", header: "Privacy" }, rows);
    }

    async privateUpdate(newPrivate: boolean): Promise<void> {
        this.titleProgress!.MediaList.private = newPrivate;
    }

    async hiddenFromStatusListsUpdate(
        newHiddenFromStatusLists: boolean,
    ): Promise<void> {
        this.titleProgress!.MediaList.hiddenFromStatusLists =
            newHiddenFromStatusLists;
    }

    getNotesSection(): FormSectionElement {
        const notesProps: InputRowProps = {
            title: "Notes",
            value: this.titleProgress!.MediaList.notes ?? "",
            onValueChange: Application.Selector(
                this as TrackingForm,
                "updateNotes",
            ),
        };

        return Section(
            {
                id: "notes",
                header: "Notes",
                footer: "Only you can see your notes",
            },
            [InputRow("notes", notesProps)],
        );
    }

    async updateNotes(newNotes: string): Promise<void> {
        this.titleProgress!.MediaList.notes = newNotes;
    }

    getDeleteSection(): FormSectionElement {
        const deleteNavigationProps: NavigationRowProps = {
            title: "Delete",
            form: new DeletionForm(this.titleProgress!.MediaList.id!),
        };

        return Section(
            { id: "delete", footer: "Delete the title from your media list" },
            [NavigationRow("delete", deleteNavigationProps)],
        );
    }
}

class DeletionForm extends Form {
    mediaListId: number | null;

    constructor(mediaListId: number) {
        super();
        this.mediaListId = mediaListId;
    }

    override getSections(): FormSectionElement[] {
        if (this.mediaListId == null) {
            const deletedLabelProps: LabelRowProps = {
                title: "Deleted",
                subtitle:
                    "The title has been succesfully deleted from your media list",
            };

            return [
                Section("deleted", [LabelRow("deleted", deletedLabelProps)]),
            ];
        }

        const deleteButtonProps: ButtonRowProps = {
            title: "Delete",
            onSelect: Application.Selector(this as DeletionForm, "onDeletion"),
        };

        return [
            Section(
                {
                    id: "delete",
                    footer: "WARNING: All media list data will be deleted, this action can not be undone",
                },
                [ButtonRow("delete", deleteButtonProps)],
            ),
        ];
    }

    async onDeletion(): Promise<void> {
        const deletionVariables: TitleProgressDeletionVariables = {
            deleteMediaListEntryId: this.mediaListId!,
        };

        const titleProgressDeletion = await makeRequest<
            TitleProgressDeletion,
            TitleProgressDeletionVariables
        >(titleProgressDeletionMutation, true, deletionVariables);

        if (titleProgressDeletion.DeleteMediaListEntry.deleted) {
            this.mediaListId = null;
            this.reloadForm();
        }
    }
}
