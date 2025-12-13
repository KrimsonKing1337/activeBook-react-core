import { PropsWithChildren } from 'react';
export type ItemProps = React.HTMLAttributes<HTMLImageElement> & {
    className?: string;
};
export declare const Item: ({ children, className, ...etc }: PropsWithChildren<ItemProps>) => import("react/jsx-runtime").JSX.Element;
