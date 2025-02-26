import type { RootState } from 'store';

export const selectors = {
  segments: (state: RootState) => state.segments.segments,
  count: (state: RootState) => state.segments.count,
};
