import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Select from './Select';

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'SimpliUI/Select',
  argTypes: {},
};

export default meta;

type SelectStory = StoryObj<typeof Select>;

export const SingleSelect: SelectStory = (args) => {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <Select
      {...args}
      variant="single"
      options={['Option 1', 'Option 2', 'Option 3']}
      value={selectedOption}
      onChange={(value) => setSelectedOption(value)}
      label='Select Option'
    />
  );
};
SingleSelect.args = {
  variant: 'single',
};

export const MultipleSelect: SelectStory = (args) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  return (
    <Select
      {...args}
      variant="multiple"
      options={['Option A', 'Option B', 'Option C', 'Option K', 'Option E']}
      value={selectedOptions}
      onChange={(value) => setSelectedOptions(value)}
      
    />
  );
};
MultipleSelect.args = {
  variant: 'multiple',
};
