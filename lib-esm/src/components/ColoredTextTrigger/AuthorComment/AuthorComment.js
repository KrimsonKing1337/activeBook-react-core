var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsxs as _jsxs, Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import { useSelector } from 'store';
import { achievementsSelectors } from 'store/achievements';
import { configSelectors } from 'store/config';
import { mainSelectors } from 'store/main';
import { seenAuthorComments } from 'utils/localStorage/seenAuthorComments';
import { play } from 'utils/effects/achievements';
import { Flags as AchievementsFlags } from 'utils/effects/achievements/utils';
import styles from './AuthorComment.scss';
export var AuthorComment = function (_a) {
    var _b;
    var children = _a.children, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.onClick, onClick = _d === void 0 ? function () { } : _d, etc = __rest(_a, ["children", "className", "onClick"]);
    var achievements = useSelector(achievementsSelectors.achievements);
    var authorCommentsIsOn = useSelector(configSelectors.authorComments);
    var authorCommentsLength = useSelector(mainSelectors.authorComments);
    var clickHandler = function () {
        seenAuthorComments.add();
        var seenAuthorCommentsFromLocalStorage = seenAuthorComments.get();
        if (authorCommentsLength === seenAuthorCommentsFromLocalStorage) {
            play({
                id: AchievementsFlags.allAuthorCommentsSeen,
                text: 'Все комментарии автора прочитаны!',
                type: 'gold',
            });
        }
        onClick();
    };
    var allPagesSeen = achievements === null || achievements === void 0 ? void 0 : achievements.allPagesSeen;
    var showComment = (allPagesSeen && authorCommentsIsOn) || isDemoMode;
    var authorCommentClassNames = classNames((_b = {},
        _b[styles.authorComment] = true,
        _b[className] = !!className,
        _b));
    return showComment ? (_jsxs("span", __assign({ className: authorCommentClassNames, onClick: clickHandler }, etc, { children: [' ', children] }))) :
        _jsx(_Fragment, { children: children });
};
//# sourceMappingURL=AuthorComment.js.map