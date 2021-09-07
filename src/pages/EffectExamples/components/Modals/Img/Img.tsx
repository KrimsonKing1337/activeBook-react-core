import React, { useState } from 'react';

import { Modal } from 'components/Modal';
import { Toggle } from 'components/Toggle';

export const Img = () => {
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

    setButtonIsActive(true);
    setModalIsActive(true);
  };

  return (
    <>
      <Modal
        isOpen={modalIsActive}
        closeFunction={modalOnClose}
        mode={'media'}
      >
        <img src="/assets/img/cinemagraph.gif" alt="" />
      </Modal>

      <Toggle
        label={'Модалка с изображением'}
        isActiveDefault={false}
        isActive={buttonIsActive}
        onClickOn={() => buttonClickHandler(true)}
        onClickOff={() => buttonClickHandler(false)}
      />
    </>
  );
};
