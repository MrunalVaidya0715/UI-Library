import React from "react";
import { ButtonProps } from "./Button.types";
declare const Button: ({ size, primary, disabled, text, onClick, ...props }: ButtonProps) => React.JSX.Element;
export { Button };
