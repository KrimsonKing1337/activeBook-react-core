import { MenuActiveState } from './initialState';

export const actionsTypes = {
  SET_MENU_ACTIVE_STATE: 'SET_MENU_ACTIVE_STATE',
  SET_BOOKMARKS_IS_OPEN: 'SET_BOOKMARKS_IS_OPEN',
  SET_IS_LOADING: 'SET_IS_LOADING',
  SET_IS_VIBRATION_AVAILABLE: 'SET_IS_VIBRATION_AVAILABLE',
  SET_IS_FLASHLIGHT_AVAILABLE: 'SET_IS_FLASHLIGHT_AVAILABLE',
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

export type SetIsVibrationAvailableAction = {
  type: typeof actionsTypes.SET_IS_VIBRATION_AVAILABLE;
  payload: boolean;
};

export function setIsVibrationAvailable(value: SetIsVibrationAvailableAction['payload']): SetIsVibrationAvailableAction {
  return {
    type: actionsTypes.SET_IS_VIBRATION_AVAILABLE,
    payload: value,
  };
}

export type SetIsFlashlightAvailableAction = {
  type: typeof actionsTypes.SET_IS_FLASHLIGHT_AVAILABLE;
  payload: boolean;
};

export function setIsFlashlightAvailable(value: SetIsFlashlightAvailableAction['payload']): SetIsFlashlightAvailableAction {
  return {
    type: actionsTypes.SET_IS_FLASHLIGHT_AVAILABLE,
    payload: value,
  };
}

export type MainActions = SetMenuIsOpenAction
  | SetBookmarksIsOpenAction
  | SetIsLoadingAction
  | SetIsVibrationAvailableAction
  | SetIsFlashlightAvailableAction;
