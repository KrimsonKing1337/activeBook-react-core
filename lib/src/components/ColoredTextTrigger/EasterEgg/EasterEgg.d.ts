import { PropsWithChildren } from 'react';
export type EasterEggProps = {
    [key: string]: any;
    id: string;
    onClick?: () => void;
};
export declare const EasterEgg: ({ id, children, onClick, ...rest }: PropsWithChildren<EasterEggProps>) => import("react/jsx-runtime").JSX.Element;
