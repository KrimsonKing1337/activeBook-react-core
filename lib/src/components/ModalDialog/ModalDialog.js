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
exports.ModalDialog = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var classnames_1 = __importDefault(require("classnames"));
var Modal_1 = require("../Modal");
var ModalDialog_scss_1 = __importDefault(require("./ModalDialog.scss"));
var defaultFunc = function () {
};
var timer = null;
var interval = null;
var ModalDialog = function (_a) {
    var _b, _c;
    var isOpen = _a.isOpen, _d = _a.cantCloseIn, cantCloseIn = _d === void 0 ? 0 : _d, _e = _a.showOkButton, showOkButton = _e === void 0 ? true : _e, _f = _a.showCancelButton, showCancelButton = _f === void 0 ? true : _f, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _g = _a.onClose, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onClose = _g === void 0 ? defaultFunc : _g, _h = _a.onConfirm, onConfirm = _h === void 0 ? defaultFunc : _h, _j = _a.onCancel, onCancel = _j === void 0 ? defaultFunc : _j, children = _a.children, rest = __rest(_a, ["isOpen", "cantCloseIn", "showOkButton", "showCancelButton", "onClose", "onConfirm", "onCancel", "children"]);
    var _k = (0, react_1.useState)(false), canClose = _k[0], setCanClose = _k[1];
    var _l = (0, react_1.useState)(0), secondsLeft = _l[0], setSecondsLeft = _l[1];
    var secondsLeftRef = (0, react_1.useRef)(0);
    (0, react_1.useEffect)(function () {
        if (!isOpen) {
            if (interval) {
                clearInterval(interval);
            }
            return;
        }
        interval = setInterval(function () {
            if (secondsLeftRef.current <= 0) {
                if (interval) {
                    clearInterval(interval);
                }
                return;
            }
            secondsLeftRef.current = secondsLeftRef.current - 1;
            setSecondsLeft(secondsLeftRef.current);
        }, 1000);
        return function () {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [isOpen]);
    (0, react_1.useEffect)(function () {
        if (!isOpen) {
            if (timer) {
                clearTimeout(timer);
            }
            return;
        }
        secondsLeftRef.current = cantCloseIn / 1000;
        setSecondsLeft(secondsLeftRef.current);
        timer = setTimeout(function () {
            setCanClose(true);
        }, cantCloseIn);
        return function () {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [isOpen, cantCloseIn]);
    var buttonOkClickHandler = function () {
        if (canClose) {
            onConfirm();
        }
    };
    var buttonCancelClickHandler = function () { return onCancel(); };
    var closeHandler = function () {
        onCancel();
    };
    var buttonConfirmClassNames = (0, classnames_1.default)((_b = {},
        _b[ModalDialog_scss_1.default.buttonConfirm] = true,
        _b[ModalDialog_scss_1.default.canClose] = canClose,
        _b));
    var buttonCancelClassNames = (0, classnames_1.default)((_c = {},
        _c[ModalDialog_scss_1.default.buttonCancel] = true,
        _c[ModalDialog_scss_1.default.canClose] = canClose,
        _c));
    var confirmButtonLabel = secondsLeft ? "\u041E\u043A (".concat(secondsLeft, ")") : 'Ок';
    var cancelButtonLabel = secondsLeft ? "\u041E\u0442\u043C\u0435\u043D\u0430 (".concat(secondsLeft, ")") : 'Отмена';
    return ((0, jsx_runtime_1.jsx)(Modal_1.Modal, __assign({ isOpen: isOpen, canClose: canClose, onClose: closeHandler }, rest, { children: (0, jsx_runtime_1.jsxs)("div", { className: ModalDialog_scss_1.default.wrapper, children: [(0, jsx_runtime_1.jsx)("div", { className: "ModalDialogDesc", children: children }), (0, jsx_runtime_1.jsxs)("div", { className: ModalDialog_scss_1.default.actions, children: [showOkButton && ((0, jsx_runtime_1.jsx)("button", { type: "button", className: buttonConfirmClassNames, onClick: buttonOkClickHandler, children: confirmButtonLabel })), showCancelButton && ((0, jsx_runtime_1.jsx)("button", { type: "button", className: buttonCancelClassNames, onClick: buttonCancelClickHandler, children: cancelButtonLabel }))] })] }) })));
};
exports.ModalDialog = ModalDialog;
//# sourceMappingURL=ModalDialog.js.map