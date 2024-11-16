import {
    ContentRating,
    MangaProviding,
    SourceManga,
    Tag,
    TagSection,
} from "@paperback/types";
import { MediaStatus } from "../../GraphQL/General";
import {
    TitleView,
    titleViewQuery,
    TitleViewQueryVariables,
} from "../../GraphQL/TitleView";
import makeRequest from "../../Services/Requests";

export class MangaImplementation implements MangaProviding {
    async getMangaDetails(mangaId: string): Promise<SourceManga> {
        const queryVariables: TitleViewQueryVariables = {
            id: Number(mangaId),
        };

        const json = await makeRequest<TitleView, TitleViewQueryVariables>(
            titleViewQuery,
            false,
            queryVariables,
        );

        const mangaDetails = json.Media;

        const synopsis = mangaDetails.description
            ? mangaDetails.description.replace(
                  /<br>|<i>|<\/i>|<a.*?>|<\/a>/g,
                  "",
              )
            : "No description";

        const secondaryTitles = [];
        for (const title of Object.values(mangaDetails.title)) {
            if (title == undefined) {
                continue;
            }

            secondaryTitles.push(title);
        }

        let status;
        switch (mangaDetails.status) {
            case MediaStatus.FINISHED.id:
                status = MediaStatus.FINISHED.label;
                break;
            case MediaStatus.NOT_YET_RELEASED.id:
                status = MediaStatus.NOT_YET_RELEASED.label;
                break;
            case MediaStatus.CANCELLED.id:
                status = MediaStatus.CANCELLED.label;
                break;
            case MediaStatus.HIATUS.id:
                status = MediaStatus.HIATUS.label;
                break;
            case MediaStatus.RELEASING.id:
                status = MediaStatus.RELEASING.label;
        }

        let author, artist;
        for (const staff of mangaDetails.staff.edges) {
            if (staff.role.startsWith("Story & Art")) {
                author = staff.node.name.full;
                artist = undefined;
                break;
            }
            if (
                !author &&
                (staff.role.startsWith("Story") ||
                    staff.role.startsWith("Original Story"))
            ) {
                author = staff.node.name.full;
                if (author && artist) break;
            }
            if (staff.role.startsWith("Art")) {
                artist = staff.node.name.full;
                if (author && artist) break;
            }
        }

        const rating = mangaDetails.averageScore
            ? mangaDetails.averageScore / 100
            : undefined;

        const genres: Tag[] = [];
        for (const genre of mangaDetails.genres) {
            genres.push({
                id: genre.replaceAll(" ", "-").toLowerCase(),
                title: genre,
            });
        }

        const tags: Tag[] = [];
        for (const tag of mangaDetails.tags) {
            genres.push({
                id: tag.id.toString().replaceAll(" ", "-").toLowerCase(),
                title: tag.name,
            });
        }

        const tagGroups: TagSection[] = [
            { id: "genres", title: "Genres", tags: genres },
            { id: "tags", title: "Tags", tags: tags },
        ];

        const contentRating: ContentRating = mangaDetails.isAdult
            ? ContentRating.ADULT
            : genres.some((e) => e.id == "ecchi")
              ? ContentRating.MATURE
              : ContentRating.EVERYONE;

        const artworkUrls = [mangaDetails.coverImage.extraLarge];

        if (mangaDetails.bannerImage != null) {
            artworkUrls.push(mangaDetails.bannerImage);
        }

        // TODO: Implement additional info

        return {
            mangaId,
            mangaInfo: {
                thumbnailUrl: mangaDetails.coverImage.extraLarge,
                synopsis,
                primaryTitle: secondaryTitles[0] ?? "No Title",
                secondaryTitles,
                contentRating,
                status,
                artist,
                author,
                bannerUrl: mangaDetails.bannerImage ?? undefined,
                rating,
                tagGroups,
                artworkUrls,
                shareUrl: "https://anilist.co/manga/" + mangaId,
            },
        };
    }
}
