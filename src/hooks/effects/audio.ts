import { useEffect, useState } from 'react';

import { nanoid } from 'nanoid';

import type { Timer, AudioEffectOptions } from '@types';

import { useSelector, useDispatch } from 'store';

import { audioEffectsActions, audioEffectsSelectors } from 'store/effects/audio/audio';

import { HowlWrapper, type HowlWrapperOptions } from 'utils/effects/audio/HowlWrapper';
import { waitTillTheEndIfAudioIsTooShort } from 'utils/effects/audio/waitTillTheEndIfAudioIsTooShort';

export function useAudio({
  id = '',
  src,
  type = 'sfx',
  loop = false,
  playOnLoad = false,
  stopBy = 0,
  delay = 0,
  screamer = false,
  fadeOutWhenUnload = true,
  onPlay = () => {},
  onUnload = () => {},
}: AudioEffectOptions) {
  const dispatch = useDispatch();

  const audioInstances = useSelector(audioEffectsSelectors.audioInstances);

  const [audioId, setAudioId] = useState<string>(id);

  useEffect(() => {
    const uuid = id || nanoid();

    const opt: HowlWrapperOptions = {
      id: uuid,
      src: [src],
      type,
      loop,
      screamer,
      fadeOutWhenUnload,
      onPlay,
      onUnload,
    };

    const howlInst = new HowlWrapper(opt);

    setAudioId(uuid);

    dispatch(audioEffectsActions.setAudioInstance(howlInst));
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
        await waitTillTheEndIfAudioIsTooShort(audioInstance);
      })();

      dispatch(audioEffectsActions.deleteAudioInstance(audioId));

      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [audioInstances, audioId]);

  return audioInstances[audioId];
}
