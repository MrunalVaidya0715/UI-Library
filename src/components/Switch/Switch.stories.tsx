import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {Switch} from "./Switch";

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: "SimpliUI/Switch",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = (args) => (
  <Switch data-testId="InputField-id" {...args} />
);
Default.args = {
  primary: true,
  disabled: false,
};
