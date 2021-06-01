import React from 'react';
import { useDispatch } from 'react-redux';

import { setMenuActiveState } from 'store/main/actionsTypes';

import BookmarkIcon from 'assets/img/toolbar/i-bookmark.svg';
import FontSmallIcon from 'assets/img/toolbar/i-font-small.svg';
import FontBigIcon from 'assets/img/toolbar/i-font-big.svg';
import EtcIcon from 'assets/img/toolbar/i-etc.svg';

import { Item } from './components/Item';
import { Nav } from './components/Nav';

import styles from './Toolbar.scss';

export const Toolbar = () => {
  const dispatch = useDispatch();

  const etcIconClickHandler = () => {
    dispatch(setMenuActiveState('menu'));
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.toolbar}>
        <Item>
          <BookmarkIcon />
        </Item>

        <Item>
          <Nav />
        </Item>

        <Item>
          <FontSmallIcon />
        </Item>

        <Item className={styles.fontBig}>
          <FontBigIcon />
        </Item>

        <Item onClick={etcIconClickHandler}>
          <EtcIcon />
        </Item>
      </div>
    </div>
  );
};
