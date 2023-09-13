import { store } from 'store';

export function getAudioInstances() {
  const storeState = store.getState();
  const { soundEffects, musicEffects } = storeState;
  const { howlInst1: audioEffectHowlInst1, howlInst2: audioEffectHowlInst2 } = soundEffects;
  const { howlInst1: musicEffectHowlInst1, howlInst2: musicEffectHowlInst2 } = musicEffects;

  const soundInst = audioEffectHowlInst1 || audioEffectHowlInst2;
  const musicInst = musicEffectHowlInst1 || musicEffectHowlInst2;

  return {
    soundInst,
    musicInst,
  };
}
