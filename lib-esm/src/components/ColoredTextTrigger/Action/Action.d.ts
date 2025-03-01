import type { PropsWithChildren } from 'react';
export type ActionProps = React.HTMLAttributes<HTMLSpanElement> & {
    className?: string;
    fullWidth?: boolean;
    withSpaces?: boolean;
    onClick?: () => void;
};
export declare const Action: ({ children, className, fullWidth, withSpaces, onClick, ...etc }: PropsWithChildren<ActionProps>) => import("react/jsx-runtime").JSX.Element;
