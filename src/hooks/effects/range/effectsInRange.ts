import type { RangeEffects } from '@types';

import { useBackgroundInRange } from './background';
import { useAudioInRange } from './audio';
import { useDotsInRange } from './dots';

export function useEffectsInRange(effects: RangeEffects) {
  useAudioInRange(effects);
  useDotsInRange(effects);
  useBackgroundInRange(effects);
}
