import { useEffect } from 'react';

import type {
  RangeEffects,
  Timer,
  RangeEffect,
  AudioEffectRangeOptions,
  AudioEffectRangeOptionsJson,
} from '@types';

import { store, useDispatch, useSelector } from 'store';

import { mainSelectors } from 'store/main';
import { audioBgEffectsActions } from 'store/effects/audio/audioBg';

import { HowlWrapper } from 'utils/effects/audio/HowlWrapper';
import { getEffectsInRange } from 'utils/effects/rangeEffects';
import { waitTillTheEndIfAudioIsTooShort } from 'utils/effects/audio/waitTillTheEndIfAudioIsTooShort';

export function useAudioInRange(effects: RangeEffects) {
  const dispatch = useDispatch();

  const page = useSelector(mainSelectors.page);

  useEffect(() => {
    const audioInstances = store.getState().audioBgEffects.audioInstances;
    const audiosForPage = getEffectsInRange(effects, page, 'audio');

    Object.keys(audioInstances).forEach((keyCur) => {
      const audioInstanceCur = audioInstances[keyCur];

      if (!audioInstanceCur || audioInstanceCur.isUnloading) {
        return;
      }

      const { id } = audioInstanceCur;

      const idIsInRange = audiosForPage.some((cur) => {
        const options = cur.options as AudioEffectRangeOptionsJson;

        return options?.id === id;
      });

      if (idIsInRange) {
        return;
      }

      (async () => {
        await waitTillTheEndIfAudioIsTooShort(audioInstanceCur);
      })();

      dispatch(audioBgEffectsActions.deleteAudioInstance(id as string));
    });
  }, [page]);

  useEffect(() => {
    const audioInstancesInStore = store.getState().audioBgEffects.audioInstances;
    const audiosForPage = getEffectsInRange(effects, page, 'audio') as RangeEffect[];

    const timers: Timer[] = [];

    audiosForPage.forEach((audioOnPageCur) => {
      const {
        src,
        id,
        type,
        loop,
        playOnLoad,
        delay,
        stopBy,
        screamer,
        fadeOutWhenUnload,
        onPlay,
        onUnload,
      } = audioOnPageCur.options as AudioEffectRangeOptions;

      const audioInstanceInStore = audioInstancesInStore[id];

      if (audioInstanceInStore) {
        return;
      }

      const howlInst = new HowlWrapper({
        id,
        src: [src],
        type,
        loop,
        screamer,
        fadeOutWhenUnload,
        onPlay,
        onUnload,
      });

      let timer: Timer = null;

      if (playOnLoad) {
        timer = setTimeout(() => {
          howlInst.play();
        }, delay);
      }

      if (stopBy) {
        timer = setTimeout(() => {
          howlInst.stop();
        }, stopBy);
      }

      timers.push(timer);

      dispatch(audioBgEffectsActions.setAudioInstance(howlInst));
    });

    // мне кажется, это не нужно. т.к. необходимо ждать выполнения таймеров, а не сбрасывать их при смене страницы.
    // эффект может звучать на несколько страниц, а не только на одну

    /*return () => {
      timers.forEach((timerCur) => {
        if (timerCur) {
          clearTimeout(timerCur);
        }
      });
    };*/
  }, [page]);
}
