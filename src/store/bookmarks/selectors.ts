import { RootState } from 'store';

export const selectors = {
  isOpen: (state: RootState) => state.bookmarks.isOpen,
  bookmarks: (state: RootState) => state.bookmarks.bookmarks,
};
