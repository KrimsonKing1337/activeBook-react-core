import { jsx as _jsx } from "react/jsx-runtime";
import { Video } from '../../../Video';
import styles from './Videos.scss';
export var Videos = function (_a) {
    var videos = _a.videos;
    if (videos.length === 0) {
        return null;
    }
    return videos.map(function (videoCur) {
        var id = videoCur.id, src = videoCur.src, style = videoCur.style, _a = videoCur.autoPlay, autoPlay = _a === void 0 ? true : _a, _b = videoCur.loop, loop = _b === void 0 ? true : _b, _c = videoCur.muted, muted = _c === void 0 ? true : _c, _d = videoCur.relativeVolume, relativeVolume = _d === void 0 ? 100 : _d;
        return (_jsx(Video, { id: id, style: style, className: styles.video, src: src, autoPlay: autoPlay, loop: loop, muted: muted, relativeVolume: relativeVolume }));
    });
};
//# sourceMappingURL=Videos.js.map