import { useEffect, useRef } from 'react';
import { useDispatch } from 'store';
import { backgroundEffectsActions } from 'store/effects/background';
export var useBackground = function (effect) {
    var dispatch = useDispatch();
    var effectRef = useRef('');
    useEffect(function () {
        effectRef.current = effect.id;
        dispatch(backgroundEffectsActions.setEffect(effect));
    }, [effect]);
    useEffect(function () {
        return function () {
            dispatch(backgroundEffectsActions.deleteEffect(effectRef.current));
        };
    }, []);
};
//# sourceMappingURL=background.js.map