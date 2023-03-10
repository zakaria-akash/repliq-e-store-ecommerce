/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { Fragment, useState } from "react";
import Link from "next/link";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import ProductCart from "../product-cart/product-cart.component";

const MainHeader = () => {
  const [cartModalStatus, setCartModalStatus] = useState(false);
  return (
    <Fragment>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-info fw-bold fs-3"
        style={{ height: 80, zIndex: 1000 }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand fs-3" href="/">
            <img src="/images/logo.jpg" alt="logo" width="50" height="50" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse bg-info ps-2 pb-3"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link active dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul
                  className="dropdown-menu bg-info fs-4 fw-bold pb-0"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link
                      className="dropdown-item border-bottom border-dark"
                      href="/mensclothings"
                    >
                      Men's Dresses
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item border-bottom border-dark"
                      href="/womensclothings"
                    >
                      Women's Wears
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item border-bottom border-dark"
                      href="/jewelery"
                    >
                      Jewelery
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item border-bottom border-dark"
                      href="/electronics"
                    >
                      Electronics
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="/admin-panel"
                >
                  Admin
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="/sign-in"
                >
                  Sign In
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success text-dark fw-bold border border-success border-2"
                type="submit"
              >
                Search
              </button>
            </form>
            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-outline-success btn-lg text-bold ms-2 border-0"
                onClick={() => {
                  setCartModalStatus(true);
                }}
              >
                <ShoppingCartOutlined style={{ fontSize: "2.5rem" }} />
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* start cart modal */}
      <Modal
        open={cartModalStatus}
        onOk={() => {
          setCartModalStatus(false);
        }}
        onCancel={() => {
          setCartModalStatus(false);
        }}
        centered
      >
        <ProductCart />
      </Modal>
      {/* end cart modal */}
    </Fragment>
  );
};

export default MainHeader;
