import { setCssVariable } from './setCssVariable';
export function setThemeCss(theme, themes) {
    var colors = themes[theme];
    Object.keys(colors).forEach(function (keyCur) {
        var valueCur = colors[keyCur];
        setCssVariable("--".concat(keyCur), valueCur);
    });
}
//# sourceMappingURL=setThemeCss.js.map