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
exports.DotLottieReact = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var dotlottie_react_1 = require("@lottiefiles/dotlottie-react");
var store_1 = require("../../store");
var common_1 = require("../../store/effects/common");
var DotLottieReact = function (_a) {
    var _b = _a.eventListeners, eventListeners = _b === void 0 ? [] : _b, etc = __rest(_a, ["eventListeners"]);
    var dispatch = (0, store_1.useDispatch)();
    var _c = (0, react_1.useState)(null), dotLottie = _c[0], setDotLottie = _c[1];
    (0, react_1.useEffect)(function () {
        if (!dotLottie) {
            return;
        }
        var readyHandler = function () {
            dispatch(common_1.effectsActions.setDotLottieReady());
        };
        dotLottie.addEventListener('load', readyHandler);
        eventListeners.forEach(function (eventListenerCur) {
            var event = eventListenerCur.event, handler = eventListenerCur.handler;
            dotLottie.addEventListener(event, handler);
        });
        return function () {
            if (!dotLottie) {
                return;
            }
            dotLottie.removeEventListener('load', readyHandler);
            eventListeners.forEach(function (eventListenerCur) {
                var event = eventListenerCur.event, handler = eventListenerCur.handler;
                dotLottie.removeEventListener(event, handler);
            });
        };
    }, [dotLottie]);
    var dotLottieRefCallback = function (dotLottieItem) {
        setDotLottie(dotLottieItem);
    };
    return ((0, jsx_runtime_1.jsx)(dotlottie_react_1.DotLottieReact, __assign({ dotLottieRefCallback: dotLottieRefCallback }, etc)));
};
exports.DotLottieReact = DotLottieReact;
//# sourceMappingURL=DotLottieReact.js.map