import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import styles from './Item.scss';
export var Item = function (_a) {
    var title = _a.title, status = _a.status, type = _a.type;
    var statusLabel = status ? 'Получено' : 'В процессе';
    var itemClassNames = classNames([
        styles.item,
        type,
    ]);
    return (_jsxs("div", { className: itemClassNames, children: [_jsx("div", { className: styles.title, children: title }), _jsx("div", { className: styles.status, children: statusLabel })] }));
};
//# sourceMappingURL=Item.js.map