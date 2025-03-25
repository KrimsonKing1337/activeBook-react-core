import { useEffect, useState } from 'react';

import { useSelector } from 'store';
import { mainSelectors } from 'store/main';

import { PageWrapper, Action, WelcomeTour } from 'components';

import { goToPage } from 'utils/control/goToPage';
import { Flags, modalsWereShowed } from 'utils/localStorage/modalsWereShowed';
import { flashlightInst } from 'utils/effects/flashlight';

import { localStorageId as welcomeTourLocalStorageId } from 'components/WelcomeTour/utils';

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
  const isFlashlightAvailable = useSelector(mainSelectors.isFlashlightAvailable);

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
    const welcomeTourHasBeenSeen = localStorage.getItem(welcomeTourLocalStorageId);

    if (!welcomeTourHasBeenSeen) {
      setIsWelcomeTourModalActive(true);

      return;
    }

    if (!isModalWasShowed && isFlashlightAvailable) {
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
