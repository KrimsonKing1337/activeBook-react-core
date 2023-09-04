import { RootState } from '../index';

export const selectors = {
  count: (state: RootState) => state.counter.count,
};
