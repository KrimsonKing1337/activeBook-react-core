import type { PayloadAction } from '@reduxjs/toolkit';
import { put, select, takeLatest } from 'redux-saga/effects';

import type { BackgroundEffect } from 'hooks/effects/background/@types';
import type { BackgroundEffects } from 'store/effects/background/@types';

import { actions } from './slice';
import { selectors } from './selectors';

export function* watchSetEffect(action: PayloadAction<BackgroundEffect>) {
  const { payload } = action;

  if (!payload) {
    return;
  }

  const { id } = payload;

  const effects: BackgroundEffects = yield select(selectors.effects);

  const newValue = {
    ...effects,
    [id as string]: payload,
  };

  yield put(actions.setEffects(newValue));
}

export function* watchDeleteEffect(action: PayloadAction<string>) {
  const { payload } = action;

  const effects: BackgroundEffects = yield select(selectors.effects);

  const newValue = {
    ...effects,
  };

  delete newValue[payload];

  yield put(actions.setEffects(newValue));
}

export function* watchActions() {
  yield takeLatest(actions.setEffect, watchSetEffect);
  yield takeLatest(actions.deleteEffect, watchDeleteEffect);
}
