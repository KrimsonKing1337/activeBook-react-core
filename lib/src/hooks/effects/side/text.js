"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSideText = void 0;
var react_1 = require("react");
var store_1 = require("../../../store");
var text_1 = require("../../../store/effects/side/text");
var slice_1 = require("../../../store/effects/side/text/slice");
function useSideText(_a) {
    var _b = _a.isActiveDefault, isActiveDefault = _b === void 0 ? true : _b, template = _a.template, _c = _a.speed, speed = _c === void 0 ? slice_1.initialState.speed : _c;
    var dispatch = (0, store_1.useDispatch)();
    var on = function () {
        dispatch(text_1.sideTextActions.setActiveState(true));
    };
    var off = function () {
        dispatch(text_1.sideTextActions.setActiveState(false));
    };
    (0, react_1.useEffect)(function () {
        dispatch(text_1.sideTextActions.setTemplate(template));
        dispatch(text_1.sideTextActions.setSpeed(speed));
        dispatch(text_1.sideTextActions.setActiveState(isActiveDefault));
        return function () {
            off();
        };
    }, []);
    return { sideTextOn: on, sideTextOff: off };
}
exports.useSideText = useSideText;
//# sourceMappingURL=text.js.map