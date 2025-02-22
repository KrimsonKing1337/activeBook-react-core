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
    img?: UseBackgroundImgOptions;
    video?: UseBackgroundVideoOptions;
    shadow?: UseBackgroundShadowOptions;
    Component?: React.ReactNode;
};
export declare const useBackground: ({ style, img, video, shadow, Component, }: UseBackgroundOptions) => void;
