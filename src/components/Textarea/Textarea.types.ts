import { TextareaHTMLAttributes, CSSProperties } from "react";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  variant?: "default" | "withLabel" | "disabled";
  style?: CSSProperties;
  className?: string;
}
