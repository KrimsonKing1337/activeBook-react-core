import { useEffect, useRef } from 'react';
import { useDispatch } from 'store';
import { backgroundEffectsActions } from 'store/effects/background';
export var useBackground = function (effect) {
    var dispatch = useDispatch();
    var refId = useRef('');
    useEffect(function () {
        // если id уже есть - значит эффект не нужно инициализировать заново
        if (refId.current) {
            return;
        }
        refId.current = effect.id;
        dispatch(backgroundEffectsActions.setEffect(effect));
    }, [effect]);
    useEffect(function () {
        return function () {
            dispatch(backgroundEffectsActions.deleteEffect(refId.current));
        };
    }, []);
};
//# sourceMappingURL=background.js.map