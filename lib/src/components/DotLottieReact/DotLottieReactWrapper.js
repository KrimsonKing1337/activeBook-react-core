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
exports.DotLottieReactWrapper = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var store_1 = require("../../store");
var common_1 = require("../../store/effects/common");
var DotLottieReactWrapper = function (_a) {
    var children = _a.children, _b = _a.amount, amount = _b === void 0 ? 1 : _b, _c = _a.className, className = _c === void 0 ? '' : _c, etc = __rest(_a, ["children", "amount", "className"]);
    var dispatch = (0, store_1.useDispatch)();
    (0, react_1.useEffect)(function () {
        dispatch(common_1.effectsActions.setDotLottieAmount(amount));
        return function () {
            dispatch(common_1.effectsActions.setDotLottieAmount(0));
            dispatch(common_1.effectsActions.setDotLottieReadyAmount(0));
        };
    }, []);
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: className }, etc, { children: children })));
};
exports.DotLottieReactWrapper = DotLottieReactWrapper;
//# sourceMappingURL=DotLottieReactWrapper.js.map