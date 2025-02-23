import { jsx as _jsx } from "react/jsx-runtime";
import { useRef } from 'react';
import { nanoid } from 'nanoid';
import { Video as DefaultVideo } from 'components/Video';
import { Wrapper } from '../Wrapper';
import styles from './Videos.scss';
export var Videos = function (_a) {
    var videos = _a.videos;
    var ref = useRef(null);
    if (videos.length === 0) {
        return null;
    }
    return videos.map(function (videoCur) {
        var src = videoCur.src, wrapperStyle = videoCur.wrapperStyle, style = videoCur.style, _a = videoCur.autoPlay, autoPlay = _a === void 0 ? true : _a, _b = videoCur.loop, loop = _b === void 0 ? true : _b, _c = videoCur.muted, muted = _c === void 0 ? true : _c;
        var uuid = nanoid();
        return (_jsx(Wrapper, { style: wrapperStyle, children: _jsx(DefaultVideo, { passedRef: ref, style: style, className: styles.video, src: src, autoPlay: autoPlay, loop: loop, muted: muted }) }, uuid));
    });
};
//# sourceMappingURL=Videos.js.map