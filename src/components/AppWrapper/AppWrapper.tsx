import { type PropsWithChildren, useEffect } from 'react';

import { Howler } from 'howler';
import { setWasmUrl } from '@lottiefiles/dotlottie-react';
import classNames from 'classnames';

import type { Config, RangeEffects, TableOfContents } from '@types';

import { store, useDispatch, useSelector } from 'store';

import { volumeActions } from 'store/volume';
import { initialState as volumeInitialState } from 'store/volume/slice';
import { configActions } from 'store/config';
import { initialState as configInitialState } from 'store/config/slice';
import { mainActions, mainSelectors } from 'store/main';
import { achievementsActions } from 'store/achievements';
import { effectsActions } from 'store/effects/common';
import { audioEffectsSelectors } from 'store/effects/audio/audio';
import { audioBgEffectsSelectors } from 'store/effects/audio/audioBg';

import { useEffectsInRange } from 'hooks/effects/range';
import { useVibration } from 'hooks/effects/vibration';
import { useGoToPage } from 'hooks/control/useGoToPage';

import { Achievement } from 'components/Achievement';

import { seenPages } from 'utils/localStorage/seenPages';
import { achievements as achievementsUtils } from 'utils/localStorage/achievements';
import { getInitValues } from 'utils/effects/achievements/utils';
import { removeCssHover } from 'utils/touch/removeCssHover';
import { flashlightInst } from 'utils/effects/flashlight';
import { addKeyboardControl } from 'utils/control/keyboardControl';
import { hideAddressBarInMobileDevices } from 'utils/mobile/hideAddressBarInMobileDevices';
import { getThemes } from 'utils/styles/getThemes';

import { setMuteToAllVideos, startToPlayAllAudiosWithPlayOnLoad } from './utils';

import 'styles/common.scss';

import * as styles from './AppWrapper.scss';

export type AppWrapperProps = {
  config: Config;
  tableOfContents: TableOfContents;
  rangeEffects: RangeEffects;
};

export const AppWrapper = ({ children, config, tableOfContents, rangeEffects }: PropsWithChildren<AppWrapperProps>) => {
  const dispatch = useDispatch();
  const { goPrevPage, goNextPage } = useGoToPage();

  const isLoading = useSelector(mainSelectors.isLoading);
  const page = useSelector(mainSelectors.page);
  const audioInstances = useSelector(audioEffectsSelectors.audioInstances);
  const audioInstancesBg = useSelector(audioBgEffectsSelectors.audioInstances);

  const { vibrationOff } = useVibration();

  // применяю конфиг
  useEffect(() => {
    const { pages, defaultTheme, customThemes, easterEggs = 0, authorComments = 0 } = config;

    const themes = getThemes(customThemes);

    const configAsJson = localStorage.getItem('config');

    dispatch(mainActions.setPages(pages));
    dispatch(mainActions.setEasterEggs(easterEggs));
    dispatch(mainActions.setAuthorComments(authorComments));

    if (!configAsJson) {
      dispatch(configActions.setThemes(themes));
      dispatch(configActions.setTheme(defaultTheme));
    }
  }, []);

  // применяю оглавление
  useEffect(() => {
    dispatch(mainActions.setTableOfContents(tableOfContents));
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

  // сбрасывать адресную строку теперь не нужно, т.к. мы используем memoryRouter. вместо этого очищаем историю
  useEffect(() => {
    window.history.pushState(null, '', window.location.href);
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

    startToPlayAllAudiosWithPlayOnLoad(audioInstances, page);
    startToPlayAllAudiosWithPlayOnLoad(audioInstancesBg, page);
  }, [page, isLoading, audioInstances, audioInstancesBg]);

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
    // фокус для скролла
    const narrativeElement = document.querySelector('#narrative') as HTMLElement;

    narrativeElement.click();

    // addTouchSupportForCssHover(); // вместо этого просто "удаляю" :hover везде, возможно так и оставлю
    addKeyboardControl(goPrevPage, goNextPage);
    hideAddressBarInMobileDevices();
  }, [goPrevPage, goNextPage]);

  /*
    начинаю воспроизведение video, у которых autoPlay.
    делаю это здесь, чтобы воспроизведение начиналось только после полной загрузки страницы
  */
  useEffect(() => {
    if (isLoading) {
      return;
    }

    const videos = Array.from(document.querySelectorAll('video'));

    videos.forEach((videoCur) => {
      const autoPlay = videoCur.getAttribute('data-autoPlay');

      if (autoPlay === 'true') {
        videoCur.play();
      }
    });
  }, [page, isLoading]);

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
    [styles.isLoading]: isLoading,
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
