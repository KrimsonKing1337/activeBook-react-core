import { EffectsJson } from '@types';

import { useMusicInRange } from './audio/music';
import { useAudioInRange } from './audio/sound';
import { useDotsInRange } from './dots';

export function useEffectsInRange(effects: EffectsJson) {
  useMusicInRange(effects);
  useAudioInRange(effects);
  useDotsInRange(effects);
}
