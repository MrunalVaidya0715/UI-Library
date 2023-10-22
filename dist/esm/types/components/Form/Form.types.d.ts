/// <reference types="react" />
export interface FormProps {
    title: string;
    children: React.ReactNode;
    onSubmit: () => void;
}
