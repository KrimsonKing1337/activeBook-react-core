type Func = () => void;
export type ToggleProps = {
    [name: string]: any;
    label: string;
    isActiveDefault?: boolean;
    isActive?: boolean | undefined;
    withoutBorder?: boolean;
    onClickOn: Func;
    onClickOff: Func;
};
export declare const Toggle: ({ label, isActiveDefault, isActive, withoutBorder, onClickOn, onClickOff, ...rest }: ToggleProps) => import("react/jsx-runtime").JSX.Element;
export {};
