import { useEffect } from 'react';

import type {
  RangeEffects,
  RangeEffect,
  AudioEffectOptionsRange,
} from '@types';

import { mainSelectors } from 'store/main';
import { audioBgEffectsActions } from 'store/effects/audio/audioBg';

import { HowlWrapper } from 'utils/effects/audio/HowlWrapper';
import { getEffectsInRange } from 'utils/effects/rangeEffects';

import { store, useDispatch, useSelector } from 'store';

export function useAudioInRange(effects: RangeEffects) {
  const dispatch = useDispatch();

  const page = useSelector(mainSelectors.page);

  useEffect(() => {
    const audioInstances = store.getState().audioBgEffects.audioInstances;
    const audiosForPage = getEffectsInRange(effects, page, 'audio');

    Object.keys(audioInstances).forEach((keyCur) => {
      const audioInstanceCur = audioInstances[keyCur];

      if (!audioInstanceCur) {
        return;
      }

      const { id } = audioInstanceCur;

      const idIsInRange = audiosForPage.some((cur) => {
        return cur.id === id;
      });

      if (idIsInRange) {
        return;
      }

      dispatch(audioBgEffectsActions.deleteAudioInstance(id as string));
    });
  }, [page]);

  useEffect(() => {
    const audioInstancesInStore = store.getState().audioBgEffects.audioInstances;
    const audiosForPage = getEffectsInRange(effects, page, 'audio') as RangeEffect[];

    audiosForPage.forEach((audioOnPageCur) => {
      const { id } = audioOnPageCur;

      // в audio range id передаётся только на верхнем уровне, в options его нет
      const {
        src,
        type,
        loop,
        playOnLoad,
        delay,
        stopBy,
        screamer,
        fadeOutWhenUnload,
        relativeVolume,
        onPlay,
        onUnload,
      } = audioOnPageCur.options as AudioEffectOptionsRange;

      const audioInstanceInStore = audioInstancesInStore[id];

      if (audioInstanceInStore) {
        return;
      }

      const howlInst = new HowlWrapper({
        id,
        src: [src],
        type,
        isRange: true,
        playOnLoad,
        stopBy,
        delay,
        loop,
        screamer,
        fadeOutWhenUnload,
        relativeVolume,
        onPlay,
        onUnload,
      });

      dispatch(audioBgEffectsActions.setAudioInstance(howlInst));
    });
  }, [page]);
}
