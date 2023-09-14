"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInverseColor = void 0;
var store_1 = require("../../store");
var common_1 = require("../../store/effects/common");
function useInverseColor() {
    var dispatch = (0, store_1.useDispatch)();
    var on = function () { return dispatch(common_1.effectsActions.setInverseColorActiveState(true)); };
    var off = function () { return dispatch(common_1.effectsActions.setInverseColorActiveState(false)); };
    return {
        inverseColorOn: on,
        inverseColorOff: off,
    };
}
exports.useInverseColor = useInverseColor;
//# sourceMappingURL=inverseColor.js.map