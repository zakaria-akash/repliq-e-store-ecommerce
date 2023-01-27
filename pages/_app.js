import MainFooter from "@/components/layout/main-footer";
import MainHeader from "@/components/layout/main-header";
import { CartContextProvider } from "@/store/cart-context";
import { Fragment } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <Fragment>
        <MainHeader></MainHeader>
        <Component {...pageProps} />
        <MainFooter></MainFooter>
      </Fragment>
    </CartContextProvider>
  );
}
export default MyApp;
