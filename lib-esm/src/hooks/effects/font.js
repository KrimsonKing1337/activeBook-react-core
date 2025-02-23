var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { useEffect } from 'react';
import { useDispatch } from 'store';
import { fontEffectsActions } from 'store/effects/font';
export var useFont = function (_a) {
    var _b = _a.color, color = _b === void 0 ? 'var(--secondary)' : _b, style = __rest(_a, ["color"]);
    var dispatch = useDispatch();
    useEffect(function () {
        dispatch(fontEffectsActions.setColor(color));
        dispatch(fontEffectsActions.setStyle(style));
        return function () {
            dispatch(fontEffectsActions.reset());
        };
    }, [color, style]);
};
//# sourceMappingURL=font.js.map