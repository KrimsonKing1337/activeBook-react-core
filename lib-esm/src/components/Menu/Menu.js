import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { Overflow } from 'components/Overflow';
import { Header } from 'components/Header';
import { useDispatch, useSelector } from 'store';
import { mainActions, mainSelectors } from 'store/main';
import { achievementsSelectors } from 'store/achievements';
import { Volume, Themes, Vibration, Flashlight, AuthorComments, LineHeight, Footer, WelcomeTour, } from './components';
export var Menu = function () {
    var dispatch = useDispatch();
    var menuActiveState = useSelector(mainSelectors.menuActiveState);
    var achievements = useSelector(achievementsSelectors.achievements);
    var allPagesSeen = achievements === null || achievements === void 0 ? void 0 : achievements.allPagesSeen;
    var isOpen = menuActiveState === 'menu';
    // закрываю менюшки, если пользователь сделал navigator.goBack
    useEffect(function () {
        var listener = function () {
            dispatch(mainActions.setMenuActiveState(null));
            window.history.pushState(null, '', window.location.href);
        };
        window.addEventListener('popstate', listener);
        return function () {
            window.removeEventListener('popstate', listener);
        };
    }, []);
    return (_jsxs(Overflow, { isOpen: isOpen, children: [_jsx(Header, { label: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438" }), _jsx(Volume, {}), _jsx(Themes, {}), _jsx(WelcomeTour, {}), _jsx(Vibration, {}), _jsx(Flashlight, {}), allPagesSeen && (_jsx(AuthorComments, {})), _jsx(LineHeight, {}), _jsx(Footer, {})] }));
};
//# sourceMappingURL=Menu.js.map