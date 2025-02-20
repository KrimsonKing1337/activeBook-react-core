"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAudioInstances = void 0;
var store_1 = require("../../../store");
function getAudioInstances() {
    var storeState = store_1.store.getState();
    var audioEffects = storeState.audioEffects, audioBgEffects = storeState.audioBgEffects;
    return {
        audioInstances: audioEffects.audioInstances,
        audioBgInstances: audioBgEffects.audioInstances,
    };
}
exports.getAudioInstances = getAudioInstances;
//# sourceMappingURL=getAudioInstances.js.map