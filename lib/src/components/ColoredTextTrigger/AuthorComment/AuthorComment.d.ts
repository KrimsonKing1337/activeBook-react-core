import { PropsWithChildren } from 'react';
export type ActionProps = React.HTMLAttributes<HTMLSpanElement> & {
    className?: string;
    onClick?: () => void;
};
export declare const AuthorComment: ({ children, className, onClick, ...etc }: PropsWithChildren<ActionProps>) => import("react/jsx-runtime").JSX.Element;
