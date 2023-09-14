"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBookmarks = void 0;
var react_1 = require("react");
var store_1 = require("../../store");
var selectors_1 = require("../../store/bookmarks/selectors");
var bookmarks_1 = require("../../store/bookmarks");
function useBookmarks() {
    var dispatch = (0, store_1.useDispatch)();
    var bookmarks = (0, store_1.useSelector)(selectors_1.selectors.bookmarks);
    var setBookmarks = function (bookmarks) {
        dispatch(bookmarks_1.bookmarksActions.setBookmarks(bookmarks));
    };
    (0, react_1.useEffect)(function () {
        if (bookmarks.length > 0) {
            return;
        }
        var bookmarksAsJSON = localStorage.getItem('bookmarks');
        if (bookmarksAsJSON) {
            var bookmarksAsArray = JSON.parse(bookmarksAsJSON);
            dispatch(bookmarks_1.bookmarksActions.setBookmarks(bookmarksAsArray));
        }
    }, []);
    return { bookmarks: bookmarks, setBookmarks: setBookmarks };
}
exports.useBookmarks = useBookmarks;
//# sourceMappingURL=hooks.js.map