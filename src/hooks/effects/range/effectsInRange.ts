import type { RangeEffectsJson } from '@types';

import { useAudioInRange } from './audio';
import { useDotsInRange } from './dots';

export function useEffectsInRange(effects: RangeEffectsJson) {
  useAudioInRange(effects);
  useDotsInRange(effects);
}
