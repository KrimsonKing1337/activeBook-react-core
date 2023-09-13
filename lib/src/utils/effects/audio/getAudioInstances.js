"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAudioInstances = void 0;
var store_1 = require("../../../store");
function getAudioInstances() {
    var storeState = store_1.store.getState();
    var soundEffects = storeState.soundEffects, musicEffects = storeState.musicEffects;
    var audioEffectHowlInst1 = soundEffects.howlInst1, audioEffectHowlInst2 = soundEffects.howlInst2;
    var musicEffectHowlInst1 = musicEffects.howlInst1, musicEffectHowlInst2 = musicEffects.howlInst2;
    var soundInst = audioEffectHowlInst1 || audioEffectHowlInst2;
    var musicInst = musicEffectHowlInst1 || musicEffectHowlInst2;
    return {
        soundInst: soundInst,
        musicInst: musicInst,
    };
}
exports.getAudioInstances = getAudioInstances;
//# sourceMappingURL=getAudioInstances.js.map