import { useEffect } from 'react';
import { store, useDispatch, useSelector } from 'store';
import { mainSelectors } from 'store/main';
import { audioBgEffectsActions } from 'store/effects/audio/audioBg';
import { HowlWrapper } from 'utils/effects/audio/HowlWrapper';
import { getEffectsInRange } from 'utils/effects/rangeEffects';
export function useAudioInRange(effects) {
    var dispatch = useDispatch();
    var page = useSelector(mainSelectors.page);
    useEffect(function () {
        var audioInstances = store.getState().audioBgEffects.audioInstances;
        var audiosForPage = getEffectsInRange(effects, page, 'audio');
        Object.keys(audioInstances).forEach(function (keyCur) {
            var audioInstanceCur = audioInstances[keyCur];
            if (!audioInstanceCur || audioInstanceCur.isUnloading) {
                return;
            }
            var id = audioInstanceCur.id;
            var idIsInRange = audiosForPage.some(function (cur) {
                return cur.id === id;
            });
            if (idIsInRange) {
                return;
            }
            dispatch(audioBgEffectsActions.deleteAudioInstance(id));
        });
    }, [page]);
    useEffect(function () {
        var audioInstancesInStore = store.getState().audioBgEffects.audioInstances;
        var audiosForPage = getEffectsInRange(effects, page, 'audio');
        audiosForPage.forEach(function (audioOnPageCur) {
            var idFromRange = audioOnPageCur.id;
            var _a = audioOnPageCur.options, _b = _a.id, id = _b === void 0 ? idFromRange : _b, src = _a.src, type = _a.type, loop = _a.loop, playOnLoad = _a.playOnLoad, delay = _a.delay, stopBy = _a.stopBy, screamer = _a.screamer, fadeOutWhenUnload = _a.fadeOutWhenUnload, onPlay = _a.onPlay, onUnload = _a.onUnload;
            var audioInstanceInStore = audioInstancesInStore[id];
            if (audioInstanceInStore) {
                return;
            }
            var howlInst = new HowlWrapper({
                id: id,
                src: [src],
                type: type,
                playOnLoad: playOnLoad,
                stopBy: stopBy,
                delay: delay,
                loop: loop,
                screamer: screamer,
                fadeOutWhenUnload: fadeOutWhenUnload,
                onPlay: onPlay,
                onUnload: onUnload,
            });
            dispatch(audioBgEffectsActions.setAudioInstance(howlInst));
        });
    }, [page]);
}
//# sourceMappingURL=audio.js.map