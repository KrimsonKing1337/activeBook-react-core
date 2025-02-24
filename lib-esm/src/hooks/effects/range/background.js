var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { useEffect } from 'react';
import { store, useDispatch, useSelector } from 'store';
import { mainSelectors } from 'store/main';
import { backgroundEffectsActions } from 'store/effects/background';
import { getEffectsInRange } from 'utils/effects/rangeEffects';
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
                return cur.id === id;
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
            var id = backgroundEffectOnPageCur.id;
            var backgroundEffectOnPageCurOptions = __assign(__assign({}, backgroundEffectOnPageCur.options), { id: id });
            var backgroundEffectInStore = backgroundEffectsInStore[id];
            if (backgroundEffectInStore) {
                return;
            }
            dispatch(backgroundEffectsActions.setEffect(backgroundEffectOnPageCurOptions));
        });
    }, [page]);
}
//# sourceMappingURL=background.js.map