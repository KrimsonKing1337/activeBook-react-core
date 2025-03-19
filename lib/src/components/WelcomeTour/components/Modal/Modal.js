"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var components_1 = require("../../..");
var Modal = function (_a) {
    var isActive = _a.isActive, onConfirm = _a.onConfirm;
    return ((0, jsx_runtime_1.jsx)(components_1.ModalDialog, { isOpen: isActive, confirmButtonLabel: "\u0425\u043E\u0440\u043E\u0448\u043E", canFullScreen: false, showCancelButton: false, cantCloseIn: 2000, onConfirm: onConfirm, children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("header", { children: "\u041F\u0435\u0440\u0435\u0434 \u0442\u0435\u043C \u043A\u0430\u043A \u043D\u0430\u0447\u043D\u0451\u043C..." }), (0, jsx_runtime_1.jsx)("article", { children: (0, jsx_runtime_1.jsx)("p", { children: "\u041F\u043E\u0437\u043D\u0430\u043A\u043E\u043C\u044C\u0442\u0435\u0441\u044C \u0441 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044F\u043C\u0438 \u043A\u043D\u0438\u0433\u0438" }) })] }) }));
};
exports.Modal = Modal;
//# sourceMappingURL=Modal.js.map