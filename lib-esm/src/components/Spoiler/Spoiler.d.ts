import { PropsWithChildren } from 'react';
export type SpoilerProps = {
    label?: string;
    needToSetHeight?: boolean;
    setNeedToSetHeightToFalse?: () => void;
    [name: string]: any;
};
export declare const Spoiler: ({ children, label, needToSetHeight, setNeedToSetHeightToFalse, ...rest }: PropsWithChildren<SpoilerProps>) => import("react/jsx-runtime").JSX.Element;
