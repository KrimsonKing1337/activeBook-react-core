import { RootState } from 'store';

export const selectors = {
  all: (state: RootState) => state.config,
  theme: (state: RootState) => state.config.theme,
  welcomeTour: (state: RootState) => state.config.welcomeTour,
  vibration: (state: RootState) => state.config.vibration,
  flashlight: (state: RootState) => state.config.flashlight,
  authorComments: (state: RootState) => state.config.authorComments,
  fontSize: (state: RootState) => state.config.fontSize,
  lineHeight: (state: RootState) => state.config.lineHeight,
};
