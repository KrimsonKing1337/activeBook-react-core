"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMusicUnload = exports.useMusic = void 0;
var react_1 = require("react");
var store_1 = require("../../../store");
var music_1 = require("../../../store/effects/audio/music");
var HowlWrapper_1 = require("../../../utils/effects/audio/HowlWrapper");
function useMusic(_a) {
    var src = _a.src, _b = _a.loop, loop = _b === void 0 ? true : _b, _c = _a.playOnLoad, playOnLoad = _c === void 0 ? true : _c;
    var dispatch = (0, store_1.useDispatch)();
    var musicInst = (0, store_1.useSelector)(music_1.musicEffectsSelectors.musicInst);
    (0, react_1.useEffect)(function () {
        var howlInst = new HowlWrapper_1.HowlWrapper({
            src: [src],
            type: 'music',
            loop: loop,
        });
        dispatch(music_1.musicEffectsActions.setMusic(howlInst));
    }, []);
    (0, react_1.useEffect)(function () {
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
exports.useMusic = useMusic;
function useMusicUnload() {
    var musicInst = (0, store_1.useSelector)(music_1.musicEffectsSelectors.musicInst);
    (0, react_1.useEffect)(function () {
        if (!musicInst || musicInst.isUnloading) {
            return;
        }
        musicInst.unload();
    }, []);
}
exports.useMusicUnload = useMusicUnload;
//# sourceMappingURL=music.js.map