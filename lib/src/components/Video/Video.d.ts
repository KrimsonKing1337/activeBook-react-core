type VideoProps = React.MediaHTMLAttributes<HTMLVideoElement> & {
    id: string;
    className?: string;
    src: string;
    relativeVolume?: number;
};
export declare const Video: ({ id, className, src, relativeVolume, muted, autoPlay, ...etc }: VideoProps) => import("react/jsx-runtime").JSX.Element;
export {};
