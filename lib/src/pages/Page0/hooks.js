import { useState } from 'react';
import { Flags as ModalsFlags } from 'utils/localStorage/modalsWereShowed';
import { modalsWereShowed } from 'utils/localStorage/modalsWereShowed';
export function useModal() {
    var _a = useState(false), modalIsActive = _a[0], setModalIsActive = _a[1];
    var modalOnClose = function () {
        setModalIsActive(false);
        modalsWereShowed.set(ModalsFlags.usingCamera, true);
    };
    return {
        modalIsActive: modalIsActive,
        modalOnClose: modalOnClose,
        setModalIsActive: setModalIsActive,
    };
}
//# sourceMappingURL=hooks.js.map