import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment, memo, useMemo } from 'react';
import { useSelector } from 'store';
import { backgroundEffectsSelectors } from 'store/effects/background';
import { Videos, Images, Shadow, Dots, Wrapper } from './components';
import * as styles from './BackgroundEffects.scss';
var Child = memo(function (_a) {
    var children = _a.children;
    return (_jsx(Fragment, { children: children }));
});
export var BackgroundEffects = memo(function () {
    var effects = useSelector(backgroundEffectsSelectors.effects);
    var BackgroundObjectsWrappers = useMemo(function () {
        return Object.keys(effects).map(function (keyCur) {
            var effectCur = effects[keyCur];
            var id = effectCur.id, _a = effectCur.videos, videos = _a === void 0 ? [] : _a, _b = effectCur.images, images = _b === void 0 ? [] : _b, _c = effectCur.Component, Component = _c === void 0 ? null : _c, _d = effectCur.shadow, shadow = _d === void 0 ? {} : _d, _e = effectCur.style, style = _e === void 0 ? {} : _e;
            var oneOfBgIsActive = !!videos.length || !!images.length || !!Component;
            return oneOfBgIsActive && (_jsx(Child, { children: _jsxs("div", { style: style, className: styles.backgroundObjectsWrapper, children: [_jsx(Shadow, { options: shadow }), Component, _jsx(Videos, { videos: videos }), _jsx(Images, { images: images })] }) }, id));
        });
    }, [effects]);
    return (_jsxs(Wrapper, { id: "background-effects", children: [_jsx(Dots, {}), BackgroundObjectsWrappers.map(function (cur) { return cur; })] }));
});
//# sourceMappingURL=BackgroundEffects.js.map