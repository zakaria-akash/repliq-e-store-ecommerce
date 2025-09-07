// Importing the configureStore function from the Redux Toolkit library.
import { configureStore } from "@reduxjs/toolkit";
// Importing the cart reducer from the cartSlice.js file.
import cartReducer from "./cartSlice";

// Configuring the Redux store.
const store = configureStore({
  // An object containing all the reducers for the store.
  reducer: {
    // The cart reducer is added to the store under the name "cart".
    cart: cartReducer,
  },
});

// Exporting the configured Redux store.
export default store;