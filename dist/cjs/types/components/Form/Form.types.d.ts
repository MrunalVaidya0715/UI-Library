import { CSSProperties, FormEventHandler } from 'react';
export interface FormProps {
    title?: string;
    children?: React.ReactNode;
    onSubmit?: FormEventHandler<HTMLFormElement>;
    style?: CSSProperties;
    className?: string;
}
