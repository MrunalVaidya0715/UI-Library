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
    <AccordionItem value="Title-1">
      Cross-browser Support
    </AccordionItem>
    <AccordionItem value="Title-2">
      Accessible
    </AccordionItem>
    <AccordionItem value="Title-3">
      Customizable
    </AccordionItem>
  </Accordion>
);
Default.args = {
  collapsible: true,
};

