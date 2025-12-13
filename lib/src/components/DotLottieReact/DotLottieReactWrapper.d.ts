import { type PropsWithChildren } from 'react';
export type DotLottieReactWrapperProps = PropsWithChildren & React.HTMLAttributes<HTMLDivElement> & {
    className?: string;
    amount?: number;
};
export declare const DotLottieReactWrapper: ({ children, amount, className, ...etc }: DotLottieReactWrapperProps) => import("react/jsx-runtime").JSX.Element;
