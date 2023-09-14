import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'store';
import { musicEffectsActions, musicEffectsSelectors } from 'store/effects/audio/music';
import { mainSelectors } from 'store/main';
import { HowlWrapper } from 'utils/effects/audio/HowlWrapper';
import { getEffectInRange } from 'utils/effects/rangeEffects';
export function useMusicInRange(effects) {
    var dispatch = useDispatch();
    var _a = useState(null), musicInRange = _a[0], setMusicInRange = _a[1];
    var page = useSelector(mainSelectors.page);
    var musicInst = useSelector(musicEffectsSelectors.musicInst);
    useEffect(function () {
        var musicOnPage = getEffectInRange(effects, page, 'music');
        if (!musicOnPage) {
            musicInst === null || musicInst === void 0 ? void 0 : musicInst.unload(true);
            setMusicInRange(null);
            dispatch(musicEffectsActions.setMusic(null));
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
        var howlInst = new HowlWrapper({
            id: id,
            src: [src],
            type: 'music',
            loop: true,
        });
        dispatch(musicEffectsActions.setMusic(howlInst));
    }, [page]);
    useEffect(function () {
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
export function useMusicInRangeUnload() {
    var musicInst = useSelector(musicEffectsSelectors.musicInst);
    useEffect(function () {
        if (!musicInst || musicInst.isUnloading) {
            return;
        }
        musicInst.unload();
    }, []);
}
//# sourceMappingURL=music.js.map