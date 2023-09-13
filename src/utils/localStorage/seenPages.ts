import { encryptStorage } from './encryptStorage';

const key = 'seenPages';

function get() {
  return encryptStorage.getItem(key);
}

function set(value: number) {
  const seenPagesFromLocalStorage = get();

  const newSeenPages = {
    ...seenPagesFromLocalStorage,
    [value]: true,
  };

  setAll(newSeenPages);
}

function setAll(values: Record<number, boolean>) {
  encryptStorage.setItem(key, values);
}

export const seenPages = {
  set,
  setAll,
  get,
  key,
};
