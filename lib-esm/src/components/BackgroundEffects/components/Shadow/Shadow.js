import { jsx as _jsx } from "react/jsx-runtime";
import { useSelector } from 'store';
import { backgroundEffectsSelectors } from 'store/effects/background';
import styles from './Shadow.scss';
export var Shadow = function () {
    var shadow = useSelector(backgroundEffectsSelectors.shadow);
    if (!shadow) {
        return null;
    }
    return (_jsx("div", { style: shadow.style, className: styles.shadow }));
};
//# sourceMappingURL=Shadow.js.map