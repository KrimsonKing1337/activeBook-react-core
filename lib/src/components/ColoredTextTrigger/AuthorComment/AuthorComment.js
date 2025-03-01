"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorComment = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = __importDefault(require("classnames"));
var store_1 = require("../../../store");
var achievements_1 = require("../../../store/achievements");
var config_1 = require("../../../store/config");
var main_1 = require("../../../store/main");
var seenAuthorComments_1 = require("../../../utils/localStorage/seenAuthorComments");
var achievements_2 = require("../../../utils/effects/achievements");
var utils_1 = require("../../../utils/effects/achievements/utils");
var AuthorComment_scss_1 = __importDefault(require("./AuthorComment.scss"));
var AuthorComment = function (_a) {
    var _b;
    var children = _a.children, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.onClick, onClick = _d === void 0 ? function () { } : _d, etc = __rest(_a, ["children", "className", "onClick"]);
    var achievements = (0, store_1.useSelector)(achievements_1.achievementsSelectors.achievements);
    var authorCommentsIsOn = (0, store_1.useSelector)(config_1.configSelectors.authorComments);
    var authorCommentsLength = (0, store_1.useSelector)(main_1.mainSelectors.authorComments);
    var clickHandler = function () {
        seenAuthorComments_1.seenAuthorComments.add();
        var seenAuthorCommentsFromLocalStorage = seenAuthorComments_1.seenAuthorComments.get();
        if (authorCommentsLength === seenAuthorCommentsFromLocalStorage) {
            (0, achievements_2.play)({
                id: utils_1.Flags.allAuthorCommentsSeen,
                text: 'Все комментарии автора прочитаны!',
                type: 'gold',
            });
        }
        onClick();
    };
    var allPagesSeen = achievements === null || achievements === void 0 ? void 0 : achievements.allPagesSeen;
    var showComment = (allPagesSeen && authorCommentsIsOn) || isDemoMode;
    var authorCommentClassNames = (0, classnames_1.default)((_b = {},
        _b[AuthorComment_scss_1.default.authorComment] = true,
        _b[className] = !!className,
        _b));
    return showComment ? ((0, jsx_runtime_1.jsxs)("span", __assign({ className: authorCommentClassNames, onClick: clickHandler }, etc, { children: [' ', children] }))) :
        (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children });
};
exports.AuthorComment = AuthorComment;
//# sourceMappingURL=AuthorComment.js.map