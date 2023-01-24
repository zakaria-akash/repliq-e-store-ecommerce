import Head from "next/head";
import React, { Fragment, useEffect, useState } from "react";
import { CardList } from "../../components/card-list/card-list.component";

const MensClothings = () => {
  const [loadedProducts, setLoadedProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((items) => setLoadedProducts(items));
  }, []);
  let headTagForThisComponent = (
    <Head>
      <title>REPLIQ || Category-Jewelery</title>
      <meta name="description" content="REPLIQ || Category-Jewelery" />
    </Head>
  );

  if (!loadedProducts) {
    return (
      <div>
        {headTagForThisComponent}
        <h3 className="center">Loading...</h3>
      </div>
    );
  }

  return (
    <Fragment>
      {headTagForThisComponent}
      <div className="container mt-2 mb-0">
        <div className="row">
          <div className="category-title col-sm-12 text-center">Jewelery</div>
        </div>
      </div>
      <CardList products={loadedProducts} />
    </Fragment>
  );
};

export default MensClothings;
