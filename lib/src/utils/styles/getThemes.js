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
export function getThemes(customThemes) {
    var defaultThemes = {
        dark: {
            main: '#a3a3a3',
            secondary: '#828282',
            hover: '#7a7a7a',
            bg: '#111',
            overflow: '#000d',
            'text-shadow-for-hover': '#ffffff7f',
        },
        orange: {
            main: '#f2994a',
            secondary: '#000',
            hover: '#f2c94c',
            bg: '#fff',
            overflow: '#fffd',
            'text-shadow-for-hover': '#1111117f',
        },
        darkBlue: {
            main: '#728c9a',
            secondary: '#000',
            hover: '#9bc4d9',
            bg: '#fff',
            overflow: '#fffd',
            'text-shadow-for-hover': '#1111117f',
        },
        black: {
            main: '#111',
            secondary: '#000',
            hover: '#a3a3a3',
            bg: '#fff',
            overflow: '#fffd',
            'text-shadow-for-hover': '#1111117f',
        },
    };
    return __assign(__assign({}, customThemes), defaultThemes);
}
//# sourceMappingURL=getThemes.js.map