import React, { useEffect, useState } from 'react';

import { Howl } from 'howler';

import { Toggle } from 'components/Toggle';

export const Single = () => {
  const [singleSound, setSingleSound] = useState<Howl>();
  const [buttonForSingleSoundIsActive, setButtonForSingleSoundIsActive] = useState(false);

  useEffect(() => {
    const singleSound = new Howl({
      src: ['assets/audios/single.mp3'],
    });

    setSingleSound(singleSound);
  }, []);

  const buttonClickHandler = (value: boolean) => {
    if (!singleSound) {
      return;
    }

    if (!value) {
      singleSound.stop();
      setButtonForSingleSoundIsActive(false);

      return;
    }

    singleSound.play();
    setButtonForSingleSoundIsActive(true);

    singleSound.once('end', () => {
      setButtonForSingleSoundIsActive(false);
    });
  };

  return (
    <Toggle
      label={'Одиночный звук'}
      isActiveDefault={false}
      isActive={buttonForSingleSoundIsActive}
      onClickOn={() => buttonClickHandler(true)}
      onClickOff={() => buttonClickHandler(false)}
    />
  );
};
