import { PropsWithChildren } from 'react';
export type PageWrapperProps = {
    withoutToolbar?: boolean;
    sbMode?: boolean;
    BackgroundComponent?: React.ReactNode;
};
export declare const PageWrapper: ({ children, BackgroundComponent, withoutToolbar, sbMode, }: PropsWithChildren<PageWrapperProps>) => import("react/jsx-runtime").JSX.Element;
