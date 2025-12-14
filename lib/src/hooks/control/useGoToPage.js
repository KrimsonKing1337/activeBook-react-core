import { startTransition } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { mainActions } from '../../store/main';
import { useDispatch } from '../../store';
export function useGoToPage() {
    var dispatch = useDispatch();
    var location = useLocation();
    var navigate = useNavigate();
    var goToPage = function (page) {
        if (page === 0) {
            dispatch(mainActions.setPage(0));
            navigate('/');
            return;
        }
        startTransition(function () {
            dispatch(mainActions.setPage(page));
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