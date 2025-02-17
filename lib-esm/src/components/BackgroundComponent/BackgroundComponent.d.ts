import type { PropsWithChildren } from 'react';
type BackgroundComponentProps = React.HTMLAttributes<HTMLDivElement> & {
    className?: string;
    withShadow?: boolean;
    shadowColor?: string;
};
export declare const BackgroundComponent: ({ children, className, withShadow, shadowColor, ...etc }: PropsWithChildren<BackgroundComponentProps>) => import("react/jsx-runtime").JSX.Element;
export {};
