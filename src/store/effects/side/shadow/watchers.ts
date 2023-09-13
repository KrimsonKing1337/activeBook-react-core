import { PayloadAction } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';

import { setCssVariable } from 'utils/styles/setCssVariable';

import { State } from './@types';

import { actions } from './slice';

function* watchSetColor(action: PayloadAction<State['color']>) {
  const { payload } = action;

  setCssVariable('--text-shadow-color', payload);

  yield true;
}

function* watchSetSpeed(action: PayloadAction<State['speed']>) {
  const { payload } = action;

  const animationSpeed = `${payload}ms`;

  setCssVariable('--text-shadow-animation-speed', animationSpeed);

  yield true;
}

export function* watchActions() {
  yield takeLatest(actions.setColor, watchSetColor);
  yield takeLatest(actions.setSpeed, watchSetSpeed);
}
