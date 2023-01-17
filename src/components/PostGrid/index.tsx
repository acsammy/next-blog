import React from 'react';
import { PostCard, PostCardProps } from '../PostCard';
import { Grid, NotFound, Wrapper } from './styles';

export type PostGridProps = {
  posts?: PostCardProps[];
};

export const PostGrid = ({ posts = [] }: PostGridProps) => {
  return (
    <Wrapper>
      {posts.length === 0 && <NotFound>Nenhum post encontrado =( </NotFound>}

      <Grid>
        {posts.length > 0 &&
          posts.map((post) => (
            <PostCard id={post.id} key={`post-card-${post.id}`} {...post} />
          ))}
      </Grid>
    </Wrapper>
  );
};
