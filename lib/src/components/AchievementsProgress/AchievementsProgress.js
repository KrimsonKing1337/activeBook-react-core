"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AchievementsProgress = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var store_1 = require("../../store");
var achievements_1 = require("../../store/achievements");
var main_1 = require("../../store/main");
var utils_1 = require("../../utils/effects/achievements/utils");
var Header_1 = require("../Header");
var Overflow_1 = require("../Overflow");
var Item_1 = require("./Item");
var AchievementsProgress_scss_1 = __importDefault(require("./AchievementsProgress.scss"));
var AchievementsProgress = function () {
    var dispatch = (0, store_1.useDispatch)();
    var menuActiveState = (0, store_1.useSelector)(main_1.mainSelectors.menuActiveState);
    var achievements = (0, store_1.useSelector)(achievements_1.achievementsSelectors.achievements);
    var _a = (0, react_1.useState)([]), items = _a[0], setItems = _a[1];
    var hiddenLength = (0, react_1.useRef)(0);
    (0, react_1.useEffect)(function () {
        var achievementsWithoutHidden = __assign({}, utils_1.voc);
        hiddenLength.current = 0;
        if (!achievements) {
            hiddenLength.current = utils_1.hiddenAchievements.length;
        }
        else {
            utils_1.hiddenAchievements.forEach(function (cur) {
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
            var _a = utils_1.voc[keyCur], order = _a.order, title = _a.title, type = _a.type;
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
        dispatch(main_1.mainActions.setMenuActiveState(null));
    };
    var isOpen = menuActiveState === 'achievementsProgress';
    var textAboutHidden = hiddenLength.current === 1
        ? '+ одно скрытое достижение'
        : "+ \u0441\u043A\u0440\u044B\u0442\u044B\u0445 \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u0439: ".concat(hiddenLength.current, " \u0448\u0442.");
    return ((0, jsx_runtime_1.jsxs)(Overflow_1.Overflow, { isOpen: isOpen, children: [(0, jsx_runtime_1.jsx)(Header_1.Header, { label: "\u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u0439" }), (0, jsx_runtime_1.jsxs)("div", { className: AchievementsProgress_scss_1.default.itemsWrapper, children: [items.map(function (_a) {
                        var key = _a.key, title = _a.title, status = _a.status, type = _a.type;
                        return ((0, jsx_runtime_1.jsx)(Item_1.Item, { title: title, status: status, type: type }, key));
                    }), !!hiddenLength.current && ((0, jsx_runtime_1.jsx)("div", { className: AchievementsProgress_scss_1.default.textAboutHidden, children: textAboutHidden }))] }), (0, jsx_runtime_1.jsx)("button", { className: AchievementsProgress_scss_1.default.button, onClick: closeButtonClickHandler, children: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C" })] }));
};
exports.AchievementsProgress = AchievementsProgress;
//# sourceMappingURL=AchievementsProgress.js.map