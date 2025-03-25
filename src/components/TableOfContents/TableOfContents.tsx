import { nanoid } from 'nanoid';

import { useDispatch, useSelector } from 'store';
import { mainActions, mainSelectors } from 'store/main';

import { Overflow, Header } from 'components';

import { Item } from './Item';

import styles from './TableOfContents.scss';

export const TableOfContents = () => {
  const dispatch = useDispatch();

  const menuActiveState = useSelector(mainSelectors.menuActiveState);
  const tableOfContents = useSelector(mainSelectors.tableOfContents);

  const isOpen = menuActiveState === 'tableOfContents';

  const closeButtonClickHandler = () => {
    dispatch(mainActions.setMenuActiveState(null));
  };

  return (
    <Overflow id="table-of-contents" isOpen={isOpen}>
      <Header label="Оглавление" />

      <div className={styles.itemsWrapper}>
        {tableOfContents.map((itemCur) => {
          const uuid = nanoid();

          return (
            <Item key={uuid} {...itemCur} />
          );
        })}
      </div>

      <button className={styles.button} onClick={closeButtonClickHandler}>
        Закрыть
      </button>
    </Overflow>
  );
};
