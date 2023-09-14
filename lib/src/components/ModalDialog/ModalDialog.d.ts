import { PropsWithChildren } from 'react';
import { ModalProps } from '../Modal';
type Func = () => void;
export type ModalDialogProps = ModalProps & {
    cantCloseIn?: number;
    showOkButton?: boolean;
    showCancelButton?: boolean;
    onConfirm: Func;
    onCancel: Func;
};
export declare const ModalDialog: ({ isOpen, cantCloseIn, showOkButton, showCancelButton, onClose, onConfirm, onCancel, children, ...rest }: PropsWithChildren<ModalDialogProps>) => import("react/jsx-runtime").JSX.Element;
export {};
