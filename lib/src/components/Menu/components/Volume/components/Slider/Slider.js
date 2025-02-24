"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slider = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_slider_1 = __importDefault(require("react-slider"));
var Slider_scss_1 = __importDefault(require("./Slider.scss"));
var Slider = function (_a) {
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
    return ((0, jsx_runtime_1.jsx)(react_slider_1.default, { value: value, className: Slider_scss_1.default.slider, thumbClassName: Slider_scss_1.default.thumb, trackClassName: Slider_scss_1.default.track, onChange: changeHandler, onAfterChange: afterChangeHandler }));
};
exports.Slider = Slider;
//# sourceMappingURL=Slider.js.map