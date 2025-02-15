import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Label } from 'components/Label';
import { Spoiler } from 'components/Spoiler';
import { useDispatch, useSelector } from 'store';
import { configActions, configSelectors } from 'store/config';
import { getIsMobile } from 'utils/mobile/getIsMobile';
import { getClassNames, playAchievement, themes } from './utils';
import styles from './Themes.scss';
var isMobile = getIsMobile();
export var Themes = function () {
    var dispatch = useDispatch();
    var activeTheme = useSelector(configSelectors.theme);
    var clickHandler = function (theme) {
        dispatch(configActions.setTheme(theme));
        playAchievement();
    };
    return (_jsxs("div", { className: styles.themes, children: [_jsx(Label, { label: "\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435" }), _jsx("div", { className: styles.themesItemsWrapper, children: themes.map(function (themeCur) { return (_jsx("div", { className: getClassNames(themeCur), onClick: function () { return clickHandler(themeCur); }, children: activeTheme === themeCur && _jsx(FontAwesomeIcon, { icon: faCheck }) }, themeCur)); }) }), isMobile && (_jsxs(Spoiler, { label: "\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435", className: styles.spoiler, children: ["\u0415\u0441\u043B\u0438 \u0446\u0432\u0435\u0442\u0430 \u043C\u0435\u043D\u044F\u044E\u0442\u0441\u044F \u043D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E - \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0442\u0451\u043C\u043D\u043E\u0433\u043E \u0440\u0435\u0436\u0438\u043C\u0430 \u0432\u0430\u0448\u0435\u0433\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0443 Xiaomi \u044D\u0442\u043E \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 ", '->', " \u042D\u043A\u0440\u0430\u043D ", '->', " \u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0442\u0451\u043C\u043D\u043E\u0433\u043E \u0440\u0435\u0436\u0438\u043C\u0430. \u0422\u0430\u043C \u043D\u0430\u0439\u0442\u0438 activeBook \u0438 \u0443\u0431\u0435\u0434\u0438\u0442\u044C\u0441\u044F, \u0447\u0442\u043E \u0442\u0443\u0434\u0430-\u0441\u044E\u0434\u0430\u0448\u0435\u0447\u043A\u0430 \u043D\u0435 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0438 \"\u0432\u043A\u043B\""] }))] }));
};
//# sourceMappingURL=Themes.js.map