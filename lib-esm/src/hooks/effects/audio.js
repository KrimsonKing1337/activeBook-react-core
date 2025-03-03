import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'store';
import { audioEffectsActions, audioEffectsSelectors } from 'store/effects/audio/audio';
import { HowlWrapper } from 'utils/effects/audio/HowlWrapper';
export function useAudio(_a) {
    var id = _a.id, src = _a.src, _b = _a.type, type = _b === void 0 ? 'sfx' : _b, _c = _a.loop, loop = _c === void 0 ? false : _c, _d = _a.playOnLoad, playOnLoad = _d === void 0 ? false : _d, _e = _a.stopBy, stopBy = _e === void 0 ? 0 : _e, _f = _a.delay, delay = _f === void 0 ? 0 : _f, _g = _a.relativeVolume, relativeVolume = _g === void 0 ? 100 : _g, _h = _a.screamer, screamer = _h === void 0 ? false : _h, _j = _a.fadeOutWhenUnload, fadeOutWhenUnload = _j === void 0 ? true : _j, _k = _a.onPlay, onPlay = _k === void 0 ? function () { } : _k, _l = _a.onPause, onPause = _l === void 0 ? function () { } : _l, _m = _a.onStop, onStop = _m === void 0 ? function () { } : _m, _o = _a.onUnload, onUnload = _o === void 0 ? function () { } : _o;
    var dispatch = useDispatch();
    var audioInstances = useSelector(audioEffectsSelectors.audioInstances);
    var isDeleting = useSelector(audioEffectsSelectors.isDeleting);
    var audioIdRef = useRef(id);
    useEffect(function () {
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
        var howlInst = new HowlWrapper(opt);
        audioIdRef.current = id;
        dispatch(audioEffectsActions.setAudioInstance(howlInst));
    }, [isDeleting]);
    useEffect(function () {
        return function () {
            dispatch(audioEffectsActions.deleteAudioInstance(audioIdRef.current));
        };
    }, []);
    return audioInstances[audioIdRef.current];
}
//# sourceMappingURL=audio.js.map