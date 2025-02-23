import { jsx as _jsx } from "react/jsx-runtime";
import styles from './Shadow.scss';
export var Shadow = function (_a) {
    var options = _a.options;
    var style = options.style;
    if (!style) {
        return null;
    }
    return (_jsx("div", { style: style, className: styles.shadow }));
};
//# sourceMappingURL=Shadow.js.map