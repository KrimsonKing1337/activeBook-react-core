import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'store';
import classNames from 'classnames';
import { Howler } from 'howler';
import { volumeActions } from 'store/volume';
import { initialState as volumeInitialState } from 'store/volume/slice';
import { configActions } from 'store/config';
import { initialState as configInitialState } from 'store/config/slice';
import { mainActions, mainSelectors } from 'store/main';
import { achievementsActions } from 'store/achievements';
import { seenPages } from 'utils/localStorage/seenPages';
import { play as achievementPlay } from 'utils/effects/achievements';
import { achievements as achievementsUtils } from 'utils/localStorage/achievements';
import { Flags as AchievementsFlags, getInitValues } from 'utils/effects/achievements/utils';
import { removeCssHover } from 'utils/touch/removeCssHover';
import { flashlightInst } from 'utils/effects/flashlight';
import { useEffectsInRange } from 'hooks/effects/range';
import { useVibration } from 'hooks/effects/vibration';
import { Achievement } from 'components/Achievement';
import styles from './AppWrapper.scss';
export var AppWrapper = function (_a) {
    var _b;
    var children = _a.children, rangeEffectsJson = _a.rangeEffectsJson;
    var dispatch = useDispatch();
    var navigate = useNavigate();
    var isLoading = useSelector(mainSelectors.isLoading);
    var page = useSelector(mainSelectors.page);
    var pages = useSelector(mainSelectors.pages);
    var vibrationOff = useVibration().vibrationOff;
    // приглушаю звук, отключаю вибрацию и вспышку, если приложение скрыто
    useEffect(function () {
        document.addEventListener('visibilitychange', function () {
            if (document.hidden) {
                Howler.mute(true);
                vibrationOff();
                flashlightInst.mediaStreamTrackStop();
            }
            else {
                Howler.mute(false);
                flashlightInst.init();
            }
        });
    }, []);
    // сбрасываю адресную строку
    useEffect(function () {
        navigate('/');
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
        seenPages.set(page);
        var seenPagesFromLocalStorage = seenPages.get();
        var seenPagesLength = Object.keys(seenPagesFromLocalStorage).length;
        if (seenPagesLength === pages) {
            achievementPlay({
                id: AchievementsFlags.allPagesSeen,
                text: 'Все страницы прочитаны! Теперь можно включить авторские комментарии в настройках!',
                type: 'gold',
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
    useEffectsInRange(rangeEffectsJson);
    var appWrapperClassNames = classNames((_b = {},
        _b[styles.appWrapper] = true,
        _b[styles.isLoading] = isLoading,
        _b));
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: appWrapperClassNames, children: children }), _jsx(Achievement, {})] }));
};
//# sourceMappingURL=AppWrapper.js.map