import { PropsWithChildren } from 'react';
export type EasterEggProps = React.HTMLAttributes<HTMLSpanElement> & {
    id: string;
    className?: string;
    onClick?: () => void;
};
export declare const EasterEgg: ({ children, id, className, onClick, ...etc }: PropsWithChildren<EasterEggProps>) => import("react/jsx-runtime").JSX.Element;
