import { PayloadAction } from '@reduxjs/toolkit';

import { takeLatest } from 'redux-saga/effects';

import { State } from './@types';

import { setCssVariable } from 'utils/styles/setCssVariable';

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
