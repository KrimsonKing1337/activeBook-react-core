"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBackgroundInRange = void 0;
var react_1 = require("react");
var store_1 = require("../../../store");
var main_1 = require("../../../store/main");
var background_1 = require("../../../store/effects/background");
var rangeEffects_1 = require("../../../utils/effects/rangeEffects");
function useBackgroundInRange(effects) {
    var dispatch = (0, store_1.useDispatch)();
    var page = (0, store_1.useSelector)(main_1.mainSelectors.page);
    (0, react_1.useEffect)(function () {
        var backgroundEffectsForPage = (0, rangeEffects_1.getEffectsInRange)(effects, page, 'background');
        var backgroundEffectsInStore = store_1.store.getState().backgroundEffects.effects;
        Object.keys(backgroundEffectsInStore).forEach(function (keyCur) {
            var effectCur = backgroundEffectsInStore[keyCur];
            var id = effectCur.id;
            var idIsInRange = backgroundEffectsForPage.some(function (cur) {
                return cur.id === id;
            });
            if (idIsInRange) {
                return;
            }
            dispatch(background_1.backgroundEffectsActions.deleteEffect(id));
        });
    }, [page]);
    (0, react_1.useEffect)(function () {
        var backgroundEffectsForPage = (0, rangeEffects_1.getEffectsInRange)(effects, page, 'background');
        var backgroundEffectsInStore = store_1.store.getState().backgroundEffects.effects;
        backgroundEffectsForPage.forEach(function (backgroundEffectOnPageCur) {
            var id = backgroundEffectOnPageCur.id;
            var backgroundEffectOnPageCurOptions = __assign(__assign({}, backgroundEffectOnPageCur.options), { id: id });
            var backgroundEffectInStore = backgroundEffectsInStore[id];
            if (backgroundEffectInStore) {
                return;
            }
            dispatch(background_1.backgroundEffectsActions.setEffect(backgroundEffectOnPageCurOptions));
        });
    }, [page]);
}
exports.useBackgroundInRange = useBackgroundInRange;
//# sourceMappingURL=background.js.map