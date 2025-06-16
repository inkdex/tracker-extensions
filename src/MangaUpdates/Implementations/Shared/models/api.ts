/* eslint-disable */
/* tslint:disable */

/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface MUAboutusCategoryModelUpdateV1 {
    /** title */
    title?: string;
}

export interface MUAboutusCategoryModelV1 {
    /** category_id */
    category_id: number;
    /** position */
    position?: number;
    /** title */
    title?: string;
    /** users */
    users?: MUAboutusUserModelV1[];
}

export interface MUAboutusCategoryReorderModelV1 {
    /** category_id */
    category_id: number;
    /** position */
    position?: number;
    /** users */
    users?: MUAboutusUserReorderModelV1[];
}

export interface MUAboutusDescriptionModelV1 {
    /** description */
    description?: string;
}

export interface MUAboutusUserModelUpdateV1 {
    /** username */
    username?: string;
}

export interface MUAboutusUserModelV1 {
    /** entry_id */
    entry_id: number;
    /** position */
    position?: number;
    /** url */
    url?: string;
    /** user_id */
    user_id?: number;
    /** username */
    username?: string;
}

export interface MUAboutusUserReorderModelV1 {
    /** entry_id */
    entry_id: number;
    /** position */
    position?: number;
}

export interface MUAccountForgotPassModelV1 {
    /** email */
    email?: string;
}

export interface MUAccountLoginModelV1 {
    /**
     * password
     * @format password
     */
    password: string;
    /** username */
    username: string;
}

/** ApiContextV1 */
export type MUApiContextV1 = any;

/** ApiResponseV1 */
export interface MUApiResponseV1 {
    context?: MUApiValidationErrorsV1 | MUApiContextV1;
    reason: string;
    status: string;
}

/** ApiValidationErrorsV1 */
export type MUApiValidationErrorsV1 = any;

export interface MUAuthorsLockModelUpdateV1 {
    /** reason */
    reason?: string;
}

export interface MUAuthorsLockModelV1 {
    /** field */
    field?: string;
    /** reason */
    reason?: string;
    time_locked?: MUTimeV1;
    /** user_id */
    user_id?: number;
    /** username */
    username?: string;
}

export interface MUAuthorsModelSearchV1 {
    added_by?: MUUserModelSearchV1;
    /** genres */
    genres?: string[];
    /** id */
    id?: number;
    /** name */
    name?: string;
    /** AuthorsModelSearchV1Stats */
    stats?: {
        /** total_series */
        total_series?: number;
    };
    /** url */
    url?: string;
}

export interface MUAuthorsModelUpdateV1 {
    /** actualname */
    actualname?: string;
    /** AuthorsModelUpdateV1Admin */
    admin?: {
        /** approved */
        approved?: boolean;
    };
    /** associated */
    associated?: {
        /** name */
        name: string;
    }[];
    birthday?: MUBirthdayModelV1;
    /** birthplace */
    birthplace?: string;
    /** bloodtype */
    bloodtype?: "N/A" | "A" | "B" | "AB" | "O";
    /** comments */
    comments?: string;
    /** gender */
    gender?: "N/A" | "Male" | "Female" | "Other";
    /** name */
    name?: string;
    /** AuthorsModelUpdateV1Social */
    social?: {
        /** facebook */
        facebook?: string;
        /** officialsite */
        officialsite?: string;
        /** twitter */
        twitter?: string;
    };
    /** status */
    status?: "N/A" | "Active" | "Temporarily Inactive" | "Retired" | "Deceased";
    status_date?: MUStatusDateModelV1;
}

export interface MUAuthorsModelV1 {
    /** actualname */
    actualname?: string;
    added_by?: MUUserModelSearchV1;
    /** AuthorsModelV1Admin */
    admin?: {
        /** approved */
        approved?: boolean;
    };
    /** associated */
    associated?: {
        /** name */
        name: string;
    }[];
    birthday?: MUBirthdayModelV1;
    /** birthplace */
    birthplace?: string;
    /** bloodtype */
    bloodtype?: "N/A" | "A" | "B" | "AB" | "O";
    /** comments */
    comments?: string;
    /** gender */
    gender?: "N/A" | "Male" | "Female" | "Other";
    /** genres */
    genres?: string[];
    /** id */
    id?: number;
    image?: MUImageModelV1;
    last_updated?: MUTimeV1;
    /** name */
    name?: string;
    /** AuthorsModelV1Social */
    social?: {
        /** facebook */
        facebook?: string;
        /** officialsite */
        officialsite?: string;
        /** twitter */
        twitter?: string;
    };
    /** AuthorsModelV1Stats */
    stats?: {
        /** total_series */
        total_series?: number;
    };
    /** status */
    status?: "N/A" | "Active" | "Temporarily Inactive" | "Retired" | "Deceased";
    status_date?: MUStatusDateModelV1;
    /** url */
    url?: string;
}

export interface MUAuthorsSearchRequestV1 {
    /** added_by */
    added_by?: number;
    /** genre */
    genre?: string[];
    /** letter */
    letter?: string;
    /** orderby */
    orderby?: "name" | "series" | "score";
    /** page */
    page?: number;
    /** pending */
    pending?: boolean;
    /** perpage */
    perpage?: number;
    /** search */
    search?: string;
}

export interface MUAuthorsSearchResponseV1 {
    /** page */
    page?: number;
    /** per_page */
    per_page?: number;
    /** results */
    results?: {
        /** hit_genre */
        hit_genre?: string[];
        /** hit_name */
        hit_name?: string;
        record?: MUAuthorsModelSearchV1;
    }[];
    /** total_hits */
    total_hits?: number;
}

export interface MUAuthorsSeriesListRequestV1 {
    /** orderby */
    orderby?: "title" | "year";
}

export interface MUAuthorsSeriesListResponseV1 {
    /** genre_list */
    genre_list?: {
        /** count */
        count?: number;
        /** genre */
        genre?: string;
    }[];
    /** series_list */
    series_list?: {
        /** genres */
        genres?: string[];
        last_updated?: MUTimeV1;
        /** AuthorsSeriesListResponseV1SeriesListMetadata */
        metadata?: {
            user_list?: MUListsSeriesModelV1;
        };
        /** series_id */
        series_id?: number;
        /** title */
        title?: string;
        /** url */
        url?: string;
        /** year */
        year?: string;
    }[];
    /** total_series */
    total_series?: number;
}

export interface MUAvatarModelSearchV1 {
    /** height */
    height?: number;
    /** id */
    id?: number;
    /** url */
    url?: string;
    /** width */
    width?: number;
}

export interface MUAvatarModelUpdateV1 {
    /** title */
    title?: string;
}

export interface MUAvatarModelV1 {
    /** extension */
    extension?: string;
    /** height */
    height?: number;
    /** id */
    id?: number;
    /** title */
    title?: string;
    /** url */
    url?: string;
    /** width */
    width?: number;
}

export interface MUBirthdayModelV1 {
    /** as_string */
    as_string?: string;
    /** day */
    day?: number;
    /** month */
    month?: number;
    /** year */
    year?: number;
    /** zodiac */
    zodiac?: string;
}

export interface MUCategoriesModelSearchV1 {
    /** category */
    category: string;
    /** usage */
    usage?: number;
    /** votes */
    votes?: number;
    /** votes_minus */
    votes_minus?: number;
    /** votes_plus */
    votes_plus?: number;
}

export interface MUCategoriesModelUpdateV1 {
    /** category */
    category: string;
}

export interface MUCategoriesModelV1 {
    /** added_by */
    added_by?: number;
    /** category */
    category: string;
    /** series_id */
    series_id?: number;
    /** votes */
    votes?: number;
    /** votes_minus */
    votes_minus?: number;
    /** votes_plus */
    votes_plus?: number;
}

export interface MUCategoriesSearchRequestV1 {
    /** letter */
    letter?: string;
    /** orderby */
    orderby?: "category" | "agree" | "disagree" | "usage";
    /** page */
    page?: number;
    /** perpage */
    perpage?: number;
    /** search */
    search?: string;
}

export interface MUCategoriesSearchResponseV1 {
    /** page */
    page?: number;
    /** per_page */
    per_page?: number;
    /** results */
    results?: {
        record?: MUCategoriesModelSearchV1;
    }[];
    /** total_hits */
    total_hits?: number;
}

export interface MUConvoBulkModelV1 {
    /** convo_id_list */
    convo_id_list?: number[];
}

export interface MUConvoMessageListRequestV1 {
    /** page */
    page?: number;
    /** perpage */
    perpage?: number;
}

export interface MUConvoMessageModelUpdateV1 {
    /** content */
    content?: string;
}

export interface MUConvoMessageModelV1 {
    /** author_id */
    author_id?: number;
    /** author_name */
    author_name?: string;
    /** author_url */
    author_url?: string;
    /** content */
    content?: string;
    /** convo_id */
    convo_id?: number;
    /** is_admin */
    is_admin?: boolean;
    last_edit?: MUTimeV1;
    /** message_id */
    message_id?: number;
    time_added?: MUTimeV1;
}

export interface MUConvoMessageSearchRequestV1 {
    /** added_by */
    added_by?: number;
    /** page */
    page?: number;
    /** perpage */
    perpage?: number;
    /** search */
    search?: string;
}

export interface MUConvoMessageSearchResponseV1 {
    /** page */
    page?: number;
    /** per_page */
    per_page?: number;
    /** results */
    results?: {
        /** ConvoMessageSearchResponseV1ResultsMetadata */
        metadata?: {
            /** user_ignored */
            user_ignored?: boolean;
        };
        record?: MUConvoMessageModelV1;
    }[];
    /** total_hits */
    total_hits?: number;
}

export interface MUConvoModelAddV1 {
    message?: MUConvoMessageModelUpdateV1;
    /** participants */
    participants?: MUConvoParticipantModelAddV1[];
    /** topic */
    topic?: string;
}

export interface MUConvoModelUpdateV1 {
    /** topic */
    topic?: string;
}

export interface MUConvoModelV1 {
    /** author_id */
    author_id?: number;
    /** author_name */
    author_name?: string;
    /** author_url */
    author_url?: string;
    /** convo_id */
    convo_id?: number;
    last_edit?: MUTimeV1;
    time_added?: MUTimeV1;
    /** topic */
    topic?: string;
}

export interface MUConvoParticipantModelAddV1 {
    /** to */
    to: string;
}

export interface MUConvoParticipantModelV1 {
    /** is_admin */
    is_admin?: boolean;
    /** joined */
    joined?: boolean;
    last_time_seen?: MUTimeV1;
    time_added?: MUTimeV1;
    /** user_id */
    user_id?: number;
    /** username */
    username?: string;
}

export interface MUConvoSearchRequestV1 {
    /** page */
    page?: number;
    /** perpage */
    perpage?: number;
    /** search */
    search?: string;
}

export interface MUConvoSearchResponseV1 {
    /** page */
    page?: number;
    /** per_page */
    per_page?: number;
    /** results */
    results?: {
        /** ConvoSearchResponseV1ResultsMetadata */
        metadata?: {
            message?: MUConvoMessageModelV1;
            participant?: MUConvoParticipantModelV1;
        };
        record?: MUConvoModelV1;
    }[];
    /** total_hits */
    total_hits?: number;
}

export interface MUConvoUserIgnoreModelV1 {
    /** user_ignored */
    user_ignored?: boolean;
}

export interface MUFaqCategoryModelUpdateV1 {
    /** title */
    title?: string;
}

export interface MUFaqCategoryModelV1 {
    /** category_id */
    category_id: number;
    /** position */
    position?: number;
    /** title */
    title?: string;
}

export interface MUFaqCategoryQuestionsModelV1 {
    /** category_id */
    category_id: number;
    /** position */
    position?: number;
    /** questions */
    questions?: MUFaqQuestionOnlyModelV1[];
    /** title */
    title?: string;
}

export interface MUFaqCategoryReorderModelV1 {
    /** category_id */
    category_id: number;
    /** position */
    position?: number;
    /** questions */
    questions?: MUFaqQuestionReorderModelV1[];
}

export interface MUFaqQuestionModelUpdateV1 {
    /** answer */
    answer?: string;
    /** question */
    question?: string;
}

export interface MUFaqQuestionModelV1 {
    /** answer */
    answer?: string;
    /** position */
    position?: number;
    /** question */
    question?: string;
    /** question_id */
    question_id: number;
}

export interface MUFaqQuestionOnlyModelV1 {
    /** position */
    position?: number;
    /** question */
    question?: string;
    /** question_id */
    question_id: number;
}

export interface MUFaqQuestionReorderModelV1 {
    /** position */
    position?: number;
    /** question_id */
    question_id: number;
}

export interface MUForumAdminHistoryModelV1 {
    /** action */
    action?: string;
    action_time?: MUTimeV1;
    user?: MUUserModelSearchV1;
}

export interface MUForumAdminHistorySearchRequestV1 {
    /** page */
    page?: number;
    /** perpage */
    perpage?: number;
    /** uid */
    uid?: number;
}

export interface MUForumAdminHistorySearchResponseV1 {
    /** page */
    page?: number;
    /** per_page */
    per_page?: number;
    /** results */
    results?: {
        record?: MUForumAdminHistoryModelV1;
    }[];
    /** total_hits */
    total_hits?: number;
}

export interface MUForumAdminModelUpdateV1 {
    /** user_id */
    user_id?: number;
}

export interface MUForumAdminModelV1 {
    user?: MUUserModelSearchV1;
    /** user_id */
    user_id?: number;
}

export interface MUForumCategoryModelListV1 {
    /** category_id */
    category_id?: number;
    /** forums */
    forums?: {
        forum?: MUForumForumModelListV1;
    }[];
    /** name */
    name?: string;
}

export interface MUForumCategoryModelUpdateV1 {
    /** name */
    name?: string;
    /** position */
    position?: number;
}

export interface MUForumCategoryModelV1 {
    /** category_id */
    category_id?: number;
    /** name */
    name?: string;
    /** position */
    position?: number;
}

export interface MUForumForumModelListV1 {
    /** ForumForumModelListV1Admin */
    admin?: {
        /** hidden */
        hidden?: boolean;
        /** locked */
        locked?: boolean;
        /** verify_age */
        verify_age?: boolean;
    };
    /** description */
    description?: string;
    /** forum_id */
    forum_id?: number;
    last_topic?: MUForumTopicModelSearchV1;
    /** moderators */
    moderators?: MUForumAdminModelV1[];
    /** name */
    name?: string;
    /** position */
    position?: number;
    series?: MUSeriesModelSearchV1;
    /** ForumForumModelListV1Stats */
    stats?: {
        /** posts */
        posts?: number;
        /** topics */
        topics?: number;
    };
    /** url */
    url?: string;
}

export interface MUForumForumModelUpdateV1 {
    /** ForumForumModelUpdateV1Admin */
    admin?: {
        /** hidden */
        hidden?: boolean;
        /** locked */
        locked?: boolean;
        /** verify_age */
        verify_age?: boolean;
    };
    /** description */
    description?: string;
    /** name */
    name?: string;
    /** position */
    position?: number;
}

export interface MUForumForumModelV1 {
    /** ForumForumModelV1Admin */
    admin?: {
        /** hidden */
        hidden?: boolean;
        /** locked */
        locked?: boolean;
        /** verify_age */
        verify_age?: boolean;
    };
    /** ForumForumModelV1Category */
    category?: {
        /** category_id */
        category_id?: number;
        /** category_name */
        category_name?: string;
    };
    /** description */
    description?: string;
    /** forum_id */
    forum_id?: number;
    last_topic?: MUForumTopicModelSearchV1;
    /** moderators */
    moderators?: MUForumAdminModelV1[];
    /** name */
    name?: string;
    /** position */
    position?: number;
    series?: MUSeriesModelSearchV1;
    /** ForumForumModelV1Stats */
    stats?: {
        /** posts */
        posts?: number;
        /** topics */
        topics?: number;
    };
    /** url */
    url?: string;
}

export interface MUForumLookupResponseV1 {
    /** forum_id */
    forum_id?: number;
    /** topic_id */
    topic_id?: number;
}

export interface MUForumPollAnswerModelUpdateV1 {
    /** answer */
    answer: string;
    /** answer_id */
    answer_id: number;
    /** temp_image_id */
    temp_image_id?: number;
}

export interface MUForumPollAnswerModelV1 {
    /** answer */
    answer: string;
    /** answer_id */
    answer_id: number;
    /** ForumPollAnswerModelV1Image */
    image?: {
        /** height */
        height?: number;
        /** thumb_url */
        thumb_url?: string;
        /** url */
        url?: string;
        /** width */
        width?: number;
    };
    /** votes */
    votes?: number;
}

export interface MUForumPollModelUpdateV1 {
    /** answers */
    answers?: MUForumPollAnswerModelUpdateV1[];
    /** question */
    question?: string;
}

export interface MUForumPollModelV1 {
    /** ForumPollModelV1Admin */
    admin?: {
        /** image_poll */
        image_poll?: boolean;
    };
    /** answers */
    answers?: MUForumPollAnswerModelV1[];
    /** question */
    question?: string;
    /** votes */
    votes?: number;
}

export interface MUForumPollTempImageModelV1 {
    /** caption */
    caption?: string;
    /** height */
    height?: number;
    /** image_id */
    image_id?: number;
    time_added?: MUTimeV1;
    /** ForumPollTempImageModelV1Url */
    url?: {
        /** original */
        original?: string;
        /** thumb */
        thumb?: string;
    };
    /** width */
    width?: number;
}

export interface MUForumPollVoteModelV1 {
    /** choice_id */
    choice_id?: number;
}

export interface MUForumPostByUserResponseV1 {
    /** post_id_list */
    post_id_list?: number[];
    /** topic_id */
    topic_id?: number;
}

export interface MUForumPostListResponseV1 {
    /** page */
    page?: number;
    /** per_page */
    per_page?: number;
    /** results */
    results?: {
        /** ForumPostListResponseV1ResultsMetadata */
        metadata?: {
            /** is_forum_admin */
            is_forum_admin?: boolean;
            /** is_moderator */
            is_moderator?: boolean;
            /** reported */
            reported?: boolean;
            user_warn?: MUForumWarnModelPublicV1;
        };
        record?: MUForumPostModelV1;
    }[];
    /** total_hits */
    total_hits?: number;
}

export interface MUForumPostModelSearchV1 {
    author?: MUUserModelSearchV1;
    /** body_excerpt */
    body_excerpt?: string;
    /** post_id */
    post_id?: number;
    time_added?: MUTimeV1;
    /** ForumPostModelSearchV1Topic */
    topic?: {
        /** forum_id */
        forum_id?: number;
        /** topic */
        topic?: string;
        /** topic_id */
        topic_id?: number;
        /** topic_url */
        topic_url?: string;
    };
}

export interface MUForumPostModelUpdateV1 {
    /** body */
    body?: string;
    /** reply_to */
    reply_to?: number;
}

export interface MUForumPostModelV1 {
    author?: MUUserModelSearchV1;
    /** body */
    body?: string;
    /** ForumPostModelV1LastEdit */
    last_edit?: {
        /** by */
        by?: string;
        time?: MUTimeV1;
    };
    /** post_id */
    post_id?: number;
    /** ForumPostModelV1ReplyTo */
    reply_to?: {
        /** ForumPostModelV1ReplyToPostAuthor */
        post_author?: {
            /** author_id */
            author_id?: number;
            /** author_name */
            author_name?: string;
            /** url */
            url?: string;
        };
        /** post_id */
        post_id?: number;
    };
    time_added?: MUTimeV1;
    /** ForumPostModelV1Topic */
    topic?: {
        /** forum_id */
        forum_id?: number;
        /** topic */
        topic?: string;
        /** topic_id */
        topic_id?: number;
        /** topic_url */
        topic_url?: string;
    };
}

export interface MUForumPostReportModelUpdateV1 {
    /** reason */
    reason?: string;
}

export interface MUForumPostReportModelV1 {
    post?: MUForumPostModelSearchV1;
    /** post_id */
    post_id?: number;
    /** reason */
    reason?: string;
    /** report_id */
    report_id?: number;
    topic?: MUForumTopicModelSearchV1;
    /** topic_id */
    topic_id?: number;
    user?: MUUserModelSearchV1;
    /** user_id */
    user_id?: number;
}

export interface MUForumSearchRequestV1 {
    /** after_id */
    after_id?: number;
    /** before_id */
    before_id?: number;
    /** by_user_id */
    by_user_id?: number;
    /** filter_user_id */
    filter_user_id?: number;
    /** method */
    method?: "fulltext" | "exact";
    /** page */
    page?: number;
    /** perpage */
    perpage?: number;
    /** search */
    search?: string;
    /** search_by */
    search_by?: "post" | "topic";
    /** since */
    since?: number;
}

export interface MUForumSearchResponseV1 {
    /** page */
    page?: number;
    /** per_page */
    per_page?: number;
    /** post_results */
    post_results?: {
        /** ForumSearchResponseV1PostResultsMetadata */
        metadata?: {
            /** ForumSearchResponseV1PostResultsMetadataForumInfo */
            forum_info?: {
                /** forum_id */
                forum_id?: number;
                /** forum_name */
                forum_name?: string;
                /** url */
                url?: string;
            };
            /** is_subscribed */
            is_subscribed?: boolean;
            /** my_latest_post_in_topic */
            my_latest_post_in_topic?: number;
            /** ForumSearchResponseV1PostResultsMetadataTopicStats */
            topic_stats?: {
                /** posts */
                posts?: number;
                /** views */
                views?: number;
            };
        };
        record?: MUForumPostModelSearchV1;
    }[];
    /** topic_results */
    topic_results?: {
        /** ForumSearchResponseV1TopicResultsMetadata */
        metadata?: {
            /** is_subscribed */
            is_subscribed?: boolean;
            /** my_latest_post_in_topic */
            my_latest_post_in_topic?: number;
        };
        record?: MUForumTopicModelSearchV1;
    }[];
    /** total_hits */
    total_hits?: number;
}

export interface MUForumTopicListRequestV1 {
    /** orderby */
    orderby?: "last_post_date" | "topic_start_date";
    /** page */
    page?: number;
    /** perpage */
    perpage?: number;
}

export interface MUForumTopicListResponseV1 {
    /** page */
    page?: number;
    /** per_page */
    per_page?: number;
    /** results */
    results?: {
        /** ForumTopicListResponseV1ResultsMetadata */
        metadata?: {
            first_post?: MUForumPostModelV1;
        };
        record?: MUForumTopicModelSearchV1;
    }[];
    /** total_hits */
    total_hits?: number;
}

