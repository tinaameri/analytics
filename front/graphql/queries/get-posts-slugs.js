import { gql } from '../../lib/strapi';

export const GET_POSTS_SLUGS = gql`
  query GetPostsSlugs {
    posts {
      data {
        attributes {
          slug
        }
      }
    }
  }
`; 