/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import CartContext from "@/store/cart-context";

const ProductCartItem = (props) => {
  const { product } = props;
  const CartCtx = useContext(CartContext);
  const handleCloseButton = () => {
    const removeFromcartItemData = {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      quantity: product.quantity,
    };
    const cartNotificationData = {
      title: "removing...",
      message: `${product.title} is removed from your shopping-cart`,
      status: "removed",
    };

    CartCtx.removeItemFromCart(removeFromcartItemData);
    CartCtx.showCartNotification(cartNotificationData);
  };
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

export default ProductCartItem;
