import { PropsWithChildren, useEffect, useRef, useState } from 'react';

import classNames from 'classnames';
import { Interval, Timer } from '@types';
import { Modal, ModalProps } from 'components/Modal';

import styles from './ModalDialog.scss';

type Func = () => void;

export type ModalDialogProps = ModalProps & {
  cantCloseIn?: number;
  showOkButton?: boolean;
  showCancelButton?: boolean;
  onConfirm: Func;
  onCancel: Func;
}

const defaultFunc = () => {
};

let timer: Timer = null;
let interval: Interval = null;

export const ModalDialog = ({
  isOpen,
  cantCloseIn = 0,
  showOkButton = true,
  showCancelButton = true,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onClose = defaultFunc,
  onConfirm = defaultFunc,
  onCancel = defaultFunc,
  children,
  ...rest
}: PropsWithChildren<ModalDialogProps>) => {
  const [canClose, setCanClose] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(0);

  useEffect(() => {
    if (!isOpen) {
      if (interval) {
        clearInterval(interval);
      }

      return;
    }

    interval = setInterval(() => {
      if (secondsLeftRef.current <= 0) {
        if (interval) {
          clearInterval(interval);
        }

        return;
      }

      secondsLeftRef.current = secondsLeftRef.current - 1;
      setSecondsLeft(secondsLeftRef.current);
    }, 1000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      if (timer) {
        clearTimeout(timer);
      }

      return;
    }

    secondsLeftRef.current = cantCloseIn / 1000;

    setSecondsLeft(secondsLeftRef.current);

    timer = setTimeout(() => {
      setCanClose(true);
    }, cantCloseIn);

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isOpen, cantCloseIn]);

  const buttonOkClickHandler = () => {
    if (canClose) {
      onConfirm();
    }
  };

  const buttonCancelClickHandler = () => onCancel();
  const closeHandler = () => {
    onCancel();
  };

  const buttonConfirmClassNames = classNames({
    [styles.buttonConfirm]: true,
    [styles.canClose]: canClose,
  });

  const buttonCancelClassNames = classNames({
    [styles.buttonCancel]: true,
    [styles.canClose]: canClose,
  });

  const confirmButtonLabel = secondsLeft ? `Ок (${secondsLeft})` : 'Ок';
  const cancelButtonLabel = secondsLeft ? `Отмена (${secondsLeft})` : 'Отмена';

  return (
    <Modal
      isOpen={isOpen}
      canClose={canClose}
      onClose={closeHandler}
      {...rest}
    >
      <div className={styles.wrapper}>
        <div className="ModalDialogDesc">
          {children}
        </div>

        <div className={styles.actions}>
          {showOkButton && (
            <button type="button" className={buttonConfirmClassNames} onClick={buttonOkClickHandler}>
              {confirmButtonLabel}
            </button>
          )}

          {showCancelButton && (
            <button type="button" className={buttonCancelClassNames} onClick={buttonCancelClickHandler}>
              {cancelButtonLabel}
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
};
