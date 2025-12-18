import { PropsWithChildren } from 'react';
import { ModalProps } from 'components/Modal';
export type TriggerType = 'action' | 'author' | 'egg';
export type ModalWithVideoEasterEggProps = {
    mode?: ModalProps['mode'];
    text: string;
    triggerType: TriggerType;
    eggId?: string;
};
export declare const WithModal: ({ children, mode, text, triggerType, eggId, }: PropsWithChildren<ModalWithVideoEasterEggProps>) => import("react/jsx-runtime").JSX.Element;
