import React from 'react';

import classNames from 'classnames';

import styles from './Footer.scss';

function getClassNames(className: string) {
  return classNames([
    styles.button,
    className
  ]);
}

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={getClassNames(styles.isTableOfContents)}>
        Оглавление
      </div>

      <div className={getClassNames(styles.isClose)}>
        Закрыть
      </div>
    </div>
  );
};
