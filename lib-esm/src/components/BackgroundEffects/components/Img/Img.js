import { jsx as _jsx } from "react/jsx-runtime";
import { useRef } from 'react';
import { Img as DefaultImg } from 'components/Img';
import { useSelector } from 'store';
import { backgroundEffectSelectors } from 'store/effects/background';
import { Wrapper } from '../Wrapper';
import styles from './Img.scss';
export var Img = function () {
    var ref = useRef(null);
    var img = useSelector(backgroundEffectSelectors.img);
    if (!img) {
        return null;
    }
    var src = img.src, style = img.style, wrapperStyle = img.wrapperStyle;
    return (_jsx(Wrapper, { style: wrapperStyle, children: _jsx(DefaultImg, { passedRef: ref, style: style, className: styles.img, src: src }) }));
};
//# sourceMappingURL=Img.js.map