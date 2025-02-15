import { useEffect, useState } from 'react';

import { ModalDialog } from 'components/ModalDialog';
import { PageWrapper } from 'components/PageWrapper';
import { Action } from 'components/ColoredTextTrigger/Action';

import { goToPage } from 'utils/control/goToPage';
import { Flags, modalsWereShowed } from 'utils/localStorage/modalsWereShowed';
import { flashlightInst } from 'utils/effects/flashlight';

import { useModal } from './hooks';

export type Page0Props = {
  goCallback?: () => Promise<void> | void;
  header?: string;
  article?: string;
  showButton?: boolean;
  Footer?: React.ElementType;
};

export const Page0 = ({ goCallback, header, article, showButton = true, Footer }: Page0Props) => {
  const [lastPage, setLastPage] = useState(0);

  const { modalIsActive, modalOnClose, setModalIsActive } = useModal();

  useEffect(() => {
    const lastPageAsJSON = localStorage.getItem('lastPage');

    if (lastPageAsJSON) {
      const page = JSON.parse(lastPageAsJSON);

      setLastPage(page);
    }
  }, []);

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

  const clickHandler = () => {
    const isModalWasShowed = modalsWereShowed.get(Flags.usingCamera);

    if (isModalWasShowed) {
      go();

      return;
    }

    setModalIsActive(true);
  };

  const label = lastPage > 0 ? 'Продолжить читать' : 'Начать читать';

  return (
    <PageWrapper>
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

      {article && (
        <article>
          {article}
        </article>
      )}

      {showButton && (
        <Action fullWidth onClick={clickHandler}>
          {label}
        </Action>
      )}

      {Footer && (
        <Footer />
      )}
    </PageWrapper>
  );
};
