import type { PropsWithChildren } from 'react';
export type WrapperProps = React.HTMLAttributes<HTMLDivElement> & PropsWithChildren & {
    className?: string;
};
export declare const Wrapper: ({ children, className, ...etc }: WrapperProps) => import("react/jsx-runtime").JSX.Element;
