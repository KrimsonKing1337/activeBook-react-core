"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var store_1 = require("../../../store");
var main_1 = require("../../../store/main");
var goToPage_1 = require("../../../utils/control/goToPage");
var utils_1 = require("./utils");
var Item_scss_1 = __importDefault(require("./Item.scss"));
var Item = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, pageNumber = _a.pageNumber;
    var pages = (0, store_1.useSelector)(main_1.mainSelectors.pages);
    var clickHandler = function () {
        var n = pageNumber > pages ? pages : pageNumber;
        (0, goToPage_1.goToPage)(n);
        (0, utils_1.playAchievement)();
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: Item_scss_1.default.item, onClick: clickHandler, children: [(0, jsx_runtime_1.jsx)("div", { className: Item_scss_1.default.title, children: title }), (0, jsx_runtime_1.jsx)("div", { className: Item_scss_1.default.subtitle, children: subtitle }), (0, jsx_runtime_1.jsx)("div", { className: Item_scss_1.default.pageNumber, children: pageNumber })] }));
};
exports.Item = Item;
//# sourceMappingURL=Item.js.map