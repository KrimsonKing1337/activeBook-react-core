export function sleep(ms) {
    if (ms === void 0) { ms = 100; }
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, ms);
    });
}
//# sourceMappingURL=sleep.js.map