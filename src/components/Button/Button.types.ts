import { MouseEventHandler,HTMLProps, CSSProperties } from "react";

export interface ButtonProps {
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
  className?: string;
}