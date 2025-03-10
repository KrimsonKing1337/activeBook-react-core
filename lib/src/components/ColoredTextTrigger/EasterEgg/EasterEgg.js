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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EasterEgg = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = __importDefault(require("classnames"));
var store_1 = require("../../../store");
var main_1 = require("../../../store/main");
var foundEasterEggs_1 = require("../../../utils/localStorage/foundEasterEggs");
var utils_1 = require("../../../utils/effects/achievements/utils");
var achievements_1 = require("../../../utils/effects/achievements");
var EasterEgg_scss_1 = __importDefault(require("./EasterEgg.scss"));
var EasterEgg = function (_a) {
    var _b;
    var children = _a.children, id = _a.id, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.onClick, onClick = _d === void 0 ? function () { } : _d, etc = __rest(_a, ["children", "id", "className", "onClick"]);
    var easterEggsLength = (0, store_1.useSelector)(main_1.mainSelectors.easterEggs);
    var clickHandler = function () {
        foundEasterEggs_1.foundEasterEggs.set(id);
        var foundEasterEggsFromLocalStorage = foundEasterEggs_1.foundEasterEggs.get();
        var foundEasterEggsLength = Object.keys(foundEasterEggsFromLocalStorage).length;
        if (foundEasterEggsLength === easterEggsLength) {
            (0, achievements_1.play)({
                id: utils_1.Flags.allEasterEggsFound,
                text: 'Все пасхалки найдены! Невероятно!',
                type: 'gold',
            });
        }
        onClick();
    };
    var easterEggClassNames = (0, classnames_1.default)((_b = {},
        _b[EasterEgg_scss_1.default.easterEgg] = true,
        _b[className] = !!className,
        _b));
    return ((0, jsx_runtime_1.jsx)("span", __assign({ className: easterEggClassNames, onClick: clickHandler }, etc, { children: children })));
};
exports.EasterEgg = EasterEgg;
//# sourceMappingURL=EasterEgg.js.map