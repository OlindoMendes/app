import gql from 'graphql-tag'
export const TRENDING_REPO_DETAILS_QUERY = gql`
    query ($login: String!, $first: Int!, $after: String) {
  user(login: $login) {
    id
    name
    login
    avatarUrl
    bio
    repositories(first: $first, after: $after) {
      totalCount
      edges {
        cursor
        node {
          id
          name
          description
          updatedAt
          primaryLanguage {
            id
            name
          }
        }
      }
    }
  }
}`