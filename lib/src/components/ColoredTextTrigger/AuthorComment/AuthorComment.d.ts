import { PropsWithChildren } from 'react';
export type ActionProps = {
    [name: string]: any;
    isDemoMode?: boolean;
    onClick?: () => void;
};
export declare const AuthorComment: ({ isDemoMode, onClick, children, ...props }: PropsWithChildren<ActionProps>) => import("react/jsx-runtime").JSX.Element;
