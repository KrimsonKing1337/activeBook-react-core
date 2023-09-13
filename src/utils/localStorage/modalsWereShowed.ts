import { encryptStorage } from './encryptStorage';

const key = 'modalsWereShowed';

export enum Flags {
  usingCamera = 'usingCamera',
  inverseColor = 'inverseColor',
}

function get(name: Flags) {
  const valuesAsJson = localStorage.getItem(key);

  if (!valuesAsJson) {
    return false;
  }

  const modals = JSON.parse(valuesAsJson);

  return modals[name];
}

function getAll() {
  return encryptStorage.getItem(key);
}

function set(name: Flags, value: boolean) {
  const values = localStorage.getItem(key);

  let newValues = {
    [Flags.usingCamera]: false,
    [Flags.inverseColor]: false,
  };

  if (values) {
    newValues = JSON.parse(values);
  }

  newValues[name] = value;

  const newValuesAsJson = JSON.stringify(newValues);

  localStorage.setItem(key, newValuesAsJson);
}

function setAll(values: Record<Flags, boolean>) {
  encryptStorage.setItem(key, values);
}

export const modalsWereShowed = {
  set,
  setAll,
  get,
  getAll,
  key,
};
