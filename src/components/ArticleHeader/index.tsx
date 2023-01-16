import { StrapiImage } from 'shared-types/strapi-image';
import { ArticleMeta, ArticleMetaPrpos } from '../ArticleMeta';
import { Heading } from '../Heading';
import { Cover, Excerpt, Wrapper } from './styles';

export type ArticleHeaderProps = {
  id: string;
  title: string;
  excerpt: string;
  cover: StrapiImage;
} & ArticleMetaPrpos;

export const ArticleHeader = ({
  id,
  title,
  excerpt,
  cover,
  author,
  categories,
  createdAt,
}: ArticleHeaderProps) => {
  return (
    <Wrapper key={id}>
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
