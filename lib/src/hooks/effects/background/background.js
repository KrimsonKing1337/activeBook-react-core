"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBackground = void 0;
var react_1 = require("react");
var store_1 = require("../../../store");
var background_1 = require("../../../store/effects/background");
var useBackground = function (effect) {
    var dispatch = (0, store_1.useDispatch)();
    var effectRef = (0, react_1.useRef)('');
    (0, react_1.useEffect)(function () {
        effectRef.current = effect.id;
        dispatch(background_1.backgroundEffectsActions.setEffect(effect));
    }, [effect]);
    (0, react_1.useEffect)(function () {
        return function () {
            dispatch(background_1.backgroundEffectsActions.deleteEffect(effectRef.current));
        };
    }, []);
};
exports.useBackground = useBackground;
//# sourceMappingURL=background.js.map