import { ModalDialog } from 'components';

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
  );
};
