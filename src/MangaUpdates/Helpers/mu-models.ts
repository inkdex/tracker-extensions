import * as API from "./mu-api";

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
interface EnhancedLoginResponse extends API.Account.Login.ResponseBody {
    context?: {
        session_token?: string;
        uid?: number;
    };
}

interface MangaUpdatesApi {
    "/v1/account/login": {
        PUT: {
            request: {
                params: API.Account.Login.RequestParams;
                query: API.Account.Login.RequestQuery;
                body: API.Account.Login.RequestBody;
            };
            response: EnhancedLoginResponse;
        };
    };
    "/v1/account/logout": {
        POST: {
            request: {
                params: API.Account.Logout.RequestParams;
                query: API.Account.Logout.RequestQuery;
                body: API.Account.Logout.RequestBody;
            };
            response: API.Account.Logout.ResponseBody;
        };
    };
    "/v1/account/profile": {
        GET: {
            request: {
                params: API.Account.Profile.RequestParams;
                query: API.Account.Profile.RequestQuery;
                body: API.Account.Profile.RequestBody;
            };
            response: API.Account.Profile.ResponseBody;
        };
    };

    "/v1/series/{id}": {
        GET: {
            request: {
                params: API.Series.RetrieveSeries.RequestParams;
                query: API.Series.RetrieveSeries.RequestQuery;
                body: API.Series.RetrieveSeries.RequestBody;
            };
            response: API.Series.RetrieveSeries.ResponseBody;
        };
    };
    "/v1/series/{id}/rating": {
        GET: {
            request: {
                params: API.Series.RetrieveUserSeriesRating.RequestParams;
                query: API.Series.RetrieveUserSeriesRating.RequestQuery;
                body: API.Series.RetrieveUserSeriesRating.RequestBody;
            };
            response: API.Series.RetrieveUserSeriesRating.ResponseBody;
        };
        PUT: {
            request: {
                params: API.Series.UpdateUserSeriesRating.RequestParams;
                query: API.Series.UpdateUserSeriesRating.RequestQuery;
                body: API.Series.UpdateUserSeriesRating.RequestBody;
            };
            response: API.Series.UpdateUserSeriesRating.ResponseBody;
        };
        DELETE: {
            request: {
                params: API.Series.DeleteUserSeriesRating.RequestParams;
                query: API.Series.DeleteUserSeriesRating.RequestQuery;
                body: API.Series.DeleteUserSeriesRating.RequestBody;
            };
            response: API.Series.DeleteUserSeriesRating.ResponseBody;
        };
    };
    "/v1/series/search": {
        POST: {
            request: {
                params: API.Series.SearchSeriesPost.RequestParams;
                query: API.Series.SearchSeriesPost.RequestQuery;
                body: API.Series.SearchSeriesPost.RequestBody;
            };
            response: API.Series.SearchSeriesPost.ResponseBody;
        };
    };

    "/v1/lists": {
        GET: {
            request: {
                params: API.Lists.RetrieveLists.RequestParams;
                query: API.Lists.RetrieveLists.RequestQuery;
                body: API.Lists.RetrieveLists.RequestBody;
            };
            response: API.Lists.RetrieveLists.ResponseBody;
        };
    };
    "/v1/lists/series/{seriesId}": {
        GET: {
            request: {
                params: API.Lists.RetrieveListSeries.RequestParams;
                query: API.Lists.RetrieveListSeries.RequestQuery;
                body: API.Lists.RetrieveListSeries.RequestBody;
            };
            response: API.Lists.RetrieveListSeries.ResponseBody;
        };
    };
    "/v1/lists/series": {
        POST: {
            request: {
                params: API.Lists.AddListSeries.RequestParams;
                query: API.Lists.AddListSeries.RequestQuery;
                body: API.Lists.AddListSeries.RequestBody;
            };
            response: API.Lists.AddListSeries.ResponseBody;
        };
    };
    "/v1/lists/series/update": {
        POST: {
            request: {
                params: API.Lists.UpdateListSeries.RequestParams;
                query: API.Lists.UpdateListSeries.RequestQuery;
                body: API.Lists.UpdateListSeries.RequestBody;
            };
            response: API.Lists.UpdateListSeries.ResponseBody;
        };
    };
    "/v1/lists/series/delete": {
        POST: {
            request: {
                params: API.Lists.DeleteListSeries.RequestParams;
                query: API.Lists.DeleteListSeries.RequestQuery;
                body: API.Lists.DeleteListSeries.RequestBody;
            };
            response: API.Lists.DeleteListSeries.ResponseBody;
        };
    };
    "/v1/genres": {
        GET: {
            request: {
                params: API.Genres.RetrieveGenres.RequestParams;
                query: API.Genres.RetrieveGenres.RequestQuery;
                body: API.Genres.RetrieveGenres.RequestBody;
            };
            response: API.Genres.RetrieveGenres.ResponseBody;
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

type NonEmptyRequestFields<R extends BaseRequest> = Pick<
    R,
    FilterRequestFields<R>[keyof R]
>;

type PermitStringValues<T> = { [Key in keyof T]: T[Key] | string };

interface MungeApiTypes<T extends BaseRequest> {
    // allow pre-stringified path/query params
    params: PermitStringValues<T["params"]>;
    query: PermitStringValues<T["query"]>;

    body: T["body"];
}

export type Endpoint = Extract<keyof MangaUpdatesApi, string>;

export type Verb<E extends Endpoint> = Extract<
    keyof MangaUpdatesApi[E],
    string
>;

type EndpointVerb<
    E extends Endpoint,
    V extends Verb<E>,
> = MangaUpdatesApi[E][V] extends {
    // These `any`s are important!
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    request: { params: any; query: any; body: any };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    response: any;
}
    ? MangaUpdatesApi[E][V]
    : never;

export type Request<
    E extends Endpoint,
    V extends Verb<E>,
> = NonEmptyRequestFields<MungeApiTypes<EndpointVerb<E, V>["request"]>>;

export type Response<E extends Endpoint, V extends Verb<E>> = EndpointVerb<
    E,
    V
>["response"];
