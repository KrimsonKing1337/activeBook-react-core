"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorComments = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Toggle_1 = require("../../../Toggle");
var utils_1 = require("../../../Menu/utils");
var store_1 = require("../../../../store");
var config_1 = require("../../../../store/config");
var AuthorComments = function () {
    var dispatch = (0, store_1.useDispatch)();
    var authorCommentsState = (0, store_1.useSelector)(config_1.configSelectors.authorComments);
    var toggleClickHandler = function (value) {
        dispatch(config_1.configActions.setAuthorComments(value));
        (0, utils_1.playAchievement)();
    };
    return ((0, jsx_runtime_1.jsx)(Toggle_1.Toggle, { label: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438 \u0430\u0432\u0442\u043E\u0440\u0430", isActiveDefault: authorCommentsState, onClickOn: function () { return toggleClickHandler(true); }, onClickOff: function () { return toggleClickHandler(false); } }));
};
exports.AuthorComments = AuthorComments;
//# sourceMappingURL=AuthorComments.js.map