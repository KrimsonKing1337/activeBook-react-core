import { PayloadAction } from '@reduxjs/toolkit';
import { push } from 'redux-first-history';
import { Location } from 'history';
import { call, put, select, takeLatest } from 'redux-saga/effects';

import { mainSelectors } from 'store/main';

import { State } from './@types';

import { actions } from './slice';
import { selectors } from './selectors';

function* saveInLocalStorage() {
  const bookmarks: State = yield select(selectors.bookmarks);

  const bookmarksAsJson = JSON.stringify(bookmarks);

  localStorage.setItem('bookmarks', bookmarksAsJson);
}

export function* watchSetIsOpen(action: PayloadAction<boolean>) {
  const { payload } = action;

  const location: Location = yield select(mainSelectors.location);

  if (!location.hash && !payload) {
    return;
  }

  const path = payload ? '#bookmarks' : window.location.pathname;

  yield put(push(path));
}

export function* watchSetBookmarks() {
  yield call(saveInLocalStorage);
}

export function* watchActions() {
  yield takeLatest(actions.setIsOpen, watchSetIsOpen);
  yield takeLatest(actions.setBookmarks, watchSetBookmarks);
}
