import { gql } from 'graphql-request';
import { strapiClient } from '../../lib/strapi';

export async function getSinglePage(slug) {
  const DYNAMIC_PAGE_QUERY = gql`
    query GET_PAGE($slug: String!) {
      dynamicPages(filters: { slug: { eq: $slug } }) {
        page_dynamic_sections {
          __typename
          ... on ComponentPageSectionHeroSection {
            id
            inner_background {
              image {
                url
                alternativeText
              }
              color
            }
            outer_background {
              image {
                url
                alternativeText
              }
              color
            }
            content
            image {
              url
              alternativeText
            }
            buttons {
              label
              href
              icon
              variant
              color
              image{
                url
                alternativeText
              }
            }
          }
        }
      }
    }
  `;
  const response = await strapiClient?.request(DYNAMIC_PAGE_QUERY, {
    slug,
  });
  return {pageData: response.dynamicPages[0]|| null};
}
