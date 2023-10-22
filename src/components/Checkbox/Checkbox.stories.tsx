import React from 'react';
import { Meta,  StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';

const meta: Meta = {
  component: Checkbox,
  title: 'SimpliUI/Checkbox',
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = (args) => (
  <Checkbox {...args} />
);
Default.args = {
  label: 'Checkbox Label',
  checked: false,
};
