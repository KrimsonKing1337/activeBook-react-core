/// <reference types="react" />
type ButtonProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    [name: string]: any;
};
export declare const Button: (props: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
