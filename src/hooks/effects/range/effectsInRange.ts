import type { RangeEffectsJson } from '@types';

import { useBackgroundInRange } from './background';
import { useAudioInRange } from './audio';
import { useDotsInRange } from './dots';

export function useEffectsInRange(effects: RangeEffectsJson) {
  useAudioInRange(effects);
  useDotsInRange(effects);
  useBackgroundInRange(effects);
}
