import { useEffect } from 'react';
import { useDispatch } from 'store';
import { sideShadowActions } from 'store/effects/side/shadow';
import { initialState } from 'store/effects/side/shadow/slice';
export function useSideShadow(_a) {
    var _b = _a.isActiveDefault, isActiveDefault = _b === void 0 ? true : _b, color = _a.color, _c = _a.speed, speed = _c === void 0 ? initialState.speed : _c;
    var dispatch = useDispatch();
    var on = function () {
        dispatch(sideShadowActions.setActiveState(true));
    };
    var off = function () {
        dispatch(sideShadowActions.setActiveState(false));
    };
    useEffect(function () {
        dispatch(sideShadowActions.setColor(color));
        dispatch(sideShadowActions.setSpeed(speed));
        dispatch(sideShadowActions.setActiveState(isActiveDefault));
        return function () {
            off();
        };
    }, []);
    return { sideShadowOn: on, sideShadowOff: off };
}
//# sourceMappingURL=shadow.js.map