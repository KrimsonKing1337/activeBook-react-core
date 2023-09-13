"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.off = exports.on = void 0;
function on(n) {
    navigator.vibrate(n);
}
exports.on = on;
function off() {
    navigator.vibrate(0);
}
exports.off = off;
//# sourceMappingURL=vibration.js.map