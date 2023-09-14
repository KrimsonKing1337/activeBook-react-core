import { useDispatch, useSelector } from 'store';
import classNames from 'classnames';
import { mainSelectors } from 'store/main';
import { bookmarksActions, bookmarksSelectors } from 'store/bookmarks';

import { Header } from 'components/Header';
import { Overflow } from 'components/Overflow';

import { Item } from './Item';
import { useBookmarks } from './hooks';
import { playAchievement } from './utils';

import styles from './Bookmarks.scss';

const buttonAddClassNames = classNames([styles.button, styles.isAdd]);

export const Bookmarks = () => {
  const dispatch = useDispatch();

  const isOpen = useSelector(bookmarksSelectors.isOpen);
  const page = useSelector(mainSelectors.page);

  const { bookmarks, setBookmarks } = useBookmarks();

  const closeButtonClickHandler = () => {
    dispatch(bookmarksActions.setIsOpen(false));
  };

  const addButtonClickHandler = () => {
    setBookmarks([...bookmarks, page]);

    playAchievement();
  };

  const deleteHandler = (bookmark: number) => {
    const newBookmarks = [...bookmarks];

    const index = newBookmarks.indexOf(bookmark);

    newBookmarks.splice(index, 1);

    setBookmarks(newBookmarks);
  };

  return (
    <Overflow isOpen={isOpen}>
      <Header label="Закладки" />

      <div className={styles.itemsWrapper}>
        {bookmarks.map((itemCur, index) => <Item key={index} pageNumber={itemCur} onDelete={deleteHandler} />)}
      </div>

      <div className={styles.footer}>
        <button className={buttonAddClassNames} onClick={addButtonClickHandler}>
          Добавить
        </button>

        <button className={styles.button} onClick={closeButtonClickHandler}>
          Закрыть
        </button>
      </div>
    </Overflow>
  );
};
