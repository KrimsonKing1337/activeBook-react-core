import { useEffect } from 'react';

import classNames from 'classnames';


import { useDispatch, useSelector } from 'store';
import { mainSelectors } from 'store/main';
import { bookmarksActions, bookmarksSelectors } from 'store/bookmarks';

import { Overflow } from 'components/Overflow';
import { Header } from 'components/Header';

import { Item } from './Item';
import { useBookmarks } from './hooks';
import * as styles from './Bookmarks.scss';

const buttonAddClassNames = classNames([styles.button, styles.isAdd]);

export const Bookmarks = () => {
  const dispatch = useDispatch();

  const isOpen = useSelector(bookmarksSelectors.isOpen);
  const page = useSelector(mainSelectors.page);

  const { bookmarks, setBookmarks } = useBookmarks();

  // закрываю менюшки, если пользователь сделал navigator.goBack
  useEffect(() => {
    const listener = () => {
      dispatch(bookmarksActions.setIsOpen(false));

      window.history.pushState(null, '', window.location.href);
    };

    window.addEventListener('popstate', listener);

    return () => {
      window.removeEventListener('popstate', listener);
    };
  }, []);

  const closeButtonClickHandler = () => {
    dispatch(bookmarksActions.setIsOpen(false));
  };

  const addButtonClickHandler = () => {
    setBookmarks([...bookmarks, page]);
  };

  const deleteHandler = (bookmark: number) => {
    const newBookmarks = [...bookmarks];

    const index = newBookmarks.indexOf(bookmark);

    newBookmarks.splice(index, 1);

    setBookmarks(newBookmarks);
  };

  return (
    <Overflow id="bookmarks" isOpen={isOpen}>
      <Header label="Закладки" />

      <div className={styles.itemsWrapper}>
        {bookmarks.map((itemCur, index) => {
          return (
            <Item key={index} pageNumber={itemCur} onDelete={deleteHandler} />
          );
        })}
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
