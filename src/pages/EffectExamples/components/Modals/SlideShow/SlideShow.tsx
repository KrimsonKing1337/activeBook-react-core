import React, { useState } from 'react';

import { Modal } from 'components/Modal';
import { Toggle } from 'components/Toggle';
import { SlideShow as SlideShowComponent } from 'components/SlideShow';

export const SlideShow = () => {
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
      <Modal
        isOpen={modalIsActive}
        closeFunction={modalOnClose}
        mode={'media'}
        hideCropButton={true}
      >
        <SlideShowComponent isVisible={modalIsActive} mode={'modal'}>
          <img src="/assets/img/1.jpg" alt="" />
          <img src="/assets/img/2.jpg" alt="" />
          <img src="/assets/img/3.jpg" alt="" />
          <img src="/assets/img/4.jpg" alt="" />
        </SlideShowComponent>
      </Modal>

      <Toggle
        label={'Модалка со слайдшоу'}
        isActiveDefault={false}
        isActive={buttonIsActive}
        onClickOn={() => buttonClickHandler(true)}
        onClickOff={() => buttonClickHandler(false)}
      />
    </>
  );
};
