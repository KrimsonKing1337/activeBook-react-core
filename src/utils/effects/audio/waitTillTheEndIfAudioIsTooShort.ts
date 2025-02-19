import { HowlWrapper } from './HowlWrapper';

export async function waitTillTheEndIfAudioIsTooShort(audioInstance: HowlWrapper) {
  const dur = parseFloat(audioInstance.howlInst.duration().toFixed(1));

  if (dur < 1.2) {
    await audioInstance.waitTillTheEnd();
  }

  await audioInstance.unload();
}
