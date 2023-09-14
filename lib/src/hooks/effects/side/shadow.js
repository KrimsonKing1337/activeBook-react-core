"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSideShadow = void 0;
var react_1 = require("react");
var store_1 = require("../../../store");
var shadow_1 = require("../../../store/effects/side/shadow");
var slice_1 = require("../../../store/effects/side/shadow/slice");
function useSideShadow(_a) {
    var _b = _a.isActiveDefault, isActiveDefault = _b === void 0 ? true : _b, color = _a.color, _c = _a.speed, speed = _c === void 0 ? slice_1.initialState.speed : _c;
    var dispatch = (0, store_1.useDispatch)();
    var on = function () {
        dispatch(shadow_1.sideShadowActions.setActiveState(true));
    };
    var off = function () {
        dispatch(shadow_1.sideShadowActions.setActiveState(false));
    };
    (0, react_1.useEffect)(function () {
        dispatch(shadow_1.sideShadowActions.setColor(color));
        dispatch(shadow_1.sideShadowActions.setSpeed(speed));
        dispatch(shadow_1.sideShadowActions.setActiveState(isActiveDefault));
        return function () {
            off();
        };
    }, []);
    return { sideShadowOn: on, sideShadowOff: off };
}
exports.useSideShadow = useSideShadow;
//# sourceMappingURL=shadow.js.map