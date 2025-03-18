import { useEffect, useState } from 'react';

import { toast } from 'react-toastify';

import { ModalDialog } from 'components/ModalDialog';
import { PageWrapper } from 'components/PageWrapper';
import { Action } from 'components/ColoredTextTrigger/Action';
import { Segment } from 'components/Segment';
import { Button } from 'components/Button';

import { goToPage } from 'utils/control/goToPage';
import { Flags, modalsWereShowed } from 'utils/localStorage/modalsWereShowed';
import { flashlightInst } from 'utils/effects/flashlight';

import { useVibration } from 'hooks/effects/vibration';

import { getWelcomeTourTextById } from './utils';

import { useModal } from './hooks';

export type Page0Props = {
  header?: string;
  subHeader?: string;
  showButton?: boolean;
  Footer?: React.ElementType;
  goCallback?: () => Promise<void> | void;
};

const welcomeTourTextIdsArray = [
  'action',
  'segments',
  'bookmarks',
  'navigation',
  'font',
  'config',
];

export const Page0 = ({ goCallback, header, subHeader, showButton = true, Footer }: Page0Props) => {
  const [lastPage, setLastPage] = useState(0);

  const [isWelcomeTourModalActive, setIsWelcomeTourModalActive] = useState(false);
  const [showWelcomeTour, setShowWelcomeTour] = useState(false);
  const [welcomeTourIdIndex, setWelcomeTourIdIndex] = useState(0);
  const [welcomeTourNextButtonLabel, setWelcomeTourNextButtonLabel] = useState('Далее');

  const { modalIsActive, modalOnClose, setModalIsActive } = useModal();

  const { vibrationOn, vibrationOff } = useVibration();

  useEffect(() => {
    const lastPageAsJSON = localStorage.getItem('lastPage');

    if (lastPageAsJSON) {
      const page = JSON.parse(lastPageAsJSON);

      setLastPage(page);
    }
  }, []);

  useEffect(() => {
    if (!showWelcomeTour) {
      const highlightedWelcomeTourElement = document.querySelector('.welcomeTourHighLight') as HTMLDivElement;

      if (highlightedWelcomeTourElement) {
        highlightedWelcomeTourElement.classList.remove('welcomeTourHighLight');
      }

      return;
    }

    const welcomeTourElement = document.querySelector('[data-welcome-tour-id="action"]') as HTMLDivElement;

    if (welcomeTourElement) {
      welcomeTourElement.classList.add('welcomeTourHighLight');
    }
  }, [showWelcomeTour]);

  const go = async () => {
    try {
      await flashlightInst.init();
    } catch (err) {
      console.error(err);
    }

    if (goCallback) {
      await goCallback();
    }

    const pageToGo = lastPage > 0 ? lastPage : 1;

    goToPage(pageToGo);
  };

  const modalCloseHandler = () => {
    modalOnClose();

    go();
  };

  const welcomeTourModalCloseHandler = () => {
    setIsWelcomeTourModalActive(false);
    setShowWelcomeTour(true);
  };

  const welcomeTourNextButtonClickHandler = () => {
    const highlightedWelcomeTourElement = document.querySelector('.welcomeTourHighLight') as HTMLDivElement;

    if (highlightedWelcomeTourElement) {
      highlightedWelcomeTourElement.classList.remove('welcomeTourHighLight');
    }

    if (welcomeTourIdIndex === welcomeTourTextIdsArray.length - 2) {
      setWelcomeTourNextButtonLabel('Закончить знакомство');
    }

    if (welcomeTourIdIndex === welcomeTourTextIdsArray.length - 1) {
      setShowWelcomeTour(false);

      localStorage.setItem('welcomeTourHasBeenSeen', 'true');

      return;
    }

    const newIndex = welcomeTourIdIndex + 1;
    const newTextId = welcomeTourTextIdsArray[newIndex];

    setWelcomeTourIdIndex(newIndex);

    const selector = `[data-welcome-tour-id="${newTextId}"]`;

    const welcomeTourElement = document.querySelector(selector) as HTMLDivElement;

    welcomeTourElement.classList.add('welcomeTourHighLight');
  };

  const clickHandler = () => {
    const isModalWasShowed = modalsWereShowed.get(Flags.usingCamera);
    const welcomeTourHasBeenSeen = localStorage.getItem('welcomeTourHasBeenSeen');

    if (!welcomeTourHasBeenSeen) {
      setIsWelcomeTourModalActive(true);

      return;
    }

    if (!isModalWasShowed) {
      setModalIsActive(true);

      return;
    }

    go();
  };

  const welcomeTourActionClickHandler = () => {
    vibrationOn(1000);

    toast.success('Отлично!');
  };

  const segment1EnterHandler = () => {
    vibrationOn(1000);

    toast.success('Так держать!');
  };

  const segment1ExitHandler = () => {
    vibrationOff();
  };

  const segment2EnterHandler = () => {
    vibrationOn(1000);

    toast.success('Супер!');
  };

  const segment2ExitHandler = () => {
    vibrationOff();
  };

  const label = lastPage > 0 ? 'Продолжить читать' : 'Начать читать';

  const welcomeTourTextId = welcomeTourTextIdsArray[welcomeTourIdIndex];
  const welcomeTourText = getWelcomeTourTextById(welcomeTourTextId);

  return (
    <PageWrapper>
      <ModalDialog
        isOpen={isWelcomeTourModalActive}
        onClose={welcomeTourModalCloseHandler}
        onConfirm={welcomeTourModalCloseHandler}
        onCancel={welcomeTourModalCloseHandler}
        canFullScreen={false}
        showCancelButton={false}
        cantCloseIn={2000}
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

      <ModalDialog
        isOpen={modalIsActive}
        onClose={modalCloseHandler}
        onConfirm={modalCloseHandler}
        onCancel={modalCloseHandler}
        canFullScreen={true}
        showCancelButton={false}
        cantCloseIn={5000}
      >
        <div>
          <header>
            ОБРАТИТЕ ВНИМАНИЕ
          </header>

          <article>
            <p>
              Для работы эффектов на основе вспышки, приложению необходимо получить разрешение к камере
              (к сожалению, нет возможности запросить разрешение только ко вспышке).
            </p>

            <p>
              Вы всегда можете запросить разрешение ещё раз, в меню приложения
            </p>
          </article>
        </div>
      </ModalDialog>

      {header && (
        <header>
          {header}
        </header>
      )}

      {subHeader && (
        <article>
          {subHeader}
        </article>
      )}

      {showButton && !showWelcomeTour && (
        <Action fullWidth onClick={clickHandler}>
          {label}
        </Action>
      )}

      {showWelcomeTour && (
        <div style={{ marginTop: '50px', padding: '20px', border: '1px var(--main) solid', borderRadius: '10px' }}>
          <div style={{ marginBottom: '50px', paddingBottom: '10px', borderBottom: '1px #eaeaea solid' }}>
            <p>
              <b>{welcomeTourText.header}</b>
            </p>

            <p>
              {welcomeTourText.article}
            </p>

            <Button type="success" style={{ marginTop: '22px' }} onClick={welcomeTourNextButtonClickHandler}>
              {welcomeTourNextButtonLabel}
            </Button>
          </div>

          <div data-welcome-tour-id="action" style={{ marginBottom: '50px' }}>
            <Action fullWidth onClick={welcomeTourActionClickHandler}>
              Выделенный текст
            </Action>
          </div>

          <div data-welcome-tour-id="segments">
            <Segment onEnter={segment1EnterHandler} onExit={segment1ExitHandler}>
              <p>
                Нажми на меня
              </p>
            </Segment>

            <Segment onEnter={segment2EnterHandler} onExit={segment2ExitHandler}>
              <p>
                И на меня нажми!
              </p>
            </Segment>
          </div>
        </div>
      )}

      {Footer && (
        <Footer />
      )}
    </PageWrapper>
  );
};
