import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment } from 'react';
import { nanoid } from 'nanoid';
import { useSelector } from 'store';
import { backgroundEffectsSelectors } from 'store/effects/background';
import { Videos, Images, Shadow, Dots } from './components';
import styles from './BackgroundEffects.scss';
export var BackgroundEffects = function () {
    var effects = useSelector(backgroundEffectsSelectors.effects);
    var BackgroundObjectsWrappers = Object.keys(effects).map(function (keyCur) {
        var effectCur = effects[keyCur];
        var _a = effectCur.videos, videos = _a === void 0 ? [] : _a, _b = effectCur.images, images = _b === void 0 ? [] : _b, _c = effectCur.Component, Component = _c === void 0 ? null : _c, _d = effectCur.shadow, shadow = _d === void 0 ? {} : _d, _e = effectCur.style, style = _e === void 0 ? {} : _e;
        var oneOfBgIsActive = !!videos.length || !!images.length || !!Component;
        var uuid = nanoid();
        return (_jsx(Fragment, { children: oneOfBgIsActive && (_jsxs("div", { style: style, className: styles.backgroundObjectsWrapper, children: [_jsx(Shadow, { options: shadow }), Component, _jsx(Videos, { videos: videos }), _jsx(Images, { images: images })] })) }, uuid));
    });
    return (_jsxs("div", { className: styles.backgroundEffectsWrapper, children: [_jsx(Dots, {}), BackgroundObjectsWrappers.map(function (cur) { return cur; })] }));
};
//# sourceMappingURL=BackgroundEffects.js.map