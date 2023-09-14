import { useDispatch, useSelector } from 'store';
import { mainActions, mainSelectors } from 'store/main';

import { Header } from 'components/Header';
import { Overflow } from 'components/Overflow';

import { Item } from './Item';
import { items } from './utils';

import styles from './TableOfContents.scss';

export const TableOfContents = () => {
  const dispatch = useDispatch();

  const menuActiveState = useSelector(mainSelectors.menuActiveState);

  const isOpen = menuActiveState === 'tableOfContents';

  const closeButtonClickHandler = () => {
    dispatch(mainActions.setMenuActiveState(null));
  };

  return (
    <Overflow isOpen={isOpen}>
      <Header label="Оглавление" />

      <div className={styles.itemsWrapper}>
        {items.map((itemCur, index) => <Item key={index} {...itemCur} />)}
      </div>

      <button className={styles.button} onClick={closeButtonClickHandler}>
        Закрыть
      </button>
    </Overflow>
  );
};
