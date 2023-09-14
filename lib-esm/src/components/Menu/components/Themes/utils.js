import classNames from 'classnames';
import { play } from 'utils/effects/achievements';
import { Flags } from 'utils/effects/achievements/utils';
import styles from './Themes.scss';
export function getThemeItemClassName(theme) {
    switch (theme) {
        case 'dark':
            return styles.isDark;
        case 'orange':
            return styles.isOrange;
        case 'darkBlue':
            return styles.isDarkBlue;
        case 'black':
            return styles.isBlack;
    }
}
export function getClassNames(theme) {
    var className = getThemeItemClassName(theme);
    return classNames([
        styles.themesItem,
        className,
    ]);
}
export var themes = ['dark', 'orange', 'darkBlue', 'black'];
export var playAchievement = function () {
    play({
        id: Flags.themes,
        text: 'Меняем тему оформления!',
    });
};
//# sourceMappingURL=utils.js.map