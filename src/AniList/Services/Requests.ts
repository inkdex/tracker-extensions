/* SPDX-License-Identifier: GPL-3.0-or-later */
/* Copyright © 2026 Inkdex */

import { type Request, type Response } from "../GraphQL/General";
import { type JwtPayload } from "../GraphQL/Viewer";

const GRAPHQL_ENDPOINT = "https://graphql.anilist.co";

export default async function makeRequest<ResponseType, QueryVariablesType = never>(
  query: string,
  needsAuth: boolean,
  QueryVariables?: QueryVariablesType,
): Promise<ResponseType> {
  const request: Request = {
    url: GRAPHQL_ENDPOINT,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: query,
      variables: QueryVariables,
    }),
  };

  if (needsAuth) {
    const token = String(Application.getSecureState("session"));

    if (token == undefined) {
      throw new Error("You are not authenticated, please log in through the AniList settings");
    }

    const payload = JSON.parse(
      Application.base64Decode(token.split(".")[1]) as string,
    ) as JwtPayload;

    if (Number(payload.exp) < new Date().valueOf() / 1000) {
      Application.setSecureState(null, "session");

      Application.setState(null, "viewer-id");

      throw new Error(
        "Your authorization token has expired, please log back in through the AniList settings",
      );
    }

    request.headers.Authorization = "Bearer " + token;
  }

  const [_, buffer] = await Application.scheduleRequest(request);
  const data = Application.arrayBufferToUTF8String(buffer);
  const unkownResponse: unknown = JSON.parse(data);

  if (
    unkownResponse == undefined ||
    typeof unkownResponse !== "object" ||
    !("data" in unkownResponse || "error" in unkownResponse)
  ) {
    throw new Error(`Failed to parse JSON object: ${String(unkownResponse)}`);
  }

  const response = unkownResponse as Response;

  if (response.errors != undefined) {
    let errorMessages = "";
    for (let i = 0; i < response.errors.length; i++) {
      if (i != 0) {
        errorMessages += "\n";
      }

      errorMessages += `AniList returned an error: [${response.errors[i].status}] ${response.errors[i].message}`;
    }

    throw new Error(errorMessages);
  }

  return response.data as ResponseType;
}
