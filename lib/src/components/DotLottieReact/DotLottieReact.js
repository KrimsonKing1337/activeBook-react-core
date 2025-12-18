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
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { DotLottieReact as DotLottieReactOriginal, } from '@lottiefiles/dotlottie-react';
import { useDispatch } from 'store';
import { effectsActions } from 'store/effects/common';
export var DotLottieReact = function (_a) {
    var refCallback = _a.refCallback, _b = _a.eventListeners, eventListeners = _b === void 0 ? [] : _b, etc = __rest(_a, ["refCallback", "eventListeners"]);
    var dispatch = useDispatch();
    var _c = useState(null), dotLottie = _c[0], setDotLottie = _c[1];
    useEffect(function () {
        if (!dotLottie) {
            return;
        }
        var readyHandler = function () {
            dispatch(effectsActions.setDotLottieReady());
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
        if (refCallback) {
            refCallback(dotLottieItem);
        }
    };
    return (_jsx(DotLottieReactOriginal, __assign({ dotLottieRefCallback: dotLottieRefCallback }, etc)));
};
//# sourceMappingURL=DotLottieReact.js.map