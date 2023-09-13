"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeCssHover = void 0;
var replaceCssPseudoClassWith_1 = require("./replaceCssPseudoClassWith");
function removeCssHover() {
    if ('ontouchstart' in document.documentElement) {
        setTimeout(function () {
            /*
             тут что угодно можно передать, на самом деле, :hover уже пропадёт.
             но это важно в addTouchSupportForCssHover.ts
             если мы хотим имитировать :hover, но на тач-устройствах,
             нужно там в addClassListHover и removeClassListHover указать тот же селектор
            */
            (0, replaceCssPseudoClassWith_1.replaceCssPseudoClassWith)(':hover', 'disable-hover');
        }, 0);
    }
}
exports.removeCssHover = removeCssHover;
//# sourceMappingURL=removeCssHover.js.map