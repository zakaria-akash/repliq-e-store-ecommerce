/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import React, { Fragment, useEffect, useState } from "react";
import { CardList } from "../../components/card-list/card-list.component";

const MensClothings = () => {
  const [loadedProducts, setLoadedProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then((res) => res.json())
      .then((items) => setLoadedProducts(items));
  }, []);
  let headTagForThisPage = (
    <Head>
      <title>REPLIQ || Category-Men</title>
      <meta name="description" content="REPLIQ || Category-Men" />
    </Head>
  );

  if (!loadedProducts) {
    return (
      <div>
        {headTagForThisPage}
        <h3 className="center">Loading...</h3>
      </div>
    );
  }

  return (
    <Fragment>
      {headTagForThisPage}
      <div className="container mt-2 mb-0">
        <div className="row">
          <div className="category-title col-sm-12 text-center">
            Men's Dresses
          </div>
        </div>
      </div>
      <CardList products={loadedProducts} />
    </Fragment>
  );
};

export default MensClothings;
