import React from "react";
import { Card } from "../card/card.component";

export const CardList = (props) => {
  const { products } = props;
  if (products == null) {
    return <h3>No Products To Show</h3>;
  }
  return (
    <div className="container mt-5 mb-5 ms-auto me-auto">
      <div className="row">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
