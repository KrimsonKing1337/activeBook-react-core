import { PropsWithChildren } from 'react';
export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
    className?: string;
    type?: 'primary' | 'secondary' | 'success' | 'error';
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
export declare const Button: ({ children, type, disabled, onClick, ...etc }: PropsWithChildren<ButtonProps>) => import("react/jsx-runtime").JSX.Element;
