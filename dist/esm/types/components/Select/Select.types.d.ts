import { CSSProperties } from "react";
export interface SelectProps {
    options: string[];
    value: string | string[] | null;
    onChange: (value: string | string[] | null) => void;
    variant?: "single" | "multiple";
    label?: string;
    style?: CSSProperties;
    className?: string;
}
