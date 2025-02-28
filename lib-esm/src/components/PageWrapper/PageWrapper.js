import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { Toolbar } from 'components/Toolbar';
import { Menu } from 'components/Menu';
import { AchievementsProgress } from 'components/AchievementsProgress';
import { TableOfContents } from 'components/TableOfContents';
import { Bookmarks } from 'components/Bookmarks';
import { SideEffects } from 'components/SideEffects';
import { BackgroundEffects } from 'components/BackgroundEffects';
import { useSelector } from 'store';
import { mainSelectors } from 'store/main';
import { effectsSelectors } from 'store/effects/common';
import { Narrative } from './components/Narrative';
import styles from './PageWrapper.scss';
export var PageWrapper = function (_a) {
    var _b, _c;
    var children = _a.children, withoutToolbar = _a.withoutToolbar, sbMode = _a.sbMode;
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
    return (_jsx("div", { className: pageWrapperClassNames, children: _jsxs("div", { className: mainContendClassNames, children: [_jsx(Narrative, { children: children }), _jsx(SideEffects, {}), _jsx(BackgroundEffects, {}), !withoutToolbar && (_jsx(Toolbar, { sbMode: sbMode })), _jsx(Menu, {}), _jsx(TableOfContents, {}), _jsx(Bookmarks, {}), _jsx(AchievementsProgress, {})] }) }));
};
//# sourceMappingURL=PageWrapper.js.map