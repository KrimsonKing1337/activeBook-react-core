import { PropsWithChildren } from 'react';
export type SpoilerProps = React.HTMLAttributes<HTMLDivElement> & {
    label?: string;
    isOpenDefault?: boolean;
    needToSetHeight?: boolean;
    setNeedToSetHeightToFalse?: () => void;
};
export declare const Spoiler: ({ children, label, isOpenDefault, needToSetHeight, setNeedToSetHeightToFalse, ...rest }: PropsWithChildren<SpoilerProps>) => import("react/jsx-runtime").JSX.Element;
