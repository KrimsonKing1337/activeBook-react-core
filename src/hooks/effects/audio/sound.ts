import { useEffect } from 'react';

import { useDispatch, useSelector } from 'store';
import { soundEffectsActions, soundEffectsSelectors } from 'store/effects/audio/sound';
import { HowlWrapper, HowlWrapperOptions } from 'utils/effects/audio/HowlWrapper';

import { Timer } from '@types';

type UseSoundProps = {
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

  const soundInst = useSelector(soundEffectsSelectors.soundInst);

  useEffect(() => {
    const opt: HowlWrapperOptions = {
      src: [src],
      loop,
      screamer,
      onPlay,
    };

    if (bg) {
      opt.type = 'bg';
    }

    const howlInst = new HowlWrapper(opt);

    dispatch(soundEffectsActions.setSound(howlInst));

    return () => {
      onUnmount();
    };
  }, []);

  useEffect(() => {
    let timer: Timer = null;

    if (!soundInst || soundInst.isUnloading) {
      return;
    }

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

        soundInst.unload(fadeOutWhenUnload);

        if (timer) {
          clearTimeout(timer);
        }
      })();
    };
  }, [soundInst]);

  return soundInst;
}
