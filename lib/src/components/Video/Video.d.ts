/// <reference types="react" />
type VideoProps = React.MediaHTMLAttributes<HTMLVideoElement> & {
    className?: string;
    src: string;
    defaultVolume?: number;
};
export declare const Video: ({ className, src, defaultVolume, ...etc }: VideoProps) => import("react/jsx-runtime").JSX.Element;
export {};
