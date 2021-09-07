import React, { useState } from 'react';

import { ModalDialog } from 'components/ModalDialog';
import { Toggle } from 'components/Toggle';

export const Dialog = () => {
  const [modalIsActive, setModalIsActive] = useState(false);
  const [buttonIsActive, setButtonIsActive] = useState(false);

  const modalOnClose = () => {
    setModalIsActive(false);
    setButtonIsActive(false);
  };

  const buttonClickHandler = (value: boolean) => {
    if (!value) {
      return;
    }

    setModalIsActive(true);
    setButtonIsActive(true);
  };

  return (
    <>
      <ModalDialog
        isOpen={modalIsActive}
        closeFunction={modalOnClose}
        onConfirm={modalOnClose}
        onCancel={modalOnClose}
        hideExpandButton={true}
      >
        <div>
          Вы действительно хотите сделать действие?
        </div>
      </ModalDialog>

      <Toggle
        label={'Модалка с диалогом'}
        isActiveDefault={false}
        isActive={buttonIsActive}
        onClickOn={() => buttonClickHandler(true)}
        onClickOff={() => buttonClickHandler(false)}
      />
    </>
  );
};
