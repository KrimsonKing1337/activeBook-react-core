export var localStorageId = 'welcomeTourHasBeenSeen';
export var getWelcomeTourTextById = function (id) {
    if (id === 'action') {
        return {
            header: 'Выделенный текст',
            desc: 'Выделенный текст нажимается. Попробуйте!',
        };
    }
    if (id === 'segments') {
        return {
            header: 'Сегменты',
            desc: 'Сегменты также можно (и нужно) нажимать. При нажатии сегмент будет становиться активным (выделяться)',
        };
    }
    if (id === 'bookmarks') {
        return {
            header: 'Закладки',
            desc: 'Создавать / удалять закладки можно здесь',
        };
    }
    if (id === 'navigation') {
        return {
            header: 'Навигация',
            desc: 'Здесь можно перемещается вперёд / назад и на произвольную страницу. ' +
                'Также можно свайпать влево-вправо по странице',
        };
    }
    if (id === 'font') {
        return {
            header: 'Изменение размера шрифта',
            desc: 'Здесь можно увеличить / уменьшить размер шрифта',
        };
    }
    if (id === 'config') {
        return {
            header: 'Меню настроек',
            desc: 'Здесь можно открыть оглавление, сменить тему оформления, скорректировать громкость, ' +
                'вкл / выкл вибрацию и вспышку, а так же настроить межстрочный интервал',
        };
    }
    return {
        header: '',
        desc: '',
    };
};
var className = 'welcomeTourHighLight';
export var removeHighLight = function () {
    var highlightedWelcomeTourElement = document.querySelector(".".concat(className));
    if (highlightedWelcomeTourElement) {
        highlightedWelcomeTourElement.classList.remove(className);
    }
};
export var setHighLight = function (id) {
    var selector = "[data-welcome-tour-id=\"".concat(id, "\"]");
    var welcomeTourElement = document.querySelector(selector);
    if (welcomeTourElement) {
        welcomeTourElement.classList.add(className);
    }
};
//# sourceMappingURL=utils.js.map