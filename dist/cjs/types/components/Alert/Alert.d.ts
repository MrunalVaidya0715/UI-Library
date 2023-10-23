import React from "react";
import { AlertProps } from "./Alert.types";
declare const Alert: ({ variant, title, description, children, onClose, style, className, ...props }: AlertProps) => React.JSX.Element;
export { Alert };
