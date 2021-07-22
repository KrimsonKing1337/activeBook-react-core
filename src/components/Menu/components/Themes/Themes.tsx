import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { configSelectors } from 'store/config/reducer';
import { setTheme } from 'store/config/actionsTypes';
import { Theme } from 'store/config/initialState';
import classNames from 'classnames'; // todo: поправить конфиг tslint
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { setThemeCss } from 'utils/setThemeCss';

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

const themes: Theme[] = ['dark', 'orange', 'darkBlue', 'black'];

// todo: добавить в ассеты иконку галочки, удалить fontawesome;
export const Themes = () => {
  const dispatch = useDispatch();
  const activeTheme = useSelector(configSelectors.theme);

  const clickHandler = (theme: Theme) => {
    dispatch(setTheme(theme));

    setThemeCss(theme); // todo: вынести в saga
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
