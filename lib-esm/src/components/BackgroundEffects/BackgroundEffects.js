import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Video } from 'components/Video';
import { Img } from 'components/Img';
import { useSelector } from 'store';
import { effectsSelectors } from 'store/effects/common';
import { backgroundVideoEffectSelectors } from 'store/effects/background/video';
import { backgroundImgEffectSelectors } from 'store/effects/background/img';
import { Dots } from './components/Dots';
import styles from './BackgroundEffects.scss';
export var BackgroundEffects = function () {
    var backgroundVideoIsActive = useSelector(backgroundVideoEffectSelectors.isActive);
    var backgroundVideoSrc = useSelector(backgroundVideoEffectSelectors.src);
    var backgroundImgIsActive = useSelector(backgroundImgEffectSelectors.isActive);
    var backgroundImgSrc = useSelector(backgroundImgEffectSelectors.src);
    var dotsIsActive = useSelector(effectsSelectors.dotsIsActive);
    var oneOfBgIsActive = backgroundVideoIsActive || backgroundImgIsActive;
    return (_jsxs("div", { className: styles.backgroundEffectsWrapper, children: [dotsIsActive && _jsx(Dots, {}), oneOfBgIsActive && (_jsxs("div", { className: styles.backgroundObjectsWrapper, children: [_jsx("div", { className: styles.backgroundObjectsShadow }), backgroundVideoIsActive && (_jsx("div", { className: styles.backgroundObjectWrapper, children: _jsx(Video, { src: backgroundVideoSrc, autoPlay: true, loop: true, muted: true }) })), backgroundImgIsActive && (_jsx("div", { className: styles.backgroundObjectWrapper, children: _jsx(Img, { src: backgroundImgSrc }) }))] }))] }));
};
//# sourceMappingURL=BackgroundEffects.js.map