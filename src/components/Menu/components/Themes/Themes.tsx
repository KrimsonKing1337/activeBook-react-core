import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { configSelectors } from 'store/config/reducer';
import { setTheme } from 'store/config/actionsTypes';
import { Theme } from 'store/config/initialState';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { setCssVariable } from 'utils/setCssVariable';

import { Label } from '../Label';

import styles from './Themes.scss';

function getThemeItemClassName(theme: Theme) {
  switch (theme) {
  case 'dark':
    return styles.isDark
  case 'orange':
    return styles.isOrange
  case 'darkBlue':
    return styles.isDarkBlue
  case 'black':
    return styles.isBlack
  }
}

function getClassNames(theme: Theme) {
  const className = getThemeItemClassName(theme);

  return classNames([
    styles.themesItem,
    className
  ]);
}

function setThemeCss(theme: Theme) {
  const voc: any = {
    dark: {
      main: '#a3a3a3',
      secondary: '#828282',
      hover: '#9c9c9c',
      bg: '#111'
    },
    orange: {
      main: '#f2994a',
      secondary: '#000',
      hover: '#f2c94c',
      bg: '#fff'
    },
    darkBlue: {
      main: '#728c9a',
      secondary: '#000',
      hover: '#9bc4d9',
      bg: '#fff'
    },
    black: {
      main: '#111',
      secondary: '#000',
      hover: '#a3a3a3',
      bg: '#fff'
    },
  };

  const colors = voc[theme];

  Object.keys(colors).forEach((keyCur) => {
    const valueCur = colors[keyCur];

    setCssVariable(`--${keyCur}`, valueCur);
  });
}

const themes: Theme[] = ['dark', 'orange', 'darkBlue', 'black'];

// todo: добавить в ассеты иконку галочки, удалить fontawesome;
export const Themes = () => {
  const dispatch = useDispatch();
  const activeTheme = useSelector(configSelectors.theme);

  const clickHandler = (theme: Theme) => {
    dispatch(setTheme(theme));

    setThemeCss(theme);
  }

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
  )
};
