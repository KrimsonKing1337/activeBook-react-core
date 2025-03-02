import { Howl } from 'howler';

import { HowlWrapper } from 'utils/effects/audio/HowlWrapper';

import type { BackgroundEffect } from 'hooks/effects/background/@types';

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
  relativeVolume?: number;
  screamer?: boolean;
  onPlay?: () => void;
  onUnload?: () => void;
  onPause?: () => void;
  onStop?: () => void;
};

export type Range = {
  from: number;
  to: number;
};

export type RangeType = 'audio' | 'dots' | 'background';

export type RangeEffect = {
  id: string;
  type: RangeType;
  range: Range[];
  options?: AudioEffectOptions | BackgroundEffect;
};

export type DotsRangeEffect = RangeEffect;

export type RangeEffects = RangeEffect[];

export type Theme = 'dark' | 'darkBlue' | 'orange' | 'black';

export type HowlExtended = Howl & {
  _howls: Howl[];
};
