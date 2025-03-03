"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAudio = void 0;
var react_1 = require("react");
var store_1 = require("../../store");
var audio_1 = require("../../store/effects/audio/audio");
var HowlWrapper_1 = require("../../utils/effects/audio/HowlWrapper");
function useAudio(_a) {
    var id = _a.id, src = _a.src, _b = _a.type, type = _b === void 0 ? 'sfx' : _b, _c = _a.loop, loop = _c === void 0 ? false : _c, _d = _a.playOnLoad, playOnLoad = _d === void 0 ? false : _d, _e = _a.stopBy, stopBy = _e === void 0 ? 0 : _e, _f = _a.delay, delay = _f === void 0 ? 0 : _f, _g = _a.relativeVolume, relativeVolume = _g === void 0 ? 100 : _g, _h = _a.screamer, screamer = _h === void 0 ? false : _h, _j = _a.fadeOutWhenUnload, fadeOutWhenUnload = _j === void 0 ? true : _j, _k = _a.onPlay, onPlay = _k === void 0 ? function () { } : _k, _l = _a.onPause, onPause = _l === void 0 ? function () { } : _l, _m = _a.onStop, onStop = _m === void 0 ? function () { } : _m, _o = _a.onUnload, onUnload = _o === void 0 ? function () { } : _o;
    var dispatch = (0, store_1.useDispatch)();
    var audioInstances = (0, store_1.useSelector)(audio_1.audioEffectsSelectors.audioInstances);
    var isDeleting = (0, store_1.useSelector)(audio_1.audioEffectsSelectors.isDeleting);
    var audioIdRef = (0, react_1.useRef)(id);
    (0, react_1.useEffect)(function () {
        if (isDeleting) {
            return;
        }
        var opt = {
            id: id,
            src: [src],
            type: type,
            loop: loop,
            playOnLoad: playOnLoad,
            relativeVolume: relativeVolume,
            screamer: screamer,
            fadeOutWhenUnload: fadeOutWhenUnload,
            stopBy: stopBy,
            delay: delay,
            onPlay: onPlay,
            onPause: onPause,
            onStop: onStop,
            onUnload: onUnload,
        };
        var howlInst = new HowlWrapper_1.HowlWrapper(opt);
        audioIdRef.current = id;
        dispatch(audio_1.audioEffectsActions.setAudioInstance(howlInst));
    }, [isDeleting]);
    (0, react_1.useEffect)(function () {
        return function () {
            dispatch(audio_1.audioEffectsActions.deleteAudioInstance(audioIdRef.current));
        };
    }, []);
    return audioInstances[audioIdRef.current];
}
exports.useAudio = useAudio;
//# sourceMappingURL=audio.js.map