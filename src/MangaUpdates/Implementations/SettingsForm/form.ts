/* SPDX-License-Identifier: GPL-3.0-or-later */
/* Copyright © 2026 Inkdex */

import {
  ButtonRow,
  Form,
  InputRow,
  LabelRow,
  type ListSectionElement,
  NavigationRow,
  Section,
} from "@paperback/types";

import { makeRequest } from "../../Services/Requests";
import { session } from "../Shared/parser/main";

interface LoginInput {
  username: string;
  password: string;
}

export class LoginForm extends Form {
  loginForm: LoginInput = { username: "", password: "" };

  override get requiresExplicitSubmission(): boolean {
    return true;
  }

  override formWillAppear(): void {
    this.resetFormFields();
  }

  override formWillDisappear(): void {
    this.resetFormFields();
  }

  override getSections() {
    return [
      Section(
        {
          id: "login-section",
          header: "Log in",
          footer:
            "Use your MangaUpdates username and password to log in. Your password is only used for the initial login and is not stored by this extension.",
        },
        [
          InputRow("username-input", {
            title: "Username",
            value: this.loginForm.username,
            onValueChange: Application.Selector(this as LoginForm, "onUsernameChange"),
          }),
          InputRow("password-input", {
            title: "Password",
            value: this.loginForm.password,
            onValueChange: Application.Selector(this as LoginForm, "onPasswordChange"),
          }),
        ],
      ),
    ];
  }

  async onUsernameChange(newUsername: string) {
    this.loginForm.username = newUsername;
  }

  async onPasswordChange(newPassword: string) {
    this.loginForm.password = newPassword;
  }

  override async formDidSubmit(): Promise<void> {
    const logPrefix = "[login]";
    console.log(`${logPrefix} starts`);

    if (!this.loginForm.username || !this.loginForm.password) {
      console.error(
        `${logPrefix} login called with invalid credentials: ${JSON.stringify(this.loginForm)}`,
      );
      throw new Error("Must provide a username and password!");
    }

    try {
      const result = await makeRequest("/v1/account/login", "PUT", {
        body: this.loginForm,
      });
      const sessionToken = result.context?.session_token;
      if (!sessionToken) {
        console.log(`${logPrefix} no session token on response: ${JSON.stringify(result)}`);
        throw new Error("no session token on response");
      }

      session.setSessionToken(sessionToken);

      console.log(`${logPrefix} complete`);
    } catch (e) {
      console.log(`${logPrefix} failed to log in`);
      console.log(e);
      throw new Error("Login failed!");
    }
  }

  resetFormFields(): void {
    this.loginForm = { username: "", password: "" };
  }
}

export class SettingsForm extends Form {
  override getSections() {
    const info = session.getSessionInfo();
    if (info == null) {
      return this.unauthenticatedView();
    }

    return this.authenticatedView(info);
  }

  unauthenticatedView(): ListSectionElement[] {
    return [
      Section({ id: "login-section" }, [
        NavigationRow("login", {
          title: "Log in",
          form: new LoginForm(),
        }),
      ]),
    ];
  }

  authenticatedView(info: session.Session): ListSectionElement[] {
    return [
      Section({ id: "profile-section", header: "Profile" }, [
        LabelRow("user-name", {
          title: "Logged in as",
          value: info.username,
        }),
        LabelRow("login-time", {
          title: "Session started at",
          value: info.loginTime,
        }),
        LabelRow("session-id", {
          title: "Session ID",
          value: info.sessionId,
        }),
      ]),
      Section({ id: "session-section" }, [
        ButtonRow("logout-button", {
          title: "Log out",
          onSelect: Application.Selector(this as SettingsForm, "logOut"),
        }),
      ]),
    ];
  }

  ////////////////

  async logOut(): Promise<void> {
    try {
      await makeRequest("/v1/account/logout", "POST", {});
    } catch (e) {
      console.log("[logout] failed to delete session token");
      console.log(e);
      throw e;
    }

    session.clearSessionToken();

    this.reloadForm();
  }
}
