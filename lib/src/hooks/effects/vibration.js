"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useVibration = void 0;
var react_1 = require("react");
var store_1 = require("../../store");
var main_1 = require("../../store/main");
var vibration_1 = require("../../utils/effects/vibration");
function useVibration() {
    var isVibrationAvailable = (0, store_1.useSelector)(main_1.mainSelectors.isVibrationAvailable);
    (0, react_1.useEffect)(function () {
        return function () {
            off();
        };
    }, []);
    var on = function (n) {
        if (!isVibrationAvailable) {
            return;
        }
        if (document.hidden) {
            return;
        }
        (0, vibration_1.on)(n);
        console.log("___ vibrated: ".concat(n));
    };
    var off = function () {
        if (!isVibrationAvailable) {
            return;
        }
        (0, vibration_1.off)();
    };
    return { vibrationOff: off, vibrationOn: on };
}
exports.useVibration = useVibration;
//# sourceMappingURL=vibration.js.map