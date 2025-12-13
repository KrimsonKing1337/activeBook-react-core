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
import { isEqual } from 'lodash-es';
export var getPositionByPreset = function (value) {
    switch (value) {
        case 'center':
            return {
                top: '0',
                bottom: '0',
                left: '0',
                right: '0',
            };
        case 'left':
            return {
                top: '0',
                bottom: '0',
                left: '0',
                right: 'auto',
            };
        case 'right':
            return {
                top: '0',
                bottom: '0',
                left: 'auto',
                right: '0',
            };
        case 'bottom':
            return {
                top: 'auto',
                bottom: '0',
                left: '0',
                right: '0',
            };
        case 'top':
            return {
                top: '0',
                bottom: 'auto',
                left: '0',
                right: '0',
            };
        case 'top-left':
            return {
                top: '0',
                bottom: 'auto',
                left: '0',
                right: 'auto',
            };
        case 'top-right':
            return {
                top: '0',
                bottom: 'auto',
                left: 'auto',
                right: '0',
            };
        case 'bottom-left':
            return {
                top: 'auto',
                bottom: '0',
                left: '0',
                right: 'auto',
            };
        case 'bottom-right':
            return {
                top: 'auto',
                bottom: '0',
                left: 'auto',
                right: '0',
            };
    }
};
/*
  сравниваю без Component, потому что его сравнение всегда приводит к false.
  только если он появился или исчез - только тогда делаем ререндер
*/
export var effectsAreEqual = function (effect1, effect2) {
    if (effect1.Component && !effect2.Component) {
        return false;
    }
    if (!effect1.Component && effect2.Component) {
        return false;
    }
    var effect1WithoutComponent = __assign({}, effect1);
    delete effect1WithoutComponent.Component;
    var effect2WithoutComponent = __assign({}, effect2);
    delete effect2WithoutComponent.Component;
    return isEqual(effect1WithoutComponent, effect2WithoutComponent);
};
//# sourceMappingURL=utils.js.map