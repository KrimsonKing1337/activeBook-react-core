import { type PropsWithChildren, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { Howler } from 'howler';
import { setWasmUrl } from '@lottiefiles/dotlottie-react';

import classNames from 'classnames';

import type { Config, HowlInstances, RangeEffects } from '@types';

import { store, useDispatch, useSelector } from 'store';

import { volumeActions } from 'store/volume';
import { initialState as volumeInitialState } from 'store/volume/slice';
import { configActions } from 'store/config';
import { initialState as configInitialState } from 'store/config/slice';
import { mainActions, mainSelectors } from 'store/main';
import { achievementsActions } from 'store/achievements';
import { effectsActions, effectsSelectors } from 'store/effects/common';

import { useEffectsInRange } from 'hooks/effects/range';
import { useVibration } from 'hooks/effects/vibration';

import { seenPages } from 'utils/localStorage/seenPages';
import { achievements as achievementsUtils } from 'utils/localStorage/achievements';
import { getInitValues } from 'utils/effects/achievements/utils';
import { removeCssHover } from 'utils/touch/removeCssHover';
import { flashlightInst } from 'utils/effects/flashlight';

import { Achievement } from 'components/Achievement';

import { setMuteToAllVideos, startToPlayAllAudiosWithPlayOnLoad } from './utils';

import styles from './AppWrapper.scss';

export type AppWrapperProps = {
  config: Config;
  rangeEffects: RangeEffects;
};

export const AppWrapper = ({ children, config, rangeEffects }: PropsWithChildren<AppWrapperProps>) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading = useSelector(mainSelectors.isLoading);
  const isDotLottieLoading = useSelector(effectsSelectors.isDotLottieLoading);

  const page = useSelector(mainSelectors.page);

  const { vibrationOff } = useVibration();

  // применяю конфиг
  useEffect(() => {
    const { pages, defaultTheme, easterEggs = 0, authorComments = 0 } = config;

    const configAsJson = localStorage.getItem('config');

    dispatch(mainActions.setPages(pages));
    dispatch(mainActions.setEasterEggs(easterEggs));
    dispatch(mainActions.setAuthorComments(authorComments));

    if (!configAsJson) {
      dispatch(configActions.setTheme(defaultTheme));
    }
  }, []);

  // приглушаю звук, отключаю вибрацию и вспышку, если приложение скрыто
  useEffect(() => {
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        Howler.mute(true);
        setMuteToAllVideos(true);

        vibrationOff();

        flashlightInst.mediaStreamTrackStop();
      } else {
        Howler.mute(false);
        setMuteToAllVideos(false);

        flashlightInst.init();
      }
    });
  }, []);

  // сбрасываю адресную строку
  useEffect(() => {
    navigate('/');
  }, []);

  // если тач-устройство - убираю :hover
  useEffect(() => {
    removeCssHover();
  }, []);

  useEffect(() => {
    const canVibrate = !!navigator.vibrate;

    dispatch(mainActions.setIsVibrationAvailable(canVibrate));
  }, []);

  useEffect(() => {
    const configAsJson = localStorage.getItem('config');
    const volumeAsJson = localStorage.getItem('volume');

    const config = configAsJson ? JSON.parse(configAsJson) : configInitialState;
    const volume = volumeAsJson ? JSON.parse(volumeAsJson) : volumeInitialState;

    dispatch(configActions.setAll(config));
    dispatch(volumeActions.setAll(volume));
  }, []);

  useEffect(() => {
    let achievements = achievementsUtils.getAll();

    if (!achievements) {
      achievementsUtils.init();

      achievements = getInitValues();
    }

    dispatch(achievementsActions.setAll(achievements));
  }, []);

  useEffect(() => {
    /*
      в эту директорию в dist-е клиента с помощью webpack нужно копировать этот файлик,
      иначе он будет загружаться с cdn
    */
    setWasmUrl('/vendors/dotlottie-player.wasm');
  }, []);

  // после полной загрузки страницы воспроизвожу все аудио, у которых playOnLoad = true
  useEffect(() => {
    if (isLoading) {
      return;
    }

    const audioInstances: HowlInstances = store.getState().audioEffects.audioInstances;
    const audioInstancesBg: HowlInstances = store.getState().audioBgEffects.audioInstances;

    startToPlayAllAudiosWithPlayOnLoad(audioInstances);
    startToPlayAllAudiosWithPlayOnLoad(audioInstancesBg);
  }, [page, isLoading]);

  // удаляю id видео из списка currentTime, если видео с data-id на странице нет
  useEffect(() => {
    const videosCurrentTime = store.getState().effects.videosCurrentTime;
    const videos = Array.from(document.querySelectorAll('video'));

    const videosCurrentTimeNewValue: typeof videosCurrentTime = {};

    videos.forEach((videoCur) => {
      const id = videoCur.getAttribute('data-id');

      if (id && videosCurrentTime[id]) {
        videosCurrentTimeNewValue[id] = videosCurrentTime[id];
      }
    });

    dispatch(effectsActions.setVideosCurrentTime(videosCurrentTimeNewValue));
  }, [page]);

  useEffect(() => {
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

  useEffect(() => {
    const listener = () => {
      if (page !== 0) {
        const pageAsJson = JSON.stringify(page);

        localStorage.setItem('lastPage', pageAsJson);
      }
    };

    window.addEventListener('beforeunload', listener);

    return () => {
      window.removeEventListener('beforeunload', listener);
    };
  }, [page]);

  useEffectsInRange(rangeEffects);

  const appWrapperClassNames = classNames({
    [styles.appWrapper]: true,
    [styles.isLoading]: isLoading || isDotLottieLoading,
  });

  return (
    <>
      <div className={appWrapperClassNames}>
        {children}
      </div>

      <Achievement />
    </>
  );
};
