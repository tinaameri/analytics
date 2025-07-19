import { gql } from '../../lib/strapi';

export const CREATE_POST = gql`
  mutation CreatePost($title: String!, $content: String!) {
    createPost(data: { title: $title, content: $content }) {
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