import { ChangeEventHandler, CSSProperties } from "react";
export interface PasswordProps {
    placeholder?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    style?: CSSProperties;
    className?: string;
}
