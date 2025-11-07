"use client";
import { Provider } from 'react-redux';
import store from "@/store";
import UserContext from "@/components/Cartcontext/UserContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Providers({ children }) {
  return (
    <UserContext>
      <Provider store={store}>
        {children}
        <ToastContainer position="top-right" autoClose={2500} newestOnTop closeOnClick pauseOnFocusLoss draggable pauseOnHover theme="light" />
      </Provider>
    </UserContext>
  );
}
