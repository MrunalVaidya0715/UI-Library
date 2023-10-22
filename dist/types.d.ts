import React$1 from 'react';

interface AccordionProps {
    collapsible?: boolean;
    children?: React.ReactNode;
}
interface AccordionItemProps {
    value?: string;
    activeItem?: string | null;
    onClick?: (value: string) => void;
    children: React.ReactNode;
}

declare const Accordion: ({ collapsible, children }: AccordionProps) => React$1.JSX.Element;
declare const AccordionItem: ({ value, activeItem, onClick, children, }: AccordionItemProps) => React$1.JSX.Element;

export { Accordion, AccordionItem };
