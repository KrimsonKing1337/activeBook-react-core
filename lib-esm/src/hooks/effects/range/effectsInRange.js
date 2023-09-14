import { useMusicInRange } from './audio/music';
import { useAudioInRange } from './audio/sound';
import { useDotsInRange } from './dots';
export function useEffectsInRange(effects) {
    useMusicInRange(effects);
    useAudioInRange(effects);
    useDotsInRange(effects);
}
//# sourceMappingURL=effectsInRange.js.map