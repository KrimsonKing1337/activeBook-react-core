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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { Header } from 'components/Header';
import { Overflow } from 'components/Overflow';
import { useDispatch, useSelector } from 'store';
import { achievementsSelectors } from 'store/achievements';
import { mainActions, mainSelectors } from 'store/main';
import { hiddenAchievements, voc } from 'utils/effects/achievements/utils';
import { Item } from './Item';
import styles from './AchievementsProgress.scss';
export var AchievementsProgress = function () {
    var dispatch = useDispatch();
    var menuActiveState = useSelector(mainSelectors.menuActiveState);
    var achievements = useSelector(achievementsSelectors.achievements);
    var _a = useState([]), items = _a[0], setItems = _a[1];
    var hiddenLength = useRef(0);
    useEffect(function () {
        var achievementsWithoutHidden = __assign({}, voc);
        hiddenLength.current = 0;
        if (!achievements) {
            hiddenLength.current = hiddenAchievements.length;
        }
        else {
            hiddenAchievements.forEach(function (cur) {
                if (!achievements[cur]) {
                    delete achievementsWithoutHidden[cur];
                    hiddenLength.current = hiddenLength.current + 1;
                }
            });
        }
        var newItemsInOrder = {};
        Object.keys(achievementsWithoutHidden).forEach(function (key) {
            var keyCur = key;
            var status = !!(achievements === null || achievements === void 0 ? void 0 : achievements[keyCur]);
            var _a = voc[keyCur], order = _a.order, title = _a.title, type = _a.type;
            newItemsInOrder[order] = {
                key: keyCur,
                title: title,
                status: status,
                type: type,
            };
        });
        var newItems = Object.values(newItemsInOrder);
        setItems(newItems);
    }, [achievements]);
    var closeButtonClickHandler = function () {
        dispatch(mainActions.setMenuActiveState(null));
    };
    var isOpen = menuActiveState === 'achievementsProgress';
    var textAboutHidden = hiddenLength.current === 1
        ? '+ одно скрытое достижение'
        : "+ \u0441\u043A\u0440\u044B\u0442\u044B\u0445 \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u0439: ".concat(hiddenLength.current, " \u0448\u0442.");
    return (_jsxs(Overflow, { isOpen: isOpen, children: [_jsx(Header, { label: "\u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u0439" }), _jsxs("div", { className: styles.itemsWrapper, children: [items.map(function (_a) {
                        var key = _a.key, title = _a.title, status = _a.status, type = _a.type;
                        return (_jsx(Item, { title: title, status: status, type: type }, key));
                    }), !!hiddenLength.current && (_jsx("div", { className: styles.textAboutHidden, children: textAboutHidden }))] }), _jsx("button", { className: styles.button, onClick: closeButtonClickHandler, children: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C" })] }));
};
//# sourceMappingURL=AchievementsProgress.js.map