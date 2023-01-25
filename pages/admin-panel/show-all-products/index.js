import { Fragment, useEffect, useState } from "react";
import { CardList } from "@/components/card-list/card-list.component";
import { CardListAdmin } from "../../../components/card-list/card-list.admin.component";

const ShowAllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  // const fetchItems = async () => {
  //   const data = await fetch("https://fakestoreapi.com/products");
  //   const items = await data.json();
  //   setAllProducts(items);
  // };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((items) => setAllProducts(items));
  }, []);

  return (
    <Fragment>
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
