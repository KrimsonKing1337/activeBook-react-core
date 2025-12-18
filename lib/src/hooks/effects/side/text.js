import { useEffect } from 'react';
import { useDispatch } from 'store';
import { sideTextActions } from 'store/effects/side/text';
import { initialState } from 'store/effects/side/text/slice';
export function useSideText(_a) {
    var _b = _a.isActiveDefault, isActiveDefault = _b === void 0 ? true : _b, template = _a.template, _c = _a.speed, speed = _c === void 0 ? initialState.speed : _c;
    var dispatch = useDispatch();
    var on = function () {
        dispatch(sideTextActions.setActiveState(true));
    };
    var off = function () {
        dispatch(sideTextActions.setActiveState(false));
    };
    useEffect(function () {
        dispatch(sideTextActions.setTemplate(template));
        dispatch(sideTextActions.setSpeed(speed));
        dispatch(sideTextActions.setActiveState(isActiveDefault));
        return function () {
            off();
        };
    }, []);
    return { sideTextOn: on, sideTextOff: off };
}
//# sourceMappingURL=text.js.map