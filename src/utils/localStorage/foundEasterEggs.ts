import { encryptStorage } from './encryptStorage';

const key = 'foundEasterEggs';

function get() {
  return encryptStorage.getItem(key);
}

function set(value: string) {
  const foundEasterEggsFromLocalStorage = get();

  const newEasterEggs = {
    ...foundEasterEggsFromLocalStorage,
    [value]: true,
  };

  setAll(newEasterEggs);
}

function setAll(values: Record<string, boolean>) {
  encryptStorage.setItem(key, values);
}

export const foundEasterEggs = {
  set,
  setAll,
  get,
  key,
};
