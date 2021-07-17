import { MenuActiveState } from './initialState';

export const actionsTypes = {
  SET_MENU_ACTIVE_STATE: 'SET_MENU_ACTIVE_STATE',
  SET_BOOKMARKS_IS_OPEN: 'SET_BOOKMARKS_IS_OPEN',
} as const;

export type SetMenuIsOpenAction = {
  type: typeof actionsTypes.SET_MENU_ACTIVE_STATE;
  payload: MenuActiveState;
};

export function setMenuActiveState(value: SetMenuIsOpenAction['payload']): SetMenuIsOpenAction {
  return {
    type: actionsTypes.SET_MENU_ACTIVE_STATE,
    payload: value,
  };
}

export type SetBookmarksIsOpenAction = {
  type: typeof actionsTypes.SET_BOOKMARKS_IS_OPEN;
  payload: boolean;
};

export function setBookmarkIsOpen(value: SetBookmarksIsOpenAction['payload']): SetBookmarksIsOpenAction {
  return {
    type: actionsTypes.SET_BOOKMARKS_IS_OPEN,
    payload: value,
  };
}

export type MainActionsTypes = SetMenuIsOpenAction | SetBookmarksIsOpenAction;
