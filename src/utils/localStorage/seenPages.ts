import { get as localStorageGet, set as localStorageSet } from 'utils/localStorage/localStorage';

const key = 'seenPages';

function get(id: string) {
  return localStorageGet(id, key);
}

function set(id: string, value: number) {
  const seenPages = get(id);

  const newSeenPages = {
    ...seenPages,
    [value]: true,
  };

  localStorageSet(id, { [key]: newSeenPages });
}

export const seenPages = {
  set,
  get,
  key,
};
