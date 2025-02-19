import { useEffect, useState } from 'react';

import { nanoid } from 'nanoid';

import type { Timer, AudioType } from '@types';

import { soundEffectsActions, soundEffectsSelectors } from 'src/store/effects/audio/audio';

import { useSelector, useDispatch } from 'store';

import { HowlWrapper, type HowlWrapperOptions } from 'utils/effects/audio/HowlWrapper';

type UseAudioProps = {
  id?: string;
  src: string;
  fadeOutWhenUnload?: boolean;
  type?: AudioType;
  loop?: boolean;
  playOnLoad?: boolean;
  stopBy?: number;
  delay?: number;
  screamer?: boolean;
  onPlay?: () => void;
  onUnmount?: () => void;
};

export function useAudio({
  id = '',
  src,
  fadeOutWhenUnload = true,
  type = 'sfx',
  loop = false,
  playOnLoad = false,
  stopBy = 0,
  delay = 0,
  screamer = false,
  onPlay = () => {},
  onUnmount = () => {},
}: UseAudioProps) {
  const dispatch = useDispatch();

  const audioInstances = useSelector(soundEffectsSelectors.audioInstances);

  const [audioId, setAudioId] = useState<string>(id);

  useEffect(() => {
    const uuid = id || nanoid();

    const opt: HowlWrapperOptions = {
      id: uuid,
      src: [src],
      type,
      loop,
      screamer,
      onPlay,
    };

    const howlInst = new HowlWrapper(opt);

    setAudioId(uuid);

    dispatch(soundEffectsActions.setAudioInstance(howlInst));

    return () => {
      onUnmount();
    };
  }, []);

  useEffect(() => {
    const audioInstance = audioInstances[audioId];

    if (!audioInstance || audioInstance.isUnloading) {
      return;
    }

    let timer: Timer = null;

    if (playOnLoad) {
      timer = setTimeout(() => {
        audioInstance.play();
      }, delay);
    }

    if (stopBy) {
      timer = setTimeout(() => {
        audioInstance.stop();
      }, stopBy);
    }

    return () => {
      if (!audioInstance || audioInstance.isUnloading) {
        return;
      }

      (async () => {
        const dur = parseFloat(audioInstance.howlInst.duration().toFixed(1));

        if (dur < 1.2) {
          await audioInstance.waitTillTheEnd();
        }

        await audioInstance.unload(fadeOutWhenUnload);

        dispatch(soundEffectsActions.deleteAudioInstance(audioId));

        if (timer) {
          clearTimeout(timer);
        }
      })();
    };
  }, [audioInstances]);

  return audioInstances[audioId];
}
