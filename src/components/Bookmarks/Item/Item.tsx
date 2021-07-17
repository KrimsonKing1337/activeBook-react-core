import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import styles from './Item.scss';

export type ItemPropsType = {
  pageNumber: string;
};

export const Item = ({ pageNumber }: ItemPropsType) => {
  return (
    <div className={styles.item}>
      <div className={styles.pageNumber}>
        Страница { pageNumber }
      </div>

      <div className={styles.deleteIcon}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
    </div>
  );
};
