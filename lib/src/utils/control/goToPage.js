"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.goNextPage = exports.goPrevPage = exports.goToPage = void 0;
var store_1 = require("../../store");
var main_1 = require("../../store/main");
function goToPage(n) {
    store_1.store.dispatch(main_1.mainActions.setPage(n));
}
exports.goToPage = goToPage;
function goPrevPage() {
    store_1.store.dispatch(main_1.mainActions.prevPage());
}
exports.goPrevPage = goPrevPage;
function goNextPage() {
    store_1.store.dispatch(main_1.mainActions.nextPage());
}
exports.goNextPage = goNextPage;
//# sourceMappingURL=goToPage.js.map