/// <reference types="react" />
export type UseBackgroundMediaPosition = 'center' | 'left' | 'right' | 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
export type UseBackgroundMediaOptions = {
    src: string;
    style?: React.CSSProperties;
    wrapperStyle?: React.CSSProperties;
};
export type UseBackgroundImgOptions = UseBackgroundMediaOptions;
export type UseBackgroundVideoOptions = UseBackgroundMediaOptions & {
    loop?: boolean;
    autoPlay?: boolean;
    muted?: boolean;
};
export type UseBackgroundShadowOptions = {
    style?: React.CSSProperties;
};
export type UseBackgroundOptions = {
    style?: React.CSSProperties;
    images?: UseBackgroundImgOptions[];
    videos?: UseBackgroundVideoOptions[];
    Component?: React.ReactNode;
    shadow?: UseBackgroundShadowOptions;
};
export declare const useBackground: ({ style, images, videos, Component, shadow, }: UseBackgroundOptions) => void;
