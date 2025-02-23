import { useEffect } from 'react';

import type { RangeEffects } from '@types';

import { store, useDispatch, useSelector } from 'store';

import { mainSelectors } from 'store/main';
import { backgroundEffectsActions } from 'store/effects/background';

import type { BackgroundEffect } from 'hooks/effects/background/@types';

import { getEffectsInRange } from 'utils/effects/rangeEffects';

export function useBackgroundInRange(effects: RangeEffects) {
  const dispatch = useDispatch();

  const page = useSelector(mainSelectors.page);

  useEffect(() => {
    const backgroundEffectsForPage = getEffectsInRange(effects, page, 'background');
    const backgroundEffectsInStore = store.getState().backgroundEffects.effects;

    Object.keys(backgroundEffectsInStore).forEach((keyCur) => {
      const effectCur = backgroundEffectsInStore[keyCur];

      const { id } = effectCur;

      const idIsInRange = backgroundEffectsForPage.some((cur) => {
        return cur.id === id;
      });

      if (idIsInRange) {
        return;
      }

      dispatch(backgroundEffectsActions.deleteEffect(id as string));
    });
  }, [page]);

  useEffect(() => {
    const backgroundEffectsForPage = getEffectsInRange(effects, page, 'background');
    const backgroundEffectsInStore = store.getState().backgroundEffects.effects;

    backgroundEffectsForPage.forEach((backgroundEffectOnPageCur) => {
      const { id } = backgroundEffectOnPageCur;

      const backgroundEffectOnPageCurOptions = {
        ...backgroundEffectOnPageCur.options,
        id,
      } as BackgroundEffect;

      const backgroundEffectInStore = backgroundEffectsInStore[id];

      if (backgroundEffectInStore) {
        return;
      }

      dispatch(backgroundEffectsActions.setEffect(backgroundEffectOnPageCurOptions));
    });
  }, [page]);
}
