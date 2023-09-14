import { nanoid } from 'nanoid';

export const orderDefaultState = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
};

export type LocationStyles = {
  top: string;
  right: string;
  bottom: string;
  left: string;
};

export function getPlaceInLineByLocationStyles(styles: LocationStyles) {
  const { top, right, bottom, left } = styles;

  if (top === '0px' && left === '0px') {
    return 1;
  }

  if (top === '0px' && right === '0px') {
    return 2;
  }

  if (bottom === '0px' && right === '0px') {
    return 3;
  }

  if (bottom === '0px' && left === '0px') {
    return 4;
  }

  return 0;
}

export function createDotsAsArray() {
  const arr = [];

  for (let i = 0; i < 4; i++) {
    arr.push(nanoid());
  }

  return arr;
}
