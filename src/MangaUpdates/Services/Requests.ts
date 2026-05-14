/* SPDX-License-Identifier: GPL-3.0-or-later */
/* Copyright © 2026 Inkdex */

import type * as MU from "../Implementations/Shared/models/main";
import { session } from "../Implementations/Shared/parser/main";

export function loggableRequest(request: Partial<MU.BaseRequest>): string {
  let censoredRequest = request;

  // e.g. on login, register, change password
  if (censoredRequest.body?.password) {
    censoredRequest = {
      ...request,
      body: {
        ...request.body,
        password: "***",
      },
    };
  }

  // e.g. on confirm registration, change password, delete account
  if (censoredRequest.params?.authHash) {
    censoredRequest = {
      ...censoredRequest,
      params: {
        ...censoredRequest.params,
        authHash: "***",
      },
    };
  }

  return JSON.stringify(censoredRequest);
}

export function loggableResponse(response: unknown): string {
  if (!response) {
    return "<empty>";
  }

  // not actually this type in most cases! but it's the only one we care about here
  let censoredResponse = response as MU.Response<"/v1/account/login", "PUT">;

  // e.g. on login
  if (censoredResponse?.context?.session_token) {
    censoredResponse = {
      ...censoredResponse,
      context: {
        ...censoredResponse.context,
        session_token: "***",
      },
    };
  }

  return JSON.stringify(censoredResponse);
}

export async function makeRequest<
  E extends MU.Endpoint,
  V extends MU.Verb<E>,
  F extends boolean = true,
  R = F extends true ? MU.Response<E, V> : MU.Response<E, V> | undefined,
>(
  endpoint: E,
  verb: V,
  request: MU.Request<E, V>,
  {
    allowAnonymous = false,
    failOnError = true as F,
  }: { failOnError?: F; allowAnonymous?: boolean } = {},
): Promise<R> {
  const logPrefix = `[request] ${verb} ${endpoint}`;
  const baseRequest: Partial<MU.BaseRequest> = request;

  console.log(`${logPrefix} starts (failOnError=${failOnError}): ${loggableRequest(baseRequest)}`);

  const path = Object.entries(baseRequest.params || {})
    .filter((entry) => entry[1] != undefined)
    .map(([name, value]) => [`{${name}}`, String(value)] as const)
    .reduce((partialPath, [token, value]) => {
      if (!partialPath.includes(token)) {
        console.log(`${logPrefix} endpoint '${endpoint}' does not contain ${token}!`);
        throw new Error("endpoint is missing path parameter");
      }
      return endpoint.replace(token, String(value));
    }, endpoint as string);

  const query = Object.entries(baseRequest.query || {})
    .filter((entry) => entry[1] != undefined)
    .map(([name, value]) => `${name}=${encodeURIComponent(String(value))}`)
    .join("&");

  const headers: Record<string, string> = {
    accept: "application/json",
  };
  if (baseRequest.body) {
    headers["content-type"] = "application/json";
  }

  const sessionToken = session.getSessionToken();
  if (!allowAnonymous) {
    if (failOnError) {
      session.assertMustBeAuthenticated();
    } else if (!sessionToken) {
      return undefined as R;
    }
  }
  if (sessionToken) {
    headers.authorization = `Bearer ${sessionToken}`;
  }

  const params = {
    url: `https://api.mangaupdates.com${path}${query.length > 0 ? "?" : ""}${query}`,
    method: verb,
    headers,
    body: baseRequest.body ? JSON.stringify(baseRequest.body) : undefined,
  };

  const start = Date.now();
  let ret: Awaited<ReturnType<typeof Application.scheduleRequest>>;
  try {
    ret = await Application.scheduleRequest(params);
  } catch (e) {
    console.log(`${logPrefix} failed: APPLICATION REQUEST ERROR`);
    console.log(e);
    if (failOnError) {
      throw new Error("Request error!");
    }
    return undefined as R;
  }
  const duration = Date.now() - start;

  const [response, bodyBuffer] = ret;
  const meta = `(HTTP ${response.status}, ${duration}ms)`;

  let responseBody: R;
  try {
    responseBody = JSON.parse(Application.arrayBufferToUTF8String(bodyBuffer)) as R;
  } catch (e) {
    console.log(`${logPrefix} failed ${meta}: BODY PARSING FAILED`);
    console.log(e);
    if (failOnError) {
      throw new Error("Unable to parse response body!");
    }
    return undefined as R;
  }

  const ok = response.status >= 200 && response.status < 300;
  if (failOnError && !ok) {
    console.log(`${logPrefix} failed ${meta}: ${loggableResponse(responseBody)}`);
    throw new Error("Request failed!");
  }

  console.log(`${logPrefix} complete ${meta}: ${loggableResponse(responseBody)}`);
  return responseBody;
}
