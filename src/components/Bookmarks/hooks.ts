import { useEffect } from 'react';

import { useDispatch, useSelector } from 'store';
import { bookmarksActions, bookmarksSelectors } from 'store/bookmarks';

import { mainSelectors } from 'store/main';

import { get as localStorageGet } from 'utils/localStorage/localStorage';

export function useBookmarks() {
  const dispatch = useDispatch();

  const id = useSelector(mainSelectors.id);
  const bookmarks = useSelector(bookmarksSelectors.bookmarks);

  const setBookmarks = (bookmarks: number[]) => {
    dispatch(bookmarksActions.setBookmarks(bookmarks));
  };

  useEffect(() => {
    if (bookmarks.length > 0) {
      return;
    }

    const bookmarksAsArray = localStorageGet(id, 'bookmarks');

    if (bookmarksAsArray) {
      dispatch(bookmarksActions.setBookmarks(bookmarksAsArray));
    }
  }, []);

  return { bookmarks, setBookmarks };
}
