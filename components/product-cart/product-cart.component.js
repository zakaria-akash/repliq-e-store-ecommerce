/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useContext } from "react";
import ProductCartList from "./product-cart-list";
import CartContext from "@/store/cart-context";
import Notification from "./notification";

const ProductCart = () => {
  const CartCtx = useContext(CartContext);
  const activeNotification = CartCtx.cartNotification;
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
        <ProductCartList products={CartCtx.cartItems} />
      </div>
      <div className="modal-footer border-top-0 d-flex justify-content-end">
        <Link
          type="button"
          className="btn btn-success btn-lg fw-bold"
          href="/check-out"
          onClick={() => {
            setCartModalStatus(false);
          }}
        >
          Checkout
        </Link>
      </div>
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

export default ProductCart;
