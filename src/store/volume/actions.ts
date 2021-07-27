import { VolumeState } from './initialState';

export const actionsTypes = {
  SET_ALL: 'SET_ALL',
  SET_COMMON: 'SET_COMMON',
  SET_BG: 'SET_BG',
  SET_OTHER: 'SET_OTHER',
} as const;

export type SetAll = {
  type: typeof actionsTypes.SET_ALL;
  payload: VolumeState;
};

export function setAll(value: SetAll['payload']): SetAll {
  return {
    type: actionsTypes.SET_ALL,
    payload: value,
  };
}

export type SetCommon = {
  type: typeof actionsTypes.SET_COMMON;
  payload: VolumeState['common'];
};

export function setCommon(value: SetCommon['payload']): SetCommon {
  return {
    type: actionsTypes.SET_COMMON,
    payload: value,
  };
}

export type SetBg = {
  type: typeof actionsTypes.SET_BG;
  payload: VolumeState['bg'];
};

export function setBg(value: SetBg['payload']): SetBg {
  return {
    type: actionsTypes.SET_BG,
    payload: value,
  };
}

export type SetOther = {
  type: typeof actionsTypes.SET_OTHER;
  payload: VolumeState['other'];
};

export function setOther(value: SetOther['payload']): SetOther {
  return {
    type: actionsTypes.SET_OTHER,
    payload: value,
  };
}

export type VolumeActions = SetAll | SetCommon | SetBg | SetOther;
