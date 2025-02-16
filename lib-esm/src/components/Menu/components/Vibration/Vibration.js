import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Toggle } from 'components/Toggle';
import { Spoiler } from 'components/Spoiler';
import { useDispatch, useSelector } from 'store';
import { configActions } from 'store/config';
import { mainSelectors } from 'store/main';
import { on as vibrationOn } from 'utils/effects/vibration';
import styles from './Vibration.scss';
export var Vibration = function () {
    var dispatch = useDispatch();
    var isVibrationAvailable = useSelector(mainSelectors.isVibrationAvailable);
    var toggleClickHandler = function (value) {
        dispatch(configActions.setVibration(value));
        if (value && isVibrationAvailable) {
            vibrationOn(300);
        }
    };
    return (_jsxs("div", { className: styles.vibration, children: [_jsx(Toggle, { label: "\u0412\u0438\u0431\u0440\u0430\u0446\u0438\u044F (\u0442\u0430\u043C, \u0433\u0434\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E)", isActiveDefault: false, withoutBorder: true, onClickOn: function () { return toggleClickHandler(true); }, onClickOff: function () { return toggleClickHandler(false); } }), _jsx(Spoiler, { label: "\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0432\u0438\u0431\u0440\u0430\u0446\u0438\u044F?", children: "\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435, \u0447\u0442\u043E \u0432\u0430\u0448\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0432\u0438\u0431\u0440\u0430\u0446\u0438\u044E, \u0438 \u0447\u0442\u043E \u043D\u0435 \u0432\u043A\u043B\u044E\u0447\u0451\u043D \u0431\u0435\u0437\u0437\u0432\u0443\u0447\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C. \u0427\u0430\u0441\u0442\u043E \u043E\u043D \u043D\u0435 \u0434\u0430\u0451\u0442 \u0432\u0438\u0431\u0440\u0430\u0446\u0438\u0438 \u0441\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0442\u044C" })] }));
};
//# sourceMappingURL=Vibration.js.map