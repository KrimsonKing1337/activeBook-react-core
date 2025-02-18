import { useEffect, useState } from 'react';

import { nanoid } from 'nanoid';

import type { Timer } from '@types';

import { useSelector, useDispatch } from 'store';
import { soundEffectsActions, soundEffectsSelectors } from 'store/effects/audio/sound';

import { HowlWrapper, type HowlWrapperOptions } from 'utils/effects/audio/HowlWrapper';

type UseSoundProps = {
  id?: string;
  src: string;
  fadeOutWhenUnload?: boolean;
  bg?: boolean;
  loop?: boolean;
  playOnLoad?: boolean;
  stopBy?: number;
  delay?: number;
  screamer?: boolean;
  onPlay?: () => void;
  onUnmount?: () => void;
};

export function useSound({
  id = '',
  src,
  fadeOutWhenUnload = true,
  bg = false,
  loop = false,
  playOnLoad = false,
  stopBy = 0,
  delay = 0,
  screamer = false,
  onPlay = () => {
  },
  onUnmount = () => {
  },
}: UseSoundProps) {
  const dispatch = useDispatch();

  const soundsInstances = useSelector(soundEffectsSelectors.soundsInstances);

  const [soundId, setSoundId] = useState<string>(id);

  useEffect(() => {
    const uuid = id || nanoid();

    const opt: HowlWrapperOptions = {
      id: uuid,
      src: [src],
      loop,
      screamer,
      onPlay,
    };

    if (bg) {
      opt.type = 'bg';
    }

    const howlInst = new HowlWrapper(opt);

    setSoundId(uuid);

    dispatch(soundEffectsActions.setSound(howlInst));

    return () => {
      onUnmount();
    };
  }, []);

  useEffect(() => {
    const soundInst = soundsInstances[soundId];

    if (!soundInst || soundInst.isUnloading) {
      return;
    }

    let timer: Timer = null;

    if (playOnLoad) {
      timer = setTimeout(() => {
        soundInst.play();
      }, delay);
    }

    if (stopBy) {
      timer = setTimeout(() => {
        soundInst.stop();
      }, stopBy);
    }

    return () => {
      if (!soundInst || soundInst.isUnloading) {
        return;
      }

      (async () => {
        const dur = parseFloat(soundInst.howlInst.duration().toFixed(1));

        if (dur < 1.2) {
          await soundInst.waitTillTheEnd();
        }

        await soundInst.unload(fadeOutWhenUnload);

        dispatch(soundEffectsActions.deleteSound(soundId));

        if (timer) {
          clearTimeout(timer);
        }
      })();
    };
  }, [soundsInstances]);

  return soundsInstances[soundId];
}