export interface MUForumTopicModelAddV1 {
    poll?: MUForumPollModelUpdateV1;
    post?: MUForumPostModelUpdateV1;
    topic?: MUForumTopicModelUpdateV1;
}

export interface MUForumTopicModelSearchV1 {
    /** ForumTopicModelSearchV1Admin */
    admin?: {
        /** global */
        global?: boolean;
        /** locked */
        locked?: boolean;
        /** pinned */
        pinned?: boolean;
    };
    /** ForumTopicModelSearchV1Forum */
    forum?: {
        /** forum_id */
        forum_id?: number;
        /** forum_name */
        forum_name?: string;
        /** url */
        url?: string;
    };
    /** is_poll */
    is_poll?: boolean;
    last_post?: MUForumPostModelSearchV1;
    /** ForumTopicModelSearchV1Stats */
    stats?: {
        /** posts */
        posts?: number;
        /** views */
        views?: number;
    };
    time_added?: MUTimeV1;
    /** topic */
    topic?: string;
    /** topic_id */
    topic_id?: number;
    topic_starter?: MUUserModelSearchV1;
    /** url */
    url?: string;
}

export interface MUForumTopicModelUpdateV1 {
    /** ForumTopicModelUpdateV1Admin */
    admin?: {
        /** global */
        global?: boolean;
        /** locked */
        locked?: boolean;
        /** pinned */
        pinned?: boolean;
    };
    /** ForumTopicModelUpdateV1Forum */
    forum?: {
        /** forum_id */
        forum_id?: number;
    };
    /** topic */
    topic?: string;
}

export interface MUForumTopicModelV1 {
    /** ForumTopicModelV1Admin */
    admin?: {
        /** global */
        global?: boolean;
        /** locked */
        locked?: boolean;
        /** pinned */
        pinned?: boolean;
    };
    /** ForumTopicModelV1Forum */
    forum?: {
        /** forum_id */
        forum_id?: number;
        /** forum_name */
        forum_name?: string;
        /** url */
        url?: string;
    };
    /** is_poll */
    is_poll?: boolean;
    last_post?: MUForumPostModelSearchV1;
    poll?: MUForumPollModelV1;
    /** ForumTopicModelV1Stats */
    stats?: {
        /** posts */
        posts?: number;
        /** views */
        views?: number;
    };
    time_added?: MUTimeV1;
    /** topic */
    topic?: string;
    /** topic_id */
    topic_id?: number;
    topic_starter?: MUUserModelSearchV1;
    /** url */
    url?: string;
}

export interface MUForumWarnModelPublicV1 {
    /** level */
    level: number;
    time_added?: MUTimeV1;
}

export interface MUForumWarnModelUpdateV1 {
    /** level */
    level: number;
    /** reason */
    reason: string;
    /** send_reason */
    send_reason?: boolean;
}

export interface MUForumWarnModelV1 {
    by_user?: MUUserModelSearchV1;
    /** level */
    level: number;
    /** reason */
    reason: string;
    /** send_reason */
    send_reason?: boolean;
    time_added?: MUTimeV1;
    /** user_id */
    user_id?: number;
}

export interface MUGenreModelStatsV1 {
    /** demographic */
    demographic?: boolean;
    /** description */
    description?: string;
    /** genre */
    genre?: string;
    /** id */
    id?: number;
    /** GenreModelStatsV1Stats */
    stats?: {
        /** authors */
        authors?: number;
        /** filters */
        filters?: number;
        /** highlights */
        highlights?: number;
        /** series */
        series?: number;
    };
}

export interface MUGenreModelUpdateV1 {
    /** demographic */
    demographic?: boolean;
    /** description */
    description?: string;
    /** genre */
    genre?: string;
}

export interface MUGenreModelV1 {
    /** demographic */
    demographic?: boolean;
    /** description */
    description?: string;
    /** genre */
    genre?: string;
    /** id */
    id?: number;
}

export interface MUGroupsModelSearchV1 {
    /** active */
    active?: boolean;
    added_by?: MUUserModelSearchV1;
    /** group_id */
    group_id?: number;
    /** name */
    name?: string;
    /** notes */
    notes?: string;
    /** GroupsModelSearchV1Social */
    social?: {
        /** discord */
        discord?: string;
        /** facebook */
        facebook?: string;
        /** forum */
        forum?: string;
        /** GroupsModelSearchV1SocialIrc */
        irc?: {
            /** channel */
            channel?: string;
            /** server */
            server?: string;
        };
        /** site */
        site?: string;
        /** twitter */
        twitter?: string;
    };
    /** url */
    url?: string;
}

export interface MUGroupsModelUpdateV1 {
    /** active */
    active?: boolean;
    /** GroupsModelUpdateV1Admin */
    admin?: {
        /** approved */
        approved?: boolean;
        /** hold */
        hold?: boolean;
    };
    /** associated */
    associated?: {
        /** name */
        name: string;
    }[];
    /** name */
    name?: string;
    /** notes */
    notes?: string;
    /** GroupsModelUpdateV1Social */
    social?: {
        /** discord */
        discord?: string;
        /** facebook */
        facebook?: string;
        /** forum */
        forum?: string;
        /** GroupsModelUpdateV1SocialIrc */
        irc?: {
            /** channel */
            channel?: string;
            /** server */
            server?: string;
        };
        /** site */
        site?: string;
        /** twitter */
        twitter?: string;
    };
}

export interface MUGroupsModelV1 {
    /** active */
    active?: boolean;
    added_by?: MUUserModelSearchV1;
    /** GroupsModelV1Admin */
    admin?: {
        /** approved */
        approved?: boolean;
        /** hold */
        hold?: boolean;
    };
    /** associated */
    associated?: {
        /** name */
        name: string;
    }[];
    /** group_id */
    group_id?: number;
    /** name */
    name?: string;
    /** notes */
    notes?: string;
    /** GroupsModelV1Social */
    social?: {
        /** discord */
        discord?: string;
        /** facebook */
        facebook?: string;
        /** forum */
        forum?: string;
        /** GroupsModelV1SocialIrc */
        irc?: {
            /** channel */
            channel?: string;
            /** server */
            server?: string;
        };
        /** site */
        site?: string;
        /** twitter */
        twitter?: string;
    };
    /** url */
    url?: string;
}

export interface MUGroupsSearchRequestV1 {
    /** active */
    active?: boolean;
    /** added_by */
    added_by?: number;
    /** letter */
    letter?: string;
    /** page */
    page?: number;
    /** pending */
    pending?: boolean;
    /** perpage */
    perpage?: number;
    /** search */
    search?: string;
}

export interface MUGroupsSearchResponseV1 {
    /** page */
    page?: number;
    /** per_page */
    per_page?: number;
    /** results */
    results?: {
        /** hit_name */
        hit_name?: string;
        record?: MUGroupsModelSearchV1;
    }[];
    /** total_hits */
    total_hits?: number;
}

export interface MUGroupsSeriesListResponseV1 {
    /** release_frequency */
    release_frequency?: string;
    /** series_categories */
    series_categories?: {
        /** category */
        category?: string;
        /** votes */
        votes?: number;
    }[];
    /** series_genres */
    series_genres?: {
        /** count */
        count?: number;
        /** genre */
        genre?: string;
    }[];
    /** series_titles */
    series_titles?: {
        last_updated?: MUTimeV1;
        /** series_id */
        series_id?: number;
        /** title */
        title?: string;
        /** url */
        url?: string;
    }[];
}

export interface MUImageModelV1 {
    /** height */
    height?: number;
    /** ImageModelV1Url */
    url?: {
        /** original */
        original?: string;
        /** thumb */
        thumb?: string;
    };
    /** width */
    width?: number;
}

export interface MUListsBulkAddModelV1 {
    /** priority */
    priority?: "High" | "Low";
    /** series_title */
    series_title?: string;
}

export interface MUListsModelUpdateV1 {
    /** description */
    description?: string;
    /** icon */
    icon?: string;
    /** ListsModelUpdateV1Options */
    options?: {
        /** public */
        public?: boolean;
        /** show_comment */
        show_comment?: "link" | "text" | "none";
        /** show_latest_chapter */
        show_latest_chapter?: boolean;
        /** show_per_page */
        show_per_page?: number;
        /** show_rating */
        show_rating?: boolean;
        /** show_status */
        show_status?: boolean;
        /** sort */
        sort?:
            | "title"
            | "priority"
            | "date"
            | "rating"
            | "release"
            | "unread"
            | "userrating";
    };
    /** title */
    title?: string;
    /** type */
    type?: "read" | "wish" | "complete" | "unfinished" | "hold";
}

export interface MUListsModelV1 {
    /** custom */
    custom?: boolean;
    /** description */
    description?: string;
    /** icon */
    icon?: string;
    /** list_id */
    list_id?: number;
    /** ListsModelV1Options */
    options?: {
        /** public */
        public?: boolean;
        /** show_comment */
        show_comment?: "link" | "text" | "none";
        /** show_latest_chapter */
        show_latest_chapter?: boolean;
        /** show_per_page */
        show_per_page?: number;
        /** show_rating */
        show_rating?: boolean;
        /** show_status */
        show_status?: boolean;
        /** sort */
        sort?:
            | "title"
            | "priority"
            | "date"
            | "rating"
            | "release"
            | "unread"
            | "userrating";
    };
    /** title */
    title?: string;
    /** type */
    type?: "read" | "wish" | "complete" | "unfinished" | "hold";
}

export interface MUListsPublicSearchResponseV1 {
    list?: MUListsModelV1;
    /** page */
    page?: number;
    /** per_page */
    per_page?: number;
    /** results */
    results?: {
        /** chapter */
        chapter?: number;
        /** ListsPublicSearchResponseV1ResultsMetadata */
        metadata?: {
            /** ListsPublicSearchResponseV1ResultsMetadataUserComment */
            user_comment?: {
                /** comment_id */
                comment_id?: number;
                /** comment_preview */
                comment_preview?: string;
            };
            user_list?: MUListsSeriesModelV1;
            /** user_rating */
            user_rating?: number;
        };
        /** series_id */
        series_id?: number;
        /** series_title */
        series_title?: string;
        /** series_url */
        series_url?: string;
        /** volume */
        volume?: number;
    }[];
    /** total_hits */
    total_hits?: number;
}

export interface MUListsPublicStatsModelV1 {
    /** genres */
    genres?: {
        /** count */
        count?: number;
        /** genre_name */
        genre_name?: string;
    }[];
}

export interface MUListsSearchRequestV1 {
    /** page */
    page?: number;
    /** perpage */
    perpage?: number;
}

export interface MUListsSearchResponseV1 {
    list?: MUListsModelV1;
    /** page */
    page?: number;
    /** per_page */
    per_page?: number;
    /** results */
    results?: {
        /** ListsSearchResponseV1ResultsMetadata */
        metadata?: {
            series?: MUSeriesModelSearchV1;
            /** user_rating */
            user_rating?: number;
        };
        record?: MUListsSeriesModelV1;
    }[];
    /** total_hits */
    total_hits?: number;
}

export interface MUListsSeriesModelUpdateV1 {
    /** list_id */
    list_id?: number;
    /** priority */
    priority?: number;
    /** ListsSeriesModelUpdateV1Series */
    series: {
        /** id */
        id: number;
        /** title */
        title?: string;
    };
    /** ListsSeriesModelUpdateV1Status */
    status?: {
        /** chapter */
        chapter?: number;
        /** increment_chapter */
        increment_chapter?: number;
        /** increment_volume */
        increment_volume?: number;
        /** volume */
        volume?: number;
    };
}

export interface MUListsSeriesModelV1 {
    /** list_icon */
    list_icon?: string;
    /** list_id */
    list_id?: number;
    /** list_type */
    list_type?: string;
    /** priority */
    priority?: number;
    /** ListsSeriesModelV1Series */
    series: {
        /** id */
        id: number;
        /** title */
        title?: string;
        /** url */
        url?: string;
    };
    /** ListsSeriesModelV1Status */
    status?: {
        /** chapter */
        chapter?: number;
        /** volume */
        volume?: number;
    };
    time_added?: MUTimeV1;
}

export interface MUListsSimilarUsersResponseV1 {
    /** total_hits */
    total_hits?: number;
    /** users */
    users?: {
        /** intersect_count */
        intersect_count?: number;
        /** percent_match */
        percent_match?: number;
        /** user_id */
        user_id?: number;
        /** user_name */
        user_name?: string;
        /** user_rating */
        user_rating?: number;
    }[];
}

export interface MUMiscOnlineUsersModelV1 {
    /** users */
    users?: {
        /** MiscOnlineUsersModelV1UsersMetadata */
        metadata?: {
            /** invisible */
            invisible?: boolean;
            last_active?: MUTimeV1;
            /** source */
            source?: string;
            /** super_moderator */
            super_moderator?: boolean;
        };
        record?: MUUserModelSearchV1;
    }[];
}

export interface MUMiscSlowTransactionStatusResponseV1 {
    /** done */
    done?: number;
    /** error */
    error?: string;
    /** percent */
    percent?: number;
    /** return */
    return?: string;
    /** state */
    state?: "pending" | "in progress" | "complete" | "error";
    /** total */
    total?: number;
}

export interface MUMiscStatsModelV1 {
    latest_user?: MUUserModelSearchV1;
    /** total_forum_posts */
    total_forum_posts?: number;
    /** total_forum_topics */
    total_forum_topics?: number;
    /** total_users */
    total_users?: number;
}

export interface MUPerPageSearchRequestV1 {
    /** page */
    page?: number;
    /** perpage */
    perpage?: number;
}

export interface MUPollArchiveModelV1 {
    /** poll_id */
    poll_id?: number;
    /** question */
    question?: string;
    /** responses */
    responses?: string[];
    time_finished?: MUTimeV1;
    /** total_votes */
    total_votes?: number;
}

export interface MUPollArchiveSearchRequestV1 {
    /** orderby */
    orderby?: "time_finished" | "total_votes" | "score";
    /** page */
    page?: number;
    /** perpage */
    perpage?: number;
    /** search */
    search?: string;
}

export interface MUPollArchiveSearchResponseV1 {
    /** page */
    page?: number;
    /** per_page */
    per_page?: number;
    /** results */
    results?: {
        record?: MUPollArchiveModelV1;
    }[];
    /** total_hits */
    total_hits?: number;
}

export interface MUPollModelUpdateV1 {
    /** answers */
    answers?: {
        /** answer */
        answer?: string;
    }[];
    /** question */
    question?: string;
}

export interface MUPollModelV1 {
    /** active */
    active?: boolean;
    /** answers */
    answers?: {
        /** answer */
        answer?: string;
        /** answer_id */
        answer_id?: number;
        /** total */
        total?: number;
    }[];
    /** question */
    question?: string;
    /** total_votes */
    total_votes?: number;
}

export interface MUPollVoteStatusModelV1 {
    /** voted */
    voted?: boolean;
}

export interface MUPublishersModelSearchV1 {
    added_by?: MUUserModelSearchV1;
    /** name */
    name?: string;
    /** publisher_id */
    publisher_id?: number;
    /** PublishersModelSearchV1Stats */
    stats?: {
        /** total_publications */
        total_publications?: number;
        /** total_series */
        total_series?: number;
    };
    /** type */
    type?:
        | "N/A"
        | "Japanese"
        | "English"
        | "Korean"
        | "Taiwanese"
        | "Chinese"
        | "Thai"
        | "Indonesian"
        | "Filipino"
        | "Vietnamese"
        | "Malaysian"
        | "Nordic"
        | "French"
        | "Spanish"
        | "Russian"
        | "Polish"
        | "Portuguese"
        | "German"
        | "Hindi"
        | "Arabic";
    /** url */
    url?: string;
}

export interface MUPublishersModelUpdateV1 {
    /** PublishersModelUpdateV1Admin */
    admin?: {
        /** approved */
        approved?: boolean;
    };
    /** associated */
    associated?: {
        /** name */
        name: string;
    }[];
    /** info */
    info?: string;
    /** name */
    name?: string;
    /** site */
    site?: string;
    /** type */
    type?:
        | "N/A"
        | "Japanese"
        | "English"
        | "Korean"
        | "Taiwanese"
        | "Chinese"
        | "Thai"
        | "Indonesian"
        | "Filipino"
        | "Vietnamese"
        | "Malaysian"
        | "Nordic"
        | "French"
        | "Spanish"
        | "Russian"
        | "Polish"
        | "Portuguese"
        | "German"
        | "Hindi"
        | "Arabic";
}

export interface MUPublishersModelV1 {
    added_by?: MUUserModelSearchV1;
    /** PublishersModelV1Admin */
    admin?: {
        /** approved */
        approved?: boolean;
    };
    /** associated */
    associated?: {
        /** name */
        name: string;
    }[];
    /** info */
    info?: string;
    last_updated?: MUTimeV1;
    /** name */
    name?: string;
    /** publisher_id */
    publisher_id?: number;
    /** site */
    site?: string;
    /** PublishersModelV1Stats */
    stats?: {
        /** total_publications */
        total_publications?: number;
        /** total_series */
        total_series?: number;
    };
    /** type */
    type?:
        | "N/A"
        | "Japanese"
        | "English"
        | "Korean"
        | "Taiwanese"
        | "Chinese"
        | "Thai"
        | "Indonesian"
        | "Filipino"
        | "Vietnamese"
        | "Malaysian"
        | "Nordic"
        | "French"
        | "Spanish"
        | "Russian"
        | "Polish"
        | "Portuguese"
        | "German"
        | "Hindi"
        | "Arabic";
    /** url */
    url?: string;
}

export interface MUPublishersPublicationResponseV1 {
    /** PublishersPublicationResponseV1Publisher */
    publisher?: {
        /** publisher_id */
        publisher_id?: number;
        /** publisher_name */
        publisher_name?: string;
        /** url */
        url?: string;
    };
    /** series_list */
    series_list?: {
        /** genres */
        genres?: string[];
        last_updated?: MUTimeV1;
        /** series_id */
        series_id?: number;
        /** title */
        title?: string;
        /** url */
        url?: string;
    }[];
}

export interface MUPublishersSearchRequestV1 {
    /** added_by */
    added_by?: number;
    /** letter */
    letter?: string;
    /** orderby */
    orderby?: "score" | "name" | "series" | "publications" | "type";
    /** page */
    page?: number;
    /** pending */
    pending?: boolean;
    /** perpage */
    perpage?: number;
    /** search */
    search?: string;
}

export interface MUPublishersSearchResponseV1 {
    /** page */
    page?: number;
    /** per_page */
    per_page?: number;
    /** results */
    results?: {
        /** hit_name */
        hit_name?: string;
        record?: MUPublishersModelSearchV1;
    }[];
    /** total_hits */
    total_hits?: number;
}

export interface MUPublishersSeriesListResponseV1 {
    /** publication_list */
    publication_list?: {
        /** count */
        count?: number;
        /** publication_name */
        publication_name?: string;
    }[];
    /** series_list */
    series_list?: {
        last_updated?: MUTimeV1;
        /** series_id */
        series_id?: number;
        /** title */
        title?: string;
        /** url */
        url?: string;
        /** year */
        year?: string;
    }[];
}

export interface MUReleaseDaysSearchRequestV1 {
    /** include_metadata */
    include_metadata?: boolean;
    /** page */
    page?: number;
    /** perpage */
    perpage?: number;
}

export interface MUReleaseModelSearchV1 {
    /** chapter */
    chapter?: string;
    /** groups */
    groups?: {
        /** group_id */
        group_id?: number;
        /** name */
        name?: string;
        /** url */
        url?: string;
    }[];
    /** id */
    id?: number;
    /** release_date */
    release_date?: string;
    time_added?: MUTimeV1;
    /** title */
    title?: string;
    /** volume */
    volume?: string;
}

export interface MUReleaseModelUpdateV1 {
    /** ReleaseModelUpdateV1Admin */
    admin?: {
        /** approved */
        approved?: boolean;
        /** archived */
        archived?: boolean;
    };
    /** chapter */
    chapter?: string;
    /** comment */
    comment?: string;
    /** download_notes */
    download_notes?: string;
    /** groups */
    groups?: {
        /** name */
        name?: string;
    }[];
    /** release_date */
    release_date?: string;
    time_added?: MUTimeUpdateV1;
    /** title */
    title?: string;
    /** volume */
    volume?: string;
}

export interface MUReleaseModelV1 {
    /** ReleaseModelV1Admin */
    admin?: {
        added_by?: MUUserModelSearchV1;
        /** approved */
        approved?: boolean;
        /** archived */
        archived?: boolean;
    };
    /** chapter */
    chapter?: string;
    /** comment */
    comment?: string;
    /** download_notes */
    download_notes?: string;
    /** groups */
    groups?: {
        /** group_id */
        group_id?: number;
        /** name */
        name?: string;
        /** url */
        url?: string;
    }[];
    /** id */
    id?: number;
    /** release_date */
    release_date?: string;
    time_added?: MUTimeV1;
    /** title */
    title?: string;
    /** volume */
    volume?: string;
}

export interface MUReleaseModerateRequestV1 {
    /** archived */
    archived?: boolean;
    /** disable_paging */
    disable_paging?: boolean;
    /** page */
    page?: number;
    /** perpage */
    perpage?: number;
}

export interface MUReleaseModerateResponseV1 {
    /** group_info */
    group_info?: {
        /** group_id */
        group_id?: number;
        /** hold */
        hold?: boolean;
    }[];
    /** page */
    page?: number;
    /** per_page */
    per_page?: number;
    /** results */
    results?: {
        /** ReleaseModerateResponseV1ResultsMetadata */
        metadata?: {
            /** like_releases */
            like_releases?: MUReleaseModelV1[];
            /** series */
            series?: number;
        };
        record?: MUReleaseModelV1;
    }[];
    /** total_hits */
    total_hits?: number;
}

export interface MUReleaseSearchRequestV1 {
    /** added_by */
    added_by?: number;
    /** asc */
    asc?: "asc" | "desc";
    /** end_date */
    end_date?: string;
    /** group_id */
    group_id?: number;
    /** include_metadata */
    include_metadata?: boolean;
    /** letter */
    letter?: string;
    /** orderby */
    orderby?: "date" | "time" | "title" | "vol" | "chap";
    /** page */
    page?: number;
    /** pending */
    pending?: boolean;
    /** perpage */
    perpage?: number;
    /** search */
    search?: string;
    /** search_type */
    search_type?: "series" | "regular";
    /** start_date */
    start_date?: string;
}

