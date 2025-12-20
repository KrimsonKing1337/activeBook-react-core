import { get as localStorageGet, set as localStorageSet } from 'utils/localStorage/localStorage';

import { cryptr } from 'utils/cryptr';

const key = 'seenPages';

function get(id: string) {
  const seenPagesEncrypt = localStorageGet(id, key);
  const seenPagesEncryptAsJson = JSON.stringify(seenPagesEncrypt);
  const seenPagesDecryptAsJson = cryptr.decrypt(seenPagesEncryptAsJson);

  return JSON.parse(seenPagesDecryptAsJson);
}

function set(id: string, value: number) {
  const seenPagesDecrypt = get(id);

  const newSeenPages = {
    ...seenPagesDecrypt,
    [value]: true,
  };

  const newSeenPagesAsJson = JSON.stringify(newSeenPages);
  const newSeenPagesEncrypt = cryptr.encrypt(newSeenPagesAsJson);

  localStorageSet(id, { [key]: newSeenPagesEncrypt });
}

export const seenPages = {
  set,
  get,
  key,
};
