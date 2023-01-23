import MainFooter from "@/components/layout/main-footer";
import MainHeader from "@/components/layout/main-header";
import { Fragment } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <MainHeader></MainHeader>
      <Component {...pageProps} />
      <MainFooter></MainFooter>
    </Fragment>
  );
}
export default MyApp;
