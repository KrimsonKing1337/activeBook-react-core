import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { useDispatch } from 'store';
import { mainActions } from 'store/main';
import styles from './Footer.scss';
function getClassNames(className) {
    return classNames([
        styles.button,
        className,
    ]);
}
export var Footer = function () {
    var dispatch = useDispatch();
    var tableOfContentsButtonClickHandler = function () {
        dispatch(mainActions.setMenuActiveState('tableOfContents'));
    };
    var achievementsProgressClickHandler = function () {
        dispatch(mainActions.setMenuActiveState('achievementsProgress'));
    };
    var closeButtonClickHandler = function () {
        dispatch(mainActions.setMenuActiveState(null));
    };
    return (_jsxs("div", { className: styles.footer, children: [_jsx("button", { className: getClassNames(styles.isTableOfContents), onClick: tableOfContentsButtonClickHandler, children: "\u041E\u0433\u043B\u0430\u0432\u043B\u0435\u043D\u0438\u0435" }), _jsx("button", { className: getClassNames(styles.isAchievementsProgress), onClick: achievementsProgressClickHandler, children: "\u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u0439" }), _jsx("button", { className: getClassNames(styles.isClose), onClick: closeButtonClickHandler, children: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C" })] }));
};
//# sourceMappingURL=Footer.js.map