import { jsx as _jsx } from "react/jsx-runtime";
import { useRef } from 'react';
import { Video as DefaultVideo } from 'components/Video';
import { useSelector } from 'store';
import { backgroundEffectSelectors } from 'store/effects/background';
import { Wrapper } from '../Wrapper';
import styles from './Video.scss';
export var Video = function () {
    var ref = useRef(null);
    var video = useSelector(backgroundEffectSelectors.video);
    if (!video) {
        return null;
    }
    var src = video.src, wrapperStyle = video.wrapperStyle, style = video.style, _a = video.autoPlay, autoPlay = _a === void 0 ? true : _a, _b = video.loop, loop = _b === void 0 ? true : _b, _c = video.muted, muted = _c === void 0 ? true : _c;
    return (_jsx(Wrapper, { style: wrapperStyle, children: _jsx(DefaultVideo, { passedRef: ref, style: style, className: styles.video, src: src, autoPlay: autoPlay, loop: loop, muted: muted }) }));
};
//# sourceMappingURL=Video.js.map