import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ModalDialog } from 'components';
export var Modal = function (_a) {
    var isActive = _a.isActive, onConfirm = _a.onConfirm;
    return (_jsx(ModalDialog, { isOpen: isActive, confirmButtonLabel: "\u0425\u043E\u0440\u043E\u0448\u043E", canFullScreen: false, showCancelButton: false, cantCloseIn: 2000, onConfirm: onConfirm, children: _jsxs("div", { children: [_jsx("header", { children: "\u041F\u0435\u0440\u0435\u0434 \u0442\u0435\u043C \u043A\u0430\u043A \u043D\u0430\u0447\u043D\u0451\u043C..." }), _jsx("article", { children: _jsx("p", { children: "\u041F\u043E\u0437\u043D\u0430\u043A\u043E\u043C\u044C\u0442\u0435\u0441\u044C \u0441 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044F\u043C\u0438 \u043A\u043D\u0438\u0433\u0438" }) })] }) }));
};
//# sourceMappingURL=Modal.js.map