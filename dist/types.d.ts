import React$1, { MouseEventHandler, CSSProperties, ChangeEventHandler, TextareaHTMLAttributes, FormEventHandler } from 'react';

interface ButtonProps {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    onClick?: MouseEventHandler<HTMLButtonElement>;
    style?: CSSProperties;
    className?: string;
}

declare const Button: ({ size, primary, disabled, text, onClick, style, className, ...props }: ButtonProps) => React$1.JSX.Element;

interface InputProps {
    id?: string;
    label?: string;
    error?: boolean;
    message?: string;
    success?: boolean;
    disabled?: boolean;
    placeholder?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    style?: CSSProperties;
    className?: string;
    type?: "text" | "email" | "number";
}

declare const Input: ({ id, disabled, label, message, error, success, onChange, placeholder, style, className, type, ...props }: InputProps) => React$1.JSX.Element;

declare const Switch: () => React$1.JSX.Element;

interface ToggleButtonProps {
    isActive?: boolean;
    children?: React.ReactNode;
    style?: CSSProperties;
    className?: string;
}

declare const Toggle: ({ isActive, children, style, className }: ToggleButtonProps) => React$1.JSX.Element;

interface TooltipProps {
    message?: string;
    children?: React.ReactNode;
    position?: "top" | "bottom" | "left" | "right";
    style?: CSSProperties;
    className?: string;
}

declare const Tooltip: ({ message, position, children, style, className }: TooltipProps) => React$1.JSX.Element;

interface BadgeProps {
    text?: string;
    variant?: "primary" | "secondary" | "outline" | "destructive";
    style?: CSSProperties;
    className?: string;
}

declare const Badge: ({ text, variant, style, className, ...props }: BadgeProps) => React$1.JSX.Element;

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
    style?: CSSProperties;
    className?: string;
}

declare const TextArea: ({ label, variant, style, className, ...props }: TextareaProps) => React$1.JSX.Element;

interface ProgressProps {
    value?: number;
    minValue?: number;
    maxValue?: number;
    showValue?: boolean;
    style?: CSSProperties;
    className?: string;
}

declare const Progress: ({ value, minValue, maxValue, showValue, style, className, ...props }: ProgressProps) => React$1.JSX.Element;

interface SliderProps {
    value: number;
    maxValue?: number;
    step?: number;
    onChange?: (value: number) => void;
}

declare const Slider: ({ value, maxValue, step, onChange, }: SliderProps) => React$1.JSX.Element;

interface SelectProps {
    options: string[];
    value: string | string[] | null;
    onChange: (value: string | string[] | null) => void;
    variant?: "single" | "multiple";
    label?: string;
    style?: CSSProperties;
    className?: string;
}

declare const Select: ({ options, value, onChange, variant, label, style, className, ...props }: SelectProps) => React$1.JSX.Element;

interface CheckboxProps {
    label?: string;
    checked?: boolean;
    onChange?: (isChecked: boolean) => void;
    style?: CSSProperties;
    className?: string;
}

declare const Checkbox: ({ label, checked, onChange, style, className, ...props }: CheckboxProps) => React$1.JSX.Element;

interface RadioProps {
    label: string;
    value: string;
    checked: boolean;
    onChange: () => void;
}

declare const Radio: ({ label, value, checked, onChange }: RadioProps) => React$1.JSX.Element;

interface FormProps {
    title?: string;
    children?: React.ReactNode;
    onSubmit?: FormEventHandler<HTMLFormElement>;
    style?: CSSProperties;
    className?: string;
}

declare const Form: ({ title, children, onSubmit, style, className, ...props }: FormProps) => React$1.JSX.Element;

interface PasswordProps {
    placeholder?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    style?: CSSProperties;
    className?: string;
}

declare const Password: ({ placeholder, onChange, style, className, ...props }: PasswordProps) => React$1.JSX.Element;

interface AlertProps {
    variant?: "default" | "destructive";
    title?: string;
    description?: string;
    children?: React.ReactNode;
    onClose?: () => void;
    style?: CSSProperties;
    className?: string;
}

declare const Alert: ({ variant, title, description, children, onClose, style, className, ...props }: AlertProps) => React$1.JSX.Element;

export { Accordion, AccordionItem, Alert, Badge, Button, Checkbox, Form, Input, Password, Progress, Radio, Select, Slider, Switch, TextArea, Toggle, Tooltip };
