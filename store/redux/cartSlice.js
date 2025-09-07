// Importing the createSlice function from the Redux Toolkit library.
import { createSlice } from "@reduxjs/toolkit";

// Defining the initial state of the cart slice.
const initialState = {
  // An array to hold the items in the cart.
  cartItems: [],
  // An object to hold the notification data.
  cartNotification: null,
};

// Creating a new slice of the Redux store for the cart.
const cartSlice = createSlice({
  // The name of the slice.
  name: "cart",
  // The initial state of the slice.
  initialState,
  // An object containing the reducer functions for the slice.
  reducers: {
    // A reducer function to add an item to the cart.
    addItemToCart(state, action) {
      // Getting the new item from the action payload.
      const newItem = action.payload;
      // Checking if the item already exists in the cart.
      const existingItem = state.cartItems.find((item) => item.id === newItem.id);
      // If the item already exists, increase its quantity.
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        // If the item does not exist, add it to the cart.
        state.cartItems.push(newItem);
      }
    },
    // A reducer function to remove an item from the cart.
    removeItemFromCart(state, action) {
      // Getting the id of the item to remove from the action payload.
      const id = action.payload;
      // Filtering the cart items to remove the item with the specified id.
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    },
    // A reducer function to show a notification.
    showCartNotification(state, action) {
      // Setting the cart notification data from the action payload.
      state.cartNotification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    // A reducer function to hide the notification.
    hideCartNotification(state) {
      // Setting the cart notification to null.
      state.cartNotification = null;
    },
  },
});

// Exporting the action creators for the cart slice.
export const {
  addItemToCart,
  removeItemFromCart,
  showCartNotification,
  hideCartNotification,
} = cartSlice.actions;

// Exporting a thunk action creator to send a notification and then hide it after 3 seconds.
export const sendCartNotification = (notificationData) => (dispatch) => {
  // Dispatching the showCartNotification action with the notification data.
  dispatch(showCartNotification(notificationData));
  // Setting a timeout to dispatch the hideCartNotification action after 3 seconds.
  setTimeout(() => {
    dispatch(hideCartNotification());
  }, 3000);
};

// Exporting the reducer function for the cart slice.
export default cartSlice.reducer;