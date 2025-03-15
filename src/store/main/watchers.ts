import type { PayloadAction } from '@reduxjs/toolkit';
import { push } from 'redux-first-history';
import { call, put, select, takeLatest } from 'redux-saga/effects';

import { Location } from 'history';

import type { State } from './@types';

import { actions } from './slice';
import { selectors } from './selectors';

import { waitForHowlerLoad, waitForMediaLoad } from './utils';

export function* watchSetMenuActiveState(action: PayloadAction<State['menuActiveState']>) {
  const { payload } = action;

  const location: Location = yield select(selectors.location);

  if (!location.hash && payload === null) {
    return;
  }

  let path = window.location.pathname;

  if (payload === 'tableOfContents') {
    path = '#table-of-contents';
  } else if (payload === 'menu') {
    path = '#menu';
  } else if (payload === 'achievementsProgress') {
    path = '#achievements-progress';
  }

  yield put(push(path as string));
}

export function* watchSetRoute(action: PayloadAction<State['route']>) {
  const { payload } = action;

  yield put(push(payload));
}

export function* watchSetPage(action: PayloadAction<State['page']>) {
  const { payload } = action;

  const path = `/page-${payload}`;

  yield put(actions.setIsLoading(true));

  yield put(push(path));

  yield call(() => {
    return new Promise<void>(resolve => {
      setTimeout(async () => {
        await waitForHowlerLoad();
        await waitForMediaLoad();

        resolve();
      }, 0);
    });
  });

  yield put(actions.setIsLoading(false));
}

export function* watchPrevPage() {
  const page: State['page'] = yield select(selectors.page);

  if (page === 0) {
    return;
  }

  const newPageNumber = page - 1;

  if (newPageNumber < 1) {
    return;
  }

  yield put(actions.setPage(newPageNumber));
}

export function* watchNextPage() {
  const page: State['page'] = yield select(selectors.page);
  const pages: State['pages'] = yield select(selectors.pages);

  const newPageNumber = page + 1;

  if (newPageNumber > pages) {
    return;
  }

  yield put(actions.setPage(newPageNumber));
}

export function* watchActions() {
  yield takeLatest(actions.setMenuActiveState, watchSetMenuActiveState);
  yield takeLatest(actions.setRoute, watchSetRoute);
  yield takeLatest(actions.setPage, watchSetPage);
  yield takeLatest(actions.prevPage, watchPrevPage);
  yield takeLatest(actions.nextPage, watchNextPage);
}
