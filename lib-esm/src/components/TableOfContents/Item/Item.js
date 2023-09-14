import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSelector } from 'store';
import { mainSelectors } from 'store/main';
import { goToPage } from 'utils/control/goToPage';
import { playAchievement } from './utils';
import styles from './Item.scss';
export var Item = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, pageNumber = _a.pageNumber;
    var pages = useSelector(mainSelectors.pages);
    var clickHandler = function () {
        var n = pageNumber > pages ? pages : pageNumber;
        goToPage(n);
        playAchievement();
    };
    return (_jsxs("div", { className: styles.item, onClick: clickHandler, children: [_jsx("div", { className: styles.title, children: title }), _jsx("div", { className: styles.subtitle, children: subtitle }), _jsx("div", { className: styles.pageNumber, children: pageNumber })] }));
};
//# sourceMappingURL=Item.js.map