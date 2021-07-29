import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import classNames from 'classnames';

import { mainSelectors } from 'store/main/reducer';
import { setBookmarkIsOpen } from 'store/main/actions';

import { Header } from 'components/Header';
import { Overflow } from 'components/Overflow';

import { Item, ItemProps } from './Item';

import styles from './Bookmarks.scss';

const items: ItemProps[] = [
  {
    pageNumber: '1',
  },
  {
    pageNumber: '5',
  },
  {
    pageNumber: '10',
  },
  {
    pageNumber: '17',
  },
  {
    pageNumber: '20',
  },
  {
    pageNumber: '29',
  },
  {
    pageNumber: '34',
  },
  {
    pageNumber: '36',
  },
  {
    pageNumber: '41',
  },
  {
    pageNumber: '50',
  },
  {
    pageNumber: '61',
  },
  {
    pageNumber: '76',
  },
];

const IS_OPEN_LOCATION = '/bookmarks';
const IS_CLOSE_LOCATION = '/';

const buttonAddClassNames = classNames([styles.button, styles.isAdd]);

export const Bookmarks = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const isOpen = useSelector(mainSelectors.bookmarksIsOpen);

  const [prevLocationPath, setPrevLocationPath] = useState(IS_CLOSE_LOCATION);

  const closeButtonClickHandler = () => {
    dispatch(setBookmarkIsOpen(false));
  };

  useEffect(() => {
    if (!prevLocationPath.includes(IS_OPEN_LOCATION) && !pathname.includes(IS_OPEN_LOCATION)) {
      return;
    }

    if (prevLocationPath !== pathname) {
      if (pathname === IS_CLOSE_LOCATION) {
        dispatch(setBookmarkIsOpen(false));
      }

      setPrevLocationPath(pathname);
    }
  }, [pathname]);

  return (
    <Overflow isOpen={isOpen}>
      <Header label={'Закладки'} />

      <div className={styles.itemsWrapper}>
        {items.map((itemCur, index) => <Item key={index} {...itemCur} />)}
      </div>

      <div className={styles.footer}>
        <button className={buttonAddClassNames}>
          Добавить
        </button>

        <button className={styles.button} onClick={closeButtonClickHandler}>
          Закрыть
        </button>
      </div>
    </Overflow>
  );
};
