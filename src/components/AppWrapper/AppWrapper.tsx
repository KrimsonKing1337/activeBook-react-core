import { type PropsWithChildren, useEffect, useRef } from 'react';

import { Howler } from 'howler';
import { setWasmUrl } from '@lottiefiles/dotlottie-react';
import classNames from 'classnames';
import { toast, ToastContainer } from 'react-toastify';

import type { Config, HowlInstances, RangeEffects, TableOfContents } from '@types';

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

import { seenPages } from 'utils/localStorage/seenPages';
import { removeCssHover } from 'utils/touch/removeCssHover';
import { flashlightInst } from 'utils/effects/flashlight';
import { addKeyboardControl } from 'utils/control/keyboardControl';
import { hideAddressBarInMobileDevices } from 'utils/mobile/hideAddressBarInMobileDevices';
import { getThemes } from 'utils/styles/getThemes';

import { setMuteToAllVideos, startToPlayAllAudiosWithPlayOnLoad, startToPlayAllVideosWithPlayOnLoad } from './utils';

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
  const { vibrationOff } = useVibration();

  const audioInstancesRef = useRef<HowlInstances>({});
  const audioInstancesBgRef = useRef<HowlInstances>({});

  const isLoading = useSelector(mainSelectors.isLoading);
  const page = useSelector(mainSelectors.page);
  const pages = useSelector(mainSelectors.pages);
  const allPagesSeen = useSelector(mainSelectors.allPagesSeen);
  const audioInstances = useSelector(audioEffectsSelectors.audioInstances);
  const audioInstancesBg = useSelector(audioBgEffectsSelectors.audioInstances);
  const themes = useSelector(configSelectors.themes);

  useEffect(() => {
    audioInstancesRef.current = audioInstances;
  }, [audioInstances]);

  useEffect(() => {
    audioInstancesBgRef.current = audioInstancesBg;
  }, [audioInstancesBg]);

  // применяю конфиг
  useEffect(() => {
    const { pages, defaultTheme, customThemes } = config;

    const configAsJson = localStorage.getItem('config');

    const themes = getThemes(customThemes);

    dispatch(configActions.setThemes(themes));
    dispatch(mainActions.setPages(pages));

    if (!configAsJson) {
      dispatch(configActions.setTheme(defaultTheme));
    }
  }, []);

  // применяю оглавление
  useEffect(() => {
    dispatch(mainActions.setTableOfContents(tableOfContents));
  }, []);

  // приглушаю звук, отключаю вибрацию и вспышку, если приложение скрыто
  useEffect(() => {
    const handler = () => {
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
    };

    document.addEventListener('visibilitychange', handler);

    return () => {
      document.removeEventListener('visibilitychange', handler);
    };
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
    if (!Object.keys(themes).length) {
      return;
    }

    const configAsJson = localStorage.getItem('config');
    const volumeAsJson = localStorage.getItem('volume');

    const config = configAsJson ? JSON.parse(configAsJson) : configInitialState;
    const volume = volumeAsJson ? JSON.parse(volumeAsJson) : volumeInitialState;

    const configForSetting = {
      ...config,
      themes,
    };

    dispatch(configActions.setAll(configForSetting));
    dispatch(volumeActions.setAll(volume));
  }, [themes]);

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

    startToPlayAllAudiosWithPlayOnLoad(audioInstancesRef.current, page);
    startToPlayAllAudiosWithPlayOnLoad(audioInstancesBgRef.current, page);
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

    startToPlayAllVideosWithPlayOnLoad();
  }, [page, isLoading]);

  useEffect(() => {
    const allPagesSeen = localStorage.getItem('allPagesSeen');

    if (allPagesSeen) {
      dispatch(mainActions.setAllPagesSeen(true));
    }
  }, []);

  useEffect(() => {
    seenPages.set(page);

    const allPagesSeenLocalStorage = localStorage.getItem('allPagesSeen');

    if (allPagesSeenLocalStorage) {
      return;
    }

    if (pages === 0) {
      return;
    }

    if (page === pages && !allPagesSeen) {
      toast.success('Все страницы прочитаны! Теперь вам доступны комментарии автора');
      localStorage.setItem('allPagesSeen', 'true');

      dispatch(mainActions.setAllPagesSeen(true));
      dispatch(configActions.setAuthorComments(true));
    }
  }, [page, pages, allPagesSeen]);

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

      <ToastContainer
        hideProgressBar
        pauseOnHover
        closeOnClick
        theme="colored"
      />
    </>
  );
};
