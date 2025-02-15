import { useEffect } from 'react';

import { useFlashlight } from 'hooks/effects/flashlight';
import { sleep } from 'utils/sleep';

type FlashLightOn = (n: number) => void;

let letItBe = false;

async function play(flashlightOn: FlashLightOn) {
  //#region1
  await sleep(1890);

  if (!letItBe) return;

  await flashlightOn(125);

  await sleep(150);
  //#endregion1

  //#region2
  if (!letItBe) return;

  await flashlightOn(150);

  await sleep(7435);
  //#endregion2

  //#region3
  if (!letItBe) return;

  await flashlightOn(125);

  await sleep(150);
  //#endregion3

  //#region4
  if (!letItBe) return;

  await flashlightOn(150);

  await sleep(3170);
  //#endregion4

  //#region5
  if (!letItBe) return;

  await flashlightOn(125);

  await sleep(150);
  //#endregion5

  //#region6
  if (!letItBe) return;

  await flashlightOn(150);

  await sleep(8253);
  //#endregion6

  //#region7
  if (!letItBe) return;

  await flashlightOn(125);

  await sleep(150);
  //#endregion7

  //#region8
  if (!letItBe) return;

  await flashlightOn(150);

  await sleep(4775);
  //#endregion8

  //#region9
  if (!letItBe) return;

  await flashlightOn(125);

  await sleep(150);
  //#endregion9

  //#region10
  if (!letItBe) return;

  await flashlightOn(150);

  await sleep(7897);
  //#endregion10
}

export function useRain() {
  const { flashlightOn, flashlightOff } = useFlashlight(true);

  useEffect(() => {
    letItBe = true;

    (async () => {
      for (letItBe; ;) {
        if (!letItBe) {
          return;
        }

        await play(flashlightOn);
      }
    })();

    return () => {
      flashlightOff();

      letItBe = false;
    };
  }, []);
}
