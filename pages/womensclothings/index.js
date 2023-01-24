import Head from "next/head";
import React, { Fragment, useEffect, useState } from "react";
import { CardList } from "../../components/card-list/card-list.component";

const WomensClothings = () => {
  const [loadedProducts, setLoadedProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then((res) => res.json())
      .then((items) => setLoadedProducts(items));
  }, []);
  let headTagForThisComponent = (
    <Head>
      <title>REPLIQ || Category-Women</title>
      <meta name="description" content="REPLIQ || Category-women" />
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
          <div className="category-title col-sm-12 text-center">
            Women's Wears
          </div>
        </div>
      </div>
      <CardList products={loadedProducts} />
    </Fragment>
  );
};

export default WomensClothings;
