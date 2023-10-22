import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TextArea from "./Textarea";

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  title: "SimpliUI/Textarea",
  argTypes: {
    label: {
      type: { name: "string", required: false },
      description: "Label for the textarea",
      control: "text",
    },
    placeholder: {
      type: { name: "string", required: false },
      description: "Placeholder text",
      control: "text",
    },
    variant: {
      type: {
        name: "string",
        required: false,
      },
      description: "Textarea variant",
      control: { type: "select", options: ["default", "withLabel", "disabled"] },
    },
  },
};

export default meta;

type TextareaStory = StoryObj<typeof TextArea>;

export const Default: TextareaStory = (args) => (
  <TextArea {...args} placeholder="Enter text here" />
);
Default.args = {
  label: undefined,
  variant: "default",
};

export const WithLabel: TextareaStory = (args) => (
  <TextArea {...args} label="Label" placeholder="Enter text here" />
);
WithLabel.args = {
  variant: "withLabel",
};

export const Disabled: TextareaStory = (args) => (
  <TextArea {...args} label="Label" placeholder="Enter text here" disabled />
);
Disabled.args = {
  variant: "disabled",
};
