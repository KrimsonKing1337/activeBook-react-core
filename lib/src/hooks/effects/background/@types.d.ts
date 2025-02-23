/// <reference types="react" />
export type BackgroundEffectMediaPosition = 'center' | 'left' | 'right' | 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
export type BackgroundEffectMediaOptions = {
    src: string;
    style?: React.CSSProperties;
    wrapperStyle?: React.CSSProperties;
};
export type UseBackgroundEffectImageOptions = BackgroundEffectMediaOptions;
export type BackgroundEffectVideoOptions = BackgroundEffectMediaOptions & {
    loop?: boolean;
    autoPlay?: boolean;
    muted?: boolean;
};
export type BackgroundEffectShadowOptions = {
    style?: React.CSSProperties;
};
export type BackgroundEffect = {
    id?: string;
    style?: React.CSSProperties;
    images?: UseBackgroundEffectImageOptions[];
    videos?: BackgroundEffectVideoOptions[];
    Component?: React.ReactNode;
    shadow?: BackgroundEffectShadowOptions;
};
