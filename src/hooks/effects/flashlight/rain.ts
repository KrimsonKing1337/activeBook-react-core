import { useEffect } from 'react';

import { useFlashlight } from 'hooks/effects/flashlight';

import { sleep } from 'utils/sleep';

let letItBe = false;

async function play(flashlightOn: (n: number) => void) {
  const flash = async (sleepAfter: number) => {
    if (!letItBe) return;

    await flashlightOn(125);

    await sleep(150);

    await flashlightOn(150);

    await sleep(sleepAfter);
  };

  await sleep(1890);

  await flash(7435);
  await flash(3170);
  await flash(8253);
  await flash(4775);
  await flash(7897);
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
