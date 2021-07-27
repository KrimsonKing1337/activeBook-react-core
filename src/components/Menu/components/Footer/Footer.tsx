import React from 'react';
import { useDispatch } from 'react-redux';

import classNames from 'classnames';

import { setMenuActiveState } from 'store/main/actions';

import styles from './Footer.scss';

function getClassNames(className: string) {
  return classNames([
    styles.button,
    className,
  ]);
}

export const Footer = () => {
  const dispatch = useDispatch();

  const tableOfContentsButtonClickHandler = () => {
    dispatch(setMenuActiveState('tableOfContents'));
  };

  const closeButtonClickHandler = () => {
    dispatch(setMenuActiveState(null));
  };

  return (
    <div className={styles.footer}>
      <button className={getClassNames(styles.isTableOfContents)} onClick={tableOfContentsButtonClickHandler}>
        Оглавление
      </button>

      <button className={getClassNames(styles.isClose)} onClick={closeButtonClickHandler}>
        Закрыть
      </button>
    </div>
  );
};
