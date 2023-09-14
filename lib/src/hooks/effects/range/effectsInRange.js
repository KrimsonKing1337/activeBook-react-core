"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEffectsInRange = void 0;
var music_1 = require("./audio/music");
var sound_1 = require("./audio/sound");
var dots_1 = require("./dots");
function useEffectsInRange(effects) {
    (0, music_1.useMusicInRange)(effects);
    (0, sound_1.useAudioInRange)(effects);
    (0, dots_1.useDotsInRange)(effects);
}
exports.useEffectsInRange = useEffectsInRange;
//# sourceMappingURL=effectsInRange.js.map