/// <reference types="react" />
type VideoProps = React.MediaHTMLAttributes<HTMLVideoElement> & {
    passedRef?: React.RefObject<HTMLVideoElement>;
    className?: string;
    src: string;
};
export declare const Video: ({ passedRef, className, src, ...etc }: VideoProps) => import("react/jsx-runtime").JSX.Element;
export {};
