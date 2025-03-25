import { useSelector } from 'store';
import { configSelectors } from 'store/config';

import { useSideShadow } from 'hooks/effects/side/shadow';

import { flashlightInst } from 'utils/effects/flashlight';
import { sleep } from 'utils/sleep';

export function useFlashlight(withSideShadow = false, speed = 150) {
  const theme = useSelector(configSelectors.theme);

  const darkTheme = theme === 'dark';
  const color = darkTheme ? '#fff' : '#9addf4';

  const { sideShadowOn, sideShadowOff } = useSideShadow({
    color,
    isActiveDefault: false,
    speed,
  });

  const on = async (duration?: number) => {
    if (document.hidden) {
      return;
    }

    console.log('___ flashlight on');

    if (withSideShadow) {
      sideShadowOn();
    }

    flashlightInst.on();

    if (duration) {
      await sleep(duration);

      off();
      sideShadowOff();
    }
  };

  const off = () => {
    console.log('___ flashlight off');

    sideShadowOff();

    flashlightInst.off();
  };

  return { flashlightOff: off, flashlightOn: on };
}
