import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeLatest, select } from 'redux-saga/effects';

import { Segment, Segments } from './@types';

import { actions } from './slice';
import { selectors } from './selectors';

export function* watchSetSegment(action: PayloadAction<Segment>) {
  const { payload } = action;

  if (!payload) {
    return;
  }

  const { id, isActive } = payload;

  const segments: Segments = yield select(selectors.segments);

  const newValue = {
    ...segments,
  };

  // только один сегмент может быть активным за единицу времени
  if (isActive) {
    Object.keys(newValue).forEach((keyCur) => {
      const value = newValue[keyCur];

      if (value) {
        newValue[keyCur] = false;
      }
    });
  }

  newValue[id] = isActive;

  yield put(actions.setSegments(newValue));
}

export function* watchRemoveSegment(action: PayloadAction<string>) {
  const { payload } = action;

  if (!payload) {
    return;
  }

  const segments: Segments = yield select(selectors.segments);

  const newValue = {
    ...segments,
  };

  delete newValue[payload];

  yield put(actions.setSegments(newValue));
}

export function* watchIncrementSegmentsCount() {
  const count: number = yield select(selectors.count);

  yield put(actions.setSegmentsCount(count + 1));
}

export function* watchActions() {
  yield takeLatest(actions.setSegment, watchSetSegment);
  yield takeLatest(actions.removeSegment, watchRemoveSegment);
  yield takeLatest(actions.incrementSegmentsCount, watchIncrementSegmentsCount);
}
