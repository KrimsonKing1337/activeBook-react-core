import { useEffect } from 'react';

import type { DotsRangeEffect, RangeEffects } from '@types';

import { useDispatch, useSelector } from 'store';
import { effectsActions } from 'store/effects/common';
import { mainSelectors } from 'store/main';

import { getEffectsInRange } from 'utils/effects/rangeEffects';

export function useDotsInRange(effects: RangeEffects) {
  const dispatch = useDispatch();

  const page = useSelector(mainSelectors.page);

  useEffect(() => {
    const dotsInRange = getEffectsInRange(effects, page, 'dots') as DotsRangeEffect[];

    if (dotsInRange.length === 0) {
      dispatch(effectsActions.setDotsActiveState(false));

      return;
    }

    dispatch(effectsActions.setDotsActiveState(true));
  }, [page]);
}
