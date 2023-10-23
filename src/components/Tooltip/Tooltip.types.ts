import { CSSProperties } from "react";
export interface TooltipProps {
  message?: string;
  children?: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  style?: CSSProperties;
  className?: string;
}

