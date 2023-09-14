"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDotsInRange = void 0;
var react_1 = require("react");
var store_1 = require("../../../store");
var common_1 = require("../../../store/effects/common");
var main_1 = require("../../../store/main");
var rangeEffects_1 = require("../../../utils/effects/rangeEffects");
function useDotsInRange(effects) {
    var dispatch = (0, store_1.useDispatch)();
    var page = (0, store_1.useSelector)(main_1.mainSelectors.page);
    (0, react_1.useEffect)(function () {
        var dotsInRange = (0, rangeEffects_1.getEffectInRange)(effects, page, 'dots');
        if (!dotsInRange) {
            dispatch(common_1.effectsActions.setDotsActiveState(false));
            return;
        }
        dispatch(common_1.effectsActions.setDotsActiveState(true));
    }, [page]);
}
exports.useDotsInRange = useDotsInRange;
//# sourceMappingURL=dots.js.map