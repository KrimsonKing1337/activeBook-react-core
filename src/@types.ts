import { Howl } from 'howler';

import { HowlWrapper } from 'utils/effects/audio/HowlWrapper';

export type Timer = ReturnType<typeof setTimeout> | null;
export type Interval = ReturnType<typeof setInterval> | null;

export type HowlInst = HowlWrapper | null;
export type HowlInstances = Record<string, HowlInst>;

export type AudioType = 'bg' | 'music' | 'sfx';

export type AudioEffectOptions = {
  id?: string;
  src: string;
  fadeOutWhenUnload?: boolean;
  type?: AudioType;
  loop?: boolean;
  playOnLoad?: boolean;
  stopBy?: number;
  delay?: number;
  screamer?: boolean;
  onPlay?: () => void;
  onUnload?: () => void;
};

export type Range = {
  from: number;
  to: number;
};

export type RangeType = 'audio' | 'dots';

export type RangeEffect = {
  type: RangeType;
  range: Range[];
  options?: AudioEffectOptions;
};

export type DotsRangeEffect = RangeEffect;

export type RangeEffectsJson = {
  effects: RangeEffect[];
};

export type Theme = 'dark' | 'darkBlue' | 'orange' | 'black';

export type HowlExtended = Howl & {
  _howls: Howl[];
};
