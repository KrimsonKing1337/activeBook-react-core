"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMusicInRangeUnload = exports.useMusicInRange = void 0;
var react_1 = require("react");
var store_1 = require("../../../../store");
var music_1 = require("../../../../store/effects/audio/music");
var main_1 = require("../../../../store/main");
var HowlWrapper_1 = require("../../../../utils/effects/audio/HowlWrapper");
var rangeEffects_1 = require("../../../../utils/effects/rangeEffects");
function useMusicInRange(effects) {
    var dispatch = (0, store_1.useDispatch)();
    var _a = (0, react_1.useState)(null), musicInRange = _a[0], setMusicInRange = _a[1];
    var page = (0, store_1.useSelector)(main_1.mainSelectors.page);
    var musicInst = (0, store_1.useSelector)(music_1.musicEffectsSelectors.musicInst);
    (0, react_1.useEffect)(function () {
        var musicOnPage = (0, rangeEffects_1.getEffectInRange)(effects, page, 'music');
        if (!musicOnPage) {
            musicInst === null || musicInst === void 0 ? void 0 : musicInst.unload(true);
            setMusicInRange(null);
            dispatch(music_1.musicEffectsActions.setMusic(null));
            return;
        }
        setMusicInRange(musicOnPage);
        var src = musicOnPage.src, id = musicOnPage.id;
        if ((musicInst === null || musicInst === void 0 ? void 0 : musicInst.id) === id) {
            if (!(musicInst === null || musicInst === void 0 ? void 0 : musicInst.playing())) {
                musicInst === null || musicInst === void 0 ? void 0 : musicInst.play();
            }
            return;
        }
        var howlInst = new HowlWrapper_1.HowlWrapper({
            id: id,
            src: [src],
            type: 'music',
            loop: true,
        });
        dispatch(music_1.musicEffectsActions.setMusic(howlInst));
    }, [page]);
    (0, react_1.useEffect)(function () {
        if (!musicInRange) {
            return;
        }
        if (!musicInst || musicInst.isUnloading) {
            if ((musicInst === null || musicInst === void 0 ? void 0 : musicInst.state()) !== 'unloaded') {
                return;
            }
        }
        if ((musicInst === null || musicInst === void 0 ? void 0 : musicInst.id) === (musicInRange === null || musicInRange === void 0 ? void 0 : musicInRange.id) && musicInst.playing()) {
            return;
        }
        musicInst.play();
    }, [musicInst, musicInRange]);
    return musicInRange;
}
exports.useMusicInRange = useMusicInRange;
function useMusicInRangeUnload() {
    var musicInst = (0, store_1.useSelector)(music_1.musicEffectsSelectors.musicInst);
    (0, react_1.useEffect)(function () {
        if (!musicInst || musicInst.isUnloading) {
            return;
        }
        musicInst.unload();
    }, []);
}
exports.useMusicInRangeUnload = useMusicInRangeUnload;
//# sourceMappingURL=music.js.map