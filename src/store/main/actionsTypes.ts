import { MenuActiveState } from './initialState';

export const actionsTypes = {
  SET_MENU_ACTIVE_STATE: 'SET_MENU_ACTIVE_STATE',
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

export type MainActionsTypes = SetMenuIsOpenAction;
