// Request
export type Request = {
    url: string;
    method: string;
    headers: RequestHeaders;
    body: string;
};

type RequestHeaders = {
    "Content-Type": string;
    Accept: string;
    Authorization?: string;
};

export type RequestBody = {
    query: string;
    variables?: unknown;
};

// Response
export type Response = {
    data: unknown;
    errors: Error[] | null;
};

type Error = {
    message: string;
    status: number;
    locations?: Locations[];
    validation?: Record<string, string[]>;
};

type Locations = {
    line: number;
    column: number;
};

export const CountryCode = {
    JP: { id: "JP" },
    KR: { id: "KR" },
    CN: { id: "CN" },
};

export const MediaFormat = {
    MANGA: { id: "MANGA", label: "Manga" },
    NOVEL: { id: "NOVEL", label: "Novel" },
    ONE_SHOT: { id: "ONE_SHOT", label: "One Shot" },
};

export const MediaStatus = {
    FINISHED: { id: "FINISHED", label: "Finished" },
    RELEASING: { id: "RELEASING", label: "Releasing" },
    NOT_YET_RELEASED: { id: "NOT_YET_RELEASED", label: "Not Yet Released" },
    CANCELLED: { id: "CANCELLED", label: "Cancelled" },
    HIATUS: { id: "HIATUS", label: "Hiatus" },
};

export const MediaSort = {
    SEARCH_MATCH: { id: "SEARCH_MATCH", label: "Search Match" },
    ID: { id: "ID", label: "Id ↑" },
    ID_DESC: { id: "ID_DESC", label: "Id ↓" },
    TITLE_ROMAJI: { id: "TITLE_ROMAJI", label: "Title Romaji ↑" },
    TITLE_ROMAJI_DESC: { id: "TITLE_ROMAJI_DESC", label: "Title Romaji ↓" },
    TITLE_ENGLISH: { id: "TITLE_ENGLISH", label: "Title English ↑" },
    TITLE_ENGLISH_DESC: { id: "TITLE_ENGLISH_DESC", label: "Title English ↓" },
    TITLE_NATIVE: { id: "TITLE_NATIVE", label: "Title Native ↑" },
    TITLE_NATIVE_DESC: { id: "TITLE_NATIVE_DESC", label: "Title Native ↓" },
    //TYPE: { id: "TYPE", label: "Type ↑" },
    //TYPE_DESC: { id: "TYPE_DESC", label: "Type ↓" },
    FORMAT: { id: "FORMAT", label: "Format ↑" },
    FORMAT_DESC: { id: "FORMAT_DESC", label: "Format ↓" },
    START_DATE: { id: "START_DATE", label: "Start Date ↑" },
    START_DATE_DESC: { id: "START_DATE_DESC", label: "Start Date ↓" },
    END_DATE: { id: "END_DATE", label: "End Date ↑" },
    END_DATE_DESC: { id: "END_DATE_DESC", label: "End Date ↓" },
    SCORE: { id: "SCORE", label: "Score ↑" },
    SCORE_DESC: { id: "SCORE_DESC", label: "Score ↓" },
    POPULARITY: { id: "POPULARITY", label: "Popularity ↑" },
    POPULARITY_DESC: { id: "POPULARITY_DESC", label: "Popularity ↓" },
    TRENDING: { id: "TRENDING", label: "Trending ↑" },
    TRENDING_DESC: { id: "TRENDING_DESC", label: "Trending ↓" },
    //EPISODES: { id: "EPISODES", label: "Episodes ↑" },
    //EPISODES_DESC: { id: "EPISODES_DESC", label: "Episodes ↓" },
    //DURATION: { id: "DURATION", label: "Duration ↑" },
    //DURATION_DESC: { id: "DURATION_DESC", label: "Duration ↓" },
    STATUS: { id: "STATUS", label: "Status ↑" },
    STATUS_DESC: { id: "STATUS_DESC", label: "Status ↓" },
    CHAPTERS: { id: "CHAPTERS", label: "Chapters ↑" },
    CHAPTERS_DESC: { id: "CHAPTERS_DESC", label: "Chapters ↓" },
    VOLUMES: { id: "VOLUMES", label: "Volumes ↑" },
    VOLUMES_DESC: { id: "VOLUMES_DESC", label: "Volumes ↓" },
    UPDATED_AT: { id: "UPDATED_AT", label: "Updated At ↑" },
    UPDATED_AT_DESC: { id: "UPDATED_AT_DESC", label: "Updated At ↓" },
    FAVOURITES: { id: "FAVOURITES", label: "Favourites ↑" },
    FAVOURITES_DESC: { id: "FAVOURITES_DESC", label: "Favourites ↓" },
};
