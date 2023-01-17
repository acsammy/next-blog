import { Heading } from 'components/Heading';
import Link from 'next/link';
import React from 'react';
import { StrapiImage } from 'shared-types/strapi-image';
import { Cover, Excerpt, Wrapper } from './styles';

export type PostCardProps = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  cover: StrapiImage;
};

export const PostCard = ({
  id,
  title,
  slug,
  excerpt,
  cover,
}: PostCardProps) => {
  return (
    <Wrapper key={id}>
      <Link href={`/post/${slug}`}>
        <Cover src={cover.url} alt={title} />
      </Link>
      <Heading as="h3" size="small">
        <Link href={`/post/${slug}`}>{title}</Link>
      </Heading>
      <Excerpt>{excerpt}</Excerpt>
    </Wrapper>
  );
};
