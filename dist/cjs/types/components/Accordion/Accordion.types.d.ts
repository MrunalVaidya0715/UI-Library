/// <reference types="react" />
export interface AccordionProps {
    collapsible?: boolean;
    children?: React.ReactNode;
}
export interface AccordionItemProps {
    value?: string;
    activeItem?: string | null;
    onClick?: (value: string) => void;
    children: React.ReactNode;
    isActive?: boolean;
}
