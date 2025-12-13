import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { useDispatch } from '../../../../store';
import { mainActions } from '../../../../store/main';
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
    /*const achievementsProgressClickHandler = () => {
      dispatch(mainActions.setMenuActiveState('achievementsProgress'));
    };*/
    var closeButtonClickHandler = function () {
        dispatch(mainActions.setMenuActiveState(null));
    };
    return (_jsxs("div", { className: styles.footer, children: [_jsx("button", { className: getClassNames(styles.isTableOfContents), onClick: tableOfContentsButtonClickHandler, children: "\u041E\u0433\u043B\u0430\u0432\u043B\u0435\u043D\u0438\u0435" }), _jsx("button", { className: getClassNames(styles.isClose), onClick: closeButtonClickHandler, children: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C" })] }));
};
//# sourceMappingURL=Footer.js.map