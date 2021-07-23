import { MenuActiveState } from './initialState';

export const actionsTypes = {
  SET_MENU_ACTIVE_STATE: 'SET_MENU_ACTIVE_STATE',
  SET_BOOKMARKS_IS_OPEN: 'SET_BOOKMARKS_IS_OPEN',
  SET_IS_LOADING: 'SET_IS_LOADING',
  SET_MODAL_IS_OPEN: 'SET_MODAL_IS_OPEN',
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

export type SetIsLoadingAction = {
  type: typeof actionsTypes.SET_IS_LOADING;
  payload: boolean;
};

export function setIsLoading(value: SetIsLoadingAction['payload']): SetIsLoadingAction {
  return {
    type: actionsTypes.SET_IS_LOADING,
    payload: value,
  };
}

export type SetModalIsOpenAction = {
  type: typeof actionsTypes.SET_MODAL_IS_OPEN,
  payload: boolean;
};

export function setModalIsOpen(value: SetModalIsOpenAction['payload']): SetModalIsOpenAction {
  return {
    type: actionsTypes.SET_MODAL_IS_OPEN,
    payload: value,
  };
}

export type MainActionsTypes = SetMenuIsOpenAction
  | SetBookmarksIsOpenAction
  | SetIsLoadingAction
  | SetModalIsOpenAction;
