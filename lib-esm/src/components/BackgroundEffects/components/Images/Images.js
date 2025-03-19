import { jsx as _jsx } from "react/jsx-runtime";
import { nanoid } from 'nanoid';
import { Img } from 'components/Img';
import styles from './Images.scss';
export var Images = function (_a) {
    var images = _a.images;
    if (images.length === 0) {
        return null;
    }
    return images.map(function (imageCur) {
        var src = imageCur.src, style = imageCur.style;
        var uuid = nanoid();
        return (_jsx(Img, { style: style, className: styles.img, src: src }, uuid));
    });
};
//# sourceMappingURL=Images.js.map