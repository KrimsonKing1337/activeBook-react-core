import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'store';
import { soundBgEffectsActions, soundBgEffectsSelectors } from 'store/effects/audio/soundBg';
import { mainSelectors } from 'store/main';
import { HowlWrapper } from 'utils/effects/audio/HowlWrapper';
import { getEffectInRange } from 'utils/effects/rangeEffects';
export function useAudioInRange(effects) {
    var dispatch = useDispatch();
    var _a = useState(null), soundInRange = _a[0], setSoundInRange = _a[1];
    var page = useSelector(mainSelectors.page);
    var soundInst = useSelector(soundBgEffectsSelectors.soundInst);
    useEffect(function () {
        var soundOnPage = getEffectInRange(effects, page, 'bg');
        if (!soundOnPage) {
            soundInst === null || soundInst === void 0 ? void 0 : soundInst.unload(true);
            setSoundInRange(null);
            dispatch(soundBgEffectsActions.setSound(null));
            return;
        }
        setSoundInRange(soundOnPage);
        var src = soundOnPage.src, id = soundOnPage.id;
        if ((soundInst === null || soundInst === void 0 ? void 0 : soundInst.id) === id) {
            return;
        }
        var howlInst = new HowlWrapper({
            id: id,
            src: [src],
            type: 'bg',
            loop: true,
        });
        dispatch(soundBgEffectsActions.setSound(howlInst));
    }, [page]);
    useEffect(function () {
        if (!soundInst || soundInst.isUnloading) {
            return;
        }
        if ((soundInst === null || soundInst === void 0 ? void 0 : soundInst.id) === (soundInRange === null || soundInRange === void 0 ? void 0 : soundInRange.id) && soundInst.playing()) {
            return;
        }
        var timer = null;
        var delay = (soundInRange === null || soundInRange === void 0 ? void 0 : soundInRange.delay) || 0;
        timer = setTimeout(function () {
            soundInst.play();
        }, delay);
        return function () {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [soundInst, soundInRange]);
    return soundInst;
}
export function useAudioInRangeUnload() {
    var soundInst = useSelector(soundBgEffectsSelectors.soundInst);
    useEffect(function () {
        if (!soundInst || soundInst.isUnloading) {
            return;
        }
        soundInst.unload();
    }, []);
}
//# sourceMappingURL=sound.js.map