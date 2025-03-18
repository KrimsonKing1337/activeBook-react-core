import { useEffect, useState } from 'react';

import { toast } from 'react-toastify';

import { Action, Button, ModalDialog, Segment } from 'components';

import { useVibration } from 'hooks/effects/vibration';

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
  const { vibrationOn, vibrationOff } = useVibration();

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

  const segment1EnterHandler = () => {
    vibrationOn(1000);

    toast.success('Так держать!');
  };

  const segment2EnterHandler = () => {
    vibrationOn(1000);

    toast.success('Супер!');
  };

  const segmentExitHandler = () => {
    vibrationOff();
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

  const modalCloseHandler = () => {
    setIsModalActive(false);
    setIsActive(true);
  };

  const elementId = elementsIdsArray[idIndex];

  const { header, desc } = getWelcomeTourTextById(elementId);

  return (
    <>
      <ModalDialog
        isOpen={isModalActive}
        confirmButtonLabel="Хорошо"
        canFullScreen={false}
        showCancelButton={false}
        cantCloseIn={2000}
        onConfirm={modalCloseHandler}
      >
        <div>
          <header>
            Перед тем как начнём...
          </header>

          <article>
            <p>
              Познакомьтесь с возможностями книги
            </p>
          </article>
        </div>
      </ModalDialog>

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

          <div data-welcome-tour-id="segments">
            <Segment onEnter={segment1EnterHandler} onExit={segmentExitHandler}>
              <p>
                Нажми на меня
              </p>
            </Segment>

            <Segment onEnter={segment2EnterHandler} onExit={segmentExitHandler}>
              <p>
                И на меня нажми!
              </p>
            </Segment>
          </div>
        </div>
      )}
    </>
  );
};
