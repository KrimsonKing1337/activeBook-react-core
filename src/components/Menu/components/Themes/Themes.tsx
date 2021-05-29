import React from 'react';

import classNames from 'classnames';

import { Label } from '../Label';

import styles from './Themes.scss';

function getClassNames(className: string) {
  return classNames([
    styles.themesItem,
    className
  ]);
}

export const Themes = () => {
  return (
    <div className={styles.themes}>
      <Label label={'Оформление'} />

      <div className={styles.themesItemsWrapper}>
        <div className={getClassNames(styles.isDark)} />
        <div className={getClassNames(styles.isOrange)} />
        <div className={getClassNames(styles.isDarkBlue)} />
        <div className={getClassNames(styles.isBlack)} />
      </div>
    </div>
  )
};
