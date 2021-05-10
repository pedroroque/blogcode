import { Story, Meta } from '@storybook/react';

import { Header } from '../components/header/Header';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta;

const Template: Story = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
