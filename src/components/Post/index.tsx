import React from 'react';
import { ArticleHeader, ArticleHeaderProps } from 'components/ArticleHeader';
import { HtmlContent } from 'components/HtmlContent';
import { Wrapper } from './styles';

export type PostProps = ArticleHeaderProps & {
  content: string;
};

export const Post = ({
  id,
  title,
  excerpt,
  cover,
  author,
  categories,
  createdAt,
  content,
}: PostProps) => {
  return (
    <Wrapper>
      <ArticleHeader
        key={id}
        title={title}
        excerpt={excerpt}
        cover={cover}
        author={author}
        categories={categories}
        createdAt={createdAt}
        id={id}
      />
      <HtmlContent html={content} />
    </Wrapper>
  );
};
