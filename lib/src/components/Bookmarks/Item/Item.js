"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var goToPage_1 = require("../../../utils/control/goToPage");
var Item_scss_1 = __importDefault(require("./Item.scss"));
var Item = function (_a) {
    var pageNumber = _a.pageNumber, onDelete = _a.onDelete;
    var clickHandler = function () {
        (0, goToPage_1.goToPage)(pageNumber);
    };
    var deleteIconClickHandler = function (e) {
        e.stopPropagation();
        onDelete(pageNumber);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: Item_scss_1.default.item, onClick: clickHandler, children: [(0, jsx_runtime_1.jsxs)("div", { className: Item_scss_1.default.pageNumber, children: ["\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 ", pageNumber] }), (0, jsx_runtime_1.jsx)("div", { className: Item_scss_1.default.deleteIcon, onClick: deleteIconClickHandler, children: (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faTimes }) })] }));
};
exports.Item = Item;
//# sourceMappingURL=Item.js.map