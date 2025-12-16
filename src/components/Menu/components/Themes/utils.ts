import classNames from 'classnames';
import { ThemeName } from '@types';

import { play } from 'utils/effects/achievements';
import { Flags } from 'utils/effects/achievements/utils';

import styles from './Themes.scss';

export function getThemeItemClassName(theme: ThemeName) {
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

export function getClassNames(theme: ThemeName) {
  const className = getThemeItemClassName(theme);

  return classNames([
    styles.themesItem,
    className,
  ]);
}

export const themes: ThemeName[] = ['dark', 'orange', 'darkBlue', 'black'];

export const playAchievement = () => {
  play({
    id: Flags.themes,
    text: 'Меняем тему оформления!',
  });
};
