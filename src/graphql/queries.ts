import { gql } from 'graphql-request';
import { GRAPHQL_FRAMENTS } from './fragments';

export const GRAPHQL_QUERIES = gql`
  ${GRAPHQL_FRAMENTS}
  ## APENAS UMA CONSULTA
  query GET_POSTS(
    $categorySlug: String
    $postSlug: String
    $postSearch: String
    $authorSlug: String
    $tagSlug: String
    $start: Int = 0
    $limit: Int = 10
  ){
    setting{
      ..._setting
    }

      posts(
      filters: {
        slug: { eq: $postSlug}
        author: { slug: { eq: $authorSlug} }
        catergories: { slug: { eq: $categorySlug} }
        tags: { slug: { eq: $tagSlug} }

        content: { contains: $postSearch}
      }
      sort: "publishedAt:DESC"

      ## PAGINATION
      pagination: { start: $start, limit: $limit }
    ){
      ..._posts
    }
  }
`;
