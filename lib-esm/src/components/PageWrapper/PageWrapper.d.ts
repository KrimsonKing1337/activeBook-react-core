import { PropsWithChildren } from 'react';
export type PageWrapperProps = {
    withoutToolbar?: boolean;
    sbMode?: boolean;
    backgroundComponent?: {
        Component: React.ReactNode;
        withShadow?: boolean;
    };
};
export declare const PageWrapper: ({ children, backgroundComponent, withoutToolbar, sbMode, }: PropsWithChildren<PageWrapperProps>) => import("react/jsx-runtime").JSX.Element;
