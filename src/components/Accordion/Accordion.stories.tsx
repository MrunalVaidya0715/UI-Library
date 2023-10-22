import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionItem } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: "SimpliUI/Accordion",
  argTypes: {},
};
export default meta;

type AccordionStory = StoryObj<{
  collapsible: boolean;
}>;

export const Default: AccordionStory = (args) => (
  <Accordion {...args}>
    <AccordionItem value="item-1">
      Is it accessible?
    </AccordionItem>
    <AccordionItem value="item-2">
      How does it work?
    </AccordionItem>
    <AccordionItem value="item-3">
      Is it customizable?
    </AccordionItem>
  </Accordion>
);
Default.args = {
  collapsible: true,
};

