import { encryptStorage } from './encryptStorage';

const key = 'seenAuthorComments';

function get() {
  return encryptStorage.getItem(key);
}

function add() {
  const seenAuthorCommentsFromLocalStorage = get() || 0;

  const newSeenAuthorComments = seenAuthorCommentsFromLocalStorage + 1;

  set(newSeenAuthorComments);
}

function set(values: Record<number, boolean>) {
  encryptStorage.setItem(key, values);
}

export const seenAuthorComments = {
  add,
  set,
  get,
  key,
};
