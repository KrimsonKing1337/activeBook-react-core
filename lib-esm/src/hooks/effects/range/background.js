import { useEffect } from 'react';
import { store, useDispatch, useSelector } from 'store';
import { mainSelectors } from 'store/main';
import { getEffectsInRange } from 'utils/effects/rangeEffects';
import { backgroundEffectsActions } from 'store/effects/background';
export function useBackgroundInRange(effects) {
    var dispatch = useDispatch();
    var page = useSelector(mainSelectors.page);
    useEffect(function () {
        var backgroundEffectsForPage = getEffectsInRange(effects, page, 'background');
        var backgroundEffectsInStore = store.getState().backgroundEffects.effects;
        Object.keys(backgroundEffectsInStore).forEach(function (keyCur) {
            var effectCur = backgroundEffectsInStore[keyCur];
            var id = effectCur.id;
            var idIsInRange = backgroundEffectsForPage.some(function (cur) {
                var options = cur.options;
                return options.id === id;
            });
            if (idIsInRange) {
                return;
            }
            dispatch(backgroundEffectsActions.deleteEffect(id));
        });
    }, [page]);
    useEffect(function () {
        var backgroundEffectsForPage = getEffectsInRange(effects, page, 'background');
        var backgroundEffectsInStore = store.getState().backgroundEffects.effects;
        backgroundEffectsForPage.forEach(function (backgroundEffectOnPageCur) {
            var backgroundEffectOnPageCurOptions = backgroundEffectOnPageCur.options;
            var id = backgroundEffectOnPageCurOptions.id;
            var backgroundEffectInStore = backgroundEffectsInStore[id];
            if (backgroundEffectInStore) {
                return;
            }
            dispatch(backgroundEffectsActions.setEffect(backgroundEffectOnPageCurOptions));
        });
    }, [page]);
}
//# sourceMappingURL=background.js.map