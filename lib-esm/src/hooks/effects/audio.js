import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'store';
import { audioEffectsActions, audioEffectsSelectors } from 'store/effects/audio/audio';
import { HowlWrapper } from 'utils/effects/audio/HowlWrapper';
export function useAudio(_a) {
    var _b = _a.id, id = _b === void 0 ? '' : _b, src = _a.src, _c = _a.type, type = _c === void 0 ? 'sfx' : _c, _d = _a.loop, loop = _d === void 0 ? false : _d, _e = _a.playOnLoad, playOnLoad = _e === void 0 ? false : _e, _f = _a.stopBy, stopBy = _f === void 0 ? 0 : _f, _g = _a.delay, delay = _g === void 0 ? 0 : _g, _h = _a.relativeVolume, relativeVolume = _h === void 0 ? 100 : _h, _j = _a.screamer, screamer = _j === void 0 ? false : _j, _k = _a.fadeOutWhenUnload, fadeOutWhenUnload = _k === void 0 ? true : _k, _l = _a.onPlay, onPlay = _l === void 0 ? function () { } : _l, _m = _a.onPause, onPause = _m === void 0 ? function () { } : _m, _o = _a.onStop, onStop = _o === void 0 ? function () { } : _o, _p = _a.onUnload, onUnload = _p === void 0 ? function () { } : _p;
    var dispatch = useDispatch();
    var audioInstances = useSelector(audioEffectsSelectors.audioInstances);
    var _q = useState(id), audioId = _q[0], setAudioId = _q[1];
    useEffect(function () {
        var uuid = id || nanoid();
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
        var howlInst = new HowlWrapper(opt);
        setAudioId(uuid);
        dispatch(audioEffectsActions.setAudioInstance(howlInst));
        return function () {
            console.log('___ deleting instance', uuid);
            dispatch(audioEffectsActions.deleteAudioInstance(uuid));
        };
    }, []);
    return audioInstances[audioId];
}
//# sourceMappingURL=audio.js.map