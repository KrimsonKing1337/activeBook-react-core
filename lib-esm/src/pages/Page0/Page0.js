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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useSelector } from 'store';
import { mainSelectors } from 'store/main';
import { PageWrapper, Action, WelcomeTour } from 'components';
import { goToPage } from 'utils/control/goToPage';
import { Flags, modalsWereShowed } from 'utils/localStorage/modalsWereShowed';
import { flashlightInst } from 'utils/effects/flashlight';
import { localStorageId as welcomeTourLocalStorageId } from 'components/WelcomeTour/utils';
import { Modal } from './components';
import { useModal } from './hooks';
export var Page0 = function (_a) {
    var goCallback = _a.goCallback, header = _a.header, subHeader = _a.subHeader, _b = _a.showButton, showButton = _b === void 0 ? true : _b, Footer = _a.Footer;
    var isFlashlightAvailable = useSelector(mainSelectors.isFlashlightAvailable);
    var _c = useState(0), lastPage = _c[0], setLastPage = _c[1];
    var _d = useState(false), isWelcomeTourActive = _d[0], setIsWelcomeTourActive = _d[1];
    var _e = useState(false), isWelcomeTourModalActive = _e[0], setIsWelcomeTourModalActive = _e[1];
    var _f = useModal(), modalIsActive = _f.modalIsActive, modalOnClose = _f.modalOnClose, setModalIsActive = _f.setModalIsActive;
    useEffect(function () {
        var lastPageAsJson = localStorage.getItem('lastPage');
        if (!lastPageAsJson) {
            return;
        }
        var page = JSON.parse(lastPageAsJson);
        setLastPage(page);
    }, []);
    var go = function () { return __awaiter(void 0, void 0, void 0, function () {
        var err_1, pageToGo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!flashlightInst.isInited) return [3 /*break*/, 4];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, flashlightInst.init()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.error(err_1);
                    return [3 /*break*/, 4];
                case 4:
                    if (!goCallback) return [3 /*break*/, 6];
                    return [4 /*yield*/, goCallback()];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    pageToGo = lastPage > 0 ? lastPage : 1;
                    goToPage(pageToGo);
                    return [2 /*return*/];
            }
        });
    }); };
    var modalConfirmHandler = function () {
        modalOnClose();
        go();
    };
    var actionClickHandler = function () {
        var isModalWasShowed = modalsWereShowed.get(Flags.usingCamera);
        var welcomeTourHasBeenSeen = localStorage.getItem(welcomeTourLocalStorageId);
        if (!welcomeTourHasBeenSeen) {
            setIsWelcomeTourModalActive(true);
            return;
        }
        if (!isModalWasShowed && isFlashlightAvailable && !flashlightInst.isInited) {
            setModalIsActive(true);
            return;
        }
        go();
    };
    var actionLabel = lastPage > 0 ? 'Продолжить читать' : 'Начать читать';
    return (_jsxs(PageWrapper, { children: [_jsx(Modal, { isActive: modalIsActive, onConfirm: modalConfirmHandler }), header && (_jsx("header", { children: header })), subHeader && (_jsx("article", { children: subHeader })), showButton && !isWelcomeTourActive && (_jsx(Action, { fullWidth: true, onClick: actionClickHandler, children: actionLabel })), _jsx(WelcomeTour, { isActive: isWelcomeTourActive, setIsActive: setIsWelcomeTourActive, isModalActive: isWelcomeTourModalActive, setIsModalActive: setIsWelcomeTourModalActive }), Footer && (_jsx(Footer, {}))] }));
};
//# sourceMappingURL=Page0.js.map