import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: "SimpliUI/Badge",
  argTypes: {},
};
export default meta;

type BadgeStory = StoryObj<{ text: string; variant: "primary" | "secondary" | "outline" | "destructive" }>;

export const Primary: BadgeStory = (args) => (
  <Badge {...args} />
);
Primary.args = {
  text: "Primary",
  variant: "primary",
};

export const Secondary: BadgeStory = (args) => (
  <Badge {...args} />
);
Secondary.args = {
  text: "Secondary",
  variant: "secondary",
};

export const Outline: BadgeStory = (args) => (
  <Badge {...args} />
);
Outline.args = {
  text: "Outline",
  variant: "outline",
};

export const Destructive: BadgeStory = (args) => (
  <Badge {...args} />
);
Destructive.args = {
  text: "Destructive",
  variant: "destructive",
};
