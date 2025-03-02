var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'store';
import { backgroundEffectsActions } from 'store/effects/background';
export var useBackground = function (effect) {
    var dispatch = useDispatch();
    var effectRef = useRef('');
    useEffect(function () {
        var effectWithId = __assign({}, effect);
        if (!effect.id) {
            effectWithId.id = nanoid();
        }
        dispatch(backgroundEffectsActions.setEffect(effectWithId));
        effectRef.current = effectWithId.id;
    }, [effect]);
    useEffect(function () {
        return function () {
            dispatch(backgroundEffectsActions.deleteEffect(effectRef.current));
        };
    }, []);
};
//# sourceMappingURL=background.js.map