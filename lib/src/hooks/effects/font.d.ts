/// <reference types="react" />
export type UseFontOptions = Pick<React.CSSProperties, 'color' | 'fontFamily' | 'fontSize' | 'fontSizeAdjust' | 'fontStretch' | 'fontStyle' | 'fontVariant' | 'fontWeight'>;
export declare const useFont: ({ color, ...style }: UseFontOptions) => void;
