import { PropsWithChildren } from 'react';
export type PageWrapperProps = {
    withoutToolbar?: boolean;
    sbMode?: boolean;
    bgColor?: string;
    shadowColor?: string;
    backgroundComponent?: {
        Component: React.ReactNode;
        withShadow?: boolean;
    };
};
export declare const PageWrapper: ({ children, backgroundComponent, withoutToolbar, sbMode, bgColor, shadowColor, }: PropsWithChildren<PageWrapperProps>) => import("react/jsx-runtime").JSX.Element;
