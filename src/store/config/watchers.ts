import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, select, takeLatest } from 'redux-saga/effects';

import { setThemeCss } from 'utils/styles/setThemeCss';

import { State } from './@types';
import { actions } from './slice';
import { selectors } from './selectors';

function* saveInLocalStorage() {
  const config: State = yield select(selectors.all);

  // themes в localstorage не сохраняем
  const configToSave = {
    ...config,
    themes: undefined,
  };

  delete configToSave.themes;


  const configAsJson = JSON.stringify(configToSave);

  localStorage.setItem('config', configAsJson);
}

export function* watchSetAll(action: PayloadAction<State>) {
  const { payload } = action;

  const {
    theme,
    fontSize,
    flashlight,
    vibration,
    lineHeight,
    authorComments,
  } = payload;

  yield put(actions.setAuthorComments(authorComments));
  yield put(actions.setFontSize(fontSize));
  yield put(actions.setFlashlight(flashlight));
  yield put(actions.setVibration(vibration));
  yield put(actions.setLineHeight(lineHeight));

  const themes: State['themes'] = yield select(selectors.themes);

  yield call(() => setThemeCss(theme, themes));
}

export function* watchSetTheme(action: PayloadAction<State['theme']>) {
  const { payload } = action;

  const themes: State['themes'] = yield select(selectors.themes);

  yield call(() => setThemeCss(payload, themes));

  yield call(saveInLocalStorage);
}

export function* watchSetEtc() {
  yield call(saveInLocalStorage);
}

export function* watchActions() {
  yield takeLatest(actions.setAll, watchSetAll);
  yield takeLatest(actions.setTheme, watchSetTheme);
  yield takeLatest(actions.setAuthorComments, watchSetEtc);
  yield takeLatest(actions.setFlashlight, watchSetEtc);
  yield takeLatest(actions.setFontSize, watchSetEtc);
  yield takeLatest(actions.setLineHeight, watchSetEtc);
  yield takeLatest(actions.setVibration, watchSetEtc);
  yield takeLatest(actions.setWelcomeTour, watchSetEtc);
}
