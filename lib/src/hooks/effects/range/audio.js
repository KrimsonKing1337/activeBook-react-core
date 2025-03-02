"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAudioInRange = void 0;
var react_1 = require("react");
var store_1 = require("../../../store");
var main_1 = require("../../../store/main");
var audioBg_1 = require("../../../store/effects/audio/audioBg");
var HowlWrapper_1 = require("../../../utils/effects/audio/HowlWrapper");
var rangeEffects_1 = require("../../../utils/effects/rangeEffects");
function useAudioInRange(effects) {
    var dispatch = (0, store_1.useDispatch)();
    var page = (0, store_1.useSelector)(main_1.mainSelectors.page);
    (0, react_1.useEffect)(function () {
        var audioInstances = store_1.store.getState().audioBgEffects.audioInstances;
        var audiosForPage = (0, rangeEffects_1.getEffectsInRange)(effects, page, 'audio');
        Object.keys(audioInstances).forEach(function (keyCur) {
            var audioInstanceCur = audioInstances[keyCur];
            if (!audioInstanceCur) {
                return;
            }
            var id = audioInstanceCur.id;
            var idIsInRange = audiosForPage.some(function (cur) {
                return cur.id === id;
            });
            if (idIsInRange) {
                return;
            }
            dispatch(audioBg_1.audioBgEffectsActions.deleteAudioInstance(id));
        });
    }, [page]);
    (0, react_1.useEffect)(function () {
        var audioInstancesInStore = store_1.store.getState().audioBgEffects.audioInstances;
        var audiosForPage = (0, rangeEffects_1.getEffectsInRange)(effects, page, 'audio');
        audiosForPage.forEach(function (audioOnPageCur) {
            var id = audioOnPageCur.id;
            // id, который указан в options игнорируется, берётся id на верхнем уровне
            var _a = audioOnPageCur.options, src = _a.src, type = _a.type, loop = _a.loop, playOnLoad = _a.playOnLoad, delay = _a.delay, stopBy = _a.stopBy, screamer = _a.screamer, fadeOutWhenUnload = _a.fadeOutWhenUnload, onPlay = _a.onPlay, onUnload = _a.onUnload;
            var audioInstanceInStore = audioInstancesInStore[id];
            if (audioInstanceInStore) {
                return;
            }
            var howlInst = new HowlWrapper_1.HowlWrapper({
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
            dispatch(audioBg_1.audioBgEffectsActions.setAudioInstance(howlInst));
        });
    }, [page]);
}
exports.useAudioInRange = useAudioInRange;
//# sourceMappingURL=audio.js.map