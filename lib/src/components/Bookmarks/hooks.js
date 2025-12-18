import { useEffect } from 'react';
import { useDispatch, useSelector } from 'store';
import { selectors } from 'store/bookmarks/selectors';
import { bookmarksActions } from 'store/bookmarks';
export function useBookmarks() {
    var dispatch = useDispatch();
    var bookmarks = useSelector(selectors.bookmarks);
    var setBookmarks = function (bookmarks) {
        dispatch(bookmarksActions.setBookmarks(bookmarks));
    };
    useEffect(function () {
        if (bookmarks.length > 0) {
            return;
        }
        var bookmarksAsJSON = localStorage.getItem('bookmarks');
        if (bookmarksAsJSON) {
            var bookmarksAsArray = JSON.parse(bookmarksAsJSON);
            dispatch(bookmarksActions.setBookmarks(bookmarksAsArray));
        }
    }, []);
    return { bookmarks: bookmarks, setBookmarks: setBookmarks };
}
//# sourceMappingURL=hooks.js.map