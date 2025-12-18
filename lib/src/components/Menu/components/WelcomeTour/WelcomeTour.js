import { jsx as _jsx } from "react/jsx-runtime";
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'store';
import { configActions, configSelectors } from 'store/config';
import { Toggle } from 'components/Toggle';
import * as styles from './WelcomeTour.scss';
export var WelcomeTour = function () {
    var dispatch = useDispatch();
    var isActive = useSelector(configSelectors.welcomeTour);
    var toggleClickHandler = function (value) {
        dispatch(configActions.setWelcomeTour(value));
        if (value) {
            toast.success('Обучение вновь доступно на заглавной странице. Нажмите на кнопку "читать"');
        }
    };
    return (_jsx("div", { className: styles.welcomeTour, children: _jsx(Toggle, { label: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435", isActiveDefault: isActive, withoutBorder: true, onClickOn: function () { return toggleClickHandler(true); }, onClickOff: function () { return toggleClickHandler(false); } }) }));
};
//# sourceMappingURL=WelcomeTour.js.map