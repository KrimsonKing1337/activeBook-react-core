import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSelector } from 'store';
import { backgroundEffectsSelectors } from 'store/effects/background';
import { Videos, Images, Shadow, Dots } from './components';
import styles from './BackgroundEffects.scss';
export var BackgroundEffects = function () {
    var style = useSelector(backgroundEffectsSelectors.style);
    var videos = useSelector(backgroundEffectsSelectors.images);
    var images = useSelector(backgroundEffectsSelectors.images);
    var Component = useSelector(backgroundEffectsSelectors.Component);
    var oneOfBgIsActive = videos.length || images.length || Component;
    return (_jsxs("div", { style: style, className: styles.backgroundEffectsWrapper, children: [_jsx(Dots, {}), oneOfBgIsActive && (_jsxs("div", { className: styles.backgroundObjectsWrapper, children: [_jsx(Shadow, {}), Component, _jsx(Videos, {}), _jsx(Images, {})] }))] }));
};
//# sourceMappingURL=BackgroundEffects.js.map