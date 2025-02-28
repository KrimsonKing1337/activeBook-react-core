/// <reference types="react" />
type VideoProps = React.MediaHTMLAttributes<HTMLVideoElement> & {
    className?: string;
    src: string;
    relativeVolume?: number;
};
export declare const Video: ({ className, src, relativeVolume, muted, autoPlay, ...etc }: VideoProps) => import("react/jsx-runtime").JSX.Element;
export {};
