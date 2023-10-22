import React from "react";
import { AccordionProps, AccordionItemProps } from "./Accordion.types";
declare const Accordion: ({ collapsible, children }: AccordionProps) => React.JSX.Element;
declare const AccordionItem: ({ value, activeItem, onClick, children, }: AccordionItemProps) => React.JSX.Element;
export { Accordion, AccordionItem };
