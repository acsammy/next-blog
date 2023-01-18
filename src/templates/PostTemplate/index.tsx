import { Post } from 'components/Post';
import { PostTags } from 'components/PostTags';
import React from 'react';
import { PostStrapi } from 'shared-types/post-strapi';
import { SettingsStrapi } from 'shared-types/settings-strapi';
import { BaseTemplate } from 'templates/Base';
import { TagsContainer } from './styles';

export type PostTemplateProps = {
  settings: SettingsStrapi;
  post: PostStrapi;
};

export const PostTemplate = ({ settings, post }: PostTemplateProps) => {
  return (
    <BaseTemplate settings={settings}>
      <Post {...post} />
      <TagsContainer>
        <PostTags tags={post.tags} />
      </TagsContainer>
    </BaseTemplate>
  );
};
