"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFont = void 0;
var react_1 = require("react");
var store_1 = require("../../store");
var common_1 = require("../../store/effects/common");
var useFont = function (_a) {
    var _b = _a.color, color = _b === void 0 ? 'var(--secondary)' : _b, style = __rest(_a, ["color"]);
    var dispatch = (0, store_1.useDispatch)();
    (0, react_1.useEffect)(function () {
        dispatch(common_1.effectsActions.setFontColor(color));
        dispatch(common_1.effectsActions.setFontStyle(style));
        return function () {
            dispatch(common_1.effectsActions.resetFont());
        };
    }, [color, style]);
};
exports.useFont = useFont;
//# sourceMappingURL=font.js.map