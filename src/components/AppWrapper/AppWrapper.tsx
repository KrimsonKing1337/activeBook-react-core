import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import classNames from 'classnames';

import { setAll as setAllVolume } from 'store/volume/actions';
import { setAll as setAllConfig } from 'store/config/actions';
import { setIsFlashlightAvailable, setIsVibrationAvailable } from 'store/main/actions';
import { volumeSelectors } from 'store/volume/reducer';
import { configSelectors } from 'store/config/reducer';
import { mainSelectors } from 'store/main/reducer';

import styles from './AppWrapper.scss';

type AppWrapperProps = {
  children: React.ReactNode;
};

export const AppWrapper = ({ children }: AppWrapperProps) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const config = useSelector(configSelectors.all);
  const volume = useSelector(volumeSelectors.all);
  const isLoading = useSelector(mainSelectors.isLoading);

  // сбрасываю адресную строку
  useEffect(() => {
    history.push('/');
  }, []);

  useEffect(() => {
    const canVibrate = !!navigator.vibrate;

    dispatch(setIsVibrationAvailable(canVibrate));

    (window as any).plugins?.flashlight.available((isAvailable: boolean) => {
      dispatch(setIsFlashlightAvailable(isAvailable));
    });
  }, []);

  useEffect(() => {
    const configAsJson = localStorage.getItem('config');
    const volumeAsJson = localStorage.getItem('volume');

    if (!configAsJson || !volumeAsJson) {
      return;
    }

    const config = JSON.parse(configAsJson);
    const volume = JSON.parse(volumeAsJson);

    dispatch(setAllConfig(config));
    dispatch(setAllVolume(volume));
  }, []);

  useEffect(() => {
    const listener = () => {
      const configAsJson = JSON.stringify(config);
      const volumeAsJson = JSON.stringify(volume);

      localStorage.setItem('config', configAsJson);
      localStorage.setItem('volume', volumeAsJson);
    };

    window.addEventListener('beforeunload', listener);

    return () => window.removeEventListener('beforeunload', listener);
  }, [config, volume]);

  const appWrapperClassNames = classNames({
    [styles.appWrapper]: true,
    [styles.isLoading]: isLoading,
  });

  return (
    <div className={appWrapperClassNames}>
      {children}
    </div>
  );
};
