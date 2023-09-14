import { jsx as _jsx } from "react/jsx-runtime";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'store';
import { achievementsSelectors } from 'store/achievements';
import './Achievement.scss';
export var Achievement = function () {
    var bgColor = useSelector(achievementsSelectors.toastBgColor);
    return (_jsx(ToastContainer, { position: "top-center", autoClose: 5000, hideProgressBar: true, newestOnTop: false, closeOnClick: true, rtl: false, pauseOnFocusLoss: false, draggable: false, pauseOnHover: true, closeButton: false, theme: "colored", toastStyle: { backgroundColor: bgColor } }));
};
//# sourceMappingURL=Achievement.js.map