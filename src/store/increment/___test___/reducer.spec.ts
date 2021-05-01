import { actionsTypes, IncrementAction } from '../actionsTypes';
import { initialState } from '../initialState';
import { incrementReducer } from '../reducer';

describe('reducer', () => {
  it('INCREMENT', () => {
    const action = {
      type: actionsTypes.INCREMENT,
    } as IncrementAction;

    expect(incrementReducer(initialState, action)).toEqual({
      ...initialState,
      counter: 1,
    });
  });
});
