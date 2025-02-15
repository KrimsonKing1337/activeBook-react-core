import { useState } from 'react';

import { Flags as ModalsFlags } from 'utils/localStorage/modalsWereShowed';
import { modalsWereShowed } from 'utils/localStorage/modalsWereShowed';

export function useModal() {
  const [modalIsActive, setModalIsActive] = useState(false);

  const modalOnClose = () => {
    setModalIsActive(false);

    modalsWereShowed.set(ModalsFlags.usingCamera, true);
  };

  return {
    modalIsActive,
    modalOnClose,
    setModalIsActive,
  };
}
