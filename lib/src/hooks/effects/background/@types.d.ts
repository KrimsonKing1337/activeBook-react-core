export type BackgroundEffectMediaPosition = 'center' | 'left' | 'right' | 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
export type BackgroundEffectMediaOptions = {
    src: string;
    style?: React.CSSProperties;
};
export type UseBackgroundEffectImageOptions = BackgroundEffectMediaOptions;
export type BackgroundEffectVideoOptions = BackgroundEffectMediaOptions & {
    id: string;
    loop?: boolean;
    autoPlay?: boolean;
    muted?: boolean;
    relativeVolume?: number;
};
export type BackgroundEffectShadowOptions = {
    style?: React.CSSProperties;
    show?: boolean;
};
export type BackgroundEffect = {
    id: string;
    inRange?: boolean;
    style?: React.CSSProperties;
    images?: UseBackgroundEffectImageOptions[];
    videos?: BackgroundEffectVideoOptions[];
    Component?: React.ReactNode;
    shadow?: BackgroundEffectShadowOptions;
};
