"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.playAchievement = exports.themes = exports.getClassNames = exports.getThemeItemClassName = void 0;
var classnames_1 = __importDefault(require("classnames"));
var achievements_1 = require("../../../../utils/effects/achievements");
var utils_1 = require("../../../../utils/effects/achievements/utils");
var Themes_scss_1 = __importDefault(require("./Themes.scss"));
function getThemeItemClassName(theme) {
    switch (theme) {
        case 'dark':
            return Themes_scss_1.default.isDark;
        case 'orange':
            return Themes_scss_1.default.isOrange;
        case 'darkBlue':
            return Themes_scss_1.default.isDarkBlue;
        case 'black':
            return Themes_scss_1.default.isBlack;
    }
}
exports.getThemeItemClassName = getThemeItemClassName;
function getClassNames(theme) {
    var className = getThemeItemClassName(theme);
    return (0, classnames_1.default)([
        Themes_scss_1.default.themesItem,
        className,
    ]);
}
exports.getClassNames = getClassNames;
exports.themes = ['dark', 'orange', 'darkBlue', 'black'];
var playAchievement = function () {
    (0, achievements_1.play)({
        id: utils_1.Flags.themes,
        text: 'Меняем тему оформления!',
    });
};
exports.playAchievement = playAchievement;
//# sourceMappingURL=utils.js.map