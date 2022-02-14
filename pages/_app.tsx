import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import '../styles/styles.scss'

import { store } from "../app/store";
import Header from "../components/layout/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header/>
      <ToastContainer/>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
