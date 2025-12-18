import { useEffect } from 'react';
import { useSelector } from 'store';
import { mainSelectors } from 'store/main';
import { off as vibrationOff, on as vibrationOn } from 'utils/effects/vibration';
export function useVibration() {
    var isVibrationAvailable = useSelector(mainSelectors.isVibrationAvailable);
    useEffect(function () {
        return function () {
            off();
        };
    }, []);
    var on = function (n) {
        if (!isVibrationAvailable) {
            return;
        }
        if (document.hidden) {
            return;
        }
        vibrationOn(n);
        console.log("___ vibrated: ".concat(n));
    };
    var off = function () {
        if (!isVibrationAvailable) {
            return;
        }
        vibrationOff();
    };
    return { vibrationOff: off, vibrationOn: on };
}
//# sourceMappingURL=vibration.js.map