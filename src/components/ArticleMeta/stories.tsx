import { Meta, Story } from '@storybook/react/types-6-0';
import { ArticleMeta, ArticleMetaPrpos } from '.';
import mock from './mock';

export default {
  title: 'ArticleMeta',
  component: ArticleMeta,
  args: mock,
  argTypes: {
    createdAt: {
      control: {
        type: 'date',
      },
    },
  },
} as Meta<ArticleMetaPrpos>;

export const Template: Story<ArticleMetaPrpos> = (args) => {
  return (
    <div>
      <ArticleMeta {...args} />
    </div>
  );
};
