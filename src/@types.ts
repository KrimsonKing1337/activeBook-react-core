import { Howl } from 'howler';

export type Timer = ReturnType<typeof setTimeout> | null;
export type Interval = ReturnType<typeof setInterval> | null

export type Range = {
  from: number;
  to: number;
};

export type RangeEffect = {
  id: string;
  type: string;
  src: string;
  fadeOutSpeed: number;
  fadeInSpeed: number;
  range: Range[];
};

export type Theme = 'dark' | 'darkBlue' | 'orange' | 'black';

export type HowlExtended = Howl & {
  _howls: Howl[];
};
