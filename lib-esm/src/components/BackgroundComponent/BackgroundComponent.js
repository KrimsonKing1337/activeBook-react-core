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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classnames from 'classnames';
import styles from './BackgroundComponent.scss';
export var BackgroundComponent = function (props) {
    var children = props.children, className = props.className, _a = props.withShadow, withShadow = _a === void 0 ? true : _a;
    var wrapperClassName = classnames([styles.wrapper, className]);
    return (_jsxs("div", __assign({ className: wrapperClassName }, props, { children: [withShadow && (_jsx("div", { className: styles.shadow })), children] })));
};
//# sourceMappingURL=BackgroundComponent.js.map