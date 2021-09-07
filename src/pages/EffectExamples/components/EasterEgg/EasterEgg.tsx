import React, { useState } from 'react';

import { EasterEgg as EasterEggComponent } from 'components/EasterEgg';
import { Modal } from 'components/Modal';

import { Item } from 'pages/EffectExamples/components/Item';

export const EasterEgg = () => {
  const [modalIsActive, setModalIsActive] = useState(false);

  const modalOnClose = () => setModalIsActive(false);

  return (
    <Item>
      <Modal
        isOpen={modalIsActive}
        closeFunction={modalOnClose}
        hideExpandButton={true}
      >
        Вы нашли пасхалку! Вот вам ачивка
      </Modal>

      <EasterEggComponent onClick={() => setModalIsActive(true)}>
        Текст с пасхалкой (нажми меня)
      </EasterEggComponent>
    </Item>
  );
};
