import type { RootState } from 'store';

export const selectors = {
  segments: (state: RootState) => state.segments.segments,
  count: (state: RootState) => state.segments.count,

  activeId: (state: RootState) => {
    const { segments } = state.segments;

    const keys = Object.keys(segments);

    for (let i = 0; i < keys.length; i++) {
      const id = keys[i];

      if (segments[id]) {
        return id;
      }
    }
  },
};
