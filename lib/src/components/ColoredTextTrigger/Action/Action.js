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
exports.Action = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = __importDefault(require("classnames"));
var Action_scss_1 = __importDefault(require("./Action.scss"));
var Action = function (_a) {
    var _b;
    var children = _a.children, _c = _a.fullWidth, fullWidth = _c === void 0 ? false : _c, _d = _a.onClick, onClick = _d === void 0 ? function () {
    } : _d, props = __rest(_a, ["children", "fullWidth", "onClick"]);
    var actionClassNames = (0, classnames_1.default)((_b = {},
        _b[Action_scss_1.default.action] = true,
        _b[Action_scss_1.default.isFullWidth] = fullWidth,
        _b));
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: actionClassNames, onClick: onClick }, props, { children: [' ', children] })));
};
exports.Action = Action;
//# sourceMappingURL=Action.js.map