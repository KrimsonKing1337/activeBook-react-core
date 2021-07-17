import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { mainSelectors } from 'store/main/reducer';
import { setMenuActiveState } from 'store/main/actionsTypes';

import { Header } from 'components/Header';
import { Overflow } from 'components/Overflow';

import { Item, ItemPropsType } from './Item';

import styles from './TableOfContents.scss';

const items: ItemPropsType[] = [
  {
    title: 'Глава 1',
    subtitle: 'Важный день',
    pageNumber: '1',
  },
  {
    title: 'Глава 2',
    subtitle: 'Обратный отсчёт',
    pageNumber: '5',
  },
  {
    title: 'Глава 3',
    subtitle: 'Дурной сон',
    pageNumber: '10',
  },
  {
    title: 'Глава 4',
    subtitle: 'Бесконечный поток информации',
    pageNumber: '17',
  },
  {
    title: 'Глава 5',
    subtitle: 'Пробиваясь сквозь горизонт',
    pageNumber: '20',
  },
  {
    title: 'Глава 6',
    subtitle: 'По ту сторону изгороди',
    pageNumber: '29',
  },
  {
    title: 'Глава 7',
    subtitle: 'Новый окрас',
    pageNumber: '34',
  },
  {
    title: 'Глава 8',
    subtitle: 'Она всё-таки смотрит',
    pageNumber: '36',
  },
  {
    title: 'Глава 9',
    subtitle: 'Кусочек родной планеты',
    pageNumber: '41',
  },
  {
    title: 'Глава 10',
    subtitle: 'Траур и смутные сомнения',
    pageNumber: '50',
  },
  {
    title: 'Глава 11',
    subtitle: 'В западне',
    pageNumber: '61',
  },
  {
    title: 'Глава 12',
    subtitle: 'Старый друг',
    pageNumber: '76',
  },
];

export const TableOfContents = () => {
  const dispatch = useDispatch();

  const menuActiveState = useSelector(mainSelectors.menuActiveState);
  const isOpen = menuActiveState === 'tableOfContents';

  const closeButtonClickHandler = () => {
    dispatch(setMenuActiveState(null));
  }

  return (
    <Overflow isOpen={isOpen}>
      <Header label={'Оглавление'} />

      <div className={styles.itemsWrapper}>
        {items.map((itemCur, index) => <Item key={index} {...itemCur} />)}
      </div>

      <button className={styles.button} onClick={closeButtonClickHandler}>
        Закрыть
      </button>
    </Overflow>
  );
};
