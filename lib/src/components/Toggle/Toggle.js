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
exports.Toggle = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var classnames_1 = __importDefault(require("classnames"));
var Label_1 = require("../Label");
var Toggle_scss_1 = __importDefault(require("./Toggle.scss"));
var Toggle = function (_a) {
    var _b, _c, _d;
    var label = _a.label, _e = _a.isActiveDefault, isActiveDefault = _e === void 0 ? true : _e, isActive = _a.isActive, _f = _a.withoutBorder, withoutBorder = _f === void 0 ? false : _f, onClickOn = _a.onClickOn, onClickOff = _a.onClickOff, rest = __rest(_a, ["label", "isActiveDefault", "isActive", "withoutBorder", "onClickOn", "onClickOff"]);
    var _g = (0, react_1.useState)(isActiveDefault), uncontrolledIsActive = _g[0], setUncontrolledIsActive = _g[1];
    (0, react_1.useEffect)(function () {
        setUncontrolledIsActive(isActiveDefault);
    }, [isActiveDefault]);
    var buttonClickHandler = function (value, cb) {
        if (isActive === undefined) {
            if (value !== uncontrolledIsActive) {
                setUncontrolledIsActive(!uncontrolledIsActive);
            }
        }
        cb();
    };
    var toggleClassNames = (0, classnames_1.default)((_b = {},
        _b[Toggle_scss_1.default.toggle] = true,
        _b[Toggle_scss_1.default.isWithoutBorder] = withoutBorder,
        _b));
    var trueIsActive = isActive === undefined ? uncontrolledIsActive : isActive;
    var itemOnClassNames = (0, classnames_1.default)((_c = {},
        _c[Toggle_scss_1.default.item] = true,
        _c[Toggle_scss_1.default.isActive] = trueIsActive,
        _c));
    var itemOffClassNames = (0, classnames_1.default)((_d = {},
        _d[Toggle_scss_1.default.item] = true,
        _d[Toggle_scss_1.default.isActive] = !trueIsActive,
        _d));
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: toggleClassNames }, rest, { children: [(0, jsx_runtime_1.jsx)(Label_1.Label, { label: label }), (0, jsx_runtime_1.jsxs)("div", { className: Toggle_scss_1.default.itemsWrapper, children: [(0, jsx_runtime_1.jsx)("div", { className: itemOnClassNames, onClick: function () { return buttonClickHandler(true, onClickOn); }, children: "\u0412\u043A\u043B" }), (0, jsx_runtime_1.jsx)("div", { className: itemOffClassNames, onClick: function () { return buttonClickHandler(false, onClickOff); }, children: "\u0412\u044B\u043A\u043B" })] })] })));
};
exports.Toggle = Toggle;
//# sourceMappingURL=Toggle.js.map