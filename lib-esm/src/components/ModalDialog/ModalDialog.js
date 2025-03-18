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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { Modal } from 'components/Modal';
import { Button } from 'components/Button';
import styles from './ModalDialog.scss';
var defaultFunc = function () {
};
var timer = null;
var interval = null;
export var ModalDialog = function (_a) {
    var isOpen = _a.isOpen, _b = _a.cantCloseIn, cantCloseIn = _b === void 0 ? 0 : _b, _c = _a.showConfirmButton, showConfirmButton = _c === void 0 ? true : _c, _d = _a.confirmButtonLabel, confirmButtonLabel = _d === void 0 ? 'OK' : _d, _e = _a.cancelButtonLabel, cancelButtonLabel = _e === void 0 ? 'Отмена' : _e, _f = _a.showCancelButton, showCancelButton = _f === void 0 ? true : _f, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _g = _a.onClose, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onClose = _g === void 0 ? defaultFunc : _g, _h = _a.onConfirm, onConfirm = _h === void 0 ? defaultFunc : _h, _j = _a.onCancel, onCancel = _j === void 0 ? defaultFunc : _j, children = _a.children, etc = __rest(_a, ["isOpen", "cantCloseIn", "showConfirmButton", "confirmButtonLabel", "cancelButtonLabel", "showCancelButton", "onClose", "onConfirm", "onCancel", "children"]);
    var _k = useState(false), canClose = _k[0], setCanClose = _k[1];
    var _l = useState(0), secondsLeft = _l[0], setSecondsLeft = _l[1];
    var secondsLeftRef = useRef(0);
    useEffect(function () {
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
    useEffect(function () {
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
    var confirmButtonClickHandler = function () {
        if (canClose) {
            onConfirm();
        }
    };
    var cancelButtonClickHandler = function () {
        onCancel();
    };
    var closeHandler = function () {
        onCancel();
    };
    var confirmBtnLabel = secondsLeft ? "".concat(confirmButtonLabel, " (").concat(secondsLeft, ")") : confirmButtonLabel;
    var cancelBtnLabel = secondsLeft ? "".concat(cancelButtonLabel, " (").concat(secondsLeft, ")") : cancelButtonLabel;
    return (_jsx(Modal, __assign({ isOpen: isOpen, canClose: canClose, onClose: closeHandler }, etc, { children: _jsxs("div", { className: styles.wrapper, children: [_jsx("div", { className: "ModalDialogDesc", children: children }), _jsxs("div", { className: styles.actions, children: [showConfirmButton && (_jsx(Button, { type: "success", disabled: !canClose, onClick: confirmButtonClickHandler, children: confirmBtnLabel })), showCancelButton && (_jsx(Button, { type: "secondary", disabled: !canClose, onClick: cancelButtonClickHandler, children: cancelBtnLabel }))] })] }) })));
};
//# sourceMappingURL=ModalDialog.js.map