import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { mainSelectors } from '../../../store/main';
import { useGoToPage } from '../../../hooks/control/useGoToPage';
import { useSelector } from '../../../store';
import { playAchievement } from './utils';
import styles from './Item.scss';
export var Item = function (_a) {
    var title = _a.title, _b = _a.subtitle, subtitle = _b === void 0 ? '' : _b, pageNumber = _a.pageNumber;
    var goToPage = useGoToPage().goToPage;
    var pages = useSelector(mainSelectors.pages);
    var clickHandler = function () {
        var n = pageNumber > pages ? pages : pageNumber;
        goToPage(n);
        playAchievement();
    };
    return (_jsxs("div", { className: styles.item, onClick: clickHandler, children: [_jsx("div", { className: styles.title, children: title }), _jsx("div", { className: styles.subtitle, children: subtitle }), _jsx("div", { className: styles.pageNumber, children: pageNumber })] }));
};
//# sourceMappingURL=Item.js.map