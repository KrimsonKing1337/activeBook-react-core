import type { PropsWithChildren } from 'react';
type BackgroundComponentProps = React.HTMLAttributes<HTMLDivElement> & {
    className?: string;
    withShadow?: boolean;
};
export declare const BackgroundComponent: ({ children, className, withShadow, ...etc }: PropsWithChildren<BackgroundComponentProps>) => import("react/jsx-runtime").JSX.Element;
export {};
