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
import { useEffect } from 'react';
import { Toggle } from 'components/Toggle';
import { playAchievement } from 'components/Menu/utils';
import { Spoiler } from 'components/Spoiler';
import { useDispatch, useSelector } from 'store';
import { configActions, configSelectors } from 'store/config';
import { mainSelectors } from 'store/main';
import { useFlashlight } from 'hooks/effects/flashlight';
import { flashlightInst } from 'utils/effects/flashlight';
import styles from './Flashlight.scss';
export var Flashlight = function () {
    var dispatch = useDispatch();
    var flashlightOn = useFlashlight().flashlightOn;
    var flashlightState = useSelector(configSelectors.flashlight);
    var isFlashlightAvailable = useSelector(mainSelectors.isFlashlightAvailable);
    var flashlightProblems = useSelector(mainSelectors.flashlightProblems);
    useEffect(function () {
        if (!isFlashlightAvailable) {
            return;
        }
        var listener = function () {
            flashlightInst.off();
        };
        document.addEventListener('resume', listener, { once: true });
        return function () {
            document.removeEventListener('resume', listener);
        };
    }, []);
    var toggleClickHandler = function (value) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dispatch(configActions.setFlashlight(value));
            playAchievement();
            if (!value) {
                return [2 /*return*/];
            }
            flashlightOn(100);
            return [2 /*return*/];
        });
    }); };
    return (_jsxs("div", { className: styles.flashlight, children: [_jsx(Toggle, { label: "\u0412\u0441\u043F\u044B\u0448\u043A\u0430 (\u0442\u0430\u043C, \u0433\u0434\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E)", isActiveDefault: flashlightState, onClickOn: function () { return toggleClickHandler(true); }, onClickOff: function () { return toggleClickHandler(false); } }), _jsxs(Spoiler, { label: "\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0432\u0441\u043F\u044B\u0448\u043A\u0430?", children: ["\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435, \u0447\u0442\u043E \u0434\u0430\u043D\u043E \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u043A\u0430\u043C\u0435\u0440\u044B.", _jsx("br", {}), "(\u0430\u0434\u0440\u0435\u0441\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 ", '->', " \u0437\u0430\u043C\u043E\u0447\u0435\u043A ", '->', " \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u044F)", _jsx("br", {}), "\u041D\u043E \u0438\u043D\u043E\u0433\u0434\u0430 \u0431\u044B\u0432\u0430\u0435\u0442, \u0447\u0442\u043E \u0434\u0430\u0436\u0435 \u0435\u0441\u043B\u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0432\u0441\u0435 \u0435\u0441\u0442\u044C, \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u0447\u0430\u0442\u044C\u0441\u044F \u0434\u043E \u0432\u0441\u043F\u044B\u0448\u043A\u0438. \u041D\u0438\u0436\u0435 \u0431\u0443\u0434\u0435\u0442 \u0432\u044B\u0432\u043E\u0434\u0438\u0442\u0441\u044F, \u0447\u0435\u0433\u043E \u043E\u043D \u043D\u0435 \u0441\u043C\u043E\u0433 \u043D\u0430\u0439\u0442\u0438:", _jsx("br", {}), _jsx("br", {}), flashlightProblems] })] }));
};
//# sourceMappingURL=Flashlight.js.map