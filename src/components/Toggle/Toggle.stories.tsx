import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Toggle from "./Toggle";
import {RiContrast2Fill} from "react-icons/ri"
const meta: Meta<typeof Toggle> = {
  component: Toggle,
  title: "SimpliUI/Toggle",
  argTypes: {},
};
export default meta;

type Story = StoryObj<{ icon: string }>; 

export const Default: Story = (args) => (
  <Toggle {...args} >
    <RiContrast2Fill/>
  </Toggle>
);
Default.args = {
  icon: "I", 
};
