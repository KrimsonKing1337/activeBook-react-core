import { get as localStorageGet, set as localStorageSet } from 'utils/localStorage/localStorage';

const key = 'modalsWereShowed';

export enum Flags {
  usingCamera = 'usingCamera',
  inverseColor = 'inverseColor', // todo: сделать это непосредственно в книге
}

function get(id: string, name: Flags) {
  const modals = localStorageGet(id, key);

  if (!modals) {
    return;
  }

  return modals[name];
}

function set(id: string, name: Flags, value: boolean) {
  const values = localStorageGet(id, key);

  let newValues = {
    [Flags.usingCamera]: false,
    [Flags.inverseColor]: false,
  };

  if (values) {
    newValues = values;
  }

  newValues[name] = value;

  localStorageSet(id, { [key]: newValues });
}

export const modalsWereShowed = {
  set,
  get,
  key,
};
