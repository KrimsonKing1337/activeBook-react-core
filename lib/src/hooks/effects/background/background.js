"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBackground = void 0;
var react_1 = require("react");
var nanoid_1 = require("nanoid");
var store_1 = require("../../../store");
var background_1 = require("../../../store/effects/background");
var useBackground = function (effect) {
    var dispatch = (0, store_1.useDispatch)();
    var effectWithId = __assign({}, effect);
    if (!effect.id) {
        effectWithId.id = (0, nanoid_1.nanoid)();
    }
    (0, react_1.useEffect)(function () {
        dispatch(background_1.backgroundEffectsActions.setEffect(effectWithId));
    }, []);
    (0, react_1.useEffect)(function () {
        return function () {
            dispatch(background_1.backgroundEffectsActions.deleteEffect(effectWithId.id));
        };
    }, []);
};
exports.useBackground = useBackground;
//# sourceMappingURL=background.js.map