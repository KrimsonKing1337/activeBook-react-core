import { PropsWithChildren } from 'react';
export type ItemProps = {
    className?: string;
    [key: string]: any;
};
export declare const Item: ({ children, className, ...rest }: PropsWithChildren<ItemProps>) => import("react/jsx-runtime").JSX.Element;
