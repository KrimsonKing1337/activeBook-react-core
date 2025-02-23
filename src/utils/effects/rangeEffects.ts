import type { RangeEffects, Range, RangeEffect } from '@types';

export function isPageInRange(pageNumberCurrent: number, range: Range[]) {
  return range.some((rangeCur) => {
    return pageNumberCurrent >= rangeCur.from && pageNumberCurrent <= rangeCur.to;
  });
}

export function getEffectsInRange(effects: RangeEffects, pageNumberCurrent: number, type: string) {
  const arr = effects as RangeEffect[];

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i];

    const isInRange = isPageInRange(pageNumberCurrent, cur.range);

    if (isInRange) {
      if (cur.type === type) {
        result.push(cur);
      }
    }
  }

  return result;
}
