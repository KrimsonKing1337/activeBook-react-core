import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useDispatch, useSelector } from 'store';
import { counterSelectors, counterActions } from 'store/counter';
import styles from './Counter.scss';
export var Counter = function () {
    var dispatch = useDispatch();
    var count = useSelector(counterSelectors.count);
    var minusClickHandler = function () {
        var newValue = count - 1;
        dispatch(counterActions.setCount(newValue));
    };
    var plusClickHandler = function () {
        var newValue = count + 1;
        dispatch(counterActions.setCount(newValue));
    };
    return (_jsxs("div", { className: styles.Wrapper, children: [_jsx("button", { onClick: minusClickHandler, children: "-" }), _jsx("div", { children: count }), _jsx("button", { onClick: plusClickHandler, children: "+" })] }));
};
//# sourceMappingURL=Counter.js.map