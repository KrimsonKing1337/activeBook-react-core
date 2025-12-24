import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, select, takeLatest } from 'redux-saga/effects';

import { mainSelectors } from 'store/main';

import { setThemeCss } from 'utils/styles/setThemeCss';
import { set as localStorageSet } from 'utils/localStorage/localStorage';

import { setCssVariable } from 'utils/styles/setCssVariable';

import { State } from './@types';
import { actions } from './slice';
import { selectors } from './selectors';

function* saveInLocalStorage() {
  const id: string = yield select(mainSelectors.id);
  const config: State = yield select(selectors.all);

  // themes в localstorage не сохраняем
  const configToSave = {
    ...config,
    themes: undefined,
  };

  delete configToSave.themes;

  localStorageSet(id, { config: configToSave });
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

export function* watchSetFont(action: PayloadAction<State['fontSize']>) {
  yield call(() => {
    setCssVariable('--font-scale', action.payload.toString());
  });

  yield call(saveInLocalStorage);
}

export function* watchSetEtc() {
  yield call(saveInLocalStorage);
}

export function* watchActions() {
  yield takeLatest(actions.setAll, watchSetAll);
  yield takeLatest(actions.setTheme, watchSetTheme);
  yield takeLatest(actions.setFontSize, watchSetFont);
  yield takeLatest(actions.setAuthorComments, watchSetEtc);
  yield takeLatest(actions.setFlashlight, watchSetEtc);
  yield takeLatest(actions.setLineHeight, watchSetEtc);
  yield takeLatest(actions.setVibration, watchSetEtc);
  yield takeLatest(actions.setWelcomeTour, watchSetEtc);
}
