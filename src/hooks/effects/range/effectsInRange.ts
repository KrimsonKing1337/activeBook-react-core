import { RangeEffectsJson } from '@types';

import { useMusicInRange } from './audio/music';
import { useAudioInRange } from './audio/sound';
import { useDotsInRange } from './dots';

export function useEffectsInRange(effects: RangeEffectsJson) {
  useMusicInRange(effects);
  useAudioInRange(effects);
  useDotsInRange(effects);
}
