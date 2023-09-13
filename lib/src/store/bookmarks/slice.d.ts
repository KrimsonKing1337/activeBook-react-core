import { PayloadAction } from '@reduxjs/toolkit';
import { State } from './@types';
export declare const actions: import("@reduxjs/toolkit").CaseReducerActions<{
    setIsOpen(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['isOpen']>): void;
    setBookmarks(state: import("immer/dist/internal").WritableDraft<State>, action: PayloadAction<State['bookmarks']>): void;
}, "@bookmarks">, reducer: import("redux").Reducer<State>;
