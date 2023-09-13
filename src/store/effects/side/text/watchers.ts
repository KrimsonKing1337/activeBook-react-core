import { PayloadAction } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';

import { setCssVariable } from 'utils/styles/setCssVariable';

import { State } from './@types';

import { actions } from './slice';

function* watchSetSpeed(action: PayloadAction<State['speed']>) {
  const { payload } = action;

  const animationSpeed = `${payload}ms`;

  setCssVariable('--side-scroll-text-animation-speed', animationSpeed);

  yield true;
}

export function* watchActions() {
  yield takeLatest(actions.setSpeed, watchSetSpeed);
}
