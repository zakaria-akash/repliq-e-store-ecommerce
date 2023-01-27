import React, { Fragment } from "react";
import ProductCartItem from "./product-cart-item";

const ProductCartList = (props) => {
  const { products } = props;
  let TotalPrice = 0;
  let Price = products.map(
    (product) =>
      (TotalPrice =
        parseInt(TotalPrice) +
        parseInt(product.quantity) * parseInt(product.price))
  );
  return (
    <Fragment>
      <table className="table table-image">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductCartItem key={product.id} product={product} />
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-end">
        <h5>
          Total: <span className="text-success">${TotalPrice}</span>
        </h5>
      </div>
    </Fragment>
  );
};

export default ProductCartList;
