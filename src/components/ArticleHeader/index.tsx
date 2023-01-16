import { Author } from 'shared-types/author';
import { Category } from 'shared-types/category';
import { StrapiImage } from 'shared-types/strapi-image';
import { ArticleMeta } from '../ArticleMeta';
import { Heading } from '../Heading';
import { Cover, Excerpt, Wrapper } from './styles';

export type ArticleHeaderProps = {
  id: string;
  title: string;
  excerpt: string;
  cover: StrapiImage;
  author: Author;
  categories: Category[];
  createdAt: string;
};

export const ArticleHeader = ({
  title,
  excerpt,
  cover,
  author,
  categories,
  createdAt,
}: ArticleHeaderProps) => {
  return (
    <Wrapper>
      <Heading size="big">{title}</Heading>
      <Excerpt>{excerpt}</Excerpt>
      <Cover src={cover.url} alt={title} />
      <ArticleMeta
        categories={categories}
        author={author}
        createdAt={createdAt}
      />
    </Wrapper>
  );
};
