import { RootState } from 'store';

import { IncrementActionsTypes } from './actionsTypes';
import { IncrementState, initialState } from './initialState';

export function incrementReducer(state = initialState, action: IncrementActionsTypes): IncrementState {
  switch (action.type) {
  case 'INCREMENT':
    return {
      ...state,
      counter: state.counter + 1,
    };
  default:
    return state;
  }
}

export const incrementSelectors = {
  counter: (state: RootState) => state.increment.counter,
};
