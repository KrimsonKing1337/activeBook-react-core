"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page0 = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var ModalDialog_1 = require("../../components/ModalDialog");
var PageWrapper_1 = require("../../components/PageWrapper");
var Action_1 = require("../../components/ColoredTextTrigger/Action");
var goToPage_1 = require("../../utils/control/goToPage");
var modalsWereShowed_1 = require("../../utils/localStorage/modalsWereShowed");
var flashlight_1 = require("../../utils/effects/flashlight");
var hooks_1 = require("./hooks");
var Page0 = function (_a) {
    var goCallback = _a.goCallback, header = _a.header, article = _a.article, _b = _a.showButton, showButton = _b === void 0 ? true : _b, Footer = _a.Footer;
    var _c = (0, react_1.useState)(0), lastPage = _c[0], setLastPage = _c[1];
    var _d = (0, hooks_1.useModal)(), modalIsActive = _d.modalIsActive, modalOnClose = _d.modalOnClose, setModalIsActive = _d.setModalIsActive;
    (0, react_1.useEffect)(function () {
        var lastPageAsJSON = localStorage.getItem('lastPage');
        if (lastPageAsJSON) {
            var page = JSON.parse(lastPageAsJSON);
            setLastPage(page);
        }
    }, []);
    var go = function () { return __awaiter(void 0, void 0, void 0, function () {
        var err_1, pageToGo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, flashlight_1.flashlightInst.init()];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.error(err_1);
                    return [3 /*break*/, 3];
                case 3:
                    if (!goCallback) return [3 /*break*/, 5];
                    return [4 /*yield*/, goCallback()];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5:
                    pageToGo = lastPage > 0 ? lastPage : 1;
                    (0, goToPage_1.goToPage)(pageToGo);
                    return [2 /*return*/];
            }
        });
    }); };
    var modalCloseHandler = function () {
        modalOnClose();
        go();
    };
    var clickHandler = function () {
        var isModalWasShowed = modalsWereShowed_1.modalsWereShowed.get(modalsWereShowed_1.Flags.usingCamera);
        if (isModalWasShowed) {
            go();
            return;
        }
        setModalIsActive(true);
    };
    var label = lastPage > 0 ? 'Продолжить читать' : 'Начать читать';
    return ((0, jsx_runtime_1.jsxs)(PageWrapper_1.PageWrapper, { children: [(0, jsx_runtime_1.jsx)(ModalDialog_1.ModalDialog, { isOpen: modalIsActive, onClose: modalCloseHandler, onConfirm: modalCloseHandler, onCancel: modalCloseHandler, canFullScreen: true, showCancelButton: false, cantCloseIn: 5000, children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("header", { children: "\u041E\u0411\u0420\u0410\u0422\u0418\u0422\u0415 \u0412\u041D\u0418\u041C\u0410\u041D\u0418\u0415" }), (0, jsx_runtime_1.jsxs)("article", { children: [(0, jsx_runtime_1.jsx)("p", { children: "\u0414\u043B\u044F \u0440\u0430\u0431\u043E\u0442\u044B \u044D\u0444\u0444\u0435\u043A\u0442\u043E\u0432 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u0432\u0441\u043F\u044B\u0448\u043A\u0438, \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044E \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u043A \u043A\u0430\u043C\u0435\u0440\u0435 (\u043A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u043D\u0435\u0442 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0437\u0430\u043F\u0440\u043E\u0441\u0438\u0442\u044C \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043A\u043E \u0432\u0441\u043F\u044B\u0448\u043A\u0435)." }), (0, jsx_runtime_1.jsx)("p", { children: "\u0412\u044B \u0432\u0441\u0435\u0433\u0434\u0430 \u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u0430\u043F\u0440\u043E\u0441\u0438\u0442\u044C \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437, \u0432 \u043C\u0435\u043D\u044E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F" })] })] }) }), header && ((0, jsx_runtime_1.jsx)("header", { children: header })), article && ((0, jsx_runtime_1.jsx)("article", { children: article })), showButton && ((0, jsx_runtime_1.jsx)(Action_1.Action, { fullWidth: true, onClick: clickHandler, children: label })), Footer && ((0, jsx_runtime_1.jsx)(Footer, {}))] }));
};
exports.Page0 = Page0;
//# sourceMappingURL=Page0.js.map