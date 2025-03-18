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
      canFullScreen={false}
      showCancelButton={false}
      cantCloseIn={2000}
      onConfirm={onConfirm}
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
  );
};
