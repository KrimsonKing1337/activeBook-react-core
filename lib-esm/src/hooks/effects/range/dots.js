import { useEffect } from 'react';
import { useDispatch, useSelector } from 'store';
import { effectsActions } from 'store/effects/common';
import { mainSelectors } from 'store/main';
import { getEffectInRange } from 'utils/effects/rangeEffects';
export function useDotsInRange(effects) {
    var dispatch = useDispatch();
    var page = useSelector(mainSelectors.page);
    useEffect(function () {
        var dotsInRange = getEffectInRange(effects, page, 'dots');
        if (!dotsInRange) {
            dispatch(effectsActions.setDotsActiveState(false));
            return;
        }
        dispatch(effectsActions.setDotsActiveState(true));
    }, [page]);
}
//# sourceMappingURL=dots.js.map