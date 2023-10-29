import { ChangeEventHandler, CSSProperties } from "react";
export interface InputProps {
    id?: string;
    label?: string;
    isMandtory?: boolean;
    disabled?: boolean;
    placeholder?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    style?: CSSProperties;
    className?: string;
    type?: "text" | "email" | "number";
}
