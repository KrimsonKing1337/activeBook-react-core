"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFont = void 0;
var react_1 = require("react");
var store_1 = require("../../store");
var common_1 = require("../../store/effects/common");
var useFont = function (_a) {
    var _b = _a.color, color = _b === void 0 ? 'var(--secondary)' : _b;
    var dispatch = (0, store_1.useDispatch)();
    (0, react_1.useEffect)(function () {
        dispatch(common_1.effectsActions.setFontColor(color));
        return function () {
            dispatch(common_1.effectsActions.setFontColor('var(--secondary)'));
        };
    }, []);
};
exports.useFont = useFont;
//# sourceMappingURL=font.js.map