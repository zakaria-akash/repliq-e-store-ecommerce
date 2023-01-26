import { Button } from "antd";
import Link from "next/link";
import Head from "next/head";
import { Fragment } from "react";

const AdminPanel = () => {
  let headTagForThisPage = (
    <Head>
      <title>Admin</title>
      <meta name="description" content="REPLIQ || Admin Panel Page" />
    </Head>
  );
  return (
    <Fragment>
      {headTagForThisPage}
      <div className="container mt-5 mb-5 ms-auto me-auto">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12 text-center border border-3 border-info">
            <h1>Repliq E-STore Admin Panel</h1>
          </div>
          <div
            className="col-sm-12 col-md-4 text-center d-flex align-items-center"
            style={{ width: 250, height: 250 }}
          >
            <Link
              className="btn btn-lg btn-secondary fw-bold"
              href="/admin-panel/show-all-products"
            >
              Show All Products
            </Link>
          </div>
          <div
            className="col-sm-12 col-md-4 text-center d-flex align-items-center"
            style={{ width: 250, height: 250 }}
          >
            <Link
              className="btn btn-lg btn-secondary fw-bold"
              href="/admin-panel/show-all-users"
            >
              All Registered Users
            </Link>
          </div>
          <div
            className="col-sm-12 col-md-4 text-center d-flex align-items-center"
            style={{ width: 250, height: 250 }}
          >
            <Link
              className="btn btn-lg btn-secondary fw-bold"
              href="/admin-panel/new-product-form"
            >
              Add New Product
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AdminPanel;
