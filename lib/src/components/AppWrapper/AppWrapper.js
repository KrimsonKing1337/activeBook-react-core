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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { Howler } from 'howler';
import { setWasmUrl } from '@lottiefiles/dotlottie-react';
import classNames from 'classnames';
import { toast } from 'react-toastify';
import { store, useDispatch, useSelector } from 'store';
import { volumeActions } from 'store/volume';
import { initialState as volumeInitialState } from 'store/volume/slice';
import { configActions, configSelectors } from 'store/config';
import { initialState as configInitialState } from 'store/config/slice';
import { mainActions, mainSelectors } from 'store/main';
import { effectsActions } from 'store/effects/common';
import { audioEffectsSelectors } from 'store/effects/audio/audio';
import { audioBgEffectsSelectors } from 'store/effects/audio/audioBg';
import { useEffectsInRange } from 'hooks/effects/range';
import { useVibration } from 'hooks/effects/vibration';
import { useGoToPage } from 'hooks/control/useGoToPage';
import { Achievement } from 'components/Achievement';
import { seenPages } from 'utils/localStorage/seenPages';
import { removeCssHover } from 'utils/touch/removeCssHover';
import { flashlightInst } from 'utils/effects/flashlight';
import { addKeyboardControl } from 'utils/control/keyboardControl';
import { hideAddressBarInMobileDevices } from 'utils/mobile/hideAddressBarInMobileDevices';
import { getThemes } from 'utils/styles/getThemes';
import { setMuteToAllVideos, startToPlayAllAudiosWithPlayOnLoad, startToPlayAllVideosWithPlayOnLoad } from './utils';
import 'styles/common.scss';
import * as styles from './AppWrapper.scss';
export var AppWrapper = function (_a) {
    var _b;
    var children = _a.children, config = _a.config, tableOfContents = _a.tableOfContents, rangeEffects = _a.rangeEffects;
    var dispatch = useDispatch();
    var _c = useGoToPage(), goPrevPage = _c.goPrevPage, goNextPage = _c.goNextPage;
    var vibrationOff = useVibration().vibrationOff;
    var isLoading = useSelector(mainSelectors.isLoading);
    var page = useSelector(mainSelectors.page);
    var pages = useSelector(mainSelectors.pages);
    var audioInstances = useSelector(audioEffectsSelectors.audioInstances);
    var audioInstancesBg = useSelector(audioBgEffectsSelectors.audioInstances);
    var themes = useSelector(configSelectors.themes);
    // применяю конфиг
    useEffect(function () {
        var pages = config.pages, defaultTheme = config.defaultTheme, customThemes = config.customThemes;
        var configAsJson = localStorage.getItem('config');
        var themes = getThemes(customThemes);
        dispatch(configActions.setThemes(themes));
        dispatch(mainActions.setPages(pages));
        if (!configAsJson) {
            dispatch(configActions.setTheme(defaultTheme));
        }
    }, []);
    // применяю оглавление
    useEffect(function () {
        dispatch(mainActions.setTableOfContents(tableOfContents));
    }, []);
    // приглушаю звук, отключаю вибрацию и вспышку, если приложение скрыто
    useEffect(function () {
        document.addEventListener('visibilitychange', function () {
            if (document.hidden) {
                Howler.mute(true);
                setMuteToAllVideos(true);
                vibrationOff();
                flashlightInst.mediaStreamTrackStop();
            }
            else {
                Howler.mute(false);
                setMuteToAllVideos(false);
                flashlightInst.init();
            }
        });
    }, []);
    // сбрасывать адресную строку теперь не нужно, т.к. мы используем memoryRouter. вместо этого очищаем историю
    useEffect(function () {
        window.history.pushState(null, '', window.location.href);
    }, []);
    // если тач-устройство - убираю :hover
    useEffect(function () {
        removeCssHover();
    }, []);
    useEffect(function () {
        var canVibrate = !!navigator.vibrate;
        dispatch(mainActions.setIsVibrationAvailable(canVibrate));
    }, []);
    useEffect(function () {
        if (!Object.keys(themes).length) {
            return;
        }
        var configAsJson = localStorage.getItem('config');
        var volumeAsJson = localStorage.getItem('volume');
        var config = configAsJson ? JSON.parse(configAsJson) : configInitialState;
        var volume = volumeAsJson ? JSON.parse(volumeAsJson) : volumeInitialState;
        var configForSetting = __assign(__assign({}, config), { themes: themes });
        dispatch(configActions.setAll(configForSetting));
        dispatch(volumeActions.setAll(volume));
    }, [themes]);
    useEffect(function () {
        /*
          в эту директорию в dist-е клиента с помощью webpack нужно копировать этот файлик,
          иначе он будет загружаться с cdn
        */
        setWasmUrl('/vendors/dotlottie-player.wasm');
    }, []);
    // после полной загрузки страницы воспроизвожу все аудио, у которых playOnLoad = true
    useEffect(function () {
        if (isLoading) {
            return;
        }
        startToPlayAllAudiosWithPlayOnLoad(audioInstances, page);
        startToPlayAllAudiosWithPlayOnLoad(audioInstancesBg, page);
    }, [page, isLoading, audioInstances, audioInstancesBg]);
    // удаляю id видео из списка currentTime, если видео с data-id на странице нет
    useEffect(function () {
        var videosCurrentTime = store.getState().effects.videosCurrentTime;
        var videos = Array.from(document.querySelectorAll('video'));
        var videosCurrentTimeNewValue = {};
        videos.forEach(function (videoCur) {
            var id = videoCur.getAttribute('data-id');
            if (id && videosCurrentTime[id]) {
                videosCurrentTimeNewValue[id] = videosCurrentTime[id];
            }
        });
        dispatch(effectsActions.setVideosCurrentTime(videosCurrentTimeNewValue));
    }, [page]);
    useEffect(function () {
        // фокус для скролла
        var narrativeElement = document.querySelector('#narrative');
        narrativeElement.click();
        // addTouchSupportForCssHover(); // вместо этого просто "удаляю" :hover везде, возможно так и оставлю
        addKeyboardControl(goPrevPage, goNextPage);
        hideAddressBarInMobileDevices();
    }, [goPrevPage, goNextPage]);
    /*
      начинаю воспроизведение video, у которых autoPlay.
      делаю это здесь, чтобы воспроизведение начиналось только после полной загрузки страницы
    */
    useEffect(function () {
        if (isLoading) {
            return;
        }
        startToPlayAllVideosWithPlayOnLoad();
    }, [page, isLoading]);
    useEffect(function () {
        seenPages.set(page);
        if (page === pages && !mainSelectors.allPagesSeen) {
            toast.success('Все страницы прочитаны! Теперь вам доступны комментарии автора', {
                onOpen: function () {
                    dispatch(mainActions.setAllPagesSeen(true));
                    dispatch(configActions.setAuthorComments(true));
                },
            });
        }
    }, [page]);
    useEffect(function () {
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
    useEffectsInRange(rangeEffects);
    var appWrapperClassNames = classNames((_b = {},
        _b[styles.appWrapper] = true,
        _b[styles.isLoading] = isLoading,
        _b));
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: appWrapperClassNames, children: children }), _jsx(Achievement, {})] }));
};
//# sourceMappingURL=AppWrapper.js.map