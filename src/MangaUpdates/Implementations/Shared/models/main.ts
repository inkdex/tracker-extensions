/* SPDX-License-Identifier: GPL-3.0-or-later */
/* Copyright © 2026 Inkdex */

/**
 * MangaUpdates API types are auto-generated from the MangaUpdates OpenAPI
 * specification.
 *
 * See https://api.mangaupdates.com for further details.
 *
 * You can update the API types by running the following command (update the
 * generator package version as appropriate):
 *
 * ```sh
 * npx swagger-typescript-api@13.1.3 generate \
 *   --path='https://api.mangaupdates.com/openapi.yaml' \
 *   --output='./src/MangaUpdates/Implementations/Shared/models' \
 *   --name='api.ts' \
 *   --type-prefix='MU' \
 *   --route-types \
 *   --responses \
 *   --sort-routes \
 *   --sort-types \
 *   --no-client \
 *   --debug && \
 * sed -i 's/\/\/ @ts-nocheck//g' './src/MangaUpdates/Implementations/Shared/models/api.ts' && \
 * npx prettier --write './src/MangaUpdates/Implementations/Shared/models/api.ts'
 * ```
 */
import * as MU from "./api";

type Stringable = string | number | boolean;

export interface BaseRequest {
  params: Partial<Record<string, Stringable | undefined>>;
  query: Partial<Record<string, Stringable | undefined>>;
  body: Partial<Record<string, unknown>>;
}

/**
 * The MangaUpdates API swagger doesn't define the full structure of the login
 * response. This interface contains the rest of the owl.
 */
interface EnhancedLoginResponse extends MU.Account.Login.ResponseBody {
  context?: {
    session_token?: string;
    uid?: number;
  };
}

interface MangaUpdatesApi {
  "/v1/account/login": {
    PUT: {
      request: {
        params: MU.Account.Login.RequestParams;
        query: MU.Account.Login.RequestQuery;
        body: MU.Account.Login.RequestBody;
      };
      response: EnhancedLoginResponse;
    };
  };
  "/v1/account/logout": {
    POST: {
      request: {
        params: MU.Account.Logout.RequestParams;
        query: MU.Account.Logout.RequestQuery;
        body: MU.Account.Logout.RequestBody;
      };
      response: MU.Account.Logout.ResponseBody;
    };
  };
  "/v1/account/profile": {
    GET: {
      request: {
        params: MU.Account.Profile.RequestParams;
        query: MU.Account.Profile.RequestQuery;
        body: MU.Account.Profile.RequestBody;
      };
      response: MU.Account.Profile.ResponseBody;
    };
  };

  "/v1/series/{id}": {
    GET: {
      request: {
        params: MU.Series.RetrieveSeries.RequestParams;
        query: MU.Series.RetrieveSeries.RequestQuery;
        body: MU.Series.RetrieveSeries.RequestBody;
      };
      response: MU.Series.RetrieveSeries.ResponseBody;
    };
  };
  "/v1/series/{id}/rating": {
    GET: {
      request: {
        params: MU.Series.RetrieveUserSeriesRating.RequestParams;
        query: MU.Series.RetrieveUserSeriesRating.RequestQuery;
        body: MU.Series.RetrieveUserSeriesRating.RequestBody;
      };
      response: MU.Series.RetrieveUserSeriesRating.ResponseBody;
    };
    PUT: {
      request: {
        params: MU.Series.UpdateUserSeriesRating.RequestParams;
        query: MU.Series.UpdateUserSeriesRating.RequestQuery;
        body: MU.Series.UpdateUserSeriesRating.RequestBody;
      };
      response: MU.Series.UpdateUserSeriesRating.ResponseBody;
    };
    DELETE: {
      request: {
        params: MU.Series.DeleteUserSeriesRating.RequestParams;
        query: MU.Series.DeleteUserSeriesRating.RequestQuery;
        body: MU.Series.DeleteUserSeriesRating.RequestBody;
      };
      response: MU.Series.DeleteUserSeriesRating.ResponseBody;
    };
  };
  "/v1/series/search": {
    POST: {
      request: {
        params: MU.Series.SearchSeriesPost.RequestParams;
        query: MU.Series.SearchSeriesPost.RequestQuery;
        body: MU.Series.SearchSeriesPost.RequestBody;
      };
      response: MU.Series.SearchSeriesPost.ResponseBody;
    };
  };

  "/v1/lists": {
    GET: {
      request: {
        params: MU.Lists.RetrieveLists.RequestParams;
        query: MU.Lists.RetrieveLists.RequestQuery;
        body: MU.Lists.RetrieveLists.RequestBody;
      };
      response: MU.Lists.RetrieveLists.ResponseBody;
    };
  };
  "/v1/lists/series/{seriesId}": {
    GET: {
      request: {
        params: MU.Lists.RetrieveListSeries.RequestParams;
        query: MU.Lists.RetrieveListSeries.RequestQuery;
        body: MU.Lists.RetrieveListSeries.RequestBody;
      };
      response: MU.Lists.RetrieveListSeries.ResponseBody;
    };
  };
  "/v1/lists/series": {
    POST: {
      request: {
        params: MU.Lists.AddListSeries.RequestParams;
        query: MU.Lists.AddListSeries.RequestQuery;
        body: MU.Lists.AddListSeries.RequestBody;
      };
      response: MU.Lists.AddListSeries.ResponseBody;
    };
  };
  "/v1/lists/series/update": {
    POST: {
      request: {
        params: MU.Lists.UpdateListSeries.RequestParams;
        query: MU.Lists.UpdateListSeries.RequestQuery;
        body: MU.Lists.UpdateListSeries.RequestBody;
      };
      response: MU.Lists.UpdateListSeries.ResponseBody;
    };
  };
  "/v1/lists/series/delete": {
    POST: {
      request: {
        params: MU.Lists.DeleteListSeries.RequestParams;
        query: MU.Lists.DeleteListSeries.RequestQuery;
        body: MU.Lists.DeleteListSeries.RequestBody;
      };
      response: MU.Lists.DeleteListSeries.ResponseBody;
    };
  };
  "/v1/genres": {
    GET: {
      request: {
        params: MU.Genres.RetrieveGenres.RequestParams;
        query: MU.Genres.RetrieveGenres.RequestQuery;
        body: MU.Genres.RetrieveGenres.RequestBody;
      };
      response: MU.Genres.RetrieveGenres.ResponseBody;
    };
  };

  // ... add other endpoints here as needed ...
}

type IsNonEmpty<Obj> = [Obj] extends [never]
  ? false
  : Obj extends unknown[]
    ? true
    : Required<Obj> extends Record<PropertyKey, unknown>
      ? [keyof Obj] extends [never]
        ? false
        : true
      : false;

type FilterRequestFields<R extends BaseRequest> = {
  [Key in keyof R]: IsNonEmpty<R[Key]> extends true ? Key : never;
};

type NonEmptyRequestFields<R extends BaseRequest> = Pick<R, FilterRequestFields<R>[keyof R]>;

type PermitStringValues<T> = { [Key in keyof T]: T[Key] | string };

interface MungeApiTypes<T extends BaseRequest> {
  // allow pre-stringified path/query params
  params: PermitStringValues<T["params"]>;
  query: PermitStringValues<T["query"]>;

  body: T["body"];
}

export type Endpoint = Extract<keyof MangaUpdatesApi, string>;

export type Verb<E extends Endpoint> = Extract<keyof MangaUpdatesApi[E], string>;

type EndpointVerb<E extends Endpoint, V extends Verb<E>> = MangaUpdatesApi[E][V] extends {
  request: { params: any; query: any; body: any };
  response: any;
}
  ? MangaUpdatesApi[E][V]
  : never;

export type Request<E extends Endpoint, V extends Verb<E>> = NonEmptyRequestFields<
  MungeApiTypes<EndpointVerb<E, V>["request"]>
>;

export type Response<E extends Endpoint, V extends Verb<E>> = EndpointVerb<E, V>["response"];

export * as MU from "./api";
