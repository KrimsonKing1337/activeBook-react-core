import { ModalDialog, Article, Header, P } from 'components';

export type ModalProps = {
  isActive: boolean;
  onConfirm: () => void;
};

export const Modal = ({ isActive, onConfirm }: ModalProps) => {
  return (
    <ModalDialog
      isOpen={isActive}
      confirmButtonLabel="Хорошо"
      canFullScreen={true}
      canClose={false}
      showCancelButton={false}
      cantCloseIn={5000}
      onConfirm={onConfirm}
    >
      <div>
        <Header>
          ОБРАТИТЕ ВНИМАНИЕ
        </Header>

        <Article>
          <P>
            Для работы эффектов на основе вспышки, приложению необходимо получить разрешение к камере
            (к сожалению, нет возможности запросить разрешение только ко вспышке).
          </P>

          <P>
            Вы всегда можете запросить разрешение ещё раз, в меню приложения
          </P>
        </Article>
      </div>
    </ModalDialog>
  );
};
