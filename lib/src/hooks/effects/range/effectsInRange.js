"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEffectsInRange = void 0;
var audio_1 = require("./audio");
var dots_1 = require("./dots");
function useEffectsInRange(effects) {
    (0, audio_1.useAudioInRange)(effects);
    (0, dots_1.useDotsInRange)(effects);
}
exports.useEffectsInRange = useEffectsInRange;
//# sourceMappingURL=effectsInRange.js.map