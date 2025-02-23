import { Howl } from 'howler';

import { HowlWrapper } from 'utils/effects/audio/HowlWrapper';

import type { BackgroundEffect } from 'hooks/effects/background';

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

export type AudioEffectRangeOptions = Omit<AudioEffectOptions, 'id'> & {
  id: string;
};

// json does not support non-simple types
export type AudioEffectRangeOptionsJson = Omit<AudioEffectOptions, 'id' | 'type'> & {
  id: string;
  type: string;
};

export type BackgroundEffectsRangeOptions = Omit<BackgroundEffect, 'id'> & {
  id: string;
};

export type Range = {
  from: number;
  to: number;
};

export type RangeType = 'audio' | 'dots' | 'background';

export type RangeEffect = {
  type: string;
  range: Range[];
  options?: AudioEffectRangeOptionsJson | BackgroundEffectsRangeOptions;
};

export type DotsRangeEffect = RangeEffect;

export type RangeEffectsJson = {
  effects: RangeEffect[];
};

export type Theme = 'dark' | 'darkBlue' | 'orange' | 'black';

export type HowlExtended = Howl & {
  _howls: Howl[];
};
