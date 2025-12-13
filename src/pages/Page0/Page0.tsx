import { useEffect, useState } from 'react';

import { configSelectors } from 'store/config';

import { Flags, modalsWereShowed } from 'utils/localStorage/modalsWereShowed';
import { flashlightInst } from 'utils/effects/flashlight';

import { useGoToPage } from 'hooks/control/useGoToPage';

import { useSelector } from 'store';

import { PageWrapper, Action, WelcomeTour } from 'components';

import { Modal } from './components';

import { useModal } from './hooks';

export type Page0Props = {
  header?: string;
  subHeader?: string;
  showButton?: boolean;
  Footer?: React.ElementType;
  goCallback?: () => Promise<void> | void;
};

export const Page0 = ({ goCallback, header, subHeader, showButton = true, Footer }: Page0Props) => {
  const { goToPage } = useGoToPage();

  const isWelcomeTourActiveFromConfig = useSelector(configSelectors.welcomeTour);

  const [lastPage, setLastPage] = useState(0);

  const [isWelcomeTourActive, setIsWelcomeTourActive] = useState(false);
  const [isWelcomeTourModalActive, setIsWelcomeTourModalActive] = useState(false);

  const { modalIsActive, modalOnClose, setModalIsActive } = useModal();

  useEffect(() => {
    const lastPageAsJson = localStorage.getItem('lastPage');

    if (!lastPageAsJson) {
      return;
    }

    const page = JSON.parse(lastPageAsJson);

    setLastPage(page);
  }, []);

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
    const isModalWasShowed = modalsWereShowed.get(Flags.usingCamera);

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
        <header>
          {header}
        </header>
      )}

      {subHeader && (
        <article>
          {subHeader}
        </article>
      )}

      {showButton && !isWelcomeTourActive && (
        <Action fullWidth onClick={actionClickHandler}>
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
