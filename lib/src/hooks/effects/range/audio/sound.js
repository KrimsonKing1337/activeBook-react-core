"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAudioInRangeUnload = exports.useAudioInRange = void 0;
var react_1 = require("react");
var store_1 = require("../../../../store");
var soundBg_1 = require("../../../../store/effects/audio/soundBg");
var main_1 = require("../../../../store/main");
var HowlWrapper_1 = require("../../../../utils/effects/audio/HowlWrapper");
var rangeEffects_1 = require("../../../../utils/effects/rangeEffects");
function useAudioInRange(effects) {
    var dispatch = (0, store_1.useDispatch)();
    var _a = (0, react_1.useState)(null), soundInRange = _a[0], setSoundInRange = _a[1];
    var page = (0, store_1.useSelector)(main_1.mainSelectors.page);
    var soundInst = (0, store_1.useSelector)(soundBg_1.soundBgEffectsSelectors.soundInst);
    (0, react_1.useEffect)(function () {
        var soundOnPage = (0, rangeEffects_1.getEffectInRange)(effects, page, 'bg');
        if (!soundOnPage) {
            soundInst === null || soundInst === void 0 ? void 0 : soundInst.unload(true);
            setSoundInRange(null);
            dispatch(soundBg_1.soundBgEffectsActions.setSound(null));
            return;
        }
        setSoundInRange(soundOnPage);
        var src = soundOnPage.src, id = soundOnPage.id;
        if ((soundInst === null || soundInst === void 0 ? void 0 : soundInst.id) === id) {
            return;
        }
        var howlInst = new HowlWrapper_1.HowlWrapper({
            id: id,
            src: [src],
            type: 'bg',
            loop: true,
        });
        dispatch(soundBg_1.soundBgEffectsActions.setSound(howlInst));
    }, [page]);
    (0, react_1.useEffect)(function () {
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
exports.useAudioInRange = useAudioInRange;
function useAudioInRangeUnload() {
    var soundInst = (0, store_1.useSelector)(soundBg_1.soundBgEffectsSelectors.soundInst);
    (0, react_1.useEffect)(function () {
        if (!soundInst || soundInst.isUnloading) {
            return;
        }
        soundInst.unload();
    }, []);
}
exports.useAudioInRangeUnload = useAudioInRangeUnload;
//# sourceMappingURL=sound.js.map