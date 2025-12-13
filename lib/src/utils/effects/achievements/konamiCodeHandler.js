export function konamiCodeHandler(cb) {
    var pattern = [
        'ArrowUp',
        'ArrowUp',
        'ArrowDown',
        'ArrowDown',
        'ArrowLeft',
        'ArrowRight',
        'ArrowLeft',
        'ArrowRight',
        'b',
        'a',
    ];
    var current = 0;
    return function (e) {
        if (pattern.indexOf(e.key) < 0 || e.key !== pattern[current]) {
            current = 0;
            return;
        }
        current++;
        if (pattern.length === current) {
            current = 0;
            cb();
        }
    };
}
//# sourceMappingURL=konamiCodeHandler.js.map