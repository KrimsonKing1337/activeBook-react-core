"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAudio = void 0;
var react_1 = require("react");
var nanoid_1 = require("nanoid");
var store_1 = require("../../store");
var audio_1 = require("../../store/effects/audio/audio");
var HowlWrapper_1 = require("../../utils/effects/audio/HowlWrapper");
function useAudio(_a) {
    var _b = _a.id, id = _b === void 0 ? '' : _b, src = _a.src, _c = _a.type, type = _c === void 0 ? 'sfx' : _c, _d = _a.loop, loop = _d === void 0 ? false : _d, _e = _a.playOnLoad, playOnLoad = _e === void 0 ? false : _e, _f = _a.stopBy, stopBy = _f === void 0 ? 0 : _f, _g = _a.delay, delay = _g === void 0 ? 0 : _g, _h = _a.relativeVolume, relativeVolume = _h === void 0 ? 100 : _h, _j = _a.screamer, screamer = _j === void 0 ? false : _j, _k = _a.fadeOutWhenUnload, fadeOutWhenUnload = _k === void 0 ? true : _k, _l = _a.onPlay, onPlay = _l === void 0 ? function () { } : _l, _m = _a.onPause, onPause = _m === void 0 ? function () { } : _m, _o = _a.onStop, onStop = _o === void 0 ? function () { } : _o, _p = _a.onUnload, onUnload = _p === void 0 ? function () { } : _p;
    var dispatch = (0, store_1.useDispatch)();
    var audioInstances = (0, store_1.useSelector)(audio_1.audioEffectsSelectors.audioInstances);
    var isDeleting = (0, store_1.useSelector)(audio_1.audioEffectsSelectors.isDeleting);
    var audioIdRef = (0, react_1.useRef)(id);
    (0, react_1.useEffect)(function () {
        if (isDeleting) {
            return;
        }
        var uuid = id || (0, nanoid_1.nanoid)();
        var opt = {
            id: uuid,
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
        audioIdRef.current = uuid;
        dispatch(audio_1.audioEffectsActions.setAudioInstance(howlInst));
    }, [isDeleting]);
    (0, react_1.useEffect)(function () {
        return function () {
            dispatch(audio_1.audioEffectsActions.deleteAudioInstance(audioIdRef.current));
            console.log('___ deleting audio instance', audioIdRef.current);
        };
    }, []);
    return audioInstances[audioIdRef.current];
}
exports.useAudio = useAudio;
//# sourceMappingURL=audio.js.map