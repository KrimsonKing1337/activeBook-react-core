import { useBackgroundInRange } from './background';
import { useAudioInRange } from './audio';
import { useDotsInRange } from './dots';
export function useEffectsInRange(effects) {
    useAudioInRange(effects);
    useDotsInRange(effects);
    useBackgroundInRange(effects);
}
//# sourceMappingURL=effectsInRange.js.map