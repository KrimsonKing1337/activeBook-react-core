import { jsx as _jsx } from "react/jsx-runtime";
import { nanoid } from 'nanoid';
import { Video } from 'components/Video';
import { Wrapper } from '../Wrapper';
import styles from './Videos.scss';
export var Videos = function (_a) {
    var videos = _a.videos;
    if (videos.length === 0) {
        return null;
    }
    return videos.map(function (videoCur) {
        var src = videoCur.src, wrapperStyle = videoCur.wrapperStyle, style = videoCur.style, _a = videoCur.autoPlay, autoPlay = _a === void 0 ? true : _a, _b = videoCur.loop, loop = _b === void 0 ? true : _b, _c = videoCur.muted, muted = _c === void 0 ? true : _c, _d = videoCur.defaultVolume, defaultVolume = _d === void 0 ? 100 : _d;
        var uuid = nanoid();
        return (_jsx(Wrapper, { style: wrapperStyle, children: _jsx(Video, { style: style, className: styles.video, src: src, autoPlay: autoPlay, loop: loop, muted: muted, defaultVolume: defaultVolume }) }, uuid));
    });
};
//# sourceMappingURL=Videos.js.map