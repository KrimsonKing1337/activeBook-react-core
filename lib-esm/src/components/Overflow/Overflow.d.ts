import { PropsWithChildren } from 'react';
export type OverflowProps = React.HTMLAttributes<HTMLDivElement> & PropsWithChildren & {
    isOpen: boolean;
    className?: string;
};
export declare const Overflow: ({ children, isOpen, className, ...etc }: OverflowProps) => import("react/jsx-runtime").JSX.Element;
