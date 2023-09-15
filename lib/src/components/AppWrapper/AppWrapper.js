"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppWrapper = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var store_1 = require("../../store");
var classnames_1 = __importDefault(require("classnames"));
var howler_1 = require("howler");
var volume_1 = require("../../store/volume");
var slice_1 = require("../../store/volume/slice");
var config_1 = require("../../store/config");
var slice_2 = require("../../store/config/slice");
var main_1 = require("../../store/main");
var achievements_1 = require("../../store/achievements");
var seenPages_1 = require("../../utils/localStorage/seenPages");
var achievements_2 = require("../../utils/effects/achievements");
var achievements_3 = require("../../utils/localStorage/achievements");
var utils_1 = require("../../utils/effects/achievements/utils");
var removeCssHover_1 = require("../../utils/touch/removeCssHover");
var flashlight_1 = require("../../utils/effects/flashlight");
var range_1 = require("../../hooks/effects/range");
var vibration_1 = require("../../hooks/effects/vibration");
var Achievement_1 = require("../Achievement");
var AppWrapper_scss_1 = __importDefault(require("./AppWrapper.scss"));
var AppWrapper = function (_a) {
    var _b;
    var children = _a.children, rangeEffectsJson = _a.rangeEffectsJson;
    var dispatch = (0, store_1.useDispatch)();
    var navigate = (0, react_router_dom_1.useNavigate)();
    var isLoading = (0, store_1.useSelector)(main_1.mainSelectors.isLoading);
    var page = (0, store_1.useSelector)(main_1.mainSelectors.page);
    var pages = (0, store_1.useSelector)(main_1.mainSelectors.pages);
    var vibrationOff = (0, vibration_1.useVibration)().vibrationOff;
    // приглушаю звук, отключаю вибрацию и вспышку, если приложение скрыто
    (0, react_1.useEffect)(function () {
        document.addEventListener('visibilitychange', function () {
            if (document.hidden) {
                howler_1.Howler.mute(true);
                vibrationOff();
                flashlight_1.flashlightInst.mediaStreamTrackStop();
            }
            else {
                howler_1.Howler.mute(false);
                flashlight_1.flashlightInst.init();
            }
        });
    }, []);
    // сбрасываю адресную строку
    (0, react_1.useEffect)(function () {
        navigate('/');
    }, []);
    // если тач-устройство - убираю :hover
    (0, react_1.useEffect)(function () {
        (0, removeCssHover_1.removeCssHover)();
    }, []);
    (0, react_1.useEffect)(function () {
        var canVibrate = !!navigator.vibrate;
        dispatch(main_1.mainActions.setIsVibrationAvailable(canVibrate));
    }, []);
    (0, react_1.useEffect)(function () {
        var configAsJson = localStorage.getItem('config');
        var volumeAsJson = localStorage.getItem('volume');
        var config = configAsJson ? JSON.parse(configAsJson) : slice_2.initialState;
        var volume = volumeAsJson ? JSON.parse(volumeAsJson) : slice_1.initialState;
        dispatch(config_1.configActions.setAll(config));
        dispatch(volume_1.volumeActions.setAll(volume));
    }, []);
    (0, react_1.useEffect)(function () {
        var achievements = achievements_3.achievements.getAll();
        if (!achievements) {
            achievements_3.achievements.init();
            achievements = (0, utils_1.getInitValues)();
        }
        dispatch(achievements_1.achievementsActions.setAll(achievements));
    }, []);
    (0, react_1.useEffect)(function () {
        seenPages_1.seenPages.set(page);
        var seenPagesFromLocalStorage = seenPages_1.seenPages.get();
        var seenPagesLength = Object.keys(seenPagesFromLocalStorage).length;
        if (seenPagesLength === pages) {
            (0, achievements_2.play)({
                id: utils_1.Flags.allPagesSeen,
                text: 'Все страницы прочитаны! Теперь можно включить авторские комментарии в настройках!',
                type: 'gold',
            });
        }
    }, [page]);
    (0, react_1.useEffect)(function () {
        var listener = function () {
            if (page !== 0) {
                var pageAsJson = JSON.stringify(page);
                localStorage.setItem('lastPage', pageAsJson);
            }
        };
        window.addEventListener('beforeunload', listener);
        return function () {
            window.removeEventListener('beforeunload', listener);
        };
    }, [page]);
    (0, range_1.useEffectsInRange)(rangeEffectsJson);
    var appWrapperClassNames = (0, classnames_1.default)((_b = {},
        _b[AppWrapper_scss_1.default.appWrapper] = true,
        _b[AppWrapper_scss_1.default.isLoading] = isLoading,
        _b));
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: appWrapperClassNames, children: children }), (0, jsx_runtime_1.jsx)(Achievement_1.Achievement, {})] }));
};
exports.AppWrapper = AppWrapper;
//# sourceMappingURL=AppWrapper.js.map