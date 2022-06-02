import { gql } from "@apollo/client";

export const GET_ALL_ANIME = gql`
query ($id: Int, $page: Int, $perPage: Int, $search: String) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media (id: $id, search: $search) {
        id
        title {
          romaji
        },
        bannerImage,
        genres,
        episodes
      }
    }
  }
`;