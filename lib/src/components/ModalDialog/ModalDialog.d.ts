import { type PropsWithChildren } from 'react';
import { type ModalProps } from '../Modal';
type Func = () => void;
export type ModalDialogProps = ModalProps & {
    cantCloseIn?: number;
    showConfirmButton?: boolean;
    confirmButtonLabel?: string;
    showCancelButton?: boolean;
    cancelButtonLabel?: string;
    onConfirm?: Func;
    onCancel?: Func;
};
export declare const ModalDialog: ({ isOpen, cantCloseIn, showConfirmButton, confirmButtonLabel, cancelButtonLabel, showCancelButton, onClose, onConfirm, onCancel, children, ...etc }: PropsWithChildren<ModalDialogProps>) => import("react/jsx-runtime").JSX.Element;
export {};
