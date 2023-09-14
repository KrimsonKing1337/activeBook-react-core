import { useEffect } from 'react';
import { useDispatch, useSelector } from 'store';
import { musicEffectsActions, musicEffectsSelectors } from 'store/effects/audio/music';
import { HowlWrapper } from 'utils/effects/audio/HowlWrapper';
export function useMusic(_a) {
    var src = _a.src, _b = _a.loop, loop = _b === void 0 ? true : _b, _c = _a.playOnLoad, playOnLoad = _c === void 0 ? true : _c;
    var dispatch = useDispatch();
    var musicInst = useSelector(musicEffectsSelectors.musicInst);
    useEffect(function () {
        var howlInst = new HowlWrapper({
            src: [src],
            type: 'music',
            loop: loop,
        });
        dispatch(musicEffectsActions.setMusic(howlInst));
    }, []);
    useEffect(function () {
        if (!musicInst || musicInst.isUnloading) {
            return;
        }
        if (playOnLoad) {
            musicInst.play();
        }
        return function () {
            musicInst.unload(true);
        };
    }, [musicInst]);
    return musicInst;
}
export function useMusicUnload() {
    var musicInst = useSelector(musicEffectsSelectors.musicInst);
    useEffect(function () {
        if (!musicInst || musicInst.isUnloading) {
            return;
        }
        musicInst.unload();
    }, []);
}
//# sourceMappingURL=music.js.map