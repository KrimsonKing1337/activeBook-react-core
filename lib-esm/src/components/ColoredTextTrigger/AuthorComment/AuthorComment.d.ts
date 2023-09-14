import { PropsWithChildren } from 'react';
export type ActionProps = {
    [name: string]: any;
    onClick?: () => void;
};
export declare const AuthorComment: ({ onClick, children, ...props }: PropsWithChildren<ActionProps>) => import("react/jsx-runtime").JSX.Element;
