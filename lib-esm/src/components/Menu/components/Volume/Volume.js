import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Label } from 'components/Label';
import { useDispatch, useSelector } from 'store';
import { volumeActions, volumeSelectors } from 'store/volume';
import { Slider } from './components/Slider';
import { playAchievement } from './utils';
import styles from './Volume.scss';
export var Volume = function () {
    var dispatch = useDispatch();
    var allVolume = useSelector(volumeSelectors.all);
    var globalVolume = useSelector(volumeSelectors.global);
    var bgVolume = useSelector(volumeSelectors.bg);
    var sfxVolume = useSelector(volumeSelectors.sfx);
    var musicVolume = useSelector(volumeSelectors.music);
    var videosVolume = useSelector(volumeSelectors.videos);
    var afterChangeHandler = function () {
        playAchievement();
        // сохраняем значения в localstorage
        var volumeAsJson = JSON.stringify(allVolume);
        localStorage.setItem('volume', volumeAsJson);
    };
    var globalChangeHandler = function (value) {
        dispatch(volumeActions.setGlobal(value));
    };
    var bgChangeHandler = function (value) {
        dispatch(volumeActions.setBg(value));
    };
    var sfxChangeHandler = function (value) {
        dispatch(volumeActions.setSfx(value));
    };
    var musicChangeHandler = function (value) {
        dispatch(volumeActions.setMusic(value));
    };
    var videosChangeHandler = function (value) {
        dispatch(volumeActions.setVideos(value));
    };
    /*
    * пытался то, что ниже переделать в массив и map(),
    * но получаю ошибку: Can't perform a React state update on an unmounted component
    */
    return (_jsxs("div", { className: styles.volume, children: [_jsxs("div", { className: styles.item, children: [_jsx(Label, { label: "\u041E\u0431\u0449\u0430\u044F \u0433\u0440\u043E\u043C\u043A\u043E\u0441\u0442\u044C" }), _jsx(Slider, { value: globalVolume, onChange: globalChangeHandler, onAfterChange: afterChangeHandler })] }), _jsxs("div", { className: styles.item, children: [_jsx(Label, { label: "\u0413\u0440\u043E\u043C\u043A\u043E\u0441\u0442\u044C \u043C\u0443\u0437\u044B\u043A\u0438" }), _jsx(Slider, { value: musicVolume, onChange: musicChangeHandler, onAfterChange: afterChangeHandler })] }), _jsxs("div", { className: styles.item, children: [_jsx(Label, { label: "SFX" }), _jsx(Slider, { value: sfxVolume, onChange: sfxChangeHandler, onAfterChange: afterChangeHandler })] }), _jsxs("div", { className: styles.item, children: [_jsx(Label, { label: "\u0424\u043E\u043D\u043E\u0432\u044B\u0435 \u0437\u0432\u0443\u043A\u0438" }), _jsx(Slider, { value: bgVolume, onChange: bgChangeHandler, onAfterChange: afterChangeHandler })] }), _jsxs("div", { className: styles.item, children: [_jsx(Label, { label: "\u0413\u0440\u043E\u043C\u043A\u043E\u0441\u0442\u044C \u0432\u0438\u0434\u0435\u043E" }), _jsx(Slider, { value: videosVolume, onChange: videosChangeHandler, onAfterChange: afterChangeHandler })] })] }));
};
//# sourceMappingURL=Volume.js.map