import { useEffect } from 'react';

import type { BackgroundEffectsRangeOptions, RangeEffectsJson } from '@types';

import { store, useDispatch, useSelector } from 'store';
import { mainSelectors } from 'store/main';

import { getEffectsInRange } from 'utils/effects/rangeEffects';
import { backgroundEffectsActions } from 'store/effects/background';

export function useBackgroundInRange(effects: RangeEffectsJson) {
  const dispatch = useDispatch();

  const page = useSelector(mainSelectors.page);

  useEffect(() => {
    const backgroundEffectsForPage = getEffectsInRange(effects, page, 'background');
    const backgroundEffectsInStore = store.getState().backgroundEffects.effects;

    Object.keys(backgroundEffectsInStore).forEach((keyCur) => {
      const effectCur = backgroundEffectsInStore[keyCur];

      const { id } = effectCur;

      const idIsInRange = backgroundEffectsForPage.some((cur) => {
        const options = cur.options as BackgroundEffectsRangeOptions;

        return options.id === id;
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
      const backgroundEffectOnPageCurOptions = backgroundEffectOnPageCur.options as BackgroundEffectsRangeOptions;

      const { id } = backgroundEffectOnPageCurOptions;

      const backgroundEffectInStore = backgroundEffectsInStore[id];

      if (backgroundEffectInStore) {
        return;
      }

      dispatch(backgroundEffectsActions.setEffect(backgroundEffectOnPageCurOptions));
    });
  }, [page]);
}
