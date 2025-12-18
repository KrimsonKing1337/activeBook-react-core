import { store } from 'store';
export function getAudioInstances() {
    var storeState = store.getState();
    var audioEffects = storeState.audioEffects, audioBgEffects = storeState.audioBgEffects;
    return {
        audioInstances: audioEffects.audioInstances,
        audioBgInstances: audioBgEffects.audioInstances,
    };
}
//# sourceMappingURL=getAudioInstances.js.map