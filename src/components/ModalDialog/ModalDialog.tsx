import { type PropsWithChildren, useEffect, useRef, useState } from 'react';

import type { Interval, Timer } from '@types';

import { type ModalProps, Modal } from 'components/Modal';
import { Button } from 'components/Button';

import styles from './ModalDialog.scss';

type Func = () => void;

export type ModalDialogProps = ModalProps & {
  cantCloseIn?: number;
  showConfirmButton?: boolean;
  showCancelButton?: boolean;

  onConfirm?: Func;
  onCancel?: Func;
}

const defaultFunc = () => {
};

let timer: Timer = null;
let interval: Interval = null;

export const ModalDialog = ({
  isOpen,
  cantCloseIn = 0,
  showConfirmButton = true,
  showCancelButton = true,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onClose = defaultFunc,
  onConfirm = defaultFunc,
  onCancel = defaultFunc,
  children,
  ...etc
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

  const confirmButtonClickHandler = () => {
    if (canClose) {
      onConfirm();
    }
  };

  const cancelButtonClickHandler = () => {
    onCancel();
  };

  const closeHandler = () => {
    onCancel();
  };

  const confirmButtonLabel = secondsLeft ? `Ок (${secondsLeft})` : 'Ок';
  const cancelButtonLabel = secondsLeft ? `Отмена (${secondsLeft})` : 'Отмена';

  return (
    <Modal
      isOpen={isOpen}
      canClose={canClose}
      onClose={closeHandler}
      {...etc}
    >
      <div className={styles.wrapper}>
        <div className="ModalDialogDesc">
          {children}
        </div>

        <div className={styles.actions}>
          {showConfirmButton && (
            <Button type="success" disabled={!canClose} onClick={confirmButtonClickHandler}>
              {confirmButtonLabel}
            </Button>
          )}

          {showCancelButton && (
            <Button type="secondary" disabled={!canClose} onClick={cancelButtonClickHandler}>
              {cancelButtonLabel}
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
};
