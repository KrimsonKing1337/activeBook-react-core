import { get as _get } from 'lodash-es';

export function get(id: string, path: string) {
  const actualPath = `${id}.${path}`;

  const dataByIdJson = localStorage.getItem(actualPath) || '{}';
  const dataById = JSON.parse(dataByIdJson);

  return _get(dataById, actualPath);
}

export function set(id: string, value: Record<string, unknown>) {
  const dataById = get(id, '');

  const newDataById = {
    ...dataById,
    ...value,
  };

  localStorage.setItem(id, JSON.stringify(newDataById));
}
