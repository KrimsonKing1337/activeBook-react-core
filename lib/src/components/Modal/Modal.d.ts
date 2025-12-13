import { PropsWithChildren } from 'react';
type Func = () => void;
type ModalMode = 'media' | 'text';
export type ModalProps = {
    isOpen: boolean;
    onOpen?: Func;
    onClose?: Func;
    mode?: ModalMode;
    canClose?: boolean;
    canFullScreen?: boolean;
    fullScreenDefault?: boolean;
    canCrop?: boolean;
    cropDefault?: boolean;
};
export declare const Modal: ({ children, onClose, isOpen, mode, canClose, canFullScreen, fullScreenDefault, canCrop, cropDefault, }: PropsWithChildren<ModalProps>) => import("react/jsx-runtime").JSX.Element;
export {};
