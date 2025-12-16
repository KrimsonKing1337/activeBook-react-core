var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { createElement as _createElement } from "react";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
var STEP = 1;
var MIN = 0;
var MAX = 100;
import * as styles from './Slider.scss';
export var Slider = function (_a) {
    var value = _a.value, onChange = _a.onChange, onAfterChange = _a.onAfterChange;
    var _b = useState([value]), values = _b[0], setValues = _b[1];
    useEffect(function () {
        setValues([value]);
    }, [value]);
    var changeHandler = function (values) {
        setValues(values);
        if (onChange) {
            onChange(values[0]);
        }
    };
    var afterChangeHandler = function (values) {
        if (onAfterChange) {
            onAfterChange(values[0]);
        }
    };
    var Track = function (_a) {
        var props = _a.props, children = _a.children;
        return (_jsx("div", { onMouseDown: props.onMouseDown, onTouchStart: props.onTouchStart, style: props.style, className: styles.TrackWrapper, children: _jsx("div", { ref: props.ref, style: {
                    background: getTrackBackground({
                        values: values,
                        colors: ['var(--main)', '#ccc'],
                        min: MIN,
                        max: MAX,
                    }),
                }, className: styles.Track, children: children }) }));
    };
    var Thumb = function (_a) {
        var props = _a.props;
        return (_createElement("div", __assign({}, props, { key: props.key, style: props.style, className: styles.Thumb })));
    };
    return (_jsx(Range, { values: values, step: STEP, min: MIN, max: MAX, onChange: changeHandler, onFinalChange: afterChangeHandler, renderTrack: Track, renderThumb: Thumb }));
};
//# sourceMappingURL=Slider.js.map