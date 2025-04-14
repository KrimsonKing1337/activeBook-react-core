import { call, select, takeLatest } from 'redux-saga/effects';

import { State } from './@types';
import { actions } from './slice';
import { selectors } from './selectors';

function* saveInLocalStorage() {
  const bookmarks: State = yield select(selectors.bookmarks);

  const bookmarksAsJson = JSON.stringify(bookmarks);

  localStorage.setItem('bookmarks', bookmarksAsJson);
}

export function* watchSetIsOpen() {
  yield call(() => {
    window.history.pushState(null, '', window.location.href);
  });
}

export function* watchSetBookmarks() {
  yield call(saveInLocalStorage);
}

export function* watchActions() {
  yield takeLatest(actions.setIsOpen, watchSetIsOpen);
  yield takeLatest(actions.setBookmarks, watchSetBookmarks);
}
