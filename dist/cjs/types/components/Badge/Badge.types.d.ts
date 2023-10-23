import { CSSProperties } from "react";
export interface BadgeProps {
    text?: string;
    variant?: "primary" | "secondary" | "outline" | "destructive";
    style?: CSSProperties;
    className?: string;
}
