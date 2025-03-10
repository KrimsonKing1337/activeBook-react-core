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
import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import { useSelector } from 'store';
import { mainSelectors } from 'store/main';
import { foundEasterEggs } from 'utils/localStorage/foundEasterEggs';
import { Flags } from 'utils/effects/achievements/utils';
import { play } from 'utils/effects/achievements';
import styles from './EasterEgg.scss';
export var EasterEgg = function (_a) {
    var _b;
    var children = _a.children, id = _a.id, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.onClick, onClick = _d === void 0 ? function () { } : _d, etc = __rest(_a, ["children", "id", "className", "onClick"]);
    var easterEggsLength = useSelector(mainSelectors.easterEggs);
    var clickHandler = function () {
        foundEasterEggs.set(id);
        var foundEasterEggsFromLocalStorage = foundEasterEggs.get();
        var foundEasterEggsLength = Object.keys(foundEasterEggsFromLocalStorage).length;
        if (foundEasterEggsLength === easterEggsLength) {
            play({
                id: Flags.allEasterEggsFound,
                text: 'Все пасхалки найдены! Невероятно!',
                type: 'gold',
            });
        }
        onClick();
    };
    var easterEggClassNames = classNames((_b = {},
        _b[styles.easterEgg] = true,
        _b[className] = !!className,
        _b));
    return (_jsx("span", __assign({ className: easterEggClassNames, onClick: clickHandler }, etc, { children: children })));
};
//# sourceMappingURL=EasterEgg.js.map