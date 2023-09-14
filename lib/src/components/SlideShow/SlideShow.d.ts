import { PropsWithChildren } from 'react';
type SlideShowMode = 'modal' | null;
export type SlideShowProps = {
    isVisible?: boolean;
    isWithoutBorders?: boolean;
    mode?: SlideShowMode;
    onSlideChange?: () => void;
};
export declare const SlideShow: ({ children, isVisible, mode, isWithoutBorders, onSlideChange, }: PropsWithChildren<SlideShowProps>) => import("react/jsx-runtime").JSX.Element;
export {};
