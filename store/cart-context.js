import React, { useEffect, useState } from "react";
import { createContext } from "react";

const CartContext = createContext({
  cartItems: null,
  addItemToCart: (dataToAdd) => {},
  removeItemFromCart: (dataToRemove) => {},
  cartNotification: null,
  showCartNotification: (cartNotificationData) => {},
  hideCartNotification: () => {},
});

export const CartContextProvider = (props) => {
  const [activeCartItems, setActiveCartItems] = useState([]);
  const [activeCartNotification, setActiveCartNotification] = useState();

  useEffect(() => {
    if (
      activeCartNotification &&
      (activeCartNotification.status === "added" ||
        activeCartNotification.status === "removed")
    ) {
      const timer = setTimeout(() => {
        setActiveCartNotification(null);
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeCartNotification]);

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

  const showCartNotificationHandller = (cartNotificationData) => {
    setActiveCartNotification(cartNotificationData);
  };

  const hideCartNotificationHandler = () => {
    setActiveCartNotification(null);
  };

  const context = {
    cartItems: activeCartItems,
    addItemToCart: addItemToCartHandler,
    removeItemFromCart: removeItemFromCartHandler,
    cartNotification: activeCartNotification,
    showCartNotification: showCartNotificationHandller,
    hideCartNotification: hideCartNotificationHandler,
  };
  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
