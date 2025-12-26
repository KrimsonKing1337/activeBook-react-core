import { get as _get } from 'lodash-es';

export function get(id: string, path: string) {
  const dataByIdJson = localStorage.getItem(id) || '{}';
  const dataById = JSON.parse(dataByIdJson);

  if (!path) {
    return dataById;
  }

  return _get(dataById, path);
}

export function set(id: string, value: Record<string, unknown>) {
  const dataById = get(id, '');

  const newDataById = {
    ...dataById,
    ...value,
  };

  localStorage.setItem(id, JSON.stringify(newDataById));
}
