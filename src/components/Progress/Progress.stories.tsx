import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {Progress} from "./Progress";

const meta: Meta<typeof Progress> = {
  component: Progress,
  title: "SimpliUI/Progress",
  argTypes: {
    value: {
      type: { name: "number", required: true },
      description: "Value for the progress (0-100)",
      control: "number",
    },
  },
};

export default meta;

type ProgressStory = StoryObj<typeof Progress>;

export const Default: ProgressStory = (args) => <Progress {...args} />;
Default.args = {
  value: 50,
  showValue: true,
};
