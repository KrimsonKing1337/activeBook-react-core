export function getThemes(customThemes) {
    var themes = {
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
    if (customThemes) {
        Object.entries(customThemes).forEach(function (themeCur) {
            var name = themeCur[0], theme = themeCur[1];
            themes[name] = theme;
        });
    }
    return themes;
}
//# sourceMappingURL=getThemes.js.map