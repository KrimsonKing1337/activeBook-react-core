"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useModal = void 0;
var react_1 = require("react");
var modalsWereShowed_1 = require("../../utils/localStorage/modalsWereShowed");
var modalsWereShowed_2 = require("../../utils/localStorage/modalsWereShowed");
function useModal() {
    var _a = (0, react_1.useState)(false), modalIsActive = _a[0], setModalIsActive = _a[1];
    var modalOnClose = function () {
        setModalIsActive(false);
        modalsWereShowed_2.modalsWereShowed.set(modalsWereShowed_1.Flags.usingCamera, true);
    };
    return {
        modalIsActive: modalIsActive,
        modalOnClose: modalOnClose,
        setModalIsActive: setModalIsActive,
    };
}
exports.useModal = useModal;
//# sourceMappingURL=hooks.js.map