import { gql } from '../../lib/strapi';

export const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: String!) {
    posts(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          title
          content
          slug
          publishedAt
        }
      }
    }
  }
`; 