import { jsx as _jsx } from "react/jsx-runtime";
import { useRef } from 'react';
import { nanoid } from 'nanoid';
import { Img } from 'components/Img';
import { Wrapper } from '../Wrapper';
import styles from './Images.scss';
export var Images = function (_a) {
    var images = _a.images;
    var ref = useRef(null);
    if (images.length === 0) {
        return null;
    }
    return images.map(function (imageCur) {
        var src = imageCur.src, style = imageCur.style, wrapperStyle = imageCur.wrapperStyle;
        var uuid = nanoid();
        return (_jsx(Wrapper, { style: wrapperStyle, children: _jsx(Img, { passedRef: ref, style: style, className: styles.img, src: src }) }, uuid));
    });
};
//# sourceMappingURL=Images.js.map