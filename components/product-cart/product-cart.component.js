// Disabling eslint rule for using img element.
/* eslint-disable @next/next/no-img-element */
// Importing the Link component from the next/link library.
import Link from "next/link";
// Importing the React library.
import React from "react";
// Importing the useSelector hook from the react-redux library.
import { useSelector } from "react-redux";
// Importing the ProductCartList component.
import ProductCartList from "./product-cart-list";
// Importing the Notification component.
import Notification from "./notification";

// The ProductCart component.
const ProductCart = () => {
  // Getting the cart items from the Redux store.
  const cartItems = useSelector((state) => state.cart.cartItems);
  // Getting the active notification from the Redux store.
  const activeNotification = useSelector((state) => state.cart.cartNotification);

  // Returning the JSX for the component.
  return (
    <div
      className="modal-content border-0 mt-4 mx-auto mb-1"
      style={{ backgroundColor: "#D3D3D3" }}
    >
      <div className="modal-header border-bottom-0">
        <h5 className="modal-title category-title" id="exampleModalLabel">
          Your Shopping Cart
        </h5>
      </div>
      <div className="modal-body">
        {/* Rendering the ProductCartList component and passing the cart items as props. */}
        <ProductCartList products={cartItems} />
      </div>
      <div className="modal-footer border-top-0 d-flex justify-content-end">
        {/* A link to the checkout page. */}
        <Link
          type="button"
          className="btn btn-success btn-lg fw-bold"
          href="/check-out"
        >
          Checkout
        </Link>
      </div>
      {/* If there is an active notification, render the Notification component. */}
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </div>
  );
};

// Exporting the ProductCart component as the default export.
export default ProductCart;