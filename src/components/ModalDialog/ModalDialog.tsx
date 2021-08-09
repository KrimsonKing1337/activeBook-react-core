import React from 'react';

import { Modal, ModalProps } from 'components/Modal';

import styles from './ModalDialog.scss';

type Func = () => void;

export type ModalDialogProps = ModalProps & {
  onConfirm: Func;
  onCancel: Func;
  children: React.ReactNode;
}

const defaultFunc = () => {};

export const ModalDialog = ({
  closeFunction = defaultFunc,
  onConfirm = defaultFunc,
  onCancel = defaultFunc,
  children,
  ...rest
}: ModalDialogProps) => {
  const buttonOkClickHandler = () => onConfirm();
  const buttonCancelClickHandler = () => onCancel();
  const closeHandler = () => {
    onCancel();
  };

  return (
    <Modal closeFunction={closeHandler} {...rest}>
      <div className={styles.wrapper}>
        <div className={'ModalDialogDesc'}>
          {children}
        </div>

        <div className={styles.actions}>
          <button type="button" className={styles.buttonConfirm} onClick={buttonOkClickHandler}>
            Ок
          </button>

          <button type="button" className={styles.buttonCancel} onClick={buttonCancelClickHandler}>
            Отмена
          </button>
        </div>
      </div>
    </Modal>
  );
};
