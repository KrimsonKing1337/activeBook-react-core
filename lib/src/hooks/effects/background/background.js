"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBackground = void 0;
var react_1 = require("react");
var store_1 = require("../../../store");
var background_1 = require("../../../store/effects/background");
var utils_1 = require("./utils");
var useBackground = function (effect) {
    var dispatch = (0, store_1.useDispatch)();
    var refEffect = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        // если эффект уже есть, и он точно такой же, как тот, что приходит - значит эффект не нужно инициализировать заново
        // todo: сравнивать Component-ы. сейчас сравнивается только на то, есть он или нет
        if (refEffect.current && (0, utils_1.effectsAreEqual)(refEffect.current, effect)) {
            return;
        }
        refEffect.current = effect;
        dispatch(background_1.backgroundEffectsActions.setEffect(effect));
    }, [effect]);
    (0, react_1.useEffect)(function () {
        return function () {
            if (!refEffect.current) {
                return;
            }
            dispatch(background_1.backgroundEffectsActions.deleteEffect(refEffect.current.id));
        };
    }, []);
};
exports.useBackground = useBackground;
//# sourceMappingURL=background.js.map