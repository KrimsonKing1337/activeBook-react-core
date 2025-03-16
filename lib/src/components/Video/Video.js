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
exports.Video = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var store_1 = require("../../store");
var volume_1 = require("../../store/volume");
var common_1 = require("../../store/effects/common");
var Video = function (_a) {
    var id = _a.id, _b = _a.className, className = _b === void 0 ? '' : _b, src = _a.src, _c = _a.relativeVolume, relativeVolume = _c === void 0 ? 100 : _c, _d = _a.muted, muted = _d === void 0 ? true : _d, _e = _a.autoPlay, autoPlay = _e === void 0 ? true : _e, etc = __rest(_a, ["id", "className", "src", "relativeVolume", "muted", "autoPlay"]);
    var dispatch = (0, store_1.useDispatch)();
    var ref = (0, react_1.useRef)(null);
    var refCurrentTime = (0, react_1.useRef)(0);
    var _f = (0, store_1.useSelector)(volume_1.volumeSelectors.all), videosVolume = _f.videos, globalVolume = _f.global;
    var videosCurrentTime = (0, store_1.useSelector)(common_1.effectsSelectors.videosCurrentTime);
    (0, react_1.useEffect)(function () {
        if (!ref.current) {
            return;
        }
        ref.current.volume = (videosVolume / 100) * (relativeVolume / 100) * (globalVolume / 100);
        ref.current.setAttribute('data-relativeVolume', relativeVolume.toString());
        if (videosCurrentTime[id]) {
            ref.current.currentTime = videosCurrentTime[id];
        }
        ref.current.addEventListener('timeupdate', function () {
            var _a;
            refCurrentTime.current = ((_a = ref.current) === null || _a === void 0 ? void 0 : _a.currentTime) || 0;
        });
        return function () {
            if (!refCurrentTime.current) {
                return;
            }
            dispatch(common_1.effectsActions.setVideoCurrentTime({
                id: id,
                currentTime: refCurrentTime.current,
            }));
        };
    }, []);
    return ((0, jsx_runtime_1.jsx)("video", __assign({ ref: ref, "data-id": id, className: className, src: src, preload: "auto", poster: "/assets/img/poster-default.png", muted: muted, autoPlay: autoPlay }, etc)));
};
exports.Video = Video;
//# sourceMappingURL=Video.js.map