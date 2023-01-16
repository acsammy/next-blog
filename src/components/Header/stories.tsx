import { Meta, Story } from '@storybook/react/types-6-0';
import { Header, HeaderPrpos } from '.';
import mock from './mock';

export default {
  title: 'Header',
  component: Header,
  args: mock,
} as Meta;

export const Template: Story<HeaderPrpos> = (args) => {
  return (
    <div>
      <Header {...args} />
    </div>
  );
};
