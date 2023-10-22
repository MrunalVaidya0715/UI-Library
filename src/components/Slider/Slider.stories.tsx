import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {Slider} from "./Slider";

const meta: Meta<typeof Slider> = {
  component: Slider,
  title: "SimpliUI/Slider",
  argTypes: {
    onChange: { action: "changed" },
  },
};

export default meta;

type SliderStory = StoryObj<typeof Slider>;

export const Default: SliderStory = (args) => <Slider {...args} />;
Default.args = {
  defaultValue: 50,
  maxValue: 100,
  step: 1,
};
