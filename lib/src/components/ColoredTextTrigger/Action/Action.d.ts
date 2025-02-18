import { PropsWithChildren } from 'react';
export type ActionProps = React.HTMLAttributes<HTMLDivElement> & {
    fullWidth?: boolean;
    withSpaces?: boolean;
    onClick?: () => void;
};
export declare const Action: ({ children, fullWidth, withSpaces, onClick, ...props }: PropsWithChildren<ActionProps>) => import("react/jsx-runtime").JSX.Element;
