import { Meta, Story } from '@storybook/react/types-6-0';
import { PostTags, PostTagsProps } from '.';
import mock from './mock';

export default {
  title: 'PostTags',
  component: PostTags,
  args: mock,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<PostTagsProps>;

export const Template: Story<PostTagsProps> = (args) => {
  return (
    <div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
        aperiam, illo nihil quisquam commodi fugit odio placeat quam reiciendis
        vitae, magni iste error, ullam consectetur nostrum? Maiores doloribus
        adipisci facere.
      </p>
      <PostTags {...args} />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
        aperiam, illo nihil quisquam commodi fugit odio placeat quam reiciendis
        vitae, magni iste error, ullam consectetur nostrum? Maiores doloribus
        adipisci facere.
      </p>
    </div>
  );
};

export const NoTags: Story<PostTagsProps> = (args) => {
  return (
    <div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
        aperiam, illo nihil quisquam commodi fugit odio placeat quam reiciendis
        vitae, magni iste error, ullam consectetur nostrum? Maiores doloribus
        adipisci facere.
      </p>
      <PostTags {...args} tags={undefined} />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
        aperiam, illo nihil quisquam commodi fugit odio placeat quam reiciendis
        vitae, magni iste error, ullam consectetur nostrum? Maiores doloribus
        adipisci facere.
      </p>
    </div>
  );
};
