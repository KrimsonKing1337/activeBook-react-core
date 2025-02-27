import { jsx as _jsx } from "react/jsx-runtime";
import styles from './Shadow.scss';
export var Shadow = function (_a) {
    var options = _a.options;
    var style = options.style, _b = options.show, show = _b === void 0 ? false : _b;
    if (!show) {
        return null;
    }
    return (_jsx("div", { style: style, className: styles.shadow }));
};
//# sourceMappingURL=Shadow.js.map