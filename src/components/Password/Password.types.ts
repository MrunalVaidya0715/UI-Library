import { ChangeEventHandler, CSSProperties } from "react";
export interface PasswordProps {
  placeholder?: string;
  isMandtory?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  style?: CSSProperties;
  className?: string;
}
