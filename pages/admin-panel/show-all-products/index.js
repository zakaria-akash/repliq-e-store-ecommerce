import { Fragment, useEffect, useState } from "react";
import { CardListAdmin } from "../../../components/card-list/card-list.admin.component";
import Head from "next/head";

const ShowAllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);

  let headTagForThisPage = (
    <Head>
      <title>All Products Admin</title>
      <meta
        name="description"
        content="REPLIQ || All Products Admin Panel Page"
      />
    </Head>
  );
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((items) => setAllProducts(items));
  }, []);

  return (
    <Fragment>
      {headTagForThisPage}
      <div className="container mt-5 mb-5 ms-auto me-auto">
        <div className="row">
          <div className="col-sm-12 text-center border border-3 border-info rounded-pill mb-3">
            <h1>Repliq E-STore Admin Panel</h1>
          </div>
          <div className="category-title badge mb-0 pb-0 col-sm-12 text-center">
            All Product List
          </div>
        </div>
      </div>
      <CardListAdmin products={allProducts} />
    </Fragment>
  );
};

export default ShowAllProducts;
