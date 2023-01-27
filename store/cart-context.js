import React, { useState } from "react";
import { createContext } from "react";

const CartContext = createContext({
  cartItems: null,
  addItemToCart: (dataToAdd) => {},
  removeItemFromCart: (dataToRemove) => {},
});

export const CartContextProvider = (props) => {
  const [activeCartItems, setActiveCartItems] = useState([]);

  const addItemToCartHandler = (dataToAdd) => {
    setActiveCartItems((prevData) => [...prevData, dataToAdd]);
  };

  const removeItemFromCartHandler = (dataToRemove) => {
    setActiveCartItems(
      activeCartItems.filter((item) => item.id !== dataToRemove.id)
    );
  };

  const context = {
    cartItems: activeCartItems,
    addItemToCart: addItemToCartHandler,
    removeItemFromCart: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
