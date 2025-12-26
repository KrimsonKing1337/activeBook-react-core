import { useEffect, useRef } from 'react';

import { toast } from 'react-toastify';
import { stringifyCSSProperties } from 'react-style-stringify';
import { Howler } from 'howler';

import type { Config } from '@types';

import { useDispatch, useSelector } from 'store';

import { mainActions, mainSelectors } from 'store/main';
import { effectsActions, effectsSelectors } from 'store/effects/common';
import { configActions, configSelectors } from 'store/config';
import { initialState as configInitialState } from 'store/config/slice';
import { initialState as volumeInitialState } from 'store/volume/slice';
import { volumeActions } from 'store/volume';

import { useVibration } from 'hooks/effects/vibration';

import { setMuteToAllVideos } from 'components/AppWrapper/utils';

import { flashlightInst } from 'utils/effects/flashlight';
import { seenPages } from 'utils/localStorage/seenPages';
import { getThemes } from 'utils/styles/getThemes';
import { set as localStorageSet, get as localStorageGet } from 'utils/localStorage/localStorage';

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

  const id = useSelector(mainSelectors.id);
  const page = useSelector(mainSelectors.page);
  const pages = useSelector(mainSelectors.pages);
  const allPagesSeen = useSelector(mainSelectors.allPagesSeen);
  const authorComments = useSelector(configSelectors.authorComments);

  useEffect(() => {
    const allPagesSeen = localStorageGet(id, 'allPagesSeen');

    if (allPagesSeen) {
      dispatch(mainActions.setAllPagesSeen(true));
    }
  }, []);

  // если не передано или ноль - значит комментариев автора нет, ничего не делаем
  useEffect(() => {
    if (!authorComments) {
      return;
    }

    seenPages.set(id, page);

    const seenPagesDecrypt = seenPages.get(id);
    const allPagesSeenLocalStorage = localStorageGet(id, 'allPagesSeen');

    if (allPagesSeenLocalStorage) {
      dispatch(mainActions.setAllPagesSeen(true));
      dispatch(configActions.setAuthorComments(true));

      return;
    }

    if (pages === 0) {
      return;
    }

    if (Object.keys(seenPagesDecrypt).length === pages && !allPagesSeen) {
      toast.success('Теперь доступны комментарии автора!');

      localStorageSet(id, { allPagesSeen: true });

      dispatch(mainActions.setAllPagesSeen(true));
      dispatch(configActions.setAuthorComments(true));
    }
  }, [page, pages, allPagesSeen]);
}

export function useBeforeUnloadHandler() {
  const id = useSelector(mainSelectors.id);
  const page = useSelector(mainSelectors.page);

  useEffect(() => {
    const listener = () => {
      if (page !== 0) {
        localStorageSet(id, { lastPage: page });
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
    const { id, pages, defaultTheme, customThemes, bodyStyle } = passedConfig;

    const config = localStorageGet(id, 'config');
    const volume = localStorageGet(id, 'volume');

    const themes = getThemes(customThemes);

    dispatch(configActions.setThemes(themes));
    dispatch(mainActions.setId(id));
    dispatch(mainActions.setPages(pages));

    const configForSet = config ?? configInitialState;
    const volumeForSet = volume ?? volumeInitialState;

    const configForSetting = {
      ...configForSet,
      themes,
      theme: defaultTheme,
    };

    dispatch(configActions.setAll(configForSetting));
    dispatch(volumeActions.setAll(volumeForSet));

    if (bodyStyle) {
      const bodyStyleForSet = stringifyCSSProperties(bodyStyle);
      document.querySelector('body')?.setAttribute('style', bodyStyleForSet);
    }
  }, []);
}