export interface MUReleaseSearchResponseV1 {
    /** page */
    page?: number;
    /** per_page */
    per_page?: number;
    /** results */
    results?: {
        /** ReleaseSearchResponseV1ResultsMetadata */
        metadata?: {
            series?: MUSeriesModelSearchV1;
            /** type_filter */
            type_filter?: string;
            /** user_genre_filters */
            user_genre_filters?: string[];
            /** user_genre_highlights */
            user_genre_highlights?: {
                /** color */
                color?: string;
                /** genre */
                genre?: string;
            }[];
            /** user_group_filters */
            user_group_filters?: string[];
            user_list?: MUListsSeriesModelV1;
        };
        record?: MUReleaseModelSearchV1;
    }[];
    /** total_hits */
    total_hits?: number;
}

export interface MUReviewCommentModelUpdateV1 {
    /** ReviewCommentModelUpdateV1Admin */
    admin?: {
        /** approved */
        approved?: boolean;
    };
    /** content */
    content?: string;
    /** rating */
    rating?: number;
    /** subject */
    subject?: string;
}

export interface MUReviewCommentModelV1 {
    /** ReviewCommentModelV1Author */
    author?: {
        /** name */
        name?: string;
        /** user_id */
        user_id?: number;
        user_info?: MUUserModelSearchV1;
    };
    /** content */
    content?: string;
    /** id */
    id?: number;
    /** rating */
    rating?: number;
    /** review_id */
    review_id?: number;
    /** subject */
    subject?: string;
    time_added?: MUTimeV1;
    time_updated?: MUTimeV1;
}

export interface MUReviewCommentSearchRequestV1 {
    /** added_by */
    added_by?: number;
    /** page */
    page?: number;
    /** perpage */
    perpage?: number;
}

export interface MUReviewCommentSearchResponseV1 {
    /** page */
    page?: number;
    /** per_page */
    per_page?: number;
    /** results */
    results?: {
        record?: MUReviewCommentModelV1;
    }[];
    /** total_hits */
    total_hits?: number;
}

export interface MUReviewModelSearchV1 {
    /** ReviewModelSearchV1Author */
    author?: {
        /** name */
        name?: string;
        /** url */
        url?: string;
        /** user_id */
        user_id?: number;
    };
    /** body_excerpt */
    body_excerpt?: string;
    /** id */
    id?: number;
    /** ReviewModelSearchV1Review */
    review?: {
        /** characters */
        characters?: number;
        /** drawing */
        drawing?: number;
        /** enjoy */
        enjoy?: number;
        /** overall */
        overall?: number;
        /** plot */
        plot?: number;
    };
    series?: MUSeriesModelSearchV1;
    time_added?: MUTimeV1;
    /** title */
    title?: string;
}

export interface MUReviewModelUpdateV1 {
    /** ReviewModelUpdateV1Admin */
    admin?: {
        /** approved */
        approved?: boolean;
        /** moderated */
        moderated?: boolean;
    };
    /** body */
    body?: string;
    /** ReviewModelUpdateV1Review */
    review?: {
        /** characters */
        characters?: number;
        /** drawing */
        drawing?: number;
        /** enjoy */
        enjoy?: number;
        /** overall */
        overall?: number;
        /** plot */
        plot?: number;
    };
    /** series_title */
    series_title?: string;
    /** title */
    title?: string;
}

export interface MUReviewModelV1 {
    /** ReviewModelV1Author */
    author?: {
        /** name */
        name?: string;
        /** url */
        url?: string;
        /** user_id */
        user_id?: number;
    };
    /** body */
    body?: string;
    /** id */
    id?: number;
    /** ReviewModelV1Review */
    review?: {
        /** characters */
        characters?: number;
        /** drawing */
        drawing?: number;
        /** enjoy */
        enjoy?: number;
        /** overall */
        overall?: number;
        /** plot */
        plot?: number;
        /** user */
        user?: number;
    };
    series?: MUSeriesModelSearchV1;
    time_added?: MUTimeV1;
    /** title */
    title?: string;
}

export interface MUReviewSearchRequestV1 {
    /** added_by */
    added_by?: number;
    /** letter */
    letter?: string;
    /** page */
    page?: number;
    /** pending */
    pending?: boolean;
    /** perpage */
    perpage?: number;
    /** search */
    search?: string;
    /** series_id */
    series_id?: number;
}

export interface MUReviewSearchResponseV1 {
    /** page */
    page?: number;
    /** per_page */
    per_page?: number;
    /** results */
    results?: {
        record?: MUReviewModelSearchV1;
    }[];
    /** total_hits */
    total_hits?: number;
}

export interface MUSeriesCategoryUpdateModelV1 {
    /** SeriesCategoryUpdateModelV1From */
    from: {
        /** category */
        category: string;
    };
    to: MUCategoriesModelUpdateV1;
}

export interface MUSeriesCategoryVoteDeleteModelV1 {
    /** category */
    category: string;
}

export interface MUSeriesCategoryVoteModelV1 {
    /** agree */
    agree?: boolean;
    /** category */
    category: string;
}

export interface MUSeriesCommentModelUpdateV1 {
    /** SeriesCommentModelUpdateV1Admin */
    admin?: {
        /** moderated */
        moderated?: boolean;
        /** reported */
        reported?: boolean;
    };
    /** content */
    content?: string;
    /** subject */
    subject?: string;
}

export interface MUSeriesCommentModelV1 {
    /** SeriesCommentModelV1Admin */
    admin?: {
        /** moderated */
        moderated?: boolean;
        /** report_reason */
        report_reason?: string;
        /** reported */
        reported?: boolean;
    };
    /** SeriesCommentModelV1Author */
    author?: {
        /** name */
        name?: string;
        user_info?: MUUserModelSearchV1;
    };
    /** content */
    content?: string;
    /** id */
    id?: number;
    /** series_id */
    series_id?: number;
    /** subject */
    subject?: string;
    time_added?: MUTimeV1;
    time_updated?: MUTimeV1;
    /** useful */
    useful?: number;
}

export interface MUSeriesCommentModerationResponseV1 {
    /** page */
    page?: number;
    /** per_page */
    per_page?: number;
    /** results */
    results?: {
        /** SeriesCommentModerationResponseV1ResultsMetadata */
        metadata?: {
            /** author_series_rating */
            author_series_rating?: number;
            series?: MUSeriesModelSearchV1;
        };
        record?: MUSeriesCommentModelV1;
    }[];
    /** total_hits */
    total_hits?: number;
}

export interface MUSeriesCommentReportModelV1 {
    /** report_reason */
    report_reason?: string;
}

export interface MUSeriesCommentSearchRequestV1 {
    /** added_by */
    added_by?: number;
    /** method */
    method?: "useful" | "time_added";
    /** page */
    page?: number;
    /** perpage */
    perpage?: number;
}

export interface MUSeriesCommentSearchResponseV1 {
    /** page */
    page?: number;
    /** per_page */
    per_page?: number;
    /** results */
    results?: {
        /** SeriesCommentSearchResponseV1ResultsMetadata */
        metadata?: {
            /** author_series_rating */
            author_series_rating?: number;
            /** current_user_useful_rating */
            current_user_useful_rating?: boolean;
        };
        record?: MUSeriesCommentModelV1;
    }[];
    /** total_hits */
    total_hits?: number;
}

export interface MUSeriesCommentUsefulModelV1 {
    /** useful */
    useful?: boolean;
}

export interface MUSeriesGroupListResponseV1 {
    /** group_list */
    group_list?: MUGroupsModelSearchV1[];
    /** release_list */
    release_list?: MUReleaseModelSearchV1[];
}

export interface MUSeriesHistoryModelV1 {
    /** action */
    action?: string;
    /** change_id */
    change_id?: number;
    /** changed */
    changed?: string;
    time_added?: MUTimeV1;
    /** username */
    username?: string;
}

export interface MUSeriesHistorySearchResponseV1 {
    /** page */
    page?: number;
    /** per_page */
    per_page?: number;
    /** results */
    results?: {
        record?: MUSeriesHistoryModelV1;
    }[];
    /** series_title */
    series_title?: string;
    /** total_hits */
    total_hits?: number;
}

export interface MUSeriesLockModelUpdateV1 {
    /** reason */
    reason?: string;
}

export interface MUSeriesLockModelV1 {
    /** field */
    field?: string;
    /** reason */
    reason?: string;
    time_locked?: MUTimeV1;
    /** user_id */
    user_id?: number;
    /** username */
    username?: string;
}

export interface MUSeriesModelSearchV1 {
    /** SeriesModelSearchV1Admin */
    admin?: {
        added_by?: MUUserModelSearchV1;
        /** approved */
        approved?: boolean;
    };
    /** bayesian_rating */
    bayesian_rating?: number;
    /** description */
    description?: string;
    /** genres */
    genres?: {
        /** genre */
        genre?: string;
    }[];
    image?: MUImageModelV1;
    last_updated?: MUTimeV1;
    /** latest_chapter */
    latest_chapter?: number;
    /** SeriesModelSearchV1Rank */
    rank?: {
        /** SeriesModelSearchV1RankLists */
        lists?: {
            /** complete */
            complete?: number;
            /** custom */
            custom?: number;
            /** reading */
            reading?: number;
            /** unfinished */
            unfinished?: number;
            /** wish */
            wish?: number;
        };
        /** SeriesModelSearchV1RankOldPosition */
        old_position?: {
            /** month */
            month?: number;
            /** six_months */
            six_months?: number;
            /** three_months */
            three_months?: number;
            /** week */
            week?: number;
            /** year */
            year?: number;
        };
        /** SeriesModelSearchV1RankPosition */
        position?: {
            /** month */
            month?: number;
            /** six_months */
            six_months?: number;
            /** three_months */
            three_months?: number;
            /** week */
            week?: number;
            /** year */
            year?: number;
        };
    };
    /** rating_votes */
    rating_votes?: number;
    /** series_id */
    series_id?: number;
    /** title */
    title?: string;
    /** type */
    type?:
        | "Artbook"
        | "Doujinshi"
        | "Drama CD"
        | "Filipino"
        | "Indonesian"
        | "Manga"
        | "Manhwa"
        | "Manhua"
        | "Novel"
        | "OEL"
        | "Thai"
        | "Vietnamese"
        | "Malaysian"
        | "Nordic"
        | "French"
        | "Spanish"
        | "German";
    /** url */
    url?: string;
    /** year */
    year?: string;
}

export interface MUSeriesModelUpdateV1 {
    /** SeriesModelUpdateV1Admin */
    admin?: {
        /** approved */
        approved?: boolean;
    };
    /** SeriesModelUpdateV1Anime */
    anime?: {
        /** end */
        end?: string;
        /** start */
        start?: string;
    };
    /** associated */
    associated?: {
        /** title */
        title: string;
    }[];
    /** authors */
    authors?: {
        /** name */
        name: string;
        /** type */
        type: "Author" | "Artist";
    }[];
    /** categories */
    categories?: MUCategoriesModelUpdateV1[];
    /** completed */
    completed?: boolean;
    /** description */
    description?: string;
    /** genres */
    genres?: {
        /** genre */
        genre?: string;
    }[];
    /** licensed */
    licensed?: boolean;
    /** publications */
    publications?: {
        /** publication_name */
        publication_name: string;
        /** publisher_name */
        publisher_name?: string;
    }[];
    /** publishers */
    publishers?: {
        /** notes */
        notes?: string;
        /** publisher_name */
        publisher_name: string;
        /** type */
        type: "Original" | "English";
    }[];
    /** related_series */
    related_series?: {
        /** related_series_id */
        related_series_id: number;
        /** relation_type */
        relation_type:
            | "Prequel"
            | "Sequel"
            | "Spin-Off"
            | "Adapted From"
            | "Alternate Version"
            | "Part of Anthology"
            | "Main Story"
            | "Side Story"
            | "Full Anthology"
            | "Other";
    }[];
    /** status */
    status?: string;
    /** title */
    title?: string;
    /** type */
    type?:
        | "Artbook"
        | "Doujinshi"
        | "Drama CD"
        | "Filipino"
        | "Indonesian"
        | "Manga"
        | "Manhwa"
        | "Manhua"
        | "Novel"
        | "OEL"
        | "Thai"
        | "Vietnamese"
        | "Malaysian"
        | "Nordic"
        | "French"
        | "Spanish"
        | "German";
    /** year */
    year?: string;
}

export interface MUSeriesModelV1 {
    /** SeriesModelV1Admin */
    admin?: {
        added_by?: MUUserModelSearchV1;
        /** approved */
        approved?: boolean;
    };
    /** SeriesModelV1Anime */
    anime?: {
        /** end */
        end?: string;
        /** start */
        start?: string;
    };
    /** associated */
    associated?: {
        /** title */
        title: string;
    }[];
    /** authors */
    authors?: {
        /** author_id */
        author_id?: number;
        /** name */
        name: string;
        /** type */
        type: "Author" | "Artist";
        /** url */
        url?: string;
    }[];
    /** bayesian_rating */
    bayesian_rating?: number;
    /** categories */
    categories?: MUCategoriesModelV1[];
    /** category_recommendations */
    category_recommendations?: MUSeriesRecommendationsModelV1[];
    /** completed */
    completed?: boolean;
    /** description */
    description?: string;
    /** forum_id */
    forum_id?: number;
    /** genres */
    genres?: {
        /** genre */
        genre?: string;
    }[];
    image?: MUImageModelV1;
    last_updated?: MUTimeV1;
    /** latest_chapter */
    latest_chapter?: number;
    /** licensed */
    licensed?: boolean;
    /** publications */
    publications?: {
        /** publication_name */
        publication_name: string;
        /** publisher_id */
        publisher_id?: string;
        /** publisher_name */
        publisher_name?: string;
    }[];
    /** publishers */
    publishers?: {
        /** notes */
        notes?: string;
        /** publisher_id */
        publisher_id?: number;
        /** publisher_name */
        publisher_name: string;
        /** type */
        type: "Original" | "English";
        /** url */
        url?: string;
    }[];
    /** SeriesModelV1Rank */
    rank?: {
        /** SeriesModelV1RankLists */
        lists?: {
            /** complete */
            complete?: number;
            /** custom */
            custom?: number;
            /** reading */
            reading?: number;
            /** unfinished */
            unfinished?: number;
            /** wish */
            wish?: number;
        };
        /** SeriesModelV1RankOldPosition */
        old_position?: {
            /** month */
            month?: number;
            /** six_months */
            six_months?: number;
            /** three_months */
            three_months?: number;
            /** week */
            week?: number;
            /** year */
            year?: number;
        };
        /** SeriesModelV1RankPosition */
        position?: {
            /** month */
            month?: number;
            /** six_months */
            six_months?: number;
            /** three_months */
            three_months?: number;
            /** week */
            week?: number;
            /** year */
            year?: number;
        };
    };
    /** rating_votes */
    rating_votes?: number;
    /** recommendations */
    recommendations?: MUSeriesRecommendationsModelV1[];
    /** related_series */
    related_series?: {
        /** related_series_id */
        related_series_id: number;
        /** related_series_name */
        related_series_name?: string;
        /** related_series_url */
        related_series_url?: string;
        /** relation_id */
        relation_id?: number;
        /** relation_type */
        relation_type:
            | "Prequel"
            | "Sequel"
            | "Spin-Off"
            | "Adapted From"
            | "Alternate Version"
            | "Part of Anthology"
            | "Main Story"
            | "Side Story"
            | "Full Anthology"
            | "Other";
        /** triggered_by_relation_id */
        triggered_by_relation_id?: number;
    }[];
    /** series_id */
    series_id?: number;
    /** status */
    status?: string;
    /** title */
    title?: string;
    /** type */
    type?:
        | "Artbook"
        | "Doujinshi"
        | "Drama CD"
        | "Filipino"
        | "Indonesian"
        | "Manga"
        | "Manhwa"
        | "Manhua"
        | "Novel"
        | "OEL"
        | "Thai"
        | "Vietnamese"
        | "Malaysian"
        | "Nordic"
        | "French"
        | "Spanish"
        | "German";
    /** url */
    url?: string;
    /** year */
    year?: string;
}

export interface MUSeriesRatingModelV1 {
    last_updated?: MUTimeV1;
    /** rating */
    rating: number;
}

export interface MUSeriesRatingRainbowModelV1 {
    /** average_rating */
    average_rating?: number;
    /** rainbow */
    rainbow?: {
        /** count */
        count?: number;
        /** rating */
        rating?: number;
    }[];
}

export interface MUSeriesRecommendationsModelV1 {
    /** series_id */
    series_id?: number;
    series_image?: MUImageModelV1;
    /** series_name */
    series_name?: string;
    /** series_url */
    series_url?: string;
    /** weight */
    weight?: number;
}

export interface MUSeriesSearchRequestV1 {
    /** added_by */
    added_by?: number;
    /** category */
    category?: string[];
    /** exclude_filtered_genres */
    exclude_filtered_genres?: boolean;
    /** exclude_genre */
    exclude_genre?: string[];
    /** filter */
    filter?:
        | "scanlated"
        | "completed"
        | "oneshots"
        | "no_oneshots"
        | "some_releases"
        | "no_releases";
    /** filter_types */
    filter_types?: string[];
    /**
     * filters
     * Meant to replace 'filter', it lets you specify multiple filters as an array of strings
     */
    filters?: (
        | "scanlated"
        | "completed"
        | "oneshots"
        | "no_oneshots"
        | "some_releases"
        | "no_releases"
    )[];
    /** genre */
    genre?: string[];
    /** include_rank_metadata */
    include_rank_metadata?: boolean;
    /** letter */
    letter?: string;
    /** licensed */
    licensed?: "yes" | "no";
    /** list */
    list?: string;
    /** orderby */
    orderby?:
        | "score"
        | "title"
        | "rank"
        | "rating"
        | "year"
        | "date_added"
        | "week_pos"
        | "month1_pos"
        | "month3_pos"
        | "month6_pos"
        | "year_pos"
        | "list_reading"
        | "list_wish"
        | "list_complete"
        | "list_unfinished";
    /** page */
    page?: number;
    /** pending */
    pending?: boolean;
    /** perpage */
    perpage?: number;
    /** pubname */
    pubname?: string;
    /** search */
    search?: string;
    /** stype */
    stype?: "title" | "description";
    /** type */
    type?: string[];
    /** year */
    year?: string;
}

export interface MUSeriesSearchResponseV1 {
    /** page */
    page?: number;
    /** per_page */
    per_page?: number;
    /** results */
    results?: {
        /** hit_title */
        hit_title?: string;
        /** SeriesSearchResponseV1ResultsMetadata */
        metadata?: {
            /** user_genre_highlights */
            user_genre_highlights?: {
                /** color */
                color?: string;
                /** genre */
                genre?: string;
            }[];
            user_list?: MUListsSeriesModelV1;
        };
        record?: MUSeriesModelSearchV1;
    }[];
    /** total_hits */
    total_hits?: number;
}

export interface MUStatusDateModelV1 {
    /** as_string */
    as_string?: string;
    /** day */
    day?: number;
    /** month */
    month?: number;
    /** year */
    year?: number;
}

export interface MUTimeUpdateV1 {
    /** timestamp */
    timestamp?: number;
}

export interface MUTimeV1 {
    /**
     * as_rfc3339
     * @format date-time
     */
    as_rfc3339?: string;
    /** as_string */
    as_string?: string;
    /** timestamp */
    timestamp?: number;
}

export interface MUUserChangeRequestModelUpdateV1 {
    /** archived */
    archived?: boolean;
    /** body */
    body?: string;
}

export interface MUUserChangeRequestModelV1 {
    added_by?: MUUserModelSearchV1;
    /** body */
    body?: string;
    /** id */
    id?: number;
    time_added?: MUTimeV1;
}

export interface MUUserChangeRequestSearchResponseV1 {
    /** page */
    page?: number;
    /** per_page */
    per_page?: number;
    /** results */
    results?: {
        record?: MUUserChangeRequestModelV1;
    }[];
    /** total_hits */
    total_hits?: number;
}

export interface MUUserGenreFilterModelV1 {
    /** genre_id */
    genre_id?: number;
    /** genre_name */
    genre_name?: string;
}

export interface MUUserGenreHighlightModelUpdateV1 {
    /** color */
    color?: string;
}

export interface MUUserGenreHighlightModelV1 {
    /** color */
    color?: string;
    /** genre_id */
    genre_id?: number;
    /** genre_name */
    genre_name?: string;
}

export interface MUUserGroupFilterModelV1 {
    /** group_id */
    group_id?: number;
    /** group_name */
    group_name?: string;
    /** group_url */
    group_url?: string;
}

export interface MUUserGroupModelUpdateV1 {
    /** description */
    description: string;
    /** name */
    name: string;
}

export interface MUUserGroupModelV1 {
    /** description */
    description: string;
    /** id */
    id?: string;
    /** name */
    name: string;
}

export interface MUUserModelRegisterV1 {
    /** email */
    email?: string;
    /**
     * password
     * @format password
     */
    password?: string;
    /** username */
    username?: string;
}

export interface MUUserModelSearchV1 {
    avatar?: MUAvatarModelSearchV1;
    /** folding_at_home */
    folding_at_home?: boolean;
    /** forum_title */
    forum_title?: string;
    /** UserModelSearchV1Profile */
    profile?: {
        /** UserModelSearchV1ProfileUpgrade */
        upgrade?: {
            /** reason */
            reason?: string;
            /** requested */
            requested?: boolean;
        };
    };
    /** signature */
    signature?: string;
    /** UserModelSearchV1Stats */
    stats?: {
        /** added_authors */
        added_authors?: number;
        /** added_groups */
        added_groups?: number;
        /** added_publishers */
        added_publishers?: number;
        /** added_releases */
        added_releases?: number;
        /** added_series */
        added_series?: number;
        /** forum_posts */
        forum_posts?: number;
    };
    time_joined?: MUTimeV1;
    /** url */
    url?: string;
    /** user_group */
    user_group?: string;
    /** user_group_name */
    user_group_name?: string;
    /** user_id */
    user_id?: number;
    /** username */
    username?: string;
}

export interface MUUserModelUpdatePasswordV1 {
    /**
     * password
     * @format password
     */
    password?: string;
}

export interface MUUserModelUpdateV1 {
    /** UserModelUpdateV1Admin */
    admin?: {
        /** approved */
        approved?: boolean;
        /** banned */
        banned?: boolean;
        /** email_approved */
        email_approved?: boolean;
        /** forum_admin */
        forum_admin?: boolean;
        /** is_admin */
        is_admin?: boolean;
        /** UserModelUpdateV1AdminPermissions */
        permissions?: {
            /** p_add_releases */
            p_add_releases?: boolean;
            /** p_edit_aboutus */
            p_edit_aboutus?: boolean;
            /** p_edit_affiliates */
            p_edit_affiliates?: boolean;
            /** p_edit_authors */
            p_edit_authors?: boolean;
            /** p_edit_config */
            p_edit_config?: boolean;
            /** p_edit_genre */
            p_edit_genre?: boolean;
            /** p_edit_groups */
            p_edit_groups?: boolean;
            /** p_edit_news */
            p_edit_news?: boolean;
            /** p_edit_partial_users */
            p_edit_partial_users?: boolean;
            /** p_edit_poll */
            p_edit_poll?: boolean;
            /** p_edit_publishers */
            p_edit_publishers?: boolean;
            /** p_edit_reviews */
            p_edit_reviews?: boolean;
            /** p_edit_series */
            p_edit_series?: boolean;
            /** p_edit_users */
            p_edit_users?: boolean;
            /** p_view_log */
            p_view_log?: boolean;
            /** p_view_stats */
            p_view_stats?: boolean;
        };
        /** UserModelUpdateV1AdminUpgrade */
        upgrade?: {
            /** banned */
            banned?: boolean;
        };
    };
    birthday?: MUBirthdayModelV1;
    /** email */
    email?: string;
    /** folding_at_home */
    folding_at_home?: boolean;
    /** forum_title */
    forum_title?: string;
    /** gender */
    gender?:
        | "N/A"
        | "Male"
        | "Female"
        | "Alien"
        | "Hermaphrodite"
        | "Non-binary"
        | "Other";
    /** location */
    location?: string;
    /** new_avatar_id */
    new_avatar_id?: number;
    /**
     * password
     * @format password
     */
    password?: string;
    /** UserModelUpdateV1Profile */
    profile?: {
        /** age18_verified */
        age18_verified?: boolean;
        /** filter_types */
        filter_types?: (
            | "Artbook"
            | "Doujinshi"
            | "Drama CD"
            | "Filipino"
            | "Indonesian"
            | "Manga"
            | "Manhwa"
            | "Manhua"
            | "Novel"
            | "OEL"
            | "Thai"
            | "Vietnamese"
            | "Malaysian"
            | "Nordic"
            | "French"
            | "Spanish"
            | "German"
        )[];
        /** hide_birthday */
        hide_birthday?: boolean;
        /** hide_categories */
        hide_categories?: boolean;
        /** invisible */
        invisible?: boolean;
        /** per_page */
        per_page?: number;
        /** UserModelUpdateV1ProfileUpgrade */
        upgrade?: {
            /** reason */
            reason?: string;
            /** requested */
            requested?: boolean;
        };
    };
    /** signature */
    signature?: string;
    /** timezone */
    timezone?: number;
    /** user_group */
    user_group?: string;
    /** username */
    username?: string;
}

export interface MUUserModelV1 {
    /** UserModelV1Admin */
    admin?: {
        /** approved */
        approved?: boolean;
        /** banned */
        banned?: boolean;
        /** email_approved */
        email_approved?: boolean;
        /** forum_admin */
        forum_admin?: boolean;
        /** is_admin */
        is_admin?: boolean;
        last_series_update?: MUTimeV1;
        /** UserModelV1AdminPermissions */
        permissions?: {
            /** p_add_releases */
            p_add_releases?: boolean;
            /** p_edit_aboutus */
            p_edit_aboutus?: boolean;
            /** p_edit_affiliates */
            p_edit_affiliates?: boolean;
            /** p_edit_authors */
            p_edit_authors?: boolean;
            /** p_edit_config */
            p_edit_config?: boolean;
            /** p_edit_genre */
            p_edit_genre?: boolean;
            /** p_edit_groups */
            p_edit_groups?: boolean;
            /** p_edit_news */
            p_edit_news?: boolean;
            /** p_edit_partial_users */
            p_edit_partial_users?: boolean;
            /** p_edit_poll */
            p_edit_poll?: boolean;
            /** p_edit_publishers */
            p_edit_publishers?: boolean;
            /** p_edit_reviews */
            p_edit_reviews?: boolean;
            /** p_edit_series */
            p_edit_series?: boolean;
            /** p_edit_users */
            p_edit_users?: boolean;
            /** p_view_log */
            p_view_log?: boolean;
            /** p_view_stats */
            p_view_stats?: boolean;
        };
        /** registration_ip */
        registration_ip?: string;
        /** registration_reason */
        registration_reason?: string;
        /** UserModelV1AdminUpgrade */
        upgrade?: {
            /** banned */
            banned?: boolean;
        };
    };
    /** age */
    age?: number;
    avatar?: MUAvatarModelV1;
    birthday?: MUBirthdayModelV1;
    /** email */
    email?: string;
    /** folding_at_home */
    folding_at_home?: boolean;
    /** forum_title */
    forum_title?: string;
    /** gender */
    gender?:
        | "N/A"
        | "Male"
        | "Female"
        | "Alien"
        | "Hermaphrodite"
        | "Non-binary"
        | "Other";
    last_active_time?: MUTimeV1;
    /** location */
    location?: string;
    /** UserModelV1Profile */
    profile?: {
        /** age18_verified */
        age18_verified?: boolean;
        /** filter_types */
        filter_types?: (
            | "Artbook"
            | "Doujinshi"
            | "Drama CD"
            | "Filipino"
            | "Indonesian"
            | "Manga"
            | "Manhwa"
            | "Manhua"
            | "Novel"
            | "OEL"
            | "Thai"
            | "Vietnamese"
            | "Malaysian"
            | "Nordic"
            | "French"
            | "Spanish"
            | "German"
        )[];
        /** hide_birthday */
        hide_birthday?: boolean;
        /** hide_categories */
        hide_categories?: boolean;
        /** invisible */
        invisible?: boolean;
        /** per_page */
        per_page?: number;
        /** UserModelV1ProfileUpgrade */
        upgrade?: {
            /** reason */
            reason?: string;
            /** requested */
            requested?: boolean;
        };
    };
    /** signature */
    signature?: string;
    /** UserModelV1Stats */
    stats?: {
        /** added_authors */
        added_authors?: number;
        /** added_groups */
        added_groups?: number;
        /** added_publishers */
        added_publishers?: number;
        /** added_releases */
        added_releases?: number;
        /** added_series */
        added_series?: number;
        /** added_tags */
        added_tags?: number;
        /** author_edits */
        author_edits?: number;
        /** forum_posts */
        forum_posts?: number;
        /** UserModelV1StatsModeration */
        moderation?: {
            /** UserModelV1StatsModerationAuthors */
            authors?: {
                /** approved */
                approved?: number;
                /** deleted */
                deleted?: number;
                /** rejected */
                rejected?: number;
            };
            /** UserModelV1StatsModerationGroups */
            groups?: {
                /** approved */
                approved?: number;
                /** deleted */
                deleted?: number;
                /** rejected */
                rejected?: number;
            };
            last_action?: MUTimeV1;
            /** UserModelV1StatsModerationPublishers */
            publishers?: {
                /** approved */
                approved?: number;
                /** deleted */
                deleted?: number;
                /** rejected */
                rejected?: number;
            };
            /** UserModelV1StatsModerationReleases */
            releases?: {
                /** approved */
                approved?: number;
                /** deleted */
                deleted?: number;
                /** rejected */
                rejected?: number;
            };
            /** UserModelV1StatsModerationSeries */
            series?: {
                /** approved */
                approved?: number;
                /** deleted */
                deleted?: number;
                /** rejected */
                rejected?: number;
            };
        };
        /** publisher_edits */
        publisher_edits?: number;
        /** series_edits */
        series_edits?: number;
    };
    time_joined?: MUTimeV1;
    /** timezone */
    timezone?: number;
    /** url */
    url?: string;
    /** user_group */
    user_group?: string;
    /** user_group_name */
    user_group_name?: string;
    /** user_id */
    user_id?: number;
    /** username */
    username?: string;
}

export interface MUUserSearchRequestV1 {
    /** asc */
    asc?: "asc" | "desc";
    /** letter */
    letter?: string;
    /** orderby */
    orderby?:
        | "username"
        | "time_added"
        | "forum_posts"
        | "added_authors"
        | "added_releases"
        | "added_groups"
        | "added_publishers"
        | "added_series"
        | "is_admin";
    /** page */
    page?: number;
    /** perpage */
    perpage?: number;
    /** search */
    search?: string;
}

export interface MUUserSearchResponseV1 {
    /** page */
    page?: number;
    /** per_page */
    per_page?: number;
    /** results */
    results?: {
        record?: MUUserModelSearchV1;
    }[];
    /** total_hits */
    total_hits?: number;
}

export interface MUUserSessionModelV1 {
    /** ip */
    ip?: string;
    last_action?: MUTimeV1;
}

export interface MUUserSessionResponseV1 {
    /** results */
    results?: {
        record?: MUUserSessionModelV1;
    }[];
    /** total_hits */
    total_hits?: number;
}

export interface MUUserSubscribedTopicModelV1 {
    time_subscribed_since?: MUTimeV1;
    topic?: MUForumTopicModelSearchV1;
    /** topic_id */
    topic_id?: number;
}

