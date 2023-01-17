import Link from 'next/link';
import React from 'react';
import { Tag } from 'shared-types/tags';
import { Wrapper } from './styles';

export type PostTagsProps = {
  tags?: Tag[];
};

export const PostTags = ({ tags = [] }: PostTagsProps) => {
  if (tags.length === 0) {
    return null;
  }

  return (
    <Wrapper>
      Tags: {'  '}
      {tags.map((tag) => (
        <span key={tag.id}>
          <Link key={tag.id} href={`/tag/${tag.slug}`}>
            {tag.displayName}
          </Link>
        </span>
      ))}
    </Wrapper>
  );
};
