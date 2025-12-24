import { useDispatch, useSelector } from 'store';
import { mainActions, mainSelectors } from 'store/main';

import { Overflow, MenuHeader } from 'components';

import { Item } from './Item';

import * as styles from './TableOfContents.scss';

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
      <MenuHeader label="Оглавление" />

      <div className={styles.itemsWrapper}>
        {tableOfContents.map((itemCur) => {
          const { title, pageNumber } = itemCur;

          const uuid = `${pageNumber}___${title}`;

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
