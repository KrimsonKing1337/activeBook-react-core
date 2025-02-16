/// <reference types="react" />
type ImgProps = React.HTMLAttributes<HTMLImageElement> & {
    className?: string;
    src: string;
};
export declare const Img: ({ className, src, ...etc }: ImgProps) => import("react/jsx-runtime").JSX.Element;
export {};
