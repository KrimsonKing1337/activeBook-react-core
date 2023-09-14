import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { useDispatch, useSelector } from 'store';
import { configActions, configSelectors } from 'store/config';
import { getNewValueForNarrativeTextStyle } from 'utils/styles/getNewValueForNarrativeTextStyle';
import { Label } from 'components/Label';
import styles from './LineHeight.scss';
function getClassNames(className) {
    return classNames([
        styles.item,
        className,
    ]);
}
export var LineHeight = function () {
    var dispatch = useDispatch();
    var lineHeight = useSelector(configSelectors.lineHeight);
    var dispatchSetLineHeight = function (isMoreAction) {
        var lineHeightNewValue = getNewValueForNarrativeTextStyle(lineHeight, isMoreAction);
        if (lineHeightNewValue === lineHeight) {
            return;
        }
        dispatch(configActions.setLineHeight(lineHeightNewValue));
    };
    var minusClickHandler = function () {
        dispatchSetLineHeight(false);
    };
    var plusClickHandler = function () {
        dispatchSetLineHeight(true);
    };
    var currentValueLabel = "".concat(lineHeight, "%");
    return (_jsxs("div", { className: styles.lineHeight, children: [_jsx(Label, { label: "\u041C\u0435\u0436\u0441\u0442\u0440\u043E\u0447\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B" }), _jsxs("div", { className: styles.itemsWrapper, children: [_jsx("div", { className: getClassNames(styles.isMinus), onClick: minusClickHandler, children: "-" }), _jsx("div", { className: getClassNames(styles.isValue), children: currentValueLabel }), _jsx("div", { className: getClassNames(styles.isPlus), onClick: plusClickHandler, children: "+" })] })] }));
};
//# sourceMappingURL=LineHeight.js.map