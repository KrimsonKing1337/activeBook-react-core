import { jsx as _jsx } from "react/jsx-runtime";
import { useRef } from 'react';
import { Img } from 'components/Img';
import { useSelector } from 'store';
import { backgroundEffectsSelectors } from 'store/effects/background';
import { Wrapper } from '../Wrapper';
import styles from './Images.scss';
export var Images = function () {
    var ref = useRef(null);
    var images = useSelector(backgroundEffectsSelectors.images);
    if (images.length === 0) {
        return null;
    }
    return images.map(function (imageCur) {
        var src = imageCur.src, style = imageCur.style, wrapperStyle = imageCur.wrapperStyle;
        return (_jsx(Wrapper, { style: wrapperStyle, children: _jsx(Img, { passedRef: ref, style: style, className: styles.img, src: src }) }));
    });
};
//# sourceMappingURL=Images.js.map