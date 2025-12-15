import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { Howler } from 'howler';
import { setWasmUrl } from '@lottiefiles/dotlottie-react';
import classNames from 'classnames';
import { store, useDispatch, useSelector } from '../../store';
import { volumeActions } from '../../store/volume';
import { initialState as volumeInitialState } from '../../store/volume/slice';
import { configActions } from '../../store/config';
import { initialState as configInitialState } from '../../store/config/slice';
import { mainActions, mainSelectors } from '../../store/main';
import { achievementsActions } from '../../store/achievements';
import { effectsActions } from '../../store/effects/common';
import { audioEffectsSelectors } from '../../store/effects/audio/audio';
import { audioBgEffectsSelectors } from '../../store/effects/audio/audioBg';
import { useEffectsInRange } from '../../hooks/effects/range';
import { useVibration } from '../../hooks/effects/vibration';
import { useGoToPage } from '../../hooks/control/useGoToPage';
import { Achievement } from '../Achievement';
import { seenPages } from '../../utils/localStorage/seenPages';
import { achievements as achievementsUtils } from '../../utils/localStorage/achievements';
import { getInitValues } from '../../utils/effects/achievements/utils';
import { removeCssHover } from '../../utils/touch/removeCssHover';
import { flashlightInst } from '../../utils/effects/flashlight';
import { addKeyboardControl } from '../../utils/control/keyboardControl';
import { hideAddressBarInMobileDevices } from '../../utils/mobile/hideAddressBarInMobileDevices';
import { setMuteToAllVideos, startToPlayAllAudiosWithPlayOnLoad } from './utils';
import '../../styles/common.scss';
import styles from './AppWrapper.scss';
export var AppWrapper = function (_a) {
    var _b;
    var children = _a.children, config = _a.config, tableOfContents = _a.tableOfContents, rangeEffects = _a.rangeEffects;
    var dispatch = useDispatch();
    var _c = useGoToPage(), goPrevPage = _c.goPrevPage, goNextPage = _c.goNextPage;
    var isLoading = useSelector(mainSelectors.isLoading);
    var page = useSelector(mainSelectors.page);
    var audioInstances = useSelector(audioEffectsSelectors.audioInstances);
    var audioInstancesBg = useSelector(audioBgEffectsSelectors.audioInstances);
    var vibrationOff = useVibration().vibrationOff;
    // применяю конфиг
    useEffect(function () {
        var pages = config.pages, defaultTheme = config.defaultTheme, _a = config.easterEggs, easterEggs = _a === void 0 ? 0 : _a, _b = config.authorComments, authorComments = _b === void 0 ? 0 : _b;
        var configAsJson = localStorage.getItem('config');
        dispatch(mainActions.setPages(pages));
        dispatch(mainActions.setEasterEggs(easterEggs));
        dispatch(mainActions.setAuthorComments(authorComments));
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
        var configAsJson = localStorage.getItem('config');
        var volumeAsJson = localStorage.getItem('volume');
        var config = configAsJson ? JSON.parse(configAsJson) : configInitialState;
        var volume = volumeAsJson ? JSON.parse(volumeAsJson) : volumeInitialState;
        dispatch(configActions.setAll(config));
        dispatch(volumeActions.setAll(volume));
    }, []);
    useEffect(function () {
        var achievements = achievementsUtils.getAll();
        if (!achievements) {
            achievementsUtils.init();
            achievements = getInitValues();
        }
        dispatch(achievementsActions.setAll(achievements));
    }, []);
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
        var videos = Array.from(document.querySelectorAll('video'));
        videos.forEach(function (videoCur) {
            var autoPlay = videoCur.getAttribute('data-autoPlay');
            if (autoPlay === 'true') {
                videoCur.play();
            }
        });
    }, [page, isLoading]);
    useEffect(function () {
        seenPages.set(page);
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