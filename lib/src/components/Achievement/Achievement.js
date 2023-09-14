"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Achievement = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
var store_1 = require("../../store");
var achievements_1 = require("../../store/achievements");
require("./Achievement.scss");
var Achievement = function () {
    var bgColor = (0, store_1.useSelector)(achievements_1.achievementsSelectors.toastBgColor);
    return ((0, jsx_runtime_1.jsx)(react_toastify_1.ToastContainer, { position: "top-center", autoClose: 5000, hideProgressBar: true, newestOnTop: false, closeOnClick: true, rtl: false, pauseOnFocusLoss: false, draggable: false, pauseOnHover: true, closeButton: false, theme: "colored", toastStyle: { backgroundColor: bgColor } }));
};
exports.Achievement = Achievement;
//# sourceMappingURL=Achievement.js.map