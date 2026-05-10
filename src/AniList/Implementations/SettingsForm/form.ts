/* SPDX-License-Identifier: GPL-3.0-or-later */
/* Copyright © 2026 Inkdex */

// TODO: Expand upon this by showing more profile data and allowing mutations
import {
  ButtonRow,
  type ButtonRowProps,
  Form,
  type FormItemElement,
  LabelRow,
  type LabelRowProps,
  type ListSectionElement,
  NavigationRow,
  type NavigationRowProps,
  OAuthButtonRow,
  type OAuthButtonRowProps,
  Section,
  SelectRow,
  ToggleRow,
  type ToggleRowProps,
} from "@paperback/types";

import { type JwtPayload, type Viewer, viewerQuery } from "../../GraphQL/Viewer";
import makeRequest from "../../Services/Requests";

export function getSynonymsSetting(): boolean {
  return Application.getState("setting-synonyms-in-titles") as boolean;
}

export class SettingsForm extends Form {
  override getSections() {
    if (Application.getSecureState("session") == undefined) {
      return [Section("no-session", [this.loginButton()])];
    }

    return [
      Section("session", [this.profileViewNavigation(), this.logOutButton()]),
      Section("settings", [this.synonymsToggle()]),
    ];
  }

  loginButton(): FormItemElement<unknown> {
    const loginButtonProps: OAuthButtonRowProps = {
      title: "Log In",
      subtitle: "Log in to AniList to automatically sync your library and reading progress.",
      onSuccess: Application.Selector(this as SettingsForm, "handleLoginSuccess"),
      authorizeEndpoint:
        "https://anilist.co/api/v2/oauth/authorize?client_id=6621&response_type=token",
      responseType: {
        type: "token",
      },
      clientId: "6621",
    };

    return OAuthButtonRow("login", loginButtonProps);
  }

  profileViewNavigation(): FormItemElement<unknown> {
    const profileViewProps: NavigationRowProps = {
      title: "View Profile",
      form: new ProfileViewForm(),
    };

    return NavigationRow("profile-view", profileViewProps);
  }

  logOutButton() {
    const logOutButtonProps: ButtonRowProps = {
      title: "Log Out",
      onSelect: Application.Selector(this as SettingsForm, "logOut"),
    };

    return ButtonRow("log-out", logOutButtonProps);
  }

  synonymsToggle() {
    const synonymsToggleProps: ToggleRowProps = {
      title: "Display title synonyms if the title is not in English",
      value: getSynonymsSetting() ?? false,
      onValueChange: Application.Selector(this as SettingsForm, "handleSynonymsToggle"),
    };

    return ToggleRow("synonyms", synonymsToggleProps);
  }

  async handleSynonymsToggle(value: boolean): Promise<void> {
    Application.setState(value, "setting-synonyms-in-titles");
    Application.invalidateDiscoverSections();
    this.reloadForm();
  }

  async handleLoginSuccess(accessToken: string): Promise<void> {
    Application.setSecureState(accessToken, "session");

    const viewer = await makeRequest<Viewer>(viewerQuery, true);

    Application.setState(viewer.Viewer.id, "viewer-id");

    this.reloadForm();
  }

  async logOut(): Promise<void> {
    Application.setSecureState(null, "session");

    Application.setState(null, "viewer-id");

    this.reloadForm();
  }
}

class ProfileViewForm extends Form {
  loadRequest?: Promise<unknown>;
  viewer?: Viewer;
  error?: Error;

  override formWillAppear(): void {
    this.loadRequest = makeRequest<Viewer>(viewerQuery, true)
      .then((viewer) => {
        this.viewer = viewer;
      })
      .catch((error: Error) => {
        this.error = error;
      })
      .finally(() => {
        this.reloadForm();
      });
  }

  override getSections() {
    if (this.viewer == undefined && this.error == undefined) {
      return [Section("loading", [LabelRow("loading", { title: "Loading..." })])];
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

    return [...this.getProfileSection(this.viewer!), this.getSessionSection()];
  }

  getProfileSection(value: Viewer): ListSectionElement[] {
    return [
      Section({ id: "profile-data", header: "Profile" }, [
        LabelRow("username-id", {
          title: "Username",
          value: value.Viewer.name,
          subtitle: "Id: " + value.Viewer.id.toString(),
        }),
        LabelRow("creation-date", {
          title: "Creation Date",
          value: new Date(value.Viewer.createdAt * 1000).toLocaleString(),
        }),
      ]),
      Section(
        {
          id: "manga-list-settings",
          header: "Manga List Settings",
          footer:
            "At a later time these will become editable, please use the website (aniList.co) for now.",
        },
        [
          LabelRow("advanced-scoring-enabled", {
            title: "Advanced Scoring Enabled",
            value: value.Viewer.mediaListOptions.mangaList.advancedScoringEnabled
              ? "True"
              : "False",
          }),
          SelectRow("advanced-scoring-fields", {
            title: "Advanced Scoring Fields",
            layout: "list",
            items: value.Viewer.mediaListOptions.mangaList.advancedScoring.map((v) => {
              return { id: v.toLowerCase().replaceAll(" ", "-"), title: v };
            }),
            value: [],
            minItemCount: 0,
            maxItemCount: 1,
            onValueChange: Application.Selector(this as ProfileViewForm, "noOp"),
          }),
          SelectRow("custom-lists", {
            title: "Custom Lists",
            layout: "list",
            items: value.Viewer.mediaListOptions.mangaList.customLists.map((v) => {
              return { id: v.toLowerCase().replaceAll(" ", "-"), title: v };
            }),
            value: [],
            minItemCount: 0,
            maxItemCount: 1,
            onValueChange: Application.Selector(this as ProfileViewForm, "noOp"),
          }),
          LabelRow("split-completed-list-by-format", {
            title: "Split Completed List by Format",
            value: value.Viewer.mediaListOptions.mangaList.splitCompletedSectionByFormat
              ? "True"
              : "False",
          }),
          SelectRow("list-order", {
            title: "List Order",
            layout: "list",
            items: value.Viewer.mediaListOptions.mangaList.sectionOrder.map((v) => {
              return { id: v.toLowerCase().replaceAll(" ", "-"), title: v };
            }),
            value: [],
            minItemCount: 0,
            maxItemCount: 1,
            onValueChange: Application.Selector(this as ProfileViewForm, "noOp"),
          }),
        ],
      ),
    ];
  }

  async noOp(_value: string[]): Promise<void> {
    return;
  }

  getSessionSection(): ListSectionElement {
    const token = String(Application.getSecureState("session"));

    const payload = JSON.parse(
      Application.base64Decode(token.split(".")[1]) as string,
    ) as JwtPayload;

    const rows: FormItemElement<unknown>[] = [];
    for (const [key, value] of Object.entries(payload)) {
      const labelProps: LabelRowProps = {
        title: key,
      };

      if (key == "jti") {
        labelProps.subtitle = String(value);
      } else {
        labelProps.value = String(value) || "Undefined";
      }

      rows.push(LabelRow(key, labelProps));
    }

    return Section({ id: "session-data", header: "Session" }, rows);
  }
}
