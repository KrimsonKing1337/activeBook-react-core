import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { Toolbar } from 'components/Toolbar';
import { Menu } from 'components/Menu';
import { AchievementsProgress } from 'components/AchievementsProgress';
import { TableOfContents } from 'components/TableOfContents';
import { Bookmarks } from 'components/Bookmarks';
import { SideEffects } from 'components/SideEffects';
import { BackgroundEffects } from 'components/BackgroundEffects';
import { BackgroundComponent as Background } from 'components/BackgroundComponent';
import { mainSelectors } from 'store/main';
import { effectsSelectors } from 'store/effects/common';
import { useSelector } from 'store';
import { Narrative } from './components/Narrative';
import styles from './PageWrapper.scss';
export var PageWrapper = function (_a) {
    var _b, _c;
    var children = _a.children, backgroundComponent = _a.backgroundComponent, withoutToolbar = _a.withoutToolbar, sbMode = _a.sbMode, bgColor = _a.bgColor, shadowColor = _a.shadowColor;
    var inverseColorIsActive = useSelector(effectsSelectors.inverseColorIsActive);
    var isLoading = useSelector(mainSelectors.isLoading);
    var pageWrapperClassNames = classNames((_b = {},
        _b[styles.pageWrapper] = true,
        _b[styles.inverseColorIsActive] = inverseColorIsActive,
        _b));
    var mainContendClassNames = classNames((_c = {},
        _c[styles.mainContent] = true,
        _c[styles.isLoading] = isLoading,
        _c));
    return (_jsx("div", { className: pageWrapperClassNames, style: { backgroundColor: bgColor }, children: _jsxs("div", { className: mainContendClassNames, children: [_jsx(Narrative, { children: children }), _jsx(SideEffects, {}), _jsx(BackgroundEffects, { shadowColor: shadowColor }), _jsx(Background, { withShadow: backgroundComponent === null || backgroundComponent === void 0 ? void 0 : backgroundComponent.withShadow, shadowColor: shadowColor, children: backgroundComponent === null || backgroundComponent === void 0 ? void 0 : backgroundComponent.Component }), !withoutToolbar && (_jsx(Toolbar, { sbMode: sbMode })), _jsx(Menu, {}), _jsx(TableOfContents, {}), _jsx(Bookmarks, {}), _jsx(AchievementsProgress, {})] }) }));
};
//# sourceMappingURL=PageWrapper.js.map