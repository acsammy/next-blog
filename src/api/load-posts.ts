import request from 'graphql-request';
import { GRAPHQL_QUERIES } from 'graphql/queries';
import { PostStrapi } from 'shared-types/post-strapi';
import { SettingsStrapi } from 'shared-types/settings-strapi';
import config from '../config';

export type LoadPostsVariable = {
  categorySlug?: string;
  postSlug?: string;
  postSearch?: string;
  authorSlug?: string;
  tagSlug?: string;
  start?: number;
  limit?: number;
};

export type StrapiPostAndSetting = {
  setting: SettingsStrapi;
  posts?: PostStrapi[];
};

export const loadPosts = async (
  variables: LoadPostsVariable = {},
): Promise<StrapiPostAndSetting> => {
  const defaultVariables: LoadPostsVariable = {
    start: 0,
    limit: 10,
  };

  const data = await request(config.graphqlURL, GRAPHQL_QUERIES, {
    ...defaultVariables,
    ...variables,
  });

  return data;
};
