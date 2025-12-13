import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useDispatch, useSelector } from '../../store';
import { mainActions } from '../../store/main';
import { configActions, configSelectors } from '../../store/config';
import { bookmarksActions } from '../../store/bookmarks';
import BookmarkIcon from '../../assets/img/toolbar/i-bookmark.svg';
import FontSmallIcon from '../../assets/img/toolbar/i-font-small.svg';
import FontBigIcon from '../../assets/img/toolbar/i-font-big.svg';
import EtcIcon from '../../assets/img/toolbar/i-etc.svg';
import { getNewValueForNarrativeTextStyle } from '../../utils/styles/getNewValueForNarrativeTextStyle';
import { Item } from './components/Item';
import { Nav } from './components/Nav';
import { playAchievement } from './utils';
import styles from './Toolbar.scss';
export var Toolbar = function (_a) {
    var sbMode = _a.sbMode;
    var dispatch = useDispatch();
    var fontSize = useSelector(configSelectors.fontSize);
    var dispatchSetFontSize = function (isMoreAction) {
        var fontSizeNewValue = getNewValueForNarrativeTextStyle(fontSize, isMoreAction);
        if (fontSizeNewValue === fontSize) {
            return;
        }
        dispatch(configActions.setFontSize(fontSizeNewValue));
        playAchievement();
    };
    var bookmarkClickHandler = function () {
        dispatch(bookmarksActions.setIsOpen(true));
    };
    var etcIconClickHandler = function () {
        dispatch(mainActions.setMenuActiveState('menu'));
    };
    var fontSmallClickHandler = function () {
        dispatchSetFontSize(false);
    };
    var fontBigClickHandler = function () {
        dispatchSetFontSize(true);
    };
    return (_jsx("div", { id: "toolbar", className: styles.wrapper, children: _jsxs("div", { className: styles.toolbar, children: [!sbMode && (_jsxs(_Fragment, { children: [_jsx(Item, { "data-welcome-tour-id": "bookmarks", onClick: bookmarkClickHandler, children: _jsx(BookmarkIcon, {}) }), _jsx(Item, { "data-welcome-tour-id": "navigation", children: _jsx(Nav, {}) })] })), _jsxs("div", { "data-welcome-tour-id": "font", className: styles.fontSizeControlWrapper, children: [_jsx(Item, { onClick: fontSmallClickHandler, children: _jsx(FontSmallIcon, {}) }), _jsx(Item, { onClick: fontBigClickHandler, children: _jsx(FontBigIcon, {}) })] }), _jsx(Item, { "data-welcome-tour-id": "config", onClick: etcIconClickHandler, children: _jsx(EtcIcon, {}) })] }) }));
};
//# sourceMappingURL=Toolbar.js.map