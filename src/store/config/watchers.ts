import { call, takeLatest } from 'redux-saga/effects';

import { setThemeCss } from 'utils/setThemeCss';

import { actionsTypes, SetAll, SetTheme } from './actions';

export function* watchConfigSetAll(action: SetAll) {
  const { payload } = action;

  yield call(() => setThemeCss(payload.theme));
}

export function* watchConfigSetTheme(action: SetTheme) {
  const { payload } = action;

  yield call(() => setThemeCss(payload));
}

export function* watchConfigActions() {
  yield takeLatest(actionsTypes.SET_ALL_CONFIG, watchConfigSetAll);
  yield takeLatest(actionsTypes.SET_THEME, watchConfigSetTheme);
}
