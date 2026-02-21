import { useEffect, useState } from 'react';

import { toast } from 'react-toastify';

import { useDispatch } from 'store';
import { configActions } from 'store/config';

import { useVibration } from 'hooks/effects/vibration';

import { Action, Button, P } from 'components';

import { Modal, Segments } from './components';

import { getWelcomeTourTextById, removeHighLight, setHighLight } from './utils';

import * as styles from './WelcomeTour.scss';

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
  const dispatch = useDispatch();

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
    vibrationOn(500);

    toast.success('Отлично!');
  };

  const nextButtonClickHandler = () => {
    removeHighLight();

    if (idIndex === elementsIdsArray.length - 2) {
      setNextButtonLabel('Закончить знакомство');
    }

    if (idIndex === elementsIdsArray.length - 1) {
      setIsActive(false);

      dispatch(configActions.setWelcomeTour(false));

      return;
    }

    const newIndex = idIndex + 1;
    const newId = elementsIdsArray[newIndex];

    setIdIndex(newIndex);
    setHighLight(newId);
  };

  const skipButtonClickHandler = () => {
    setIsActive(false);

    dispatch(configActions.setWelcomeTour(false));
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
            <P className={styles.CardHeader}>
              {header}
            </P>

            <P>
              {desc}
            </P>

            <Button type="success" className={styles.CardButton} onClick={nextButtonClickHandler}>
              {nextButtonLabel}
            </Button>

            <Button type="secondary" className={styles.SkipButton} onClick={skipButtonClickHandler}>
              Пропустить обучение
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
