import React, { useEffect, useState } from 'react';

import { Howl } from 'howler';

import { Toggle } from 'components/Toggle';

export const Loop = () => {
  const [loopSound, setLoopSound] = useState<Howl>();

  useEffect(() => {
    const loopSound = new Howl({
      src: ['assets/audios/loop.mp3'],
      loop: true,
    });
    setLoopSound(loopSound);
  }, []);

  const buttonClickHandler = (value: boolean) => {
    if (!loopSound) {
      return;
    }

    value ? loopSound.play() : loopSound.stop();
  };

  return (
    <Toggle
      label={'Лупованый звук'}
      isActiveDefault={false}
      onClickOn={() => buttonClickHandler(true)}
      onClickOff={() => buttonClickHandler(false)}
    />
  );
};
