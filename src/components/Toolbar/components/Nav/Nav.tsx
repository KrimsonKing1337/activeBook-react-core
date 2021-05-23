import React from 'react';

import ArrowLeft from 'assets/img/toolbar/i-arrow-left.svg';
import ArrowRight from 'assets/img/toolbar/i-arrow-right.svg';

import { Item } from 'components/Toolbar/components/Item';

import styles from './Nav.scss';

export const Nav = () => {
  return (
    <>
      <Item>
        <ArrowLeft />
      </Item>

      <div className={styles.pageNumber}>
        1 из 135
      </div>

      <Item>
        <ArrowRight />
      </Item>
    </>
  );
};
