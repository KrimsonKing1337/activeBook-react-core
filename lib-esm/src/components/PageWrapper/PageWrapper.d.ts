import { PropsWithChildren } from 'react';
export type PageWrapperProps = {
    withoutToolbar?: boolean;
    sbMode?: boolean;
};
export declare const PageWrapper: ({ children, withoutToolbar, sbMode }: PropsWithChildren<PageWrapperProps>) => import("react/jsx-runtime").JSX.Element;
