'use client';
import "./globals.css";
import { Provider } from 'react-redux';
import store from "@/store";
import UserContext from "@/components/Cartcontext/UserContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserContext>
      <Provider store={store}>
        <body >{children}</body>
      </Provider>
      </UserContext>
    </html>
  );
}
