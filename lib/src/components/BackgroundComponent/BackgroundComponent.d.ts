import type { PropsWithChildren } from 'react';
type BackgroundComponentProps = React.HTMLAttributes<HTMLDivElement> & {
    className?: string;
    withShadow?: boolean;
};
export declare const BackgroundComponent: (props: PropsWithChildren<BackgroundComponentProps>) => import("react/jsx-runtime").JSX.Element;
export {};
