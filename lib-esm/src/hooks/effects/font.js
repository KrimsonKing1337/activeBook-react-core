import { useEffect } from 'react';
import { useDispatch } from 'store';
import { effectsActions } from 'store/effects/common';
export var useFont = function (_a) {
    var _b = _a.color, color = _b === void 0 ? 'var(--secondary)' : _b;
    var dispatch = useDispatch();
    useEffect(function () {
        dispatch(effectsActions.setFontColor(color));
        return function () {
            dispatch(effectsActions.setFontColor('var(--secondary)'));
        };
    }, []);
};
//# sourceMappingURL=font.js.map