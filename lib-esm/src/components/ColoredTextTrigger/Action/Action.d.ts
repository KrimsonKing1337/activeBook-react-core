import { PropsWithChildren } from 'react';
export type ActionProps = {
    onClick?: () => void;
    fullWidth?: boolean;
    [name: string]: any;
};
export declare const Action: ({ children, fullWidth, onClick, ...props }: PropsWithChildren<ActionProps>) => import("react/jsx-runtime").JSX.Element;
