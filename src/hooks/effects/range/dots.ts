import { useEffect } from 'react';

import { useDispatch, useSelector } from 'store';
import { effectsActions } from 'store/effects/common';
import { mainSelectors } from 'store/main';
import { getEffectInRange } from 'utils/effects/rangeEffects';

import { DotsRangeEffect, RangeEffectsJson } from '@types';

export function useDotsInRange(effects: RangeEffectsJson) {
  const dispatch = useDispatch();

  const page = useSelector(mainSelectors.page);

  useEffect(() => {
    const dotsInRange = getEffectInRange(effects, page, 'dots') as DotsRangeEffect;

    if (!dotsInRange) {
      dispatch(effectsActions.setDotsActiveState(false));

      return;
    }

    dispatch(effectsActions.setDotsActiveState(true));
  }, [page]);
}
