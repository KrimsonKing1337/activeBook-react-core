import React, { useState } from 'react';

import { Toggle } from 'components/Toggle';

export const Flashlight = () => {
  const [buttonForFlashlightIsActive, setButtonForFlashlightIsActive] = useState(false);
  
  const buttonForFlashlightClickHandler = (value: boolean) => {
    if (!value) {
      (window as any).plugins.flashlight.switchOff();

      setButtonForFlashlightIsActive(false);
    } else {
      (window as any).plugins.flashlight.switchOn();

      setButtonForFlashlightIsActive(true);
    }
  };
  
  return (
    <Toggle
      label={'Вспышка'}
      isActiveDefault={false}
      isActive={buttonForFlashlightIsActive}
      onClickOn={() => buttonForFlashlightClickHandler(true)}
      onClickOff={() => buttonForFlashlightClickHandler(false)}
    />
  );
};
