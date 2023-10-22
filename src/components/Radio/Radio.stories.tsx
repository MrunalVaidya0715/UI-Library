import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {Radio} from './Radio';
import { RadioProps, RadioOption, RadioGroupProps } from './Radio.types';

export default {
  title: 'SimpliUI/Radio Group',
  component: Radio,
} as Meta;

export const Default: StoryObj<RadioProps> = (args) => {
  const [selectedValue, setSelectedValue] = useState<boolean>(false);

  return (
    <Radio {...args} checked={selectedValue} onChange={() => setSelectedValue(!selectedValue)} />
  );
};

Default.args = {
  label: 'Radio Label',
};

const options: RadioOption[] = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];

export const RadioGroup: StoryObj<RadioGroupProps> = (args) => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  return (
    <div>
      {args.options.map((option) => (
        <Radio
          key={option.value}
          label={option.label}
          value={option.value}
          checked={selectedValue === option.value}
          onChange={() => setSelectedValue(option.value)}
        />
      ))}
    </div>
  );
};

RadioGroup.args = {
  options: options,
};
