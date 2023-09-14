import { useDispatch } from 'store';
import { effectsActions } from 'store/effects/common';
export function useInverseColor() {
    var dispatch = useDispatch();
    var on = function () { return dispatch(effectsActions.setInverseColorActiveState(true)); };
    var off = function () { return dispatch(effectsActions.setInverseColorActiveState(false)); };
    return {
        inverseColorOn: on,
        inverseColorOff: off,
    };
}
//# sourceMappingURL=inverseColor.js.map