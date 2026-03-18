import { useEffect, useState } from 'react';

import { configSelectors } from 'store/config';

import { useDispatch, useSelector } from 'store';

import { mainActions, mainSelectors } from 'store/main';

import { useGoToPage } from 'hooks/control/useGoToPage';

import { PageWrapper, Action, WelcomeTour, Header, Article } from 'components';

import { Flags, modalsWereShowed } from 'utils/localStorage/modalsWereShowed';
import { flashlightInst } from 'utils/effects/flashlight';
import { get as localStorageGet } from 'utils/localStorage/localStorage';

import { HowlWrapper } from 'utils/effects/audio/HowlWrapper';

import { Modal } from './components';

import { useModal } from './hooks';

export type Page0Props = {
  header?: string;
  subHeader?: string;
  showButton?: boolean;
  audioSrcForInit: string;
  Footer?: React.ElementType;
  goCallback?: () => Promise<void> | void;
};

export const Page0 = ({
  header,
  subHeader,
  showButton = true,
  audioSrcForInit,
  Footer,
  goCallback,
}: Page0Props) => {
  const dispatch = useDispatch();

  const { goToPage } = useGoToPage();

  const id = useSelector(mainSelectors.id);
  const isWelcomeTourActiveFromConfig = useSelector(configSelectors.welcomeTour);

  const [lastPage, setLastPage] = useState(0);

  const [isWelcomeTourActive, setIsWelcomeTourActive] = useState(false);
  const [isWelcomeTourModalActive, setIsWelcomeTourModalActive] = useState(false);

  const { modalIsActive, modalOnClose, setModalIsActive } = useModal();

  // инициализируем аудио. свайп на айфоне не работает, нужен именно тап
  useEffect(() => {
    const handler = () => {
      const howlWrapperInst = new HowlWrapper({
        id: 'init',
        page: 0,
        src: [audioSrcForInit],
        relativeVolume: 0,
      });

      howlWrapperInst.howlInst.once('playerror', () => {
        howlWrapperInst.howlInst.once('unlock', () => {
          howlWrapperInst.howlInst.play();
        });
      });

      howlWrapperInst.play();

      document.removeEventListener('pointerup', handler, true);
      document.removeEventListener('touchend', handler, true);
      document.removeEventListener('click', handler, true);

      dispatch(mainActions.setIsAudioUnlocked(true));
    };

    document.addEventListener('pointerup', handler, { once: true, capture: true });
    document.addEventListener('touchend', handler, { once: true, capture: true });
    document.addEventListener('click', handler, { once: true, capture: true });

    return () => {
      document.removeEventListener('pointerup', handler, true);
      document.removeEventListener('touchend', handler, true);
      document.removeEventListener('click', handler, true);
    };
  }, []);

  useEffect(() => {
    const lastPage = localStorageGet(id, 'lastPage');

    if (!lastPage) {
      return;
    }

    setLastPage(lastPage);
  }, [id]);

  const go = async () => {
    if (!flashlightInst.isInited) {
      try {
        await flashlightInst.init();
      } catch (err) {
        console.error(err);
      }
    }

    if (goCallback) {
      await goCallback();
    }

    const pageToGo = lastPage > 0 ? lastPage : 1;

    goToPage(pageToGo);
  };

  const modalConfirmHandler = () => {
    modalOnClose();

    go();
  };

  const actionClickHandler = () => {
    const isModalWasShowed = modalsWereShowed.get(id, Flags.usingCamera);

    if (isWelcomeTourActiveFromConfig) {
      setIsWelcomeTourModalActive(true);

      return;
    }

    if (!isModalWasShowed && !flashlightInst.isInited) {
      setModalIsActive(true);

      return;
    }

    go();
  };

  const actionLabel = lastPage > 0 ? 'Продолжить читать' : 'Начать читать';

  return (
    <PageWrapper>
      <Modal isActive={modalIsActive} onConfirm={modalConfirmHandler} />

      {header && (
        <Header>
          {header}
        </Header>
      )}

      {subHeader && (
        <Article>
          {subHeader}
        </Article>
      )}

      {showButton && !isWelcomeTourActive && (
        <Action style={{ fontSize: '1.375em' /* 22px */ }} fullWidth onClick={actionClickHandler}>
          {actionLabel}
        </Action>
      )}

      <WelcomeTour
        isActive={isWelcomeTourActive}
        setIsActive={setIsWelcomeTourActive}
        isModalActive={isWelcomeTourModalActive}
        setIsModalActive={setIsWelcomeTourModalActive}
      />

      {Footer && (
        <Footer />
      )}
    </PageWrapper>
  );
};
