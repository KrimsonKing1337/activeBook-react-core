import { HowlWrapper } from './HowlWrapper';

/*
  если аудио слишком короткое (до 1.2 секунды) - сначала ждём пока оно доиграет, затем производим unload
*/
export async function unloadAudio(audioInstance: HowlWrapper) {
  const dur = parseFloat(audioInstance.howlInst.duration().toFixed(1));

  if (dur < 1.2) {
    await audioInstance.waitTillTheEnd();
  }

  await audioInstance.unload();
}
