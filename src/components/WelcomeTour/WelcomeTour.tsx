import { useEffect, useState } from 'react';

import { toast } from 'react-toastify';

import { Action, Button } from 'components';

import { useVibration } from 'hooks/effects/vibration';

import { Modal, Segments } from './components';

import { localStorageId, getWelcomeTourTextById, removeHighLight, setHighLight } from './utils';

import styles from './WelcomeTour.scss';

export type WelcomeTourProps = {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
  isModalActive: boolean;
  setIsModalActive: (isActive: boolean) => void;
};

const elementsIdsArray = [
  'action',
  'segments',
  'bookmarks',
  'navigation',
  'font',
  'config',
];

export const WelcomeTour = ({ isActive, setIsActive, isModalActive, setIsModalActive }: WelcomeTourProps) => {
  const { vibrationOn } = useVibration();

  const [idIndex, setIdIndex] = useState(0);
  const [nextButtonLabel, setNextButtonLabel] = useState('Далее');

  useEffect(() => {
    if (!isActive) {
      removeHighLight();

      return;
    }

    setHighLight('action');
  }, [isActive]);

  const actionClickHandler = () => {
    vibrationOn(1000);

    toast.success('Отлично!');
  };

  const nextButtonClickHandler = () => {
    removeHighLight();

    if (idIndex === elementsIdsArray.length - 2) {
      setNextButtonLabel('Закончить знакомство');
    }

    if (idIndex === elementsIdsArray.length - 1) {
      setIsActive(false);

      localStorage.setItem(localStorageId, 'true');

      return;
    }

    const newIndex = idIndex + 1;
    const newId = elementsIdsArray[newIndex];

    setIdIndex(newIndex);
    setHighLight(newId);
  };

  const modalConfirmHandler = () => {
    setIsModalActive(false);
    setIsActive(true);
  };

  const elementId = elementsIdsArray[idIndex];

  const { header, desc } = getWelcomeTourTextById(elementId);

  return (
    <>
      <Modal isActive={isModalActive} onConfirm={modalConfirmHandler} />

      {isActive && (
        <div className={styles.Wrapper}>
          <div className={styles.Card}>
            <p className={styles.CardHeader}>
              {header}
            </p>

            <p>
              {desc}
            </p>

            <Button type="success" className={styles.CardButton} onClick={nextButtonClickHandler}>
              {nextButtonLabel}
            </Button>
          </div>

          <div data-welcome-tour-id="action" className={styles.ActionWrapper}>
            <Action fullWidth onClick={actionClickHandler}>
              Выделенный текст
            </Action>
          </div>

          <Segments />
        </div>
      )}
    </>
  );
};
