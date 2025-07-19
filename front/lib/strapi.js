import { gql as _gql, GraphQLClient } from 'graphql-request';

export const PAGINATION_POSTS_PER_PAGE = 16;
export const ALL_POSTS = 1600;
export const PAGINATION_SEARCH_POSTS_PER_PAGE = 100;
export const CMS_BASE_URL = process.env.NEXT_PUBLIC_CMS_BASE_URL 
// || "https://school.smartech.ir/api";
export const GRAPHQL_STRAPI_ENDPOINT = `${CMS_BASE_URL}/graphql`;
export const IMAGES_BASE_URL = CMS_BASE_URL;
export const BASE_URL = 'https://school.smartech.ir';

export const strapiClient = new GraphQLClient(GRAPHQL_STRAPI_ENDPOINT, {
  headers: {},
});

export const gql = _gql;

export const REVALIDATE_RATE = 300; // 5 minutes 