import { useEffect, useRef } from 'react';
import { useDispatch } from 'store';
import { backgroundEffectsActions } from 'store/effects/background';
import { effectsAreEqual } from './utils';
export var useBackground = function (effect) {
    var dispatch = useDispatch();
    var refEffect = useRef(null);
    useEffect(function () {
        // если эффект уже есть, и он точно такой же, как тот, что приходит - значит эффект не нужно инициализировать заново
        // todo: сравнивать Component-ы. сейчас сравнивается только на есть он или нет
        if (refEffect.current && effectsAreEqual(refEffect.current, effect)) {
            return;
        }
        refEffect.current = effect;
        dispatch(backgroundEffectsActions.setEffect(effect));
    }, [effect]);
    useEffect(function () {
        return function () {
            if (!refEffect.current) {
                return;
            }
            dispatch(backgroundEffectsActions.deleteEffect(refEffect.current.id));
        };
    }, []);
};
//# sourceMappingURL=background.js.map