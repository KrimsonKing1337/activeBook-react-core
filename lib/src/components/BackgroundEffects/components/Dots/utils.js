"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDotsAsArray = exports.getPlaceInLineByLocationStyles = exports.orderDefaultState = void 0;
var nanoid_1 = require("nanoid");
exports.orderDefaultState = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
};
function getPlaceInLineByLocationStyles(styles) {
    var top = styles.top, right = styles.right, bottom = styles.bottom, left = styles.left;
    if (top === '0px' && left === '0px') {
        return 1;
    }
    if (top === '0px' && right === '0px') {
        return 2;
    }
    if (bottom === '0px' && right === '0px') {
        return 3;
    }
    if (bottom === '0px' && left === '0px') {
        return 4;
    }
    return 0;
}
exports.getPlaceInLineByLocationStyles = getPlaceInLineByLocationStyles;
function createDotsAsArray() {
    var arr = [];
    for (var i = 0; i < 4; i++) {
        arr.push((0, nanoid_1.nanoid)());
    }
    return arr;
}
exports.createDotsAsArray = createDotsAsArray;
//# sourceMappingURL=utils.js.map