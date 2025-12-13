import { startTransition } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
export function useGoToPage() {
    var location = useLocation();
    var navigate = useNavigate();
    var goToPage = function (page) {
        startTransition(function () {
            navigate("/page-".concat(page));
        });
    };
    var goNextPage = function () {
        var pathname = location.pathname;
        if (pathname === '/') {
            goToPage(1);
            return;
        }
        var currentPage = Number(pathname.split('-')[1]);
        goToPage(currentPage + 1);
    };
    var goPrevPage = function () {
        var pathname = location.pathname;
        if (pathname === '/') {
            return;
        }
        var currentPage = Number(pathname.split('-')[1]);
        goToPage(currentPage - 1);
    };
    return {
        goToPage: goToPage,
        goNextPage: goNextPage,
        goPrevPage: goPrevPage,
    };
}
//# sourceMappingURL=useGoToPage.js.map