import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { goToPage } from 'utils/control/goToPage';
import styles from './Item.scss';
export var Item = function (_a) {
    var pageNumber = _a.pageNumber, onDelete = _a.onDelete;
    var clickHandler = function () {
        goToPage(pageNumber);
    };
    var deleteIconClickHandler = function (e) {
        e.stopPropagation();
        onDelete(pageNumber);
    };
    return (_jsxs("div", { className: styles.item, onClick: clickHandler, children: [_jsxs("div", { className: styles.pageNumber, children: ["\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 ", pageNumber] }), _jsx("div", { className: styles.deleteIcon, onClick: deleteIconClickHandler, children: _jsx(FontAwesomeIcon, { icon: faTimes }) })] }));
};
//# sourceMappingURL=Item.js.map