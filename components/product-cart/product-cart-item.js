// Disabling eslint rule for using img element.
/* eslint-disable @next/next/no-img-element */
// Importing the React library.
import React from "react";
// Importing the useDispatch hook from the react-redux library.
import { useDispatch } from "react-redux";
// Importing the removeItemFromCart and sendCartNotification action creators from the cartSlice.js file.
import { removeItemFromCart, sendCartNotification } from "@/store/redux/cartSlice";

// The ProductCartItem component.
const ProductCartItem = (props) => {
  // Destructuring the product object from the props.
  const { product } = props;
  // Getting the dispatch function from the useDispatch hook.
  const dispatch = useDispatch();

  // A function to handle the close button click event.
  const handleCloseButton = () => {
    // Creating the notification data object.
    const cartNotificationData = {
      title: "removing...",
      message: `${product.title} is removed from your shopping-cart`,
      status: "removed",
    };

    // Dispatching the removeItemFromCart action with the product id as the payload.
    dispatch(removeItemFromCart(product.id));
    // Dispatching the sendCartNotification action with the notification data as the payload.
    dispatch(sendCartNotification(cartNotificationData));
  };

  // Returning the JSX for the component.
  return (
    <tr key={product.id}>
      <td className="w-25">
        <img
          src={product.image}
          className="img-fluid img-thumbnail"
          alt={product.title}
          style={{ width: "4rem", height: "4rem" }}
        />
      </td>
      <td>{product.title}</td>
      <td>${product.price}</td>
      <td className="qty">
        <p className="text-center">{product.quantity}</p>
      </td>
      <td>${parseInt(product.price) * parseInt(product.quantity)}</td>
      <td>
        <button onClick={handleCloseButton} className="btn btn-danger ">
          <i className="fa fa-times"></i>
        </button>
      </td>
    </tr>
  );
};

// Exporting the ProductCartItem component as the default export.
export default ProductCartItem;