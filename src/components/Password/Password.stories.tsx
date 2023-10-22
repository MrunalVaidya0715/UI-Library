import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {Password} from "./Password";

export default {
  title: "SimpliUI/Password",
  component: Password,
} as Meta;
type Story = StoryObj<typeof Password>;

export const Default: Story = (args) => <Password {...args} />;

Default.args = {
  placeholder: "Enter Password",
  
};
