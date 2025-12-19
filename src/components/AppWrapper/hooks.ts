import { useEffect, useRef } from 'react';

import { Howler } from 'howler';

import { toast } from 'react-toastify';

import type { Config } from '@types';

import { useDispatch, useSelector } from 'store';

import { mainActions, mainSelectors } from 'store/main';
import { effectsActions, effectsSelectors } from 'store/effects/common';
import { configActions } from 'store/config';
import { initialState as configInitialState } from 'store/config/slice';
import { initialState as volumeInitialState } from 'store/volume/slice';
import { volumeActions } from 'store/volume';

import { useVibration } from 'hooks/effects/vibration';

import { setMuteToAllVideos } from 'components/AppWrapper/utils';

import { flashlightInst } from 'utils/effects/flashlight';
import { seenPages } from 'utils/localStorage/seenPages';
import { getThemes } from 'utils/styles/getThemes';

export function useVisibilityChangeHandler() {
  const { vibrationOff } = useVibration();

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
}

export function useDeleteAllVideosWithoutDataIdOnThePage() {
  const dispatch = useDispatch();

  const videosCurrentTimeRef = useRef<typeof videosCurrentTime>(null);

  const page = useSelector(mainSelectors.page);
  const videosCurrentTime = useSelector(effectsSelectors.videosCurrentTime);

  useEffect(() => {
    videosCurrentTimeRef.current = videosCurrentTime;
  }, [videosCurrentTime]);

  // Здесь ранее videosCurrentTime запрашивались напрямую из стора без зависимостей, мб нужно сделать через ref
  useEffect(() => {
    const videos = Array.from(document.querySelectorAll('video'));

    const videosCurrentTimeNewValue: typeof videosCurrentTime = {};

    videos.forEach((videoCur) => {
      const id = videoCur.getAttribute('data-id');

      if (id && videosCurrentTimeRef.current?.[id]) {
        videosCurrentTimeRef.current[id] = videosCurrentTime[id];
      }
    });

    dispatch(effectsActions.setVideosCurrentTime(videosCurrentTimeNewValue));
  }, [page]);
}

export function useAllPagesSeen() {
  const dispatch = useDispatch();

  const page = useSelector(mainSelectors.page);
  const pages = useSelector(mainSelectors.pages);
  const allPagesSeen = useSelector(mainSelectors.allPagesSeen);

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
      toast.success('Вам доступны комментарии автора!');
      localStorage.setItem('allPagesSeen', 'true');

      dispatch(mainActions.setAllPagesSeen(true));
      dispatch(configActions.setAuthorComments(true));
    }
  }, [page, pages, allPagesSeen]);
}

export function useBeforeUnloadHandler() {
  const page = useSelector(mainSelectors.page);

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
}

export function useSetUpConfig(passedConfig: Config) {
  const dispatch = useDispatch();

  useEffect(() => {
    const { pages, defaultTheme, customThemes } = passedConfig;

    const configAsJson = localStorage.getItem('config');
    const volumeAsJson = localStorage.getItem('volume');

    const themes = getThemes(customThemes);

    dispatch(configActions.setThemes(themes));
    dispatch(mainActions.setPages(pages));

    if (!configAsJson) {
      dispatch(configActions.setTheme(defaultTheme));
    }


    const config = configAsJson ? JSON.parse(configAsJson) : configInitialState;
    const volume = volumeAsJson ? JSON.parse(volumeAsJson) : volumeInitialState;

    const configForSetting = {
      ...config,
      themes,
    };

    dispatch(configActions.setAll(configForSetting));
    dispatch(volumeActions.setAll(volume));
  }, []);
}
