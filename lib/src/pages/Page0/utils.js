"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWelcomeTourTextById = void 0;
var getWelcomeTourTextById = function (id) {
    if (id === 'action') {
        return {
            header: 'Выделенный текст',
            article: 'Выделенный текст нажимается. Попробуйте!',
        };
    }
    if (id === 'segments') {
        return {
            header: 'Сегменты',
            article: 'Сегменты также можно (и нужно) нажимать. При нажатии сегмент будет становиться активным (выделяться)',
        };
    }
    if (id === 'bookmarks') {
        return {
            header: 'Закладки',
            article: 'Создавать / удалять закладки можно здесь',
        };
    }
    if (id === 'navigation') {
        return {
            header: 'Навигация',
            article: 'Здесь можно перемещается вперёд / назад и на произвольную страницу. ' +
                'Также можно свайпать влево-вправо по странице',
        };
    }
    if (id === 'font') {
        return {
            header: 'Изменение размера шрифта',
            article: 'Здесь можно увеличить / уменьшить размер шрифта',
        };
    }
    if (id === 'config') {
        return {
            header: 'Меню настроек',
            article: 'Здесь можно открыть оглавление, сменить тему оформления, скорректировать громкость, ' +
                'вкл / выкл вибрацию и вспышку, а так же настроить межстрочный интервал',
        };
    }
    return {
        header: '',
        article: '',
    };
};
exports.getWelcomeTourTextById = getWelcomeTourTextById;
//# sourceMappingURL=utils.js.map