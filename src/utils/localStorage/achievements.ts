import { Flags, getInitValues } from 'utils/effects/achievements/utils';

import { encryptStorage } from './encryptStorage';

const key = 'achievements';

function get(name: Flags) {
  const values = encryptStorage.getItem(key);

  if (!values) {
    return false;
  }

  return values[name];
}

function getAll() {
  return encryptStorage.getItem(key);
}

function set(name: Flags, value: boolean) {
  const values = encryptStorage.getItem(key);

  values[name] = value;

  encryptStorage.setItem(key, values);
}

function setAll(values: Record<Flags, boolean>) {
  encryptStorage.setItem(key, values);
}

function init() {
  const values = getInitValues();

  encryptStorage.setItem(key, values);
}

export const achievements = {
  set,
  setAll,
  get,
  getAll,
  key,
  init,
};
