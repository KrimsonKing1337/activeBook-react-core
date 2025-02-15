import { useEffect } from 'react';

import { useSelector } from 'store';
import { mainSelectors } from 'store/main';
import { off as vibrationOff, on as vibrationOn } from 'utils/effects/vibration';

export function useVibration() {
  const isVibrationAvailable = useSelector(mainSelectors.isVibrationAvailable);

  useEffect(() => {
    return () => {
      off();
    };
  }, []);

  const on = (n: number) => {
    if (!isVibrationAvailable) {
      return;
    }

    if (document.hidden) {
      return;
    }

    vibrationOn(n);

    console.log(`___ vibrated: ${n}`);
  };

  const off = () => {
    if (!isVibrationAvailable) {
      return;
    }

    vibrationOff();
  };

  return { vibrationOff: off, vibrationOn: on };
}
