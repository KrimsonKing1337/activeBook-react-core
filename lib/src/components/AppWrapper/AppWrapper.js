"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppWrapper = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var howler_1 = require("howler");
var dotlottie_react_1 = require("@lottiefiles/dotlottie-react");
var classnames_1 = __importDefault(require("classnames"));
var store_1 = require("../../store");
var volume_1 = require("../../store/volume");
var slice_1 = require("../../store/volume/slice");
var config_1 = require("../../store/config");
var slice_2 = require("../../store/config/slice");
var main_1 = require("../../store/main");
var achievements_1 = require("../../store/achievements");
var common_1 = require("../../store/effects/common");
var range_1 = require("../../hooks/effects/range");
var vibration_1 = require("../../hooks/effects/vibration");
var seenPages_1 = require("../../utils/localStorage/seenPages");
var achievements_2 = require("../../utils/localStorage/achievements");
var utils_1 = require("../../utils/effects/achievements/utils");
var removeCssHover_1 = require("../../utils/touch/removeCssHover");
var flashlight_1 = require("../../utils/effects/flashlight");
var Achievement_1 = require("../Achievement");
var utils_2 = require("./utils");
require("../../styles/common.scss");
var AppWrapper_scss_1 = __importDefault(require("./AppWrapper.scss"));
var AppWrapper = function (_a) {
    var _b;
    var children = _a.children, config = _a.config, rangeEffects = _a.rangeEffects;
    var dispatch = (0, store_1.useDispatch)();
    var navigate = (0, react_router_dom_1.useNavigate)();
    var isLoading = (0, store_1.useSelector)(main_1.mainSelectors.isLoading);
    var isDotLottieLoading = (0, store_1.useSelector)(common_1.effectsSelectors.isDotLottieLoading);
    var page = (0, store_1.useSelector)(main_1.mainSelectors.page);
    var vibrationOff = (0, vibration_1.useVibration)().vibrationOff;
    // применяю конфиг
    (0, react_1.useEffect)(function () {
        var pages = config.pages, defaultTheme = config.defaultTheme, _a = config.easterEggs, easterEggs = _a === void 0 ? 0 : _a, _b = config.authorComments, authorComments = _b === void 0 ? 0 : _b;
        var configAsJson = localStorage.getItem('config');
        dispatch(main_1.mainActions.setPages(pages));
        dispatch(main_1.mainActions.setEasterEggs(easterEggs));
        dispatch(main_1.mainActions.setAuthorComments(authorComments));
        if (!configAsJson) {
            dispatch(config_1.configActions.setTheme(defaultTheme));
        }
    }, []);
    // приглушаю звук, отключаю вибрацию и вспышку, если приложение скрыто
    (0, react_1.useEffect)(function () {
        document.addEventListener('visibilitychange', function () {
            if (document.hidden) {
                howler_1.Howler.mute(true);
                (0, utils_2.setMuteToAllVideos)(true);
                vibrationOff();
                flashlight_1.flashlightInst.mediaStreamTrackStop();
            }
            else {
                howler_1.Howler.mute(false);
                (0, utils_2.setMuteToAllVideos)(false);
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
        var achievements = achievements_2.achievements.getAll();
        if (!achievements) {
            achievements_2.achievements.init();
            achievements = (0, utils_1.getInitValues)();
        }
        dispatch(achievements_1.achievementsActions.setAll(achievements));
    }, []);
    (0, react_1.useEffect)(function () {
        /*
          в эту директорию в dist-е клиента с помощью webpack нужно копировать этот файлик,
          иначе он будет загружаться с cdn
        */
        (0, dotlottie_react_1.setWasmUrl)('/vendors/dotlottie-player.wasm');
    }, []);
    // после полной загрузки страницы воспроизвожу все аудио, у которых playOnLoad = true
    (0, react_1.useEffect)(function () {
        if (isLoading) {
            return;
        }
        var audioInstances = store_1.store.getState().audioEffects.audioInstances;
        var audioInstancesBg = store_1.store.getState().audioBgEffects.audioInstances;
        (0, utils_2.startToPlayAllAudiosWithPlayOnLoad)(audioInstances);
        (0, utils_2.startToPlayAllAudiosWithPlayOnLoad)(audioInstancesBg);
    }, [page, isLoading]);
    // удаляю id видео из списка currentTime, если видео с data-id на странице нет
    (0, react_1.useEffect)(function () {
        var videosCurrentTime = store_1.store.getState().effects.videosCurrentTime;
        var videos = Array.from(document.querySelectorAll('video'));
        var videosCurrentTimeNewValue = {};
        videos.forEach(function (videoCur) {
            var id = videoCur.getAttribute('data-id');
            if (id && videosCurrentTime[id]) {
                videosCurrentTimeNewValue[id] = videosCurrentTime[id];
            }
        });
        dispatch(common_1.effectsActions.setVideosCurrentTime(videosCurrentTimeNewValue));
    }, [page]);
    (0, react_1.useEffect)(function () {
        seenPages_1.seenPages.set(page);
        // пока отключаю ачивки
        /*const seenPagesFromLocalStorage = seenPages.get();
        const seenPagesLength = Object.keys(seenPagesFromLocalStorage).length;
    
        if (seenPagesLength === pages) {
          achievementPlay({
            id: AchievementsFlags.allPagesSeen,
            text: 'Все страницы прочитаны! Теперь можно включить авторские комментарии в настройках!',
            type: 'gold',
          });
        }*/
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
    (0, range_1.useEffectsInRange)(rangeEffects);
    var appWrapperClassNames = (0, classnames_1.default)((_b = {},
        _b[AppWrapper_scss_1.default.appWrapper] = true,
        _b[AppWrapper_scss_1.default.isLoading] = isLoading || isDotLottieLoading,
        _b));
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: appWrapperClassNames, children: children }), (0, jsx_runtime_1.jsx)(Achievement_1.Achievement, {})] }));
};
exports.AppWrapper = AppWrapper;
//# sourceMappingURL=AppWrapper.js.map