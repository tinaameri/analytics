import { gql } from '../../lib/strapi';

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      data {
        id
        attributes {
          title
          content
        }
      }
    }
  }
`; 