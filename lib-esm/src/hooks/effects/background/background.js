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
import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'store';
import { backgroundEffectsActions } from 'store/effects/background';
export var useBackground = function (effect) {
    var dispatch = useDispatch();
    var effectWithId = __assign({}, effect);
    if (!effect.id) {
        effectWithId.id = nanoid();
    }
    useEffect(function () {
        dispatch(backgroundEffectsActions.setEffect(effectWithId));
        return function () {
            dispatch(backgroundEffectsActions.deleteEffect(effectWithId.id));
        };
    }, []);
};
//# sourceMappingURL=background.js.map