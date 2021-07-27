import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classNames from 'classnames';

import { setAll as setAllVolume } from 'store/volume/actionsTypes';
import { setAll as setAllConfig } from 'store/config/actions';
import { volumeSelectors } from 'store/volume/reducer';
import { configSelectors } from 'store/config/reducer';
import { mainSelectors } from 'store/main/reducer';

import { EffectExamples } from 'pages/EffectExamples';

import styles from './AppWrapper.scss';

export const AppWrapper = () => {
  const dispatch = useDispatch();
  const config = useSelector(configSelectors.all);
  const volume = useSelector(volumeSelectors.all);
  const isLoading = useSelector(mainSelectors.isLoading);

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
      <EffectExamples />
    </div>
  );
};
