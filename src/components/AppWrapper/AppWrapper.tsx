import { type PropsWithChildren, useEffect } from 'react';

import classNames from 'classnames';
import { setWasmUrl } from '@lottiefiles/dotlottie-react';
import { ToastContainer } from 'react-toastify';

import type { Config, RangeEffects, TableOfContents } from '@types';

import { useDispatch, useSelector } from 'store';

import { mainActions, mainSelectors } from 'store/main';
import { audioEffectsSelectors } from 'store/effects/audio/audio';
import { audioBgEffectsSelectors } from 'store/effects/audio/audioBg';

import { useEffectsInRange } from 'hooks/effects/range';
import { useGoToPage } from 'hooks/control/useGoToPage';

import { removeCssHover } from 'utils/touch/removeCssHover';
import { addKeyboardControl } from 'utils/control/keyboardControl';
import { hideAddressBarInMobileDevices } from 'utils/mobile/hideAddressBarInMobileDevices';

import {
  useAllPagesSeen,
  useBeforeUnloadHandler,
  useDeleteAllVideosWithoutDataIdOnThePage,
  useSetUpConfig,
  useVisibilityChangeHandler,
} from './hooks';

import { startToPlayAllAudiosWithPlayOnLoad, startToPlayAllVideosWithPlayOnLoad } from './utils';

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

  // применяю конфиг
  useSetUpConfig(config);

  // применяю оглавление
  useEffect(() => {
    dispatch(mainActions.setTableOfContents(tableOfContents));
  }, []);

  // приглушаю звук, отключаю вибрацию и вспышку, если приложение скрыто
  useVisibilityChangeHandler();

  // Сбрасывать адресную строку теперь не нужно, т.к. мы используем memoryRouter. вместо этого очищаем историю
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

  // Удаляю id видео из списка currentTime, если видео с data-id на странице нет
  // todo: вспомнить зачем это вообще нужно
  useDeleteAllVideosWithoutDataIdOnThePage();

  useEffect(() => {
    // фокус для скролла
    const narrativeElement = document.querySelector('#narrative') as HTMLElement;

    narrativeElement.click();

    const removeKeyboardControl = addKeyboardControl(goPrevPage, goNextPage);

    return () => {
      removeKeyboardControl();
    };
  }, [goPrevPage, goNextPage]);

  useEffect(() => {
    // addTouchSupportForCssHover(); // вместо этого просто "удаляю" :hover везде, возможно так и оставлю
    hideAddressBarInMobileDevices();
  }, []);

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

  useAllPagesSeen();
  useBeforeUnloadHandler();
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