export namespace Aboutus {
    /**
     * No description
     * @tags aboutus
     * @name AddAboutusCategory
     * @summary add a category
     * @request POST:/aboutus/category
     * @secure
     * @response `200` `MUApiResponseV1` Category was added
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     */
    export namespace AddAboutusCategory {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = MUAboutusCategoryModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags aboutus
     * @name AddAboutusCategoryUser
     * @summary add a user to a category
     * @request POST:/aboutus/category/{category_id}/users
     * @secure
     * @response `200` `MUApiResponseV1` User was added
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `404` `void` Category does not exist
     */
    export namespace AddAboutusCategoryUser {
        export type RequestParams = {
            /** Aboutus Category id */
            categoryId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUAboutusUserModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags aboutus
     * @name DeleteAboutusCategory
     * @summary remove a category
     * @request DELETE:/aboutus/category/{category_id}
     * @secure
     * @response `200` `MUApiResponseV1` Category was removed
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` Category does not have correct role
     * @response `404` `void` Category does not exist
     */
    export namespace DeleteAboutusCategory {
        export type RequestParams = {
            /** Aboutus Category id */
            categoryId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags aboutus
     * @name DeleteAboutusCategoryUser
     * @summary remove a user from a category
     * @request DELETE:/aboutus/category/{category_id}/users/{entry_id}
     * @secure
     * @response `200` `MUApiResponseV1` User was removed
     * @response `401` `void` User does not have correct role
     * @response `404` `void` User does not exist
     */
    export namespace DeleteAboutusCategoryUser {
        export type RequestParams = {
            /** Aboutus Category id */
            categoryId: number;
            /** Aboutus Category User Entry id */
            entryId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags aboutus
     * @name ReorderAboutus
     * @summary reorder aboutus
     * @request POST:/aboutus/reorder
     * @secure
     * @response `200` `MUApiResponseV1` Categories and users were reordered
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     */
    export namespace ReorderAboutus {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = MUAboutusCategoryReorderModelV1[];
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags aboutus
     * @name RetrieveAboutusCategoriesAndUsers
     * @summary returns categories and users
     * @request GET:/aboutus/users
     * @secure
     * @response `200` `(MUAboutusCategoryModelV1)[]` List of categories and users
     */
    export namespace RetrieveAboutusCategoriesAndUsers {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUAboutusCategoryModelV1[];
    }

    /**
     * No description
     * @tags aboutus
     * @name RetrieveAboutusCategory
     * @summary returns a single category
     * @request GET:/aboutus/category/{category_id}
     * @secure
     * @response `200` `MUAboutusCategoryModelV1` Return category record
     * @response `404` `void` Category not found
     */
    export namespace RetrieveAboutusCategory {
        export type RequestParams = {
            /** Aboutus Category id */
            categoryId: number;
        };
        export type RequestQuery = {
            /** Output fields in unrendered form for editing */
            unrenderedFields?: boolean;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUAboutusCategoryModelV1;
    }

    /**
     * No description
     * @tags aboutus
     * @name RetrieveAboutusDescription
     * @summary returns description of site
     * @request GET:/aboutus
     * @secure
     * @response `200` `MUAboutusDescriptionModelV1` Description of the site
     */
    export namespace RetrieveAboutusDescription {
        export type RequestParams = {};
        export type RequestQuery = {
            /** Output fields in unrendered form for editing */
            unrenderedFields?: boolean;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUAboutusDescriptionModelV1;
    }

    /**
     * No description
     * @tags aboutus
     * @name UpdateAboutusCategory
     * @summary update a category
     * @request PATCH:/aboutus/category/{category_id}
     * @secure
     * @response `200` `MUApiResponseV1` Category was updated
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `404` `void` Category not found
     */
    export namespace UpdateAboutusCategory {
        export type RequestParams = {
            /** id of category */
            categoryId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUAboutusCategoryModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags aboutus
     * @name UpdateAboutusDescription
     * @summary update description of site
     * @request POST:/aboutus
     * @secure
     * @response `200` `MUApiResponseV1` Description of the site updated
     * @response `400` `MUApiResponseV1` Error updating description
     * @response `401` `void` User does not have appropriate role
     */
    export namespace UpdateAboutusDescription {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = MUAboutusDescriptionModelV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }
}

export namespace Account {
    /**
     * No description
     * @tags account
     * @name Captcha
     * @summary retrieve the public captcha key
     * @request GET:/account/captcha
     * @secure
     * @response `200` `MUApiResponseV1` Return captcha record
     */
    export namespace Captcha {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags account
     * @name ConfirmAndChangePassword
     * @summary update a password change using an auth hash
     * @request POST:/account/forgotpass/confirm/{auth_hash}
     * @secure
     * @response `200` `MUApiResponseV1` Password was changed
     * @response `400` `MUApiResponseV1` Validation or service error
     */
    export namespace ConfirmAndChangePassword {
        export type RequestParams = {
            /** auth hash from email confirmation */
            authHash: string;
        };
        export type RequestQuery = {};
        export type RequestBody = MUUserModelUpdatePasswordV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags account
     * @name ConfirmDeleteAccount
     * @summary confirm deletion of your account
     * @request POST:/account/delete/confirm/{auth_hash}
     * @secure
     * @response `200` `MUApiResponseV1` Account was deleted
     * @response `400` `MUApiResponseV1` Validation or service error
     */
    export namespace ConfirmDeleteAccount {
        export type RequestParams = {
            /** auth hash from email confirmation */
            authHash: string;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags account
     * @name ConfirmRegistration
     * @summary confirm a new member registration
     * @request POST:/account/register/confirm/{auth_hash}
     * @secure
     * @response `200` `MUApiResponseV1` Member was confirmed
     * @response `400` `MUApiResponseV1` Validation or service error
     */
    export namespace ConfirmRegistration {
        export type RequestParams = {
            /** auth hash from email confirmation */
            authHash: string;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags account
     * @name DeleteAccount
     * @summary delete your account
     * @request POST:/account/delete/{captcha_response}
     * @secure
     * @response `200` `MUApiResponseV1` Account was deleted
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `412` `void` Five second update delay
     */
    export namespace DeleteAccount {
        export type RequestParams = {
            /** response of captcha */
            captchaResponse: string;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags account
     * @name ForgotPassword
     * @summary send a forgotten password email
     * @request POST:/account/forgotpass/{captcha_response}
     * @secure
     * @response `200` `MUApiResponseV1` Email was sent
     * @response `400` `MUApiResponseV1` Validation or service error
     */
    export namespace ForgotPassword {
        export type RequestParams = {
            /** response of captcha */
            captchaResponse: string;
        };
        export type RequestQuery = {};
        export type RequestBody = MUAccountForgotPassModelV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags account
     * @name Login
     * @summary create a session token
     * @request PUT:/account/login
     * @secure
     * @response `200` `MUApiResponseV1` Login successful
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` Invalid credentials or user error
     */
    export namespace Login {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = MUAccountLoginModelV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags account
     * @name LoginWithCookie
     * @summary create a session token as a cookie
     * @request PUT:/account/loginWithCookie
     * @secure
     * @response `200` `MUApiResponseV1` Login successful
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` Invalid credentials or user error
     */
    export namespace LoginWithCookie {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = MUAccountLoginModelV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags account
     * @name Logout
     * @summary remove a session token
     * @request POST:/account/logout
     * @secure
     * @response `200` `MUApiResponseV1` Logout successful
     * @response `401` `MUApiResponseV1` User is not logged in
     */
    export namespace Logout {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags account
     * @name Profile
     * @summary get the profile for the current user
     * @request GET:/account/profile
     * @secure
     * @response `200` `MUUserModelV1` Return user record
     * @response `401` `MUApiResponseV1` User required
     * @response `404` `void` User not found
     */
    export namespace Profile {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUUserModelV1;
    }

    /**
     * No description
     * @tags account
     * @name RefreshCookie
     * @summary refresh session token cookie
     * @request GET:/account/refresh
     * @secure
     * @response `200` `MUApiResponseV1` Refresh successful
     * @response `401` `void` Invalid credentials or user error
     * @response `412` `void` Refresh trottled
     */
    export namespace RefreshCookie {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags account
     * @name RegisterMember
     * @summary register a new member
     * @request POST:/account/register/{captcha_response}
     * @secure
     * @response `200` `MUApiResponseV1` Member was added
     * @response `400` `MUApiResponseV1` Validation or service error
     */
    export namespace RegisterMember {
        export type RequestParams = {
            /** response of captcha */
            captchaResponse: string;
        };
        export type RequestQuery = {};
        export type RequestBody = MUUserModelRegisterV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags account
     * @name ResendAuthEmail
     * @summary send an auth email to a user
     * @request POST:/account/resendauth/{id}
     * @secure
     * @response `200` `MUApiResponseV1` Auth email was sent
     * @response `400` `MUApiResponseV1` Validation or service error
     */
    export namespace ResendAuthEmail {
        export type RequestParams = {
            /**
             * Member id
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags account
     * @name SendForgotEmail
     * @summary send a forgotten password email to a user
     * @request POST:/account/sendforgot/{id}
     * @secure
     * @response `200` `MUApiResponseV1` Auth email was sent
     * @response `400` `MUApiResponseV1` Validation or service error
     */
    export namespace SendForgotEmail {
        export type RequestParams = {
            /**
             * Member id
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }
}

export namespace Authors {
    /**
     * No description
     * @tags authors
     * @name AddAuthor
     * @summary add an author
     * @request POST:/authors
     * @secure
     * @response `200` `MUApiResponseV1` Author was added
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `412` `void` Five second update delay
     */
    export namespace AddAuthor {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = MUAuthorsModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags authors
     * @name DeleteAuthor
     * @summary delete an author
     * @request DELETE:/authors/{id}
     * @secure
     * @response `200` `MUApiResponseV1` Author delete transaction submitted
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `404` `void` Author not found
     * @response `412` `void` Five second update delay
     */
    export namespace DeleteAuthor {
        export type RequestParams = {
            /** id of author */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags authors
     * @name DeleteImage
     * @summary delete the image of an author
     * @request DELETE:/authors/{id}/image
     * @secure
     * @response `200` `MUApiResponseV1` Image was deleted
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `404` `void` Author not found
     * @response `412` `void` Five second update delay
     */
    export namespace DeleteImage {
        export type RequestParams = {
            /**
             * id of author
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags authors
     * @name LockAuthorField
     * @summary lock a field of an author
     * @request POST:/authors/{id}/locks/{item}/lock
     * @secure
     * @response `200` `MUApiResponseV1` Field was locked
     * @response `400` `MUApiResponseV1` Service or validation error
     * @response `401` `void` User does not have correct role
     * @response `404` `void` Author not found
     * @response `409` `MUApiResponseV1` State Conflict
     */
    export namespace LockAuthorField {
        export type RequestParams = {
            /**
             * id of author
             * @format int64
             */
            id: number;
            /** field name */
            item: string;
        };
        export type RequestQuery = {};
        export type RequestBody = MUAuthorsLockModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags authors
     * @name RetrieveAuthor
     * @summary get a specific author
     * @request GET:/authors/{id}
     * @secure
     * @response `200` `MUAuthorsModelV1` Return author record
     * @response `404` `void` Author not found
     */
    export namespace RetrieveAuthor {
        export type RequestParams = {
            /** Author id */
            id: number;
        };
        export type RequestQuery = {
            /** Output fields in unrendered form for editing */
            unrenderedFields?: boolean;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUAuthorsModelV1;
    }

    /**
     * No description
     * @tags authors
     * @name RetrieveAuthorLocks
     * @summary get locks for a specific author
     * @request GET:/authors/{id}/locks
     * @secure
     * @response `200` `(MUAuthorsLockModelV1)[]` Return author lock records
     * @response `404` `void` Author not found
     */
    export namespace RetrieveAuthorLocks {
        export type RequestParams = {
            /**
             * Author id
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUAuthorsLockModelV1[];
    }

    /**
     * No description
     * @tags authors
     * @name RetrieveAuthorSeries
     * @summary get the list of series for a specific author
     * @request POST:/authors/{id}/series
     * @secure
     * @response `200` `MUAuthorsSeriesListResponseV1` Return series list
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `404` `void` Author not found
     */
    export namespace RetrieveAuthorSeries {
        export type RequestParams = {
            /**
             * Author id
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUAuthorsSeriesListRequestV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUAuthorsSeriesListResponseV1;
    }

    /**
     * No description
     * @tags authors
     * @name SearchAuthorsPost
     * @summary search authors
     * @request POST:/authors/search
     * @secure
     * @response `200` `MUAuthorsSearchResponseV1` List of authors
     * @response `400` `MUApiResponseV1` Validation or service error
     */
    export namespace SearchAuthorsPost {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = MUAuthorsSearchRequestV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUAuthorsSearchResponseV1;
    }

    /**
     * No description
     * @tags authors
     * @name UnlockAuthorField
     * @summary unlock a field of an author
     * @request POST:/authors/{id}/locks/{item}/unlock
     * @secure
     * @response `200` `MUApiResponseV1` Field was unlocked
     * @response `401` `void` User does not have correct role
     * @response `404` `void` Author not found
     * @response `409` `MUApiResponseV1` State Conflict
     */
    export namespace UnlockAuthorField {
        export type RequestParams = {
            /**
             * id of author
             * @format int64
             */
            id: number;
            /** field name */
            item: string;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags authors
     * @name UpdateAuthor
     * @summary update an author
     * @request PATCH:/authors/{id}
     * @secure
     * @response `200` `MUApiResponseV1` Author was updated
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `403` `void` Field is locked
     * @response `404` `void` Author not found
     * @response `412` `void` Five second update delay
     */
    export namespace UpdateAuthor {
        export type RequestParams = {
            /** id of author */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUAuthorsModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags authors
     * @name UpdateImage
     * @summary update the image of an author
     * @request POST:/authors/{id}/image
     * @secure
     * @response `200` `MUApiResponseV1` Image was updated
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `403` `void` Field is locked
     * @response `404` `void` Author not found
     * @response `412` `void` Five second update delay
     */
    export namespace UpdateImage {
        export type RequestParams = {
            /**
             * id of author
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = {
            /**
             * Image to update
             * @format binary
             */
            image?: File;
        };
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }
}

export namespace Categories {
    /**
     * No description
     * @tags categories
     * @name BulkCombineSeriesCategories
     * @summary combine two categories across the database
     * @request POST:/categories/bulk/combine
     * @secure
     * @response `200` `MUApiResponseV1` Transaction has started
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `412` `void` Five second update delay
     */
    export namespace BulkCombineSeriesCategories {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = MUSeriesCategoryUpdateModelV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags categories
     * @name BulkDeleteSeriesCategories
     * @summary delete a category across the database
     * @request POST:/categories/bulk/delete
     * @secure
     * @response `200` `MUApiResponseV1` Transaction has started
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `412` `void` Five second update delay
     */
    export namespace BulkDeleteSeriesCategories {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = MUCategoriesModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags categories
     * @name FindCategoryByExact
     * @summary find a category by name
     * @request POST:/categories/findByExact
     * @secure
     * @response `200` `MUCategoriesModelV1` Return categories record
     * @response `404` `void` Category not found
     */
    export namespace FindCategoryByExact {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = MUCategoriesModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUCategoriesModelV1;
    }

    /**
     * No description
     * @tags categories
     * @name FindCategoryByPrefix
     * @summary find a category by prefix
     * @request POST:/categories/findByPrefix
     * @secure
     * @response `200` `(MUCategoriesModelV1)[]` Return categories records
     */
    export namespace FindCategoryByPrefix {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = MUCategoriesModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUCategoriesModelV1[];
    }

    /**
     * No description
     * @tags categories
     * @name SearchCategoriesPost
     * @summary search categories
     * @request POST:/categories/search
     * @secure
     * @response `200` `MUCategoriesSearchResponseV1` Return categories records
     */
    export namespace SearchCategoriesPost {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = MUCategoriesSearchRequestV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUCategoriesSearchResponseV1;
    }
}

export namespace Convo {
    /**
     * No description
     * @tags convo
     * @name AbandonConvo
     * @summary abandon a convo
     * @request POST:/convo/{id}/abandon
     * @secure
     * @response `200` `MUApiResponseV1` Convo was abandoned
     * @response `404` `void` Convo not found
     */
    export namespace AbandonConvo {
        export type RequestParams = {
            /** Convo id */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags convo
     * @name AbandonConvoBulk
     * @summary abandon convos in bulk
     * @request POST:/convo/bulk/abandon
     * @secure
     * @response `200` `MUApiResponseV1` Bulk abandon result
     */
    export namespace AbandonConvoBulk {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = MUConvoBulkModelV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags convo
     * @name AddConvo
     * @summary add an convo
     * @request POST:/convo
     * @secure
     * @response `200` `MUApiResponseV1` Convo was added
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `412` `void` Five second update delay
     */
    export namespace AddConvo {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = MUConvoModelAddV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags convo
     * @name AddConvoMessage
     * @summary add a message to a convo
     * @request POST:/convo/{id}/messages
     * @secure
     * @response `200` `MUApiResponseV1` Message was added
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `412` `void` Five second update delay
     */
    export namespace AddConvoMessage {
        export type RequestParams = {
            /** Convo id */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUConvoMessageModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags convo
     * @name ConvoInbox
     * @summary display unread messages
     * @request GET:/convo/inbox
     * @secure
     * @response `200` `MUConvoSearchResponseV1` List of convos
     */
    export namespace ConvoInbox {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUConvoSearchResponseV1;
    }

    /**
     * No description
     * @tags convo
     * @name ConvoInboxCount
     * @summary retrieve number of unread messages
     * @request GET:/convo/inbox/count
     * @secure
     * @response `200` `MUConvoSearchResponseV1` Return number of new convos
     */
    export namespace ConvoInboxCount {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUConvoSearchResponseV1;
    }

    /**
     * No description
     * @tags convo
     * @name ConvoReceived
     * @summary display received (and read) messages
     * @request POST:/convo/received
     * @secure
     * @response `200` `MUConvoSearchResponseV1` List of convos
     */
    export namespace ConvoReceived {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = MUPerPageSearchRequestV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUConvoSearchResponseV1;
    }

    /**
     * No description
     * @tags convo
     * @name ConvoSent
     * @summary display sent messages
     * @request POST:/convo/sent
     * @secure
     * @response `200` `MUConvoSearchResponseV1` List of convos
     */
    export namespace ConvoSent {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = MUPerPageSearchRequestV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUConvoSearchResponseV1;
    }

    /**
     * No description
     * @tags convo
     * @name DeleteConvo
     * @summary delete a convo
     * @request DELETE:/convo/{id}
     * @secure
     * @response `200` `MUApiResponseV1` Convo was deleted
     * @response `404` `void` Convo not found
     */
    export namespace DeleteConvo {
        export type RequestParams = {
            /** Convo id */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags convo
     * @name DeleteConvoBulk
     * @summary delete convos in bulk
     * @request POST:/convo/bulk/delete
     * @secure
     * @response `200` `MUApiResponseV1` Bulk deletion result
     */
    export namespace DeleteConvoBulk {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = MUConvoBulkModelV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags convo
     * @name IgnoreUser
     * @summary ignore a user
     * @request POST:/convo/ignore/{user_id}
     * @secure
     * @response `200` `MUApiResponseV1` User was ignored
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `404` `void` User does not exists
     */
    export namespace IgnoreUser {
        export type RequestParams = {
            /** User id */
            userId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags convo
     * @name InviteUserToConvo
     * @summary invite a user to a convo
     * @request POST:/convo/{id}/invite
     * @secure
     * @response `200` `MUApiResponseV1` User was invited
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `404` `void` Convo does not exists
     */
    export namespace InviteUserToConvo {
        export type RequestParams = {
            /** Convo id */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUConvoParticipantModelAddV1[];
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags convo
     * @name IsUserIgnored
     * @summary return whether the user is ignored
     * @request GET:/convo/ignore/{user_id}
     * @secure
     * @response `200` `MUConvoUserIgnoreModelV1` User ignore record
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `404` `void` User does not exists
     */
    export namespace IsUserIgnored {
        export type RequestParams = {
            /** User id */
            userId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUConvoUserIgnoreModelV1;
    }

    /**
     * No description
     * @tags convo
     * @name JoinConvo
     * @summary join a convo
     * @request POST:/convo/{id}/join
     * @secure
     * @response `200` `MUApiResponseV1` Join successful
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `404` `void` Convo does not exists
     */
    export namespace JoinConvo {
        export type RequestParams = {
            /** Convo id */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags convo
     * @name KickUserFromConvo
     * @summary kick a user from a convo
     * @request POST:/convo/{id}/kick/{user_id}
     * @secure
     * @response `200` `MUApiResponseV1` User was kicked from convo
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `403` `void` Permission error
     * @response `404` `void` Convo or user not found
     */
    export namespace KickUserFromConvo {
        export type RequestParams = {
            /** Convo id */
            id: number;
            /** User id */
            userId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags convo
     * @name ListConvoMessages
     * @summary list convo messages
     * @request POST:/convo/{id}/messages/list
     * @secure
     * @response `200` `MUConvoMessageSearchResponseV1` List of convo messages
     * @response `404` `void` Convo not found
     */
    export namespace ListConvoMessages {
        export type RequestParams = {
            /** Convo id */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUConvoMessageListRequestV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUConvoMessageSearchResponseV1;
    }

    /**
     * No description
     * @tags convo
     * @name RetrieveConvo
     * @summary get a specific convo
     * @request GET:/convo/{id}
     * @secure
     * @response `200` `MUConvoModelV1` Return convo record
     * @response `404` `void` Convo not found
     */
    export namespace RetrieveConvo {
        export type RequestParams = {
            /** Convo id */
            id: number;
        };
        export type RequestQuery = {
            /** Output fields in unrendered form for editing */
            unrenderedFields?: boolean;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUConvoModelV1;
    }

    /**
     * No description
     * @tags convo
     * @name RetrieveConvoMessage
     * @summary get a specific convo message
     * @request GET:/convo/{id}/messages/{message_id}
     * @secure
     * @response `200` `MUConvoMessageModelV1` Return convo message record
     * @response `404` `void` Convo message not found
     */
    export namespace RetrieveConvoMessage {
        export type RequestParams = {
            /**
             * Convo id
             * @format int64
             */
            id: number;
            /**
             * Convo message id
             * @format int64
             */
            messageId: number;
        };
        export type RequestQuery = {
            /** Output fields in unrendered form for editing */
            unrenderedFields?: boolean;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUConvoMessageModelV1;
    }

    /**
     * No description
     * @tags convo
     * @name RetrieveConvoMessageLocation
     * @summary get a specific convo message location
     * @request GET:/convo/{id}/messages/{message_id}/location
     * @secure
     * @response `200` `MUApiResponseV1` Return convo message record
     */
    export namespace RetrieveConvoMessageLocation {
        export type RequestParams = {
            /**
             * Convo id
             * @format int64
             */
            id: number;
            /**
             * Convo message id
             * @format int64
             */
            messageId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags convo
     * @name RetrieveConvoParticipants
     * @summary get list of convo participants
     * @request GET:/convo/{id}/participants
     * @secure
     * @response `200` `(MUConvoParticipantModelV1)[]` Return convo participants
     * @response `404` `void` Convo not found
     */
    export namespace RetrieveConvoParticipants {
        export type RequestParams = {
            /** Convo id */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUConvoParticipantModelV1[];
    }

    /**
     * No description
     * @tags convo
     * @name SearchConvoMessagesPost
     * @summary search convo
     * @request POST:/convo/{id}/messages/search
     * @secure
     * @response `200` `MUConvoMessageSearchResponseV1` List of convo messages
     * @response `404` `void` Convo not found
     */
    export namespace SearchConvoMessagesPost {
        export type RequestParams = {
            /** Convo id */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUConvoMessageSearchRequestV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUConvoMessageSearchResponseV1;
    }

    /**
     * No description
     * @tags convo
     * @name SearchConvoPost
     * @summary search convo
     * @request POST:/convo/search
     * @secure
     * @response `200` `MUConvoSearchResponseV1` List of convos
     */
    export namespace SearchConvoPost {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = MUConvoSearchRequestV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUConvoSearchResponseV1;
    }

    /**
     * No description
     * @tags convo
     * @name UnIgnoreUser
     * @summary remove ignore for a user
     * @request DELETE:/convo/ignore/{user_id}
     * @secure
     * @response `200` `MUApiResponseV1` User ignore was removed
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `404` `void` User does not exist
     */
    export namespace UnIgnoreUser {
        export type RequestParams = {
            /** User id */
            userId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags convo
     * @name UpdateConvo
     * @summary update a convo
     * @request PATCH:/convo/{id}
     * @secure
     * @response `200` `MUApiResponseV1` Convo was updated
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `412` `void` Five second update delay
     */
    export namespace UpdateConvo {
        export type RequestParams = {
            /** Convo id */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUConvoModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags convo
     * @name UpdateConvoMessage
     * @summary update a convo message
     * @request PATCH:/convo/{id}/messages/{message_id}
     * @secure
     * @response `200` `MUApiResponseV1` Message was updated
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `403` `void` Permission error
     * @response `404` `void` Message does not exist
     */
    export namespace UpdateConvoMessage {
        export type RequestParams = {
            /** Convo id */
            id: number;
            /** Convo message id */
            messageId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUConvoMessageModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }
}

export namespace Faq {
    /**
     * No description
     * @tags faq
     * @name AddFaqCategory
     * @summary add a faq category
     * @request POST:/faq
     * @secure
     * @response `200` `MUApiResponseV1` Faq category was added
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     */
    export namespace AddFaqCategory {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = MUFaqCategoryModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags faq
     * @name AddFaqQuestion
     * @summary add a faq question
     * @request POST:/faq/{category_id}/questions
     * @secure
     * @response `200` `MUApiResponseV1` Faq question was added
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     */
    export namespace AddFaqQuestion {
        export type RequestParams = {
            /** id of category to add question to */
            categoryId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUFaqQuestionModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags faq
     * @name DeleteFaqCategory
     * @summary delete a faq category
     * @request DELETE:/faq/{category_id}
     * @secure
     * @response `200` `MUApiResponseV1` Faq Category was deleted
     * @response `401` `void` User does not have correct role
     * @response `404` `void` Faq Category not found
     */
    export namespace DeleteFaqCategory {
        export type RequestParams = {
            /** id of faq category */
            categoryId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags faq
     * @name DeleteFaqQuestion
     * @summary delete an faq
     * @request DELETE:/faq/{category_id}/questions/{question_id}
     * @secure
     * @response `200` `MUApiResponseV1` Faq question was deleted
     * @response `401` `void` User does not have correct role
     * @response `404` `void` Faq category or question not found
     */
    export namespace DeleteFaqQuestion {
        export type RequestParams = {
            /** Faq category id */
            categoryId: number;
            /** Faq question id */
            questionId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags faq
     * @name ReorderFaq
     * @summary reorder faq
     * @request POST:/faq/reorder
     * @secure
     * @response `200` `MUApiResponseV1` Faq was reordered
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     */
    export namespace ReorderFaq {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = MUFaqCategoryReorderModelV1[];
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags faq
     * @name RetrieveAllFaqCategoriesAndQuestions
     * @summary retrieve all categories and questions
     * @request GET:/faq
     * @secure
     * @response `200` `(MUFaqCategoryQuestionsModelV1)[]` Return category and question records
     */
    export namespace RetrieveAllFaqCategoriesAndQuestions {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUFaqCategoryQuestionsModelV1[];
    }

    /**
     * No description
     * @tags faq
     * @name RetrieveAllFaqCategoryQuestions
     * @summary retrieve all quesitons for a category
     * @request GET:/faq/{category_id}/questions
     * @secure
     * @response `200` `(MUFaqQuestionModelV1)[]` Return question records
     * @response `404` `void` Category not found
     */
    export namespace RetrieveAllFaqCategoryQuestions {
        export type RequestParams = {
            /** Faq category id */
            categoryId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUFaqQuestionModelV1[];
    }

    /**
     * No description
     * @tags faq
     * @name RetrieveFaqCategory
     * @summary get a specific category
     * @request GET:/faq/{category_id}
     * @secure
     * @response `200` `MUFaqCategoryModelV1` Return category record
     * @response `404` `void` Category not found
     */
    export namespace RetrieveFaqCategory {
        export type RequestParams = {
            /** Faq category id */
            categoryId: number;
        };
        export type RequestQuery = {
            /** Output fields in unrendered form for editing */
            unrenderedFields?: boolean;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUFaqCategoryModelV1;
    }

    /**
     * No description
     * @tags faq
     * @name RetrieveFaqQuestion
     * @summary get a specific question for a category
     * @request GET:/faq/{category_id}/questions/{question_id}
     * @secure
     * @response `200` `MUFaqQuestionModelV1` Return question record
     * @response `404` `void` Category or question not found
     */
    export namespace RetrieveFaqQuestion {
        export type RequestParams = {
            /** Faq category id */
            categoryId: number;
            /** Faq question id */
            questionId: number;
        };
        export type RequestQuery = {
            /** Output fields in unrendered form for editing */
            unrenderedFields?: boolean;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUFaqQuestionModelV1;
    }

    /**
     * No description
     * @tags faq
     * @name UpdateFaqCategory
     * @summary update a faq category
     * @request PATCH:/faq/{category_id}
     * @secure
     * @response `200` `MUApiResponseV1` Faq was updated
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     */
    export namespace UpdateFaqCategory {
        export type RequestParams = {
            /** id of faq category */
            categoryId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUFaqCategoryModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags faq
     * @name UpdateFaqQuestion
     * @summary update a faq question
     * @request PATCH:/faq/{category_id}/questions/{question_id}
     * @secure
     * @response `200` `MUApiResponseV1` Faq was updated
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     */
    export namespace UpdateFaqQuestion {
        export type RequestParams = {
            /** Faq category id */
            categoryId: number;
            /** Faq question id */
            questionId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUFaqQuestionModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }
}

export namespace Forums {
    /**
     * No description
     * @tags forum
     * @name AddForumAdmin
     * @summary add a forum admin
     * @request PUT:/forums/{forum_id}/admins/{user_id}
     * @secure
     * @response `200` `MUApiResponseV1` Forum admin was added
     * @response `401` `void` User does not have correct role
     * @response `404` `MUApiResponseV1` User not found
     */
    export namespace AddForumAdmin {
        export type RequestParams = {
            /** Forum id */
            forumId: number;
            /** User id */
            userId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags forum
     * @name AddPollVote
     * @summary add a vote to a forum poll
     * @request POST:/forums/{forum_id}/topics/{topic_id}/poll/vote/{choice_id}
     * @secure
     * @response `200` `MUApiResponseV1` Poll vote was added
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `403` `void` User is under a warn restriction
     */
    export namespace AddPollVote {
        export type RequestParams = {
            /** Choice id */
            choiceId: number;
            /** Forum id */
            forumId: number;
            /** Topic id */
            topicId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags forum
     * @name AddPost
     * @summary add a forum post
     * @request POST:/forums/{forum_id}/topics/{topic_id}
     * @secure
     * @response `200` `MUApiResponseV1` Forum post was added
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `403` `void` User is under a warn restriction
     */
    export namespace AddPost {
        export type RequestParams = {
            /** Forum id */
            forumId: number;
            /** Topic id */
            topicId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUForumPostModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags forum
     * @name AddTemporaryPollImage
     * @summary add a temporary poll image
     * @request POST:/forums/temp_poll_images
     * @secure
     * @response `200` `MUApiResponseV1` Image was added
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `403` `void` User is under a warn restriction
     */
    export namespace AddTemporaryPollImage {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = {
            /** Image caption */
            caption?: string;
            /**
             * Image to update
             * @format binary
             */
            image?: File;
        };
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags forum
     * @name AddTopic
     * @summary add a forum topic
     * @request POST:/forums/{forum_id}
     * @secure
     * @response `200` `MUApiResponseV1` Forum topic was added
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `403` `void` User is under a warn restriction
     */
    export namespace AddTopic {
        export type RequestParams = {
            /** Forum id */
            forumId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUForumTopicModelAddV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags forum
     * @name DeletePost
     * @summary delete a post
     * @request DELETE:/forums/{forum_id}/topics/{topic_id}/posts/{post_id}
     * @secure
     * @response `200` `MUApiResponseV1` Post delete transaction submitted
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     */
    export namespace DeletePost {
        export type RequestParams = {
            /** Forum id */
            forumId: number;
            /** Post id */
            postId: number;
            /** Topic id */
            topicId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags forum
     * @name DeletePostReport
     * @summary delete a post report
     * @request DELETE:/forums/{forum_id}/topics/{topic_id}/posts/{post_id}/report
     * @secure
     * @response `200` `MUApiResponseV1` Post report was deleted
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     */
    export namespace DeletePostReport {
        export type RequestParams = {
            /** Forum id */
            forumId: number;
            /** Post id */
            postId: number;
            /** Topic id */
            topicId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags forum
     * @name DeleteTopic
     * @summary delete a topic
     * @request DELETE:/forums/{forum_id}/topics/{topic_id}
     * @secure
     * @response `200` `MUApiResponseV1` Topic delete transaction submitted
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     */
    export namespace DeleteTopic {
        export type RequestParams = {
            /** Forum id */
            forumId: number;
            /** Topic id */
            topicId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags forum
     * @name GetCurrentWarnForUser
     * @summary gets the current warn status for user
     * @request GET:/forums/warn/{user_id}
     * @secure
     * @response `200` `MUForumWarnModelV1` Warn status
     */
    export namespace GetCurrentWarnForUser {
        export type RequestParams = {
            /** User id */
            userId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUForumWarnModelV1;
    }

    /**
     * No description
     * @tags forum
     * @name ListCategories
     * @summary show forum categories and forums
     * @request GET:/forums
     * @secure
     * @response `200` `(MUForumCategoryModelListV1)[]` List of forums
     */
    export namespace ListCategories {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUForumCategoryModelListV1[];
    }

    /**
     * No description
     * @tags forum
     * @name ListGlobalTopics
     * @summary list global topics
     * @request GET:/forums/global
     * @secure
     * @response `200` `MUForumTopicListResponseV1` Return topic records
     */
    export namespace ListGlobalTopics {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUForumTopicListResponseV1;
    }

    /**
     * No description
     * @tags forum
     * @name ListPopularForums
     * @summary show popular forums
     * @request GET:/forums/popular
     * @secure
     * @response `200` `(MUForumForumModelListV1)[]` List of forums
     */
    export namespace ListPopularForums {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUForumForumModelListV1[];
    }

    /**
     * No description
     * @tags forum
     * @name ListPosts
     * @summary list posts in topic
     * @request POST:/forums/{forum_id}/topics/{topic_id}/list
     * @secure
     * @response `200` `MUForumPostListResponseV1` Return post records
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `404` `void` Forum or topic not found
     */
    export namespace ListPosts {
        export type RequestParams = {
            /** Forum id */
            forumId: number;
            /** Topic id */
            topicId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUPerPageSearchRequestV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUForumPostListResponseV1;
    }

    /**
     * No description
     * @tags forum
     * @name ListPostsByMe
     * @summary list posts in topic that I made
     * @request GET:/forums/{forum_id}/topics/{topic_id}/my_posts
     * @secure
     * @response `200` `MUForumPostByUserResponseV1` Return post id list
     * @response `401` `void` User does not have correct role
     */
    export namespace ListPostsByMe {
        export type RequestParams = {
            /** Forum id */
            forumId: number;
            /** Topic id */
            topicId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUForumPostByUserResponseV1;
    }

    /**
     * No description
     * @tags forum
     * @name ListReportedPosts
     * @summary show reported posts
     * @request GET:/forums/report
     * @secure
     * @response `200` `(MUForumPostReportModelV1)[]` Return Reported Posts
     * @response `401` `void` User does not have appropriate role
     */
    export namespace ListReportedPosts {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUForumPostReportModelV1[];
    }

    /**
     * No description
     * @tags forum
     * @name ListTopics
     * @summary list topics
     * @request POST:/forums/{forum_id}/list
     * @secure
     * @response `200` `MUForumTopicListResponseV1` Return topic records
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `404` `void` Forum not found
     */
    export namespace ListTopics {
        export type RequestParams = {
            /** Forum id */
            forumId: number;
        };
        export type RequestQuery = {
            /** Also return the first post of each topic */
            with_first_post?: boolean;
        };
        export type RequestBody = MUForumTopicListRequestV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUForumTopicListResponseV1;
    }

    /**
     * No description
     * @tags forum
     * @name ListWarnHistoryForUser
     * @summary show warn history for a user
     * @request GET:/forums/warn/{user_id}/history
     * @secure
     * @response `200` `(MUForumWarnModelV1)[]` Warn history
     * @response `401` `void` User does not have appropriate role
     */
    export namespace ListWarnHistoryForUser {
        export type RequestParams = {
            /** User id */
            userId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUForumWarnModelV1[];
    }

    /**
     * No description
     * @tags forum
     * @name LookupPost
     * @summary lookup a post to find the forum and topic id
     * @request GET:/forums/lookup/post/{post_id}
     * @secure
     * @response `200` `MUForumLookupResponseV1` Post lookup response
     * @response `404` `void` Post not found
     */
    export namespace LookupPost {
        export type RequestParams = {
            /** Post id */
            postId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUForumLookupResponseV1;
    }

    /**
     * No description
     * @tags forum
     * @name LookupSeries
     * @summary lookup a series to find the forum id
     * @request GET:/forums/lookup/series/{series_id}
     * @secure
     * @response `200` `MUForumLookupResponseV1` Series lookup response
     * @response `404` `void` Series or forum not found
     */
    export namespace LookupSeries {
        export type RequestParams = {
            /** Series id */
            seriesId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUForumLookupResponseV1;
    }

    /**
     * No description
     * @tags forum
     * @name LookupTopic
     * @summary lookup a topic to find the forum id
     * @request GET:/forums/lookup/topic/{topic_id}
     * @secure
     * @response `200` `MUForumLookupResponseV1` Topic lookup response
     * @response `404` `void` Topic not found
     */
    export namespace LookupTopic {
        export type RequestParams = {
            /** Topic id */
            topicId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUForumLookupResponseV1;
    }

    /**
     * No description
     * @tags forum
     * @name RemoveForumAdmin
     * @summary remove a forum admin
     * @request DELETE:/forums/{forum_id}/admins/{user_id}
     * @secure
     * @response `200` `MUApiResponseV1` Forum admin was removed
     * @response `401` `void` User does not have correct role
     * @response `404` `MUApiResponseV1` User not found
     */
    export namespace RemoveForumAdmin {
        export type RequestParams = {
            /** Forum id */
            forumId: number;
            /** User id */
            userId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags forum
     * @name ReportPost
     * @summary report a forum post
     * @request POST:/forums/{forum_id}/topics/{topic_id}/posts/{post_id}/report
     * @secure
     * @response `200` `MUApiResponseV1` Forum post was reported
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `403` `void` User is under a warn restriction
     */
    export namespace ReportPost {
        export type RequestParams = {
            /** Forum id */
            forumId: number;
            /** Post id */
            postId: number;
            /** Topic id */
            topicId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUForumPostReportModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags forum
     * @name RetrieveForum
     * @summary retrieve a forum
     * @request GET:/forums/{forum_id}
     * @secure
     * @response `200` `MUForumForumModelV1` Return topic record
     * @response `404` `void` Forum not found
     */
    export namespace RetrieveForum {
        export type RequestParams = {
            /** Forum id */
            forumId: number;
        };
        export type RequestQuery = {
            /** Output fields in unrendered form for editing */
            unrenderedFields?: boolean;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUForumForumModelV1;
    }

    /**
     * No description
     * @tags forum
     * @name RetrievePost
     * @summary retrieve a forum post
     * @request GET:/forums/{forum_id}/topics/{topic_id}/posts/{post_id}
     * @secure
     * @response `200` `MUForumPostModelV1` Return post record
     * @response `404` `void` Post not found
     */
    export namespace RetrievePost {
        export type RequestParams = {
            /** Forum id */
            forumId: number;
            /** Post id */
            postId: number;
            /** Topic id */
            topicId: number;
        };
        export type RequestQuery = {
            /** Output fields in unrendered form for editing */
            unrenderedFields?: boolean;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUForumPostModelV1;
    }

    /**
     * No description
     * @tags forum
     * @name RetrievePostLocation
     * @summary retrieve a forum post location within topic
     * @request GET:/forums/{forum_id}/topics/{topic_id}/posts/{post_id}/location
     * @secure
     * @response `200` `MUApiResponseV1` Return post record
     * @response `404` `void` Post not found
     */
    export namespace RetrievePostLocation {
        export type RequestParams = {
            /** Forum id */
            forumId: number;
            /** Post id */
            postId: number;
            /** Topic id */
            topicId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags forum
     * @name RetrieveTemporaryPollImages
     * @summary retrieve temporary poll images
     * @request GET:/forums/temp_poll_images
     * @secure
     * @response `200` `(MUForumPollTempImageModelV1)[]` Return image records
     */
    export namespace RetrieveTemporaryPollImages {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUForumPollTempImageModelV1[];
    }

    /**
     * No description
     * @tags forum
     * @name RetrieveTopic
     * @summary retrieve a forum topic
     * @request GET:/forums/{forum_id}/topics/{topic_id}
     * @secure
     * @response `200` `MUForumTopicModelV1` Return topic record
     * @response `404` `void` Topic not found
     */
    export namespace RetrieveTopic {
        export type RequestParams = {
            /** Forum id */
            forumId: number;
            /** Topic id */
            topicId: number;
        };
        export type RequestQuery = {
            /** Output fields in unrendered form for editing */
            unrenderedFields?: boolean;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUForumTopicModelV1;
    }

    /**
     * No description
     * @tags forum
     * @name RetrieveVote
     * @summary retrieve my vote from the poll
     * @request GET:/forums/{forum_id}/topics/{topic_id}/poll/vote
     * @secure
     * @response `200` `MUForumPollVoteModelV1` Return poll vote record
     * @response `401` `MUApiResponseV1` User does not have correct role
     * @response `404` `void` Poll or vote not found
     */
    export namespace RetrieveVote {
        export type RequestParams = {
            /** Forum id */
            forumId: number;
            /** Topic id */
            topicId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUForumPollVoteModelV1;
    }

    /**
     * No description
     * @tags forum
     * @name SearchForumPost
     * @summary search forum
     * @request POST:/forums/search
     * @secure
     * @response `200` `MUForumSearchResponseV1` Return search results
     * @response `400` `MUApiResponseV1` Validation or service error
     */
    export namespace SearchForumPost {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = MUForumSearchRequestV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUForumSearchResponseV1;
    }

    /**
     * No description
     * @tags forum
     * @name SearchSpecificForumPost
     * @summary search specific forum
     * @request POST:/forums/{forum_id}/search
     * @secure
     * @response `200` `MUForumSearchResponseV1` Return search results
     * @response `400` `MUApiResponseV1` Validation or service error
     */
    export namespace SearchSpecificForumPost {
        export type RequestParams = {
            /** Forum id */
            forumId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUForumSearchRequestV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUForumSearchResponseV1;
    }

    /**
     * No description
     * @tags forum
     * @name SearchSpecificTopicPost
     * @summary search specific topic
     * @request POST:/forums/{forum_id}/topics/{topic_id}/search
     * @secure
     * @response `200` `MUForumSearchResponseV1` Return search results
     * @response `400` `MUApiResponseV1` Validation or service error
     */
    export namespace SearchSpecificTopicPost {
        export type RequestParams = {
            /** Forum id */
            forumId: number;
            /** Topic id */
            topicId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUForumSearchRequestV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUForumSearchResponseV1;
    }

    /**
     * No description
     * @tags forum
     * @name ShowLogPost
     * @summary show forum admin log
     * @request POST:/forums/log
     * @secure
     * @response `200` `MUForumAdminHistorySearchResponseV1` Return log records
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have appropriate role
     */
    export namespace ShowLogPost {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = MUForumAdminHistorySearchRequestV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUForumAdminHistorySearchResponseV1;
    }

    /**
     * No description
     * @tags forum
     * @name UpdatePost
     * @summary update a forum post
     * @request PATCH:/forums/{forum_id}/topics/{topic_id}/posts/{post_id}
     * @secure
     * @response `200` `MUApiResponseV1` Forum post was updated
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `403` `void` User is under a warn restriction
     */
    export namespace UpdatePost {
        export type RequestParams = {
            /** Forum id */
            forumId: number;
            /** Post id */
            postId: number;
            /** Topic id */
            topicId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUForumPostModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags forum
     * @name UpdateTopic
     * @summary update a forum topic
     * @request PATCH:/forums/{forum_id}/topics/{topic_id}
     * @secure
     * @response `200` `MUApiResponseV1` Forum topic was updated
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     */
    export namespace UpdateTopic {
        export type RequestParams = {
            /** Forum id */
            forumId: number;
            /** Topic id */
            topicId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUForumTopicModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags forum
     * @name UpdateTopicPoll
     * @summary update a forum topic poll (if present)
     * @request PATCH:/forums/{forum_id}/topics/{topic_id}/poll
     * @secure
     * @response `200` `MUApiResponseV1` Topic poll was updated
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     */
    export namespace UpdateTopicPoll {
        export type RequestParams = {
            /** Forum id */
            forumId: number;
            /** Topic id */
            topicId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUForumPollModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags forum
     * @name UpdateUserWarnLevel
     * @summary update a user warn level
     * @request PUT:/forums/warn/{user_id}
     * @secure
     * @response `200` `MUApiResponseV1` User warn was updated
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `404` `void` Member not found
     */
    export namespace UpdateUserWarnLevel {
        export type RequestParams = {
            /** User id */
            userId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUForumWarnModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }
}

export namespace Genres {
    /**
     * No description
     * @tags genre
     * @name AddGenre
     * @summary add a genre
     * @request POST:/genres
     * @secure
     * @response `200` `MUApiResponseV1` Genre add transaction submitted
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     */
    export namespace AddGenre {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = MUGenreModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags genre
     * @name DeleteGenre
     * @summary delete a genre
     * @request DELETE:/genres/{id}
     * @secure
     * @response `200` `MUApiResponseV1` Genre was deleted
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `404` `void` Genre not found
     * @response `412` `void` Five second update delay
     */
    export namespace DeleteGenre {
        export type RequestParams = {
            /** id of genre */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags genre
     * @name RetrieveGenreById
     * @summary get genres
     * @request GET:/genres/{id}
     * @secure
     * @response `200` `MUGenreModelStatsV1` Return genre
     */
    export namespace RetrieveGenreById {
        export type RequestParams = {
            /** Genre id */
            id: number;
        };
        export type RequestQuery = {
            /** Output fields in unrendered form for editing */
            unrenderedFields?: boolean;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUGenreModelStatsV1;
    }

    /**
     * No description
     * @tags genre
     * @name RetrieveGenres
     * @summary get genres
     * @request GET:/genres
     * @secure
     * @response `200` `(MUGenreModelStatsV1)[]` Return genres
     */
    export namespace RetrieveGenres {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUGenreModelStatsV1[];
    }

    /**
     * No description
     * @tags genre
     * @name UpdateGenre
     * @summary update a genre
     * @request PATCH:/genres/{id}
     * @secure
     * @response `200` `MUApiResponseV1` Genre was updated
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `404` `void` Genre not found
     */
    export namespace UpdateGenre {
        export type RequestParams = {
            /** id of genre */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUGenreModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }
}

export namespace Groups {
    /**
     * No description
     * @tags groups
     * @name AddGroup
     * @summary add an group
     * @request POST:/groups
     * @secure
     * @response `200` `MUApiResponseV1` Group was added
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `412` `void` Five second update delay
     */
    export namespace AddGroup {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = MUGroupsModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags groups
     * @name DeleteGroup
     * @summary delete a group
     * @request DELETE:/groups/{id}
     * @secure
     * @response `200` `MUApiResponseV1` Group delete transaction submitted
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `404` `void` Group not found
     * @response `412` `void` Five second update delay
     */
    export namespace DeleteGroup {
        export type RequestParams = {
            /** id of group */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags groups
     * @name RejectGroup
     * @summary reject and delete a group
     * @request POST:/groups/{id}/reject
     * @secure
     * @response `200` `MUApiResponseV1` Group reject transaction submitted
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `404` `void` Group not found
     * @response `412` `void` Five second update delay
     */
    export namespace RejectGroup {
        export type RequestParams = {
            /** id of group */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags groups
     * @name RetrieveGroup
     * @summary get a specific group
     * @request GET:/groups/{id}
     * @secure
     * @response `200` `MUGroupsModelV1` Return group record
     * @response `404` `void` Group not found
     */
    export namespace RetrieveGroup {
        export type RequestParams = {
            /**
             * Group id
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {
            /** Output fields in unrendered form for editing */
            unrenderedFields?: boolean;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUGroupsModelV1;
    }

    /**
     * No description
     * @tags groups
     * @name RetrieveGroupSeries
     * @summary get the list of series and release frequency for a specific group
     * @request GET:/groups/{id}/series
     * @secure
     * @response `200` `MUGroupsSeriesListResponseV1` Return series list
     * @response `404` `void` Group not found
     */
    export namespace RetrieveGroupSeries {
        export type RequestParams = {
            /**
             * Group id
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUGroupsSeriesListResponseV1;
    }

    /**
     * No description
     * @tags groups
     * @name SearchGroupsPost
     * @summary search groups
     * @request POST:/groups/search
     * @secure
     * @response `200` `MUGroupsSearchResponseV1` List of groups
     * @response `400` `MUApiResponseV1` Validation or service error
     */
    export namespace SearchGroupsPost {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = MUGroupsSearchRequestV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUGroupsSearchResponseV1;
    }

    /**
     * No description
     * @tags groups
     * @name UpdateGroup
     * @summary update an group
     * @request PATCH:/groups/{id}
     * @secure
     * @response `200` `MUApiResponseV1` Group was updated
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `404` `void` Group not found
     * @response `412` `void` Five second update delay
     */
    export namespace UpdateGroup {
        export type RequestParams = {
            /** id of group */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUGroupsModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }
}

export namespace Lists {
    /**
     * No description
     * @tags lists
     * @name AddCustomList
     * @summary add a custom user list
     * @request POST:/lists
     * @secure
     * @response `200` `MUApiResponseV1` List was added
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `412` `void` Five second update delay
     */
    export namespace AddCustomList {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = MUListsModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags lists
     * @name AddListSeries
     * @summary add a series to a list
     * @request POST:/lists/series
     * @secure
     * @response `200` `void` Series was added
     * @response `400` `void` Validation or service error
     * @response `412` `void` Five second update delay
     */
    export namespace AddListSeries {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = MUListsSeriesModelUpdateV1[];
        export type RequestHeaders = {};
        export type ResponseBody = void;
    }

    /**
     * No description
     * @tags lists
     * @name AddListSeriesBulk
     * @summary add a list of series to a list
     * @request POST:/lists/{id}/series/bulk
     * @secure
     * @response `200` `MUApiResponseV1` Series were (partially) added
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `404` `void` User list not found
     * @response `412` `void` Five second update delay
     */
    export namespace AddListSeriesBulk {
        export type RequestParams = {
            /** id of list */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUListsBulkAddModelV1[];
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags lists
     * @name DeleteCustomList
     * @summary remove a custom list
     * @request DELETE:/lists/{id}
     * @secure
     * @response `200` `MUApiResponseV1` Custom list was removed
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `404` `void` User list not found
     */
    export namespace DeleteCustomList {
        export type RequestParams = {
            /** id of list */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags lists
     * @name DeleteListSeries
     * @summary remove a series from a list
     * @request POST:/lists/series/delete
     * @secure
     * @response `200` `MUApiResponseV1` Series were removed
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `412` `void` Five second update delay
     */
    export namespace DeleteListSeries {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = number[];
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags lists
     * @name RetrieveListById
     * @summary retrieve list metadata and options
     * @request GET:/lists/{id}
     * @secure
     * @response `200` `MUListsModelV1` Return list record
     * @response `404` `void` List not found
     */
    export namespace RetrieveListById {
        export type RequestParams = {
            /** List id */
            id: number;
        };
        export type RequestQuery = {
            /** Output fields in unrendered form for editing */
            unrenderedFields?: boolean;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUListsModelV1;
    }

    /**
     * No description
     * @tags lists
     * @name RetrieveLists
     * @summary retrieve list of user lists
     * @request GET:/lists
     * @secure
     * @response `200` `(MUListsModelV1)[]` Return list records
     */
    export namespace RetrieveLists {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUListsModelV1[];
    }

    /**
     * No description
     * @tags lists
     * @name RetrieveListSeries
     * @summary retrieve list series item
     * @request GET:/lists/series/{series_id}
     * @secure
     * @response `200` `MUListsSeriesModelV1` Return list series record
     * @response `404` `void` List or series not found
     */
    export namespace RetrieveListSeries {
        export type RequestParams = {
            /** Series id */
            seriesId: number;
        };
        export type RequestQuery = {
            /** Output fields in unrendered form for editing */
            unrenderedFields?: boolean;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUListsSeriesModelV1;
    }

    /**
     * No description
     * @tags lists
     * @name RetrievePublicLists
     * @summary retrieve list of user lists
     * @request GET:/lists/public/{user_id}
     * @secure
     * @response `200` `(MUListsModelV1)[]` Return list records
     */
    export namespace RetrievePublicLists {
        export type RequestParams = {
            /** User id */
            userId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUListsModelV1[];
    }

    /**
     * No description
     * @tags lists
     * @name RetrievePublicListStats
     * @summary retrieve stats for user public lists
     * @request GET:/lists/public/{user_id}/stats
     * @secure
     * @response `200` `MUListsPublicStatsModelV1` Return public list stats records
     */
    export namespace RetrievePublicListStats {
        export type RequestParams = {
            /** User id */
            userId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUListsPublicStatsModelV1;
    }

    /**
     * No description
     * @tags lists
     * @name RetrieveSimilarUsersBySeries
     * @summary retrieve users who have similar interests based on series
     * @request GET:/lists/similar/{list_name}/{series_id}
     * @secure
     * @response `200` `MUListsSimilarUsersResponseV1` Return similar user records
     * @response `404` `void` List or series not found
     */
    export namespace RetrieveSimilarUsersBySeries {
        export type RequestParams = {
            /** name of list */
            listName: "read" | "wish" | "complete" | "unfinished" | "hold";
            /** Series id */
            seriesId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUListsSimilarUsersResponseV1;
    }

    /**
     * No description
     * @tags lists
     * @name SearchListsPost
     * @summary search lists
     * @request POST:/lists/{id}/search
     * @secure
     * @response `200` `MUListsSearchResponseV1` Return list records
     */
    export namespace SearchListsPost {
        export type RequestParams = {
            /** list id to search */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUListsSearchRequestV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUListsSearchResponseV1;
    }

    /**
     * No description
     * @tags lists
     * @name SearchPublicListsPost
     * @summary search lists
     * @request POST:/lists/public/{user_id}/search/{id}
     * @secure
     * @response `200` `MUListsPublicSearchResponseV1` Return list records
     */
    export namespace SearchPublicListsPost {
        export type RequestParams = {
            /** list id to search */
            id: number;
            /** User id */
            userId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUListsSearchRequestV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUListsPublicSearchResponseV1;
    }

    /**
     * No description
     * @tags lists
     * @name UpdateList
     * @summary update a user list
     * @request PATCH:/lists/{id}
     * @secure
     * @response `200` `MUApiResponseV1` User list was updated
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `404` `void` User list not found
     * @response `412` `void` Five second update delay
     */
    export namespace UpdateList {
        export type RequestParams = {
            /** id of list */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUListsModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags lists
     * @name UpdateListSeries
     * @summary update a series list item
     * @request POST:/lists/series/update
     * @secure
     * @response `200` `MUApiResponseV1` Series list items were updated
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `412` `void` Five second update delay
     */
    export namespace UpdateListSeries {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = MUListsSeriesModelUpdateV1[];
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }
}

export namespace Misc {
    /**
     * No description
     * @tags misc
     * @name ListOnlineUsers
     * @summary list online users
     * @request GET:/misc/online
     * @secure
     * @response `200` `MUMiscOnlineUsersModelV1` Return online users
     */
    export namespace ListOnlineUsers {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUMiscOnlineUsersModelV1;
    }

    /**
     * No description
     * @tags misc
     * @name RetrieveSlowTransactionStatus
     * @summary get the status of a bulk transaction
     * @request GET:/misc/slow-transaction-status/{transaction_id}
     * @secure
     * @response `200` `MUMiscSlowTransactionStatusResponseV1` Return transaction status
     * @response `404` `void` Transaction not found
     */
    export namespace RetrieveSlowTransactionStatus {
        export type RequestParams = {
            /** the transaction id */
            transactionId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUMiscSlowTransactionStatusResponseV1;
    }

    /**
     * No description
     * @tags misc
     * @name SiteStats
     * @summary show various site stats
     * @request GET:/misc/stats
     * @secure
     * @response `200` `MUMiscStatsModelV1` Return site stats
     */
    export namespace SiteStats {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUMiscStatsModelV1;
    }

    /**
     * No description
     * @tags misc
     * @name Time
     * @summary get the current time
     * @request GET:/misc/time
     * @secure
     * @response `200` `MUTimeV1` Current Time
     */
    export namespace Time {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUTimeV1;
    }
}

export namespace Poll {
    /**
     * No description
     * @tags poll
     * @name AddPoll
     * @summary add a new poll
     * @request POST:/poll
     * @secure
     * @response `200` `MUApiResponseV1` Poll was successfully added
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     */
    export namespace AddPoll {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = MUPollModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags poll
     * @name ArchivePoll
     * @summary archive the active poll
     * @request DELETE:/poll
     * @secure
     * @response `200` `MUApiResponseV1` Poll was successfully archived
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     */
    export namespace ArchivePoll {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags poll
     * @name RetrievePoll
     * @summary get the active poll
     * @request GET:/poll
     * @secure
     * @response `200` `MUPollModelV1` Return poll record
     */
    export namespace RetrievePoll {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUPollModelV1;
    }

    /**
     * No description
     * @tags poll
     * @name RetrieveVoteStatus
     * @summary get information about whether the user has voted
     * @request GET:/poll/vote/status
     * @secure
     * @response `200` `MUPollVoteStatusModelV1` Return poll voter status record
     */
    export namespace RetrieveVoteStatus {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUPollVoteStatusModelV1;
    }

    /**
     * No description
     * @tags poll
     * @name SearchPollArchivePost
     * @summary search archived polls
     * @request POST:/poll/search
     * @secure
     * @response `200` `MUPollArchiveSearchResponseV1` List of polls
     * @response `400` `MUApiResponseV1` Validation or service error
     */
    export namespace SearchPollArchivePost {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = MUPollArchiveSearchRequestV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUPollArchiveSearchResponseV1;
    }

    /**
     * No description
     * @tags poll
     * @name VotePollAnswer
     * @summary vote in a poll answer
     * @request POST:/poll/vote/{answer_id}
     * @secure
     * @response `200` `MUApiResponseV1` Vote was successfully added
     * @response `400` `MUApiResponseV1` Validation or service error
     */
    export namespace VotePollAnswer {
        export type RequestParams = {
            /** id of answer to vote for */
            answerId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags poll
     * @name VotePollNoAnswer
     * @summary vote in a poll
     * @request POST:/poll/vote
     * @secure
     * @response `200` `MUApiResponseV1` Vote was successfully added
     * @response `400` `MUApiResponseV1` Validation or service error
     */
    export namespace VotePollNoAnswer {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }
}

export namespace Publishers {
    /**
     * No description
     * @tags publishers
     * @name AddPublisher
     * @summary add an publisher
     * @request POST:/publishers
     * @secure
     * @response `200` `MUApiResponseV1` Publisher was added
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `412` `void` Five second update delay
     */
    export namespace AddPublisher {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = MUPublishersModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags publishers
     * @name DeletePublisher
     * @summary delete a publisher
     * @request DELETE:/publishers/{id}
     * @secure
     * @response `200` `MUApiResponseV1` Publisher delete transaction submitted
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `404` `void` Publisher not found
     * @response `412` `void` Five second update delay
     */
    export namespace DeletePublisher {
        export type RequestParams = {
            /** id of publisher */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags publishers
     * @name RetrievePublicationSeries
     * @summary get the list of series for a specific publication
     * @request GET:/publishers/publication
     * @secure
     * @response `200` `MUPublishersPublicationResponseV1` Return series list
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `404` `void` Publication not found
     */
    export namespace RetrievePublicationSeries {
        export type RequestParams = {};
        export type RequestQuery = {
            /** Publication name */
            pubname: string;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUPublishersPublicationResponseV1;
    }

    /**
     * No description
     * @tags publishers
     * @name RetrievePublisher
     * @summary get a specific publisher
     * @request GET:/publishers/{id}
     * @secure
     * @response `200` `MUPublishersModelV1` Return publisher record
     * @response `404` `void` Publisher not found
     */
    export namespace RetrievePublisher {
        export type RequestParams = {
            /** Publisher id */
            id: number;
        };
        export type RequestQuery = {
            /** Output fields in unrendered form for editing */
            unrenderedFields?: boolean;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUPublishersModelV1;
    }

    /**
     * No description
     * @tags publishers
     * @name RetrievePublisherSeries
     * @summary get the list of series for a specific publisher
     * @request GET:/publishers/{id}/series
     * @secure
     * @response `200` `MUPublishersSeriesListResponseV1` Return series list
     * @response `404` `void` Publisher not found
     */
    export namespace RetrievePublisherSeries {
        export type RequestParams = {
            /**
             * Publisher id
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUPublishersSeriesListResponseV1;
    }

    /**
     * No description
     * @tags publishers
     * @name SearchPublishersPost
     * @summary search publishers
     * @request POST:/publishers/search
     * @secure
     * @response `200` `MUPublishersSearchResponseV1` Return publisher records
     * @response `400` `MUApiResponseV1` Validation or service error
     */
    export namespace SearchPublishersPost {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = MUPublishersSearchRequestV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUPublishersSearchResponseV1;
    }

    /**
     * No description
     * @tags publishers
     * @name UpdatePublisher
     * @summary update a publisher
     * @request PATCH:/publishers/{id}
     * @secure
     * @response `200` `MUApiResponseV1` Publisher was updated
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `404` `void` Publisher not found
     * @response `412` `void` Five second update delay
     */
    export namespace UpdatePublisher {
        export type RequestParams = {
            /** id of publisher */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUPublishersModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }
}

export namespace Releases {
    /**
     * No description
     * @tags releases
     * @name AddRelease
     * @summary add an release
     * @request POST:/releases
     * @secure
     * @response `200` `MUApiResponseV1` Release was added
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `412` `void` Five second update delay
     */
    export namespace AddRelease {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = MUReleaseModelUpdateV1[];
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags releases
     * @name DeleteRelease
     * @summary delete a release
     * @request DELETE:/releases/{id}
     * @secure
     * @response `200` `MUApiResponseV1` Release was deleted
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `404` `void` Release not found
     * @response `412` `void` Five second update delay
     */
    export namespace DeleteRelease {
        export type RequestParams = {
            /** id of release */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags releases
     * @name ListReleasesByDay
     * @summary show releases by day
     * @request GET:/releases/days
     * @secure
     * @response `200` `MUReleaseSearchResponseV1` Return release records
     */
    export namespace ListReleasesByDay {
        export type RequestParams = {};
        export type RequestQuery = {
            /**
             * Include series metadata (if available)
             * @default false
             */
            include_metadata?: boolean;
            /**
             * Start page
             * @format int64
             */
            page?: number;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUReleaseSearchResponseV1;
    }

    /**
     * No description
     * @tags releases
     * @name ModerateReleasesPost
     * @summary search releases to moderate
     * @request POST:/releases/moderate
     * @secure
     * @response `200` `MUReleaseModerateResponseV1` Return release records
     * @response `400` `MUApiResponseV1` Validation or service error
     */
    export namespace ModerateReleasesPost {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = MUReleaseModerateRequestV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUReleaseModerateResponseV1;
    }

    /**
     * No description
     * @tags releases
     * @name ReleaseRssFeed
     * @summary releases rss feed
     * @request GET:/releases/rss
     * @secure
     * @response `200` `string` Return release feed
     */
    export namespace ReleaseRssFeed {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = string;
    }

    /**
     * No description
     * @tags releases
     * @name RetrieveRelease
     * @summary get a specific release
     * @request GET:/releases/{id}
     * @secure
     * @response `200` `MUReleaseModelV1` Return release record
     * @response `401` `void` User does not have correct role
     * @response `404` `void` Release not found
     */
    export namespace RetrieveRelease {
        export type RequestParams = {
            /** Release id */
            id: number;
        };
        export type RequestQuery = {
            /** Output fields in unrendered form for editing */
            unrenderedFields?: boolean;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUReleaseModelV1;
    }

    /**
     * No description
     * @tags releases
     * @name SearchReleasesPost
     * @summary search releases
     * @request POST:/releases/search
     * @secure
     * @response `200` `MUReleaseSearchResponseV1` Return release records
     * @response `400` `MUApiResponseV1` Validation or service error
     */
    export namespace SearchReleasesPost {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = MUReleaseSearchRequestV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUReleaseSearchResponseV1;
    }

    /**
     * No description
     * @tags releases
     * @name UpdateRelease
     * @summary update an release
     * @request PATCH:/releases/{id}
     * @secure
     * @response `200` `MUApiResponseV1` Release was updated
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `404` `void` Release not found
     * @response `412` `void` Five second update delay
     */
    export namespace UpdateRelease {
        export type RequestParams = {
            /** id of release */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUReleaseModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }
}

export namespace Reviews {
    /**
     * No description
     * @tags reviews
     * @name AddReview
     * @summary add a review
     * @request POST:/reviews
     * @secure
     * @response `200` `MUApiResponseV1` Review was added
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `412` `void` Five second update delay
     */
    export namespace AddReview {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = MUReviewModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags reviews
     * @name AddReviewComment
     * @summary add a review comment
     * @request POST:/reviews/{id}/comments
     * @secure
     * @response `200` `MUApiResponseV1` Review comment was added
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `412` `void` Five second update delay
     */
    export namespace AddReviewComment {
        export type RequestParams = {
            /**
             * Review id
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUReviewCommentModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags reviews
     * @name DeleteReview
     * @summary delete a review
     * @request DELETE:/reviews/{id}
     * @secure
     * @response `200` `MUApiResponseV1` Review was deleted
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `404` `void` Review not found
     * @response `412` `void` Five second update delay
     */
    export namespace DeleteReview {
        export type RequestParams = {
            /** id of review */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags reviews
     * @name DeleteReviewComment
     * @summary delete a review comment
     * @request DELETE:/reviews/{id}/comments/{comment_id}
     * @secure
     * @response `200` `MUApiResponseV1` Review comment was deleted
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role or own the review comment
     * @response `404` `void` Review or comment not found
     * @response `412` `void` Five second update delay
     */
    export namespace DeleteReviewComment {
        export type RequestParams = {
            /** id of review comment */
            commentId: number;
            /** id of review */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags reviews
     * @name RetrieveReview
     * @summary get a specific review
     * @request GET:/reviews/{id}
     * @secure
     * @response `200` `MUReviewModelV1` Return review record
     * @response `404` `void` Review not found
     */
    export namespace RetrieveReview {
        export type RequestParams = {
            /**
             * Review id
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {
            /** Output fields in unrendered form for editing */
            unrenderedFields?: boolean;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUReviewModelV1;
    }

    /**
     * No description
     * @tags reviews
     * @name RetrieveReviewComment
     * @summary get a specific review comment
     * @request GET:/reviews/{id}/comments/{comment_id}
     * @secure
     * @response `200` `MUReviewCommentModelV1` Return review comment record
     * @response `404` `void` Review or comment not found
     */
    export namespace RetrieveReviewComment {
        export type RequestParams = {
            /**
             * Review comment id
             * @format int64
             */
            commentId: number;
            /**
             * Review id
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {
            /** Output fields in unrendered form for editing */
            unrenderedFields?: boolean;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUReviewCommentModelV1;
    }

    /**
     * No description
     * @tags reviews
     * @name ReviewCommentsModerationPost
     * @summary moderate review comments
     * @request POST:/reviews/comments/moderation
     * @secure
     * @response `200` `MUReviewCommentSearchResponseV1` Return reviews comment moderation records
     */
    export namespace ReviewCommentsModerationPost {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = MUReviewCommentSearchRequestV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUReviewCommentSearchResponseV1;
    }

    /**
     * No description
     * @tags reviews
     * @name SearchReviewCommentsPost
     * @summary search review comments
     * @request POST:/reviews/{id}/comments/search
     * @secure
     * @response `200` `MUReviewCommentSearchResponseV1` Return review comment records
     */
    export namespace SearchReviewCommentsPost {
        export type RequestParams = {
            /**
             * Review id
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUReviewCommentSearchRequestV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUReviewCommentSearchResponseV1;
    }

    /**
     * No description
     * @tags reviews
     * @name SearchReviewsPost
     * @summary search reviews
     * @request POST:/reviews/search
     * @secure
     * @response `200` `MUReviewSearchResponseV1` Return review records
     */
    export namespace SearchReviewsPost {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = MUReviewSearchRequestV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUReviewSearchResponseV1;
    }

    /**
     * No description
     * @tags reviews
     * @name UpdateReview
     * @summary update a review
     * @request PATCH:/reviews/{id}
     * @secure
     * @response `200` `MUApiResponseV1` Review was updated
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role or own the review
     * @response `404` `void` Review not found
     * @response `412` `void` Five second update delay
     */
    export namespace UpdateReview {
        export type RequestParams = {
            /** id of review */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUReviewModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags reviews
     * @name UpdateReviewComment
     * @summary update a review comment
     * @request PATCH:/reviews/{id}/comments/{comment_id}
     * @secure
     * @response `200` `MUApiResponseV1` Review comment was updated
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role or own the review comment
     * @response `404` `void` Review or comment not found
     * @response `412` `void` Five second update delay
     */
    export namespace UpdateReviewComment {
        export type RequestParams = {
            /** id of review comment */
            commentId: number;
            /** id of review */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUReviewCommentModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }
}

export namespace Series {
    /**
     * No description
     * @tags series
     * @name AddSeries
     * @summary add an series
     * @request POST:/series
     * @secure
     * @response `200` `MUApiResponseV1` Series was added
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `412` `void` Five second update delay
     */
    export namespace AddSeries {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = MUSeriesModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags series
     * @name AddSeriesCategoryVote
     * @summary add a vote for a category on a series
     * @request POST:/series/{id}/categories/vote
     * @secure
     * @response `200` `MUApiResponseV1` Series category vote was added
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `404` `void` Series not found
     */
    export namespace AddSeriesCategoryVote {
        export type RequestParams = {
            /** id of series */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUSeriesCategoryVoteModelV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags series
     * @name AddSeriesComment
     * @summary add a series comment
     * @request POST:/series/{id}/comments
     * @secure
     * @response `200` `MUApiResponseV1` Series comment was added
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `412` `void` Five second update delay
     */
    export namespace AddSeriesComment {
        export type RequestParams = {
            /** id of series */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUSeriesCommentModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags series
     * @name AddSeriesCommentUsefulFlag
     * @summary set usefulness of a series comment
     * @request PUT:/series/{id}/comments/{comment_id}/useful
     * @secure
     * @response `200` `MUApiResponseV1` Series comment useful was added
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `404` `void` Series or comment not found
     */
    export namespace AddSeriesCommentUsefulFlag {
        export type RequestParams = {
            /** id of series comment */
            commentId: number;
            /** id of series */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUSeriesCommentUsefulModelV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags series
     * @name CombineSeriesCategories
     * @summary combine two series categories
     * @request POST:/series/{id}/categories/combine
     * @secure
     * @response `200` `MUApiResponseV1` Series categories were combined
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `404` `void` Series or category not found
     * @response `412` `void` Five second update delay
     */
    export namespace CombineSeriesCategories {
        export type RequestParams = {
            /** id of series */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUSeriesCategoryUpdateModelV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags series
     * @name DeleteSeries
     * @summary delete a series
     * @request DELETE:/series/{id}
     * @secure
     * @response `200` `MUApiResponseV1` Series was deleted
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `404` `void` Series not found
     * @response `412` `void` Five second update delay
     */
    export namespace DeleteSeries {
        export type RequestParams = {
            /** id of series */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags series
     * @name DeleteSeriesCategory
     * @summary deletes a series category
     * @request POST:/series/{id}/categories/delete
     * @secure
     * @response `200` `MUApiResponseV1` Series category was removed
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `404` `void` Series or category not found
     * @response `412` `void` Five second update delay
     */
    export namespace DeleteSeriesCategory {
        export type RequestParams = {
            /** id of series */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUCategoriesModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags series
     * @name DeleteSeriesComment
     * @summary delete a series comment
     * @request DELETE:/series/{id}/comments/{comment_id}
     * @secure
     * @response `200` `MUApiResponseV1` Series comment was updated
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role or own the series comment
     * @response `404` `void` Series or comment not found
     * @response `412` `void` Five second update delay
     */
    export namespace DeleteSeriesComment {
        export type RequestParams = {
            /** id of series comment */
            commentId: number;
            /** id of series */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags series
     * @name DeleteSeriesImage
     * @summary delete the image of an series
     * @request DELETE:/series/{id}/image
     * @secure
     * @response `200` `MUApiResponseV1` Image was deleted
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `404` `void` Series not found
     * @response `412` `void` Five second update delay
     */
    export namespace DeleteSeriesImage {
        export type RequestParams = {
            /**
             * id of series
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags series
     * @name DeleteUserSeriesRating
     * @summary delete a series rating for a user
     * @request DELETE:/series/{id}/rating
     * @secure
     * @response `200` `MUApiResponseV1` Series rating was deleted
     * @response `401` `void` User does not have correct role
     * @response `404` `void` Series not found
     */
    export namespace DeleteUserSeriesRating {
        export type RequestParams = {
            /** id of series */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags series
     * @name LockSeriesField
     * @summary lock a field of an series
     * @request POST:/series/{id}/locks/{item}/lock
     * @secure
     * @response `200` `MUApiResponseV1` Field was locked
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `404` `void` Series not found
     * @response `409` `void` Field is already locked
     */
    export namespace LockSeriesField {
        export type RequestParams = {
            /**
             * id of series
             * @format int64
             */
            id: number;
            /** field name */
            item: string;
        };
        export type RequestQuery = {};
        export type RequestBody = MUSeriesLockModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags series
     * @name RemoveSeriesCategoryVote
     * @summary remove series category vote for user
     * @request POST:/series/{id}/categories/vote/delete
     * @secure
     * @response `200` `MUApiResponseV1` Series category vote was removed
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `404` `void` Series or comment not found
     */
    export namespace RemoveSeriesCategoryVote {
        export type RequestParams = {
            /** id of series */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUSeriesCategoryVoteDeleteModelV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags series
     * @name RemoveSeriesCommentUsefulFlag
     * @summary remove usefulness of a series comment
     * @request DELETE:/series/{id}/comments/{comment_id}/useful
     * @secure
     * @response `200` `MUApiResponseV1` Series comment useful was deleted
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `404` `void` Series or comment not found
     * @response `412` `void` Five second update delay
     */
    export namespace RemoveSeriesCommentUsefulFlag {
        export type RequestParams = {
            /** id of series comment */
            commentId: number;
            /** id of series */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags series
     * @name RenameSeriesCategory
     * @summary renames a series category
     * @request POST:/series/{id}/categories/rename
     * @secure
     * @response `200` `MUApiResponseV1` Series category was renamed
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `404` `void` Series or category not found
     * @response `412` `void` Five second update delay
     */
    export namespace RenameSeriesCategory {
        export type RequestParams = {
            /** id of series */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUSeriesCategoryUpdateModelV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags series
     * @name ReportSeriesComment
     * @summary report a series comment
     * @request POST:/series/{id}/comments/{comment_id}/report
     * @secure
     * @response `200` `MUApiResponseV1` Series comment was reported
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `404` `void` Series or comment not found
     * @response `412` `void` Five second update delay
     */
    export namespace ReportSeriesComment {
        export type RequestParams = {
            /** id of series comment */
            commentId: number;
            /** id of series */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUSeriesCommentReportModelV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags series
     * @name RetrieveMySeriesComment
     * @summary get my series comment
     * @request GET:/series/{id}/comments/my_comment
     * @secure
     * @response `200` `MUSeriesCommentModelV1` Return series comment record
     * @response `404` `void` Series or comment not found
     */
    export namespace RetrieveMySeriesComment {
        export type RequestParams = {
            /**
             * Series id
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {
            /** Output fields in unrendered form for editing */
            unrenderedFields?: boolean;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUSeriesCommentModelV1;
    }

    /**
     * No description
     * @tags series
     * @name RetrieveSeries
     * @summary get a specific series
     * @request GET:/series/{id}
     * @secure
     * @response `200` `MUSeriesModelV1` Return series record
     * @response `404` `void` Series not found
     */
    export namespace RetrieveSeries {
        export type RequestParams = {
            /** Series id */
            id: number;
        };
        export type RequestQuery = {
            /** Output fields in unrendered form for editing */
            unrenderedFields?: boolean;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUSeriesModelV1;
    }

    /**
     * No description
     * @tags series
     * @name RetrieveSeriesCategoryVotes
     * @summary get category votes for the current user
     * @request GET:/series/{id}/categories/votes
     * @secure
     * @response `200` `(MUSeriesCategoryVoteModelV1)[]` Return vote records
     */
    export namespace RetrieveSeriesCategoryVotes {
        export type RequestParams = {
            /**
             * Series id
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUSeriesCategoryVoteModelV1[];
    }

    /**
     * No description
     * @tags series
     * @name RetrieveSeriesComment
     * @summary get a specific series comment
     * @request GET:/series/{id}/comments/{comment_id}
     * @secure
     * @response `200` `MUSeriesCommentModelV1` Return series comment record
     * @response `404` `void` Series or comment not found
     */
    export namespace RetrieveSeriesComment {
        export type RequestParams = {
            /**
             * Series comment id
             * @format int64
             */
            commentId: number;
            /**
             * Series id
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {
            /** Output fields in unrendered form for editing */
            unrenderedFields?: boolean;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUSeriesCommentModelV1;
    }

    /**
     * No description
     * @tags series
     * @name RetrieveSeriesCommentLocation
     * @summary get a specific series comment location
     * @request GET:/series/{id}/comments/{comment_id}/location
     * @secure
     * @response `200` `MUApiResponseV1` Return series comment location
     */
    export namespace RetrieveSeriesCommentLocation {
        export type RequestParams = {
            /**
             * Series comment id
             * @format int64
             */
            commentId: number;
            /**
             * Series id
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags series
     * @name RetrieveSeriesGroups
     * @summary get the list of groups scanlating a specific series
     * @request GET:/series/{id}/groups
     * @secure
     * @response `200` `MUSeriesGroupListResponseV1` Return series list
     * @response `404` `void` Series not found
     */
    export namespace RetrieveSeriesGroups {
        export type RequestParams = {
            /**
             * Series id
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUSeriesGroupListResponseV1;
    }

    /**
     * No description
     * @tags series
     * @name RetrieveSeriesLocks
     * @summary get a specific series lock
     * @request GET:/series/{id}/locks
     * @secure
     * @response `200` `(MUSeriesLockModelV1)[]` Return series lock records
     * @response `404` `void` Series not found
     */
    export namespace RetrieveSeriesLocks {
        export type RequestParams = {
            /**
             * Series id
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUSeriesLockModelV1[];
    }

    /**
     * No description
     * @tags series
     * @name RetrieveSeriesRankLocation
     * @summary get a specific series rank location
     * @request GET:/series/{id}/rank/{type}
     * @secure
     * @response `200` `MUApiResponseV1` Return series rank location
     */
    export namespace RetrieveSeriesRankLocation {
        export type RequestParams = {
            /**
             * Series id
             * @format int64
             */
            id: number;
            /** Stat type */
            type: string;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags series
     * @name RetrieveSeriesRatingRainbow
     * @summary get a the series rating rainbow
     * @request GET:/series/{id}/ratingrainbow
     * @secure
     * @response `200` `MUSeriesRatingRainbowModelV1` Return series rating records
     * @response `404` `void` Series not found
     */
    export namespace RetrieveSeriesRatingRainbow {
        export type RequestParams = {
            /**
             * Series id
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUSeriesRatingRainbowModelV1;
    }

    /**
     * No description
     * @tags series
     * @name RetrieveUserSeriesRating
     * @summary get a specific series rating for a user
     * @request GET:/series/{id}/rating
     * @secure
     * @response `200` `MUSeriesRatingModelV1` Return series rating records
     * @response `404` `void` Series not found
     */
    export namespace RetrieveUserSeriesRating {
        export type RequestParams = {
            /**
             * Series id
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUSeriesRatingModelV1;
    }

    /**
     * No description
     * @tags series
     * @name SearchSeriesCommentsPost
     * @summary search series comments
     * @request POST:/series/{id}/comments/search
     * @secure
     * @response `200` `MUSeriesCommentSearchResponseV1` Return series comment records
     */
    export namespace SearchSeriesCommentsPost {
        export type RequestParams = {
            /**
             * Series id
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUSeriesCommentSearchRequestV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUSeriesCommentSearchResponseV1;
    }

    /**
     * No description
     * @tags series
     * @name SearchSeriesHistoryPost
     * @summary search series history
     * @request POST:/series/{id}/history
     * @secure
     * @response `200` `MUSeriesHistorySearchResponseV1` Return series records
     * @response `400` `MUApiResponseV1` Validation or service error
     */
    export namespace SearchSeriesHistoryPost {
        export type RequestParams = {
            /**
             * Series id
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUPerPageSearchRequestV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUSeriesHistorySearchResponseV1;
    }

    /**
     * No description
     * @tags series
     * @name SearchSeriesPost
     * @summary search series
     * @request POST:/series/search
     * @secure
     * @response `200` `MUSeriesSearchResponseV1` Return series records
     * @response `400` `MUApiResponseV1` Validation or service error
     */
    export namespace SearchSeriesPost {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = MUSeriesSearchRequestV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUSeriesSearchResponseV1;
    }

    /**
     * No description
     * @tags series
     * @name SeriesCommentsModerationPost
     * @summary moderate series comments
     * @request POST:/series/comments/moderation
     * @secure
     * @response `200` `MUSeriesCommentModerationResponseV1` Return series comment moderation records
     */
    export namespace SeriesCommentsModerationPost {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = MUSeriesCommentSearchRequestV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUSeriesCommentModerationResponseV1;
    }

    /**
     * No description
     * @tags series
     * @name SeriesReleaseRssFeed
     * @summary releases rss feed for a specific series
     * @request GET:/series/{id}/rss
     * @secure
     * @response `200` `string` Return release feed
     */
    export namespace SeriesReleaseRssFeed {
        export type RequestParams = {
            /**
             * id of series
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = string;
    }

    /**
     * No description
     * @tags series
     * @name UnlockSeriesField
     * @summary unlock a field of an series
     * @request POST:/series/{id}/locks/{item}/unlock
     * @secure
     * @response `200` `MUApiResponseV1` Field was unlocked
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `404` `void` Series not found
     * @response `409` `void` Field is already unlocked
     */
    export namespace UnlockSeriesField {
        export type RequestParams = {
            /**
             * id of series
             * @format int64
             */
            id: number;
            /** field name */
            item: string;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags series
     * @name UpdateSeries
     * @summary update an series
     * @request PATCH:/series/{id}
     * @secure
     * @response `200` `MUApiResponseV1` Series was updated
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `403` `void` Field is locked
     * @response `404` `void` Series not found
     * @response `412` `void` Five second update delay
     */
    export namespace UpdateSeries {
        export type RequestParams = {
            /** id of series */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUSeriesModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags series
     * @name UpdateSeriesComment
     * @summary update a series comment
     * @request PATCH:/series/{id}/comments/{comment_id}
     * @secure
     * @response `200` `MUApiResponseV1` Series comment was updated
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role or own the series comment
     * @response `404` `void` Series or comment not found
     * @response `412` `void` Five second update delay
     */
    export namespace UpdateSeriesComment {
        export type RequestParams = {
            /** id of series comment */
            commentId: number;
            /** id of series */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUSeriesCommentModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags series
     * @name UpdateSeriesImage
     * @summary update the image of an series
     * @request POST:/series/{id}/image
     * @secure
     * @response `200` `MUApiResponseV1` Image was updated
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `403` `void` Field is locked
     * @response `404` `void` Series not found
     * @response `412` `void` Five second update delay
     */
    export namespace UpdateSeriesImage {
        export type RequestParams = {
            /**
             * id of series
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = {
            /**
             * Image to update
             * @format binary
             */
            image?: File;
        };
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags series
     * @name UpdateUserSeriesRating
     * @summary update the user rating for a series
     * @request PUT:/series/{id}/rating
     * @secure
     * @response `200` `MUApiResponseV1` Series rating was updated
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `404` `void` Series not found
     */
    export namespace UpdateUserSeriesRating {
        export type RequestParams = {
            /**
             * id of series
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUSeriesRatingModelV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }
}

export namespace Membergroups {
    /**
     * No description
     * @tags members
     * @name AddOrUpdateUserGroup
     * @summary add or update a user group
     * @request PUT:/membergroups/{id}
     * @secure
     * @response `200` `MUApiResponseV1` user group was added or updated
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     */
    export namespace AddOrUpdateUserGroup {
        export type RequestParams = {
            /** user group id */
            id: string;
        };
        export type RequestQuery = {};
        export type RequestBody = MUUserGroupModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags members
     * @name DeleteUserGroup
     * @summary delete a user group
     * @request DELETE:/membergroups/{id}
     * @secure
     * @response `200` `MUApiResponseV1` User group was deleted
     * @response `401` `void` User does not have correct role
     * @response `404` `void` user group not found
     */
    export namespace DeleteUserGroup {
        export type RequestParams = {
            /** id of user group */
            id: string;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags members
     * @name RetrieveUserGroupById
     * @summary get user group
     * @request GET:/membergroups/{id}
     * @secure
     * @response `200` `MUUserGroupModelV1` Return user group
     */
    export namespace RetrieveUserGroupById {
        export type RequestParams = {
            /** user group id */
            id: string;
        };
        export type RequestQuery = {
            /** Output fields in unrendered form for editing */
            unrenderedFields?: boolean;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUUserGroupModelV1;
    }

    /**
     * No description
     * @tags members
     * @name RetrieveUserGroups
     * @summary get user groups
     * @request GET:/membergroups
     * @secure
     * @response `200` `(MUUserGroupModelV1)[]` Return User Groups
     */
    export namespace RetrieveUserGroups {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUUserGroupModelV1[];
    }
}

export namespace Members {
    /**
     * No description
     * @tags members
     * @name AddMember
     * @summary add a member
     * @request POST:/members
     * @secure
     * @response `200` `MUApiResponseV1` Member was added
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `412` `void` Five second update delay
     */
    export namespace AddMember {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = MUUserModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags members
     * @name AddMemberAvatar
     * @summary add a new member avatar
     * @request POST:/members/{id}/avatar
     * @secure
     * @response `200` `MUApiResponseV1` Image was added
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `403` `void` User does not have permission
     * @response `404` `void` Member not found
     * @response `412` `void` Five second update delay
     */
    export namespace AddMemberAvatar {
        export type RequestParams = {
            /**
             * Member id
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = {
            /**
             * Image to update
             * @format binary
             */
            image?: File;
            /** Title of the new avatar */
            title?: string;
        };
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags members
     * @name AddMemberChangeRequest
     * @summary add a change request
     * @request POST:/members/{id}/requests
     * @secure
     * @response `200` `MUApiResponseV1` Change request was added
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `403` `void` User does not have permission
     * @response `404` `void` Record not found
     * @response `412` `void` Five second update delay
     */
    export namespace AddMemberChangeRequest {
        export type RequestParams = {
            /**
             * Member id
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUUserChangeRequestModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags members
     * @name AddMemberGenreFilter
     * @summary filter a genre for a user
     * @request POST:/members/{id}/genre/{genre_id}/filter
     * @secure
     * @response `200` `MUApiResponseV1` Filter was added
     * @response `400` `MUApiResponseV1` Service or validation error
     * @response `401` `void` Member does not have correct role
     * @response `403` `void` User does not have permission
     * @response `404` `void` Member not found
     */
    export namespace AddMemberGenreFilter {
        export type RequestParams = {
            /** genre id */
            genreId: number;
            /**
             * id of member
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags members
     * @name AddMemberGenreHighlight
     * @summary highlight a genre for a user
     * @request POST:/members/{id}/genre/{genre_id}/highlight
     * @secure
     * @response `200` `MUApiResponseV1` Highlight was added
     * @response `400` `MUApiResponseV1` Service or validation error
     * @response `401` `void` Member does not have correct role
     * @response `403` `void` User does not have permission
     * @response `404` `void` Member not found
     */
    export namespace AddMemberGenreHighlight {
        export type RequestParams = {
            /** genre id */
            genreId: number;
            /**
             * id of member
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUUserGenreHighlightModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags members
     * @name AddUserGroupFilter
     * @summary filter a group for a user
     * @request POST:/members/{id}/group/{group_id}/filter
     * @secure
     * @response `200` `MUApiResponseV1` Filter was added
     * @response `400` `MUApiResponseV1` Service or validation error
     * @response `401` `void` Member does not have correct role
     * @response `403` `void` User does not have permission
     * @response `404` `void` Member not found
     */
    export namespace AddUserGroupFilter {
        export type RequestParams = {
            /** group id */
            groupId: number;
            /**
             * id of member
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags members
     * @name AddUserTopicSubscription
     * @summary add a topic subscription for a user
     * @request POST:/members/{id}/topics/{topic_id}
     * @secure
     * @response `200` `MUApiResponseV1` Topic Subscription was added
     * @response `400` `MUApiResponseV1` Service or validation error
     * @response `401` `void` Member does not have correct role
     * @response `403` `void` User does not have permission
     * @response `404` `void` Member or Forum/Topic not found
     */
    export namespace AddUserTopicSubscription {
        export type RequestParams = {
            /**
             * id of member
             * @format int64
             */
            id: number;
            /** topic id */
            topicId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags members
     * @name ApproveMemberUpgrade
     * @summary upgrade a member
     * @request POST:/members/{id}/upgrade/approve
     * @secure
     * @response `200` `MUApiResponseV1` Member was upgraded
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `404` `void` Member not found
     */
    export namespace ApproveMemberUpgrade {
        export type RequestParams = {
            /** Member id */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags members
     * @name DeleteMember
     * @summary delete a member
     * @request DELETE:/members/{id}
     * @secure
     * @response `200` `MUApiResponseV1` Member was deleted
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `404` `void` Member not found
     * @response `412` `void` Five second update delay
     */
    export namespace DeleteMember {
        export type RequestParams = {
            /** Member id */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags members
     * @name DeleteMemberAvatar
     * @summary delete a member avatar
     * @request DELETE:/members/{id}/avatar/{avatar_id}
     * @secure
     * @response `200` `MUApiResponseV1` Avatar was deleted
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `403` `void` User does not have permission
     * @response `404` `void` Member or avatar not found
     * @response `412` `void` Five second update delay
     */
    export namespace DeleteMemberAvatar {
        export type RequestParams = {
            /**
             * Avatar id
             * @format int64
             */
            avatarId: number;
            /**
             * Member id
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags members
     * @name DeleteMemberChangeRequest
     * @summary add a change request
     * @request DELETE:/members/{id}/requests/{request_id}
     * @secure
     * @response `200` `MUApiResponseV1` Change request was deleted
     * @response `401` `void` User does not have correct role
     * @response `403` `void` User does not have permission
     * @response `404` `void` Record not found
     * @response `412` `void` Five second update delay
     */
    export namespace DeleteMemberChangeRequest {
        export type RequestParams = {
            /**
             * Member id
             * @format int64
             */
            id: number;
            /**
             * Change request id
             * @format int64
             */
            requestId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags members
     * @name DeleteMemberSessions
     * @summary delete all a members sessions
     * @request DELETE:/members/{id}/sessions
     * @secure
     * @response `200` `MUApiResponseV1` Member sessions were deleted
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `403` `void` User does not have correct role
     * @response `404` `void` Member not found
     */
    export namespace DeleteMemberSessions {
        export type RequestParams = {
            /** Member id */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags members
     * @name RejectMemberUpgrade
     * @summary reject a member upgrade
     * @request POST:/members/{id}/upgrade/reject
     * @secure
     * @response `200` `MUApiResponseV1` Member upgrade was rejected
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `404` `void` Member not found
     */
    export namespace RejectMemberUpgrade {
        export type RequestParams = {
            /** Member id */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags members
     * @name RemoveMemberGenreFilter
     * @summary remove a filter for a genre for a user
     * @request DELETE:/members/{id}/genre/{genre_id}/filter
     * @secure
     * @response `200` `MUApiResponseV1` Filter was removed
     * @response `400` `MUApiResponseV1` Service or validation error
     * @response `401` `void` Member does not have correct role
     * @response `403` `void` User does not have permission
     * @response `404` `void` Member not found
     */
    export namespace RemoveMemberGenreFilter {
        export type RequestParams = {
            /** genre id */
            genreId: number;
            /**
             * id of member
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags members
     * @name RemoveMemberGenreHighlight
     * @summary remove a highlight for a genre for a user
     * @request DELETE:/members/{id}/genre/{genre_id}/highlight
     * @secure
     * @response `200` `MUApiResponseV1` Highlight was removed
     * @response `400` `MUApiResponseV1` Service or validation error
     * @response `401` `void` Member does not have correct role
     * @response `403` `void` User does not have permission
     * @response `404` `void` Member not found
     */
    export namespace RemoveMemberGenreHighlight {
        export type RequestParams = {
            /** genre id */
            genreId: number;
            /**
             * id of member
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags members
     * @name RemoveUserGroupFilter
     * @summary remove a filter for a group for a user
     * @request DELETE:/members/{id}/group/{group_id}/filter
     * @secure
     * @response `200` `MUApiResponseV1` Filter was removed
     * @response `400` `MUApiResponseV1` Service or validation error
     * @response `401` `void` Member does not have correct role
     * @response `403` `void` User does not have permission
     * @response `404` `void` Member not found
     */
    export namespace RemoveUserGroupFilter {
        export type RequestParams = {
            /** group id */
            groupId: number;
            /**
             * id of member
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags members
     * @name RemoveUserTopicSubscription
     * @summary remove a topic subscription for a user
     * @request DELETE:/members/{id}/topics/{topic_id}
     * @secure
     * @response `200` `MUApiResponseV1` Topic subscription was removed
     * @response `400` `MUApiResponseV1` Service or validation error
     * @response `401` `void` Member does not have correct role
     * @response `403` `void` User does not have permission
     * @response `404` `void` Member not found
     */
    export namespace RemoveUserTopicSubscription {
        export type RequestParams = {
            /**
             * id of member
             * @format int64
             */
            id: number;
            /** topic id */
            topicId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags members
     * @name ResetGenreSettings
     * @summary reset genre highlights and filters for a user
     * @request POST:/members/{id}/genre/reset
     * @secure
     * @response `200` `MUApiResponseV1` Filters and highlights were reset
     * @response `401` `void` Member does not have correct role
     * @response `403` `void` User does not have permission
     * @response `404` `void` Member not found
     */
    export namespace ResetGenreSettings {
        export type RequestParams = {
            /**
             * id of member
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags members
     * @name RetrieveMember
     * @summary get a specific members
     * @request GET:/members/{id}
     * @secure
     * @response `200` `MUUserModelV1` Return user record
     * @response `404` `void` Member not found
     */
    export namespace RetrieveMember {
        export type RequestParams = {
            /**
             * Member id
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {
            /** Output fields in unrendered form for editing */
            unrenderedFields?: boolean;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUUserModelV1;
    }

    /**
     * No description
     * @tags members
     * @name RetrieveMemberAvatars
     * @summary get avatars for a specific user
     * @request GET:/members/{id}/avatars
     * @secure
     * @response `200` `(MUAvatarModelV1)[]` Return user record
     * @response `404` `void` Member not found
     */
    export namespace RetrieveMemberAvatars {
        export type RequestParams = {
            /**
             * Member id
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUAvatarModelV1[];
    }

    /**
     * No description
     * @tags members
     * @name RetrieveMemberChangeRequest
     * @summary get change requests for a specific user
     * @request GET:/members/{id}/requests/{request_id}
     * @secure
     * @response `200` `MUUserChangeRequestModelV1` Return member change requests
     * @response `403` `void` User does not have permission
     * @response `404` `void` Record not found
     */
    export namespace RetrieveMemberChangeRequest {
        export type RequestParams = {
            /**
             * Member id
             * @format int64
             */
            id: number;
            /**
             * Change request id
             * @format int64
             */
            requestId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUUserChangeRequestModelV1;
    }

    /**
     * No description
     * @tags members
     * @name RetrieveMemberGenreFilters
     * @summary get genre filters for a specific user
     * @request GET:/members/{id}/genre/filters
     * @secure
     * @response `200` `(MUUserGenreFilterModelV1)[]` Return member filter records
     * @response `403` `void` User does not have permission
     * @response `404` `void` Member not found
     */
    export namespace RetrieveMemberGenreFilters {
        export type RequestParams = {
            /**
             * Member id
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUUserGenreFilterModelV1[];
    }

    /**
     * No description
     * @tags members
     * @name RetrieveMemberGenreHighlights
     * @summary get highlights for a specific user
     * @request GET:/members/{id}/genre/highlights
     * @secure
     * @response `200` `(MUUserGenreHighlightModelV1)[]` Return member highlight records
     * @response `403` `void` User does not have permission
     * @response `404` `void` Member not found
     */
    export namespace RetrieveMemberGenreHighlights {
        export type RequestParams = {
            /**
             * Member id
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUUserGenreHighlightModelV1[];
    }

    /**
     * No description
     * @tags members
     * @name RetrieveMemberGroupFilters
     * @summary get group filters for a specific user
     * @request GET:/members/{id}/group/filters
     * @secure
     * @response `200` `(MUUserGroupFilterModelV1)[]` Return member filter records
     * @response `403` `void` User does not have permission
     * @response `404` `void` Member not found
     */
    export namespace RetrieveMemberGroupFilters {
        export type RequestParams = {
            /**
             * Member id
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUUserGroupFilterModelV1[];
    }

    /**
     * No description
     * @tags members
     * @name RetrieveMemberTopicSubscription
     * @summary get a subscription to a specific topic for a user
     * @request GET:/members/{id}/topics/{topic_id}
     * @secure
     * @response `200` `MUUserSubscribedTopicModelV1` Return member topic subscriptions
     * @response `403` `void` User does not have permission
     * @response `404` `void` Member or subscription not found
     */
    export namespace RetrieveMemberTopicSubscription {
        export type RequestParams = {
            /**
             * Member id
             * @format int64
             */
            id: number;
            /**
             * Topic id
             * @format int64
             */
            topicId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUUserSubscribedTopicModelV1;
    }

    /**
     * No description
     * @tags members
     * @name RetrieveMemberTopicSubscriptions
     * @summary get topic subscriptions for a specific user
     * @request GET:/members/{id}/topics
     * @secure
     * @response `200` `(MUUserSubscribedTopicModelV1)[]` Return member topic subscriptions
     * @response `403` `void` User does not have permission
     * @response `404` `void` Member not found
     */
    export namespace RetrieveMemberTopicSubscriptions {
        export type RequestParams = {
            /**
             * Member id
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUUserSubscribedTopicModelV1[];
    }

    /**
     * No description
     * @tags members
     * @name RetrieveSessions
     * @summary get a specific member sessions if they exists
     * @request GET:/members/{id}/sessions
     * @secure
     * @response `200` `MUUserSessionResponseV1` Return session records
     * @response `403` `void` Permission denied
     * @response `404` `void` Member not found
     */
    export namespace RetrieveSessions {
        export type RequestParams = {
            /**
             * Member id
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUUserSessionResponseV1;
    }

    /**
     * No description
     * @tags members
     * @name SearchMemberChangeRequests
     * @summary search change requests for a specific user
     * @request GET:/members/{id}/requests
     * @secure
     * @response `200` `MUUserChangeRequestSearchResponseV1` Return member change requests
     * @response `403` `void` User does not have permission
     * @response `404` `void` Record not found
     */
    export namespace SearchMemberChangeRequests {
        export type RequestParams = {
            /**
             * Member id
             * @format int64
             */
            id: number;
        };
        export type RequestQuery = {
            /**
             * Direction of results
             * @default "asc"
             */
            asc?: "asc" | "desc";
            /**
             * order by field
             * @default "time"
             */
            orderby?: "score" | "time";
            /** Start page */
            page?: number;
            /** Items per page */
            perpage?: number;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MUUserChangeRequestSearchResponseV1;
    }

    /**
     * No description
     * @tags members
     * @name SearchMembersPost
     * @summary search members
     * @request POST:/members/search
     * @secure
     * @response `200` `MUUserSearchResponseV1` Return user records
     */
    export namespace SearchMembersPost {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = MUUserSearchRequestV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUUserSearchResponseV1;
    }

    /**
     * No description
     * @tags members
     * @name UpdateMember
     * @summary update a member
     * @request PATCH:/members/{id}
     * @secure
     * @response `200` `MUApiResponseV1` Member was updated
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `403` `void` User does not have permission
     * @response `404` `void` Member not found
     * @response `412` `void` Five second update delay
     */
    export namespace UpdateMember {
        export type RequestParams = {
            /** Member id */
            id: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUUserModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }

    /**
     * No description
     * @tags members
     * @name UpdateMemberChangeRequest
     * @summary update a change request
     * @request PATCH:/members/{id}/requests/{request_id}
     * @secure
     * @response `200` `MUApiResponseV1` Change request was updated
     * @response `400` `MUApiResponseV1` Validation or service error
     * @response `401` `void` User does not have correct role
     * @response `403` `void` User does not have permission
     * @response `404` `void` Record not found
     * @response `412` `void` Five second update delay
     */
    export namespace UpdateMemberChangeRequest {
        export type RequestParams = {
            /**
             * Member id
             * @format int64
             */
            id: number;
            /**
             * Change request id
             * @format int64
             */
            requestId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = MUUserChangeRequestModelUpdateV1;
        export type RequestHeaders = {};
        export type ResponseBody = MUApiResponseV1;
    }
}
