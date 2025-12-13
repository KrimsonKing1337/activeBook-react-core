/// <reference types="react" />
type ImgProps = React.HTMLAttributes<HTMLImageElement> & {
    passedRef?: React.RefObject<HTMLImageElement>;
    className?: string;
    src: string;
};
export declare const Img: ({ passedRef, className, src, ...etc }: ImgProps) => import("react/jsx-runtime").JSX.Element;
export {};
