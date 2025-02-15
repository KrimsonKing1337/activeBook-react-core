import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Overflow } from 'components/Overflow';
import { Header } from 'components/Header';
import { useDispatch, useSelector } from 'store';
import { mainActions, mainSelectors } from 'store/main';
import { achievementsSelectors } from 'store/achievements';
import { bookmarksActions, bookmarksSelectors } from 'store/bookmarks';
import { Volume } from './components/Volume';
import { Themes } from './components/Themes';
import { Vibration } from './components/Vibration';
import { Flashlight } from './components/FlashLight';
import { AuthorComments } from './components/AuthorComments';
import { LineHeight } from './components/LineHeight';
import { Footer } from './components/Footer';
export var Menu = function () {
    var dispatch = useDispatch();
    var location = useLocation();
    var menuActiveState = useSelector(mainSelectors.menuActiveState);
    var achievements = useSelector(achievementsSelectors.achievements);
    var bookmarksIsOpen = useSelector(bookmarksSelectors.isOpen);
    var allPagesSeen = achievements === null || achievements === void 0 ? void 0 : achievements.allPagesSeen;
    var isOpen = menuActiveState === 'menu';
    // закрываю менюшки, если пользователь сделал navigator.goBack
    useEffect(function () {
        if (!location.hash) {
            if (menuActiveState !== null) {
                dispatch(mainActions.setMenuActiveState(null));
            }
            if (bookmarksIsOpen) {
                dispatch(bookmarksActions.setIsOpen(false));
            }
        }
        else if (location.hash === '#menu') {
            if (menuActiveState === 'tableOfContents' || menuActiveState === 'achievementsProgress') {
                dispatch(mainActions.setMenuActiveState(null));
            }
        }
    }, [location, menuActiveState, bookmarksIsOpen]);
    return (_jsxs(Overflow, { isOpen: isOpen, children: [_jsx(Header, { label: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438" }), _jsx(Volume, {}), _jsx(Themes, {}), _jsx(Vibration, {}), _jsx(Flashlight, {}), allPagesSeen && _jsx(AuthorComments, {}), _jsx(LineHeight, {}), _jsx(Footer, {})] }));
};
//# sourceMappingURL=Menu.js.map