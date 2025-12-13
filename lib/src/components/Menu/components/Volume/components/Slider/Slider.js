import { jsx as _jsx } from "react/jsx-runtime";
import ReactSlider from 'react-slider';
import styles from './Slider.scss';
export var Slider = function (_a) {
    var value = _a.value, onChange = _a.onChange, onAfterChange = _a.onAfterChange;
    var changeHandler = function (value) {
        if (onChange) {
            onChange(value);
        }
    };
    var afterChangeHandler = function () {
        if (onAfterChange) {
            onAfterChange(value);
        }
    };
    return (_jsx(ReactSlider, { value: value, className: styles.slider, thumbClassName: styles.thumb, trackClassName: styles.track, onChange: changeHandler, onAfterChange: afterChangeHandler }));
};
//# sourceMappingURL=Slider.js.map