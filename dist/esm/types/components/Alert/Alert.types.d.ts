import { CSSProperties } from "react";
export interface AlertProps {
    variant?: "default" | "destructive";
    title?: string;
    description?: string;
    children?: React.ReactNode;
    onClose?: () => void;
    style?: CSSProperties;
    className?: string;
}
