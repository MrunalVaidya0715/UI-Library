import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Tooltip from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: "SimpliUI/Tooltip",
  argTypes: {},
};
export default meta;

type TooltipStory = StoryObj<{ message: string; position: "top" | "bottom" | "left" | "right" }>;

export const TopPosition: TooltipStory = (args) => (
  <Tooltip {...args}>Hover me</Tooltip>
);
TopPosition.args = {
  message: "This is a custom tooltip message.",
  position: "top",
};

export const BottomPosition: TooltipStory = (args) => (
  <Tooltip {...args}>Hover me</Tooltip>
);
BottomPosition.args = {
  message: "This is a custom tooltip message.",
  position: "bottom",
};

export const LeftPosition: TooltipStory = (args) => (
  <Tooltip {...args}>Hover me</Tooltip>
);
LeftPosition.args = {
  message: "This is a custom tooltip message.",
  position: "left",
};

export const RightPosition: TooltipStory = (args) => (
  <Tooltip {...args}>Hover me</Tooltip>
);
RightPosition.args = {
  message: "This is a custom tooltip message.",
  position: "right",
};
