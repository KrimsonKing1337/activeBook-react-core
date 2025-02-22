import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSelector } from 'store';
import { backgroundEffectSelectors } from 'store/effects/background';
import { Video, Img, Shadow, Dots } from './components';
import styles from './BackgroundEffects.scss';
export var BackgroundEffects = function () {
    var style = useSelector(backgroundEffectSelectors.style);
    var video = useSelector(backgroundEffectSelectors.img);
    var img = useSelector(backgroundEffectSelectors.img);
    var Component = useSelector(backgroundEffectSelectors.Component);
    var oneOfBgIsActive = video || img || Component;
    return (_jsxs("div", { style: style, className: styles.backgroundEffectsWrapper, children: [_jsx(Dots, {}), oneOfBgIsActive && (_jsxs("div", { className: styles.backgroundObjectsWrapper, children: [_jsx(Shadow, {}), Component, _jsx(Video, {}), _jsx(Img, {})] }))] }));
};
//# sourceMappingURL=BackgroundEffects.js.map