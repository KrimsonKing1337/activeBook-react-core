import { push } from 'connected-react-router';
import { put, takeLatest } from 'redux-saga/effects';

import { actionsTypes, SetBookmarksIsOpenAction, SetMenuIsOpenAction } from './actions';

export function* watchSetBookmarksIsOpen(action: SetBookmarksIsOpenAction) {
  const { payload } = action;

  const path = payload ? '/bookmarks' : '/';

  yield put(push(path));
}

export function* watchSetMenuActiveState(action: SetMenuIsOpenAction) {
  const { payload } = action;

  let path = '/';

  if (payload === 'tableOfContents') {
    path = 'table-of-contents';
  } else if (payload === 'menu') {
    path = 'menu';
  }

  yield put(push(path));
}

export function* watchMainActions() {
  yield takeLatest(actionsTypes.SET_BOOKMARKS_IS_OPEN, watchSetBookmarksIsOpen);
  yield takeLatest(actionsTypes.SET_MENU_ACTIVE_STATE, watchSetMenuActiveState);
}
