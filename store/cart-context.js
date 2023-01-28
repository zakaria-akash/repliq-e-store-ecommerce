import React, { useEffect, useState } from "react";
import { createContext } from "react";

const CartContext = createContext({
  cartItems: null,
  addItemToCart: (dataToAdd) => {},
  removeItemFromCart: (dataToRemove) => {},
});

export const CartContextProvider = (props) => {
  const [activeCartItems, setActiveCartItems] = useState([]);

  const addItemToCartHandler = (dataToAdd) => {
    activeCartItems.map((item) => {
      if (item.id == dataToAdd.id) {
        dataToAdd.quantity =
          parseInt(item.quantity) + parseInt(dataToAdd.quantity);
        setActiveCartItems(activeCartItems.filter((itm) => itm.id !== item.id));
      }
    });
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
