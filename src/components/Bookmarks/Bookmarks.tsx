import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classNames from 'classnames';

import { mainSelectors } from 'store/main/reducer';
import { setBookmarkIsOpen } from 'store/main/actionsTypes';

import { Header } from 'components/Header';
import { Overflow } from 'components/Overflow';

import { Item, ItemPropsType } from './Item';

import styles from './Bookmarks.scss';

const items: ItemPropsType[] = [
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

const buttonAddClassNames = classNames([styles.button, styles.isAdd]);

export const Bookmarks = () => {
  const dispatch = useDispatch();

  const isOpen = useSelector(mainSelectors.bookmarksIsOpen);

  const closeButtonClickHandler = () => {
    dispatch(setBookmarkIsOpen(false));
  };

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
