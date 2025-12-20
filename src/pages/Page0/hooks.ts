import { useState } from 'react';

import { useSelector } from 'store';

import { mainSelectors } from 'store/main';

import { Flags as ModalsFlags } from 'utils/localStorage/modalsWereShowed';
import { modalsWereShowed } from 'utils/localStorage/modalsWereShowed';

export function useModal() {
  const id = useSelector(mainSelectors.id);

  const [modalIsActive, setModalIsActive] = useState(false);

  const modalOnClose = () => {
    setModalIsActive(false);

    modalsWereShowed.set(id, ModalsFlags.usingCamera, true);
  };

  return {
    modalIsActive,
    modalOnClose,
    setModalIsActive,
  };
}
