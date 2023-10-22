import React$1, { MouseEventHandler, ChangeEventHandler, TextareaHTMLAttributes } from 'react';

interface ButtonProps {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

declare const Button: ({ size, primary, disabled, text, onClick, ...props }: ButtonProps) => React$1.JSX.Element;

interface InputProps {
    id?: string;
    label?: string;
    error?: boolean;
    message?: string;
    success?: boolean;
    disabled?: boolean;
    placeholder?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

declare const Input: ({ id, disabled, label, message, error, success, onChange, placeholder, ...props }: InputProps) => React$1.JSX.Element;

declare const Switch: () => React$1.JSX.Element;

interface ToggleButtonProps {
    isActive?: boolean;
    children?: React.ReactNode;
}

declare const Toggle: ({ isActive, children }: ToggleButtonProps) => React$1.JSX.Element;

interface TooltipProps {
    message?: string;
    children?: React.ReactNode;
    position?: "top" | "bottom" | "left" | "right";
}

declare const Tooltip: ({ message, position, children }: TooltipProps) => React$1.JSX.Element;

interface BadgeProps {
    text?: string;
    variant?: "primary" | "secondary" | "outline" | "destructive";
}

declare const Badge: ({ text, variant }: BadgeProps) => React$1.JSX.Element;

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

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    variant?: "default" | "withLabel" | "disabled";
}

declare const TextArea: ({ label, variant, ...rest }: TextareaProps) => React$1.JSX.Element;

interface ProgressProps {
    value?: number;
    minValue?: number;
    maxValue?: number;
}

declare const Progress: ({ value, minValue, maxValue }: ProgressProps) => React$1.JSX.Element;

interface SliderProps {
    defaultValue: number;
    maxValue: number;
    step: number;
    onChange?: (value: number) => void;
}

declare const Slider: ({ defaultValue, maxValue, step, onChange, }: SliderProps) => React$1.JSX.Element;

interface SelectProps {
    options: string[];
    value: string | string[] | null;
    onChange: (value: string | string[] | null) => void;
    variant?: "single" | "multiple";
    label?: string;
}

declare const Select: ({ options, value, onChange, variant, label }: SelectProps) => React$1.JSX.Element;

interface CheckboxProps {
    label?: string;
    checked?: boolean;
    onChange?: (isChecked: boolean) => void;
}

declare const Checkbox: ({ label, checked, onChange }: CheckboxProps) => React$1.JSX.Element;

interface RadioProps {
    label: string;
    value: string;
    checked: boolean;
    onChange: () => void;
}

declare const Radio: ({ label, value, checked, onChange }: RadioProps) => React$1.JSX.Element;

interface FormProps {
    title: string;
    children: React.ReactNode;
    onSubmit: () => void;
}

declare const Form: ({ title, children, onSubmit }: FormProps) => React$1.JSX.Element;

interface PasswordProps {
    placeholder?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

declare const Password: ({ placeholder, onChange, ...props }: PasswordProps) => React$1.JSX.Element;

interface AlertProps {
    variant?: 'default' | 'destructive';
    title?: string;
    description?: string;
    children?: React.ReactNode;
    onClose?: () => void;
}

declare const Alert: ({ variant, title, description, children, onClose, }: AlertProps) => React$1.JSX.Element;

export { Accordion, AccordionItem, Alert, Badge, Button, Checkbox, Form, Input, Password, Progress, Radio, Select, Slider, Switch, TextArea, Toggle, Tooltip };
