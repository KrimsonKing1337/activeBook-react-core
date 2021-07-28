import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { configSelectors } from 'store/config/reducer';
import { setTheme } from 'store/config/actions';
import { Theme } from 'store/config/initialState';

import { Label } from 'components/Label';

import styles from './Themes.scss';

function getThemeItemClassName(theme: Theme) {
  switch (theme) {
  case 'dark':
    return styles.isDark;
  case 'orange':
    return styles.isOrange;
  case 'darkBlue':
    return styles.isDarkBlue;
  case 'black':
    return styles.isBlack;
  }
}

function getClassNames(theme: Theme) {
  const className = getThemeItemClassName(theme);

  return classNames([
    styles.themesItem,
    className,
  ]);
}

const themes: Theme[] = ['dark', 'orange', 'darkBlue', 'black'];

export const Themes = () => {
  const dispatch = useDispatch();
  const activeTheme = useSelector(configSelectors.theme);

  const clickHandler = (theme: Theme) => {
    dispatch(setTheme(theme));
  };

  return (
    <div className={styles.themes}>
      <Label label={'Оформление'} />

      <div className={styles.themesItemsWrapper}>
        { themes.map((themeCur) => (
          <div key={themeCur} className={getClassNames(themeCur)} onClick={() => clickHandler(themeCur)}>
            {activeTheme === themeCur && <FontAwesomeIcon icon={faCheck} />}
          </div>
        )) }
      </div>
    </div>
  );
};
