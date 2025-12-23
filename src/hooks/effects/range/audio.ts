import { useEffect } from 'react';

import type {
  RangeEffects,
  RangeEffect,
  AudioEffectOptionsRange,
} from '@types';

import { mainSelectors } from 'store/main';
import { audioBgEffectsActions, audioBgEffectsSelectors } from 'store/effects/audio/audioBg';

import { useDispatch, useSelector } from 'store';

import { effectsActions } from 'store/effects/common';

import { HowlWrapper } from 'utils/effects/audio/HowlWrapper';
import { getEffectsInRange } from 'utils/effects/rangeEffects';

export function useAudioInRange(effects: RangeEffects) {
  const dispatch = useDispatch();

  const page = useSelector(mainSelectors.page);
  const audioInstances = useSelector(audioBgEffectsSelectors.audioInstances);

  useEffect(() => {
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
  }, [page, audioInstances]);

  useEffect(() => {
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

      const audioInstanceInStore = audioInstances[id];

      if (audioInstanceInStore) {
        return;
      }

      const howlWrapperInst = new HowlWrapper({
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

      dispatch(effectsActions.setAudiosAmountInc());

      const handler = () => {
        dispatch(effectsActions.setAudioReady());
      };

      howlWrapperInst.howlInst.once('load', handler);
      howlWrapperInst.howlInst.once('loaderror', handler);

      dispatch(audioBgEffectsActions.setAudioInstance(howlWrapperInst));
    });
  }, [page, audioInstances]);
}
