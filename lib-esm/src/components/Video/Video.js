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
import { useEffect, useRef } from 'react';
import { useSelector } from 'store';
import { volumeSelectors } from 'store/volume';
export var Video = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, src = _a.src, _c = _a.relativeVolume, relativeVolume = _c === void 0 ? 100 : _c, _d = _a.muted, muted = _d === void 0 ? true : _d, _e = _a.autoPlay, autoPlay = _e === void 0 ? true : _e, etc = __rest(_a, ["className", "src", "relativeVolume", "muted", "autoPlay"]);
    var _f = useSelector(volumeSelectors.all), videosVolume = _f.videos, globalVolume = _f.global;
    var ref = useRef(null);
    /*
      по умолчанию всегда ставлю muted,
      чтобы видео до применения громкости не начинало звучать на 100% громкости при запуске.
      пока useRef и useEffect сработают - успевает пройти какое-то время. и видео будет играть на максимальной громкости
    */
    useEffect(function () {
        if (!ref.current) {
            return;
        }
        ref.current.volume = (videosVolume / 100) * (relativeVolume / 100) * (globalVolume / 100);
        ref.current.setAttribute('data-relativeVolume', relativeVolume.toString());
    }, []);
    return (_jsx("video", __assign({ ref: ref, className: className, src: src, preload: "auto", poster: "/assets/img/poster-default.png", muted: muted, autoPlay: autoPlay }, etc)));
};
//# sourceMappingURL=Video.js.map