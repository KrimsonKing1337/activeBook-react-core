import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useSelector } from 'store';
import { achievementsSelectors } from 'store/achievements';

import './Achievement.scss';

export const Achievement = () => {
  const bgColor = useSelector(achievementsSelectors.toastBgColor);

  return (
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover
      closeButton={false}
      theme="colored"
      toastStyle={{ backgroundColor: bgColor }}
    />
  );
};
