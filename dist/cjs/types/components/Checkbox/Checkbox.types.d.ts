import { CSSProperties } from "react";
export interface CheckboxProps {
    label?: string;
    checked?: boolean;
    onChange?: (isChecked: boolean) => void;
    style?: CSSProperties;
    className?: string;
}
