import { jsx as _jsx } from "react/jsx-runtime";
import { useRef } from 'react';
import { useColorCarameldansen, useColorPolice, useResetNameOfTextShadowAnimationCss } from './hooks';
import styles from './SideShadow.scss';
export var SideShadow = function () {
    var sideShadowRef = useRef(null);
    useResetNameOfTextShadowAnimationCss();
    useColorPolice(sideShadowRef);
    useColorCarameldansen(sideShadowRef);
    return (_jsx("div", { ref: sideShadowRef, className: styles.sideShadow }));
};
//# sourceMappingURL=SideShadow.js.map