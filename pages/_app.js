// Importing the MainFooter component.
import MainFooter from "@/components/layout/main-footer";
// Importing the MainHeader component.
import MainHeader from "@/components/layout/main-header";
// Importing the Provider component from the react-redux library.
import { Provider } from "react-redux";
// Importing the Redux store from the store.js file.
import store from "@/store/redux/store";
// Importing the Fragment component from the react library.
import { Fragment } from "react";
// Importing the global styles.
import "../styles/globals.css";

// The main App component.
function MyApp({ Component, pageProps }) {
  // Returning the main layout of the application.
  return (
    // Wrapping the entire application with the Redux Provider component to make the store available to all components.
    <Provider store={store}>
      {/* Using a Fragment to group the components without adding an extra node to the DOM. */}
      <Fragment>
        {/* Rendering the MainHeader component. */}
        <MainHeader></MainHeader>
        {/* Rendering the current page component. */}
        <Component {...pageProps} />
        {/* Rendering the MainFooter component. */}
        <MainFooter></MainFooter>
      </Fragment>
    </Provider>
  );
}
// Exporting the MyApp component as the default export.
export default MyApp;