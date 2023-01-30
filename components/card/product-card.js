/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { Button, Modal } from "antd";
import { Typography } from "antd";
const { Title } = Typography;
import React, { Fragment, useContext, useRef, useState } from "react";
import classes from "./product-card.module.css";
import Image from "next/legacy/image";

import CartContext from "@/store/cart-context";
import Notification from "../product-cart/notification";

export const Card = (props) => {
  const { product } = props;
  const CartCtx = useContext(CartContext);
  const [modalStatus, setModalStatus] = useState(false);
  const productQtityRef = useRef();

  const activeNotification = CartCtx.cartNotification;
  const showModal = () => {
    setModalStatus(true);
  };

  const handleCancel = () => {
    setModalStatus(false);
  };

  const addToCartHandler = () => {
    const enteredQuantity = productQtityRef.current.value;

    const addTocartItemData = {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      quantity: enteredQuantity,
    };
    const cartNotificationData = {
      title: "adding...",
      message: `${product.title} is added to your shopping-cart`,
      status: "added",
    };
    CartCtx.addItemToCart(addTocartItemData);
    CartCtx.showCartNotification(cartNotificationData);
  };
  return (
    <Fragment>
      <div
        className={`card col-sm-6 col-md-3 bg-transparent text-info ${classes.cardContainer}`}
        style={{ height: 520 }}
      >
        <Image
          loader={() => product.image}
          alt={`${product.title}`}
          src={product.image}
          width={250}
          height={300}
          layout="responsive"
        />
        <p className="fw-bold">{product.title}</p>
        <p>Category: {product.category}</p>
        <p>Price: ${product.price}</p>
        <p>
          Rating: {product.rating.rate} ({product.rating.count})
        </p>
        <Button onClick={showModal} style={{ height: "3rem" }}>
          <Title level={2}>DETAILS</Title>
        </Button>
        <Modal open={modalStatus} onOk={handleCancel} onCancel={handleCancel}>
          <div className="container m-0 p-0">
            <div className="row d-flex justify-content-center">
              <div className="col-md-12">
                <div className="card border-0">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="images p-0">
                        <div className="text-center p-2">
                          {" "}
                          <Image
                            loader={() => product.image}
                            alt={`${product.title}`}
                            src={product.image}
                            width={250}
                            height={300}
                            layout="responsive"
                          />{" "}
                        </div>
                      </div>
                      <div className="card border-0">
                        <p>{product.description}</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-4">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center">
                            {" "}
                            <i className="fa fa-long-arrow-left"></i>{" "}
                            <span className="ml-1">Back</span>{" "}
                          </div>{" "}
                          <i
                            className="fa fa-shopping-cart text-muted"
                            style={{ fontSize: "150%" }}
                          ></i>
                        </div>
                        <div className="mt-4 mb-3">
                          {" "}
                          <span className="text-uppercase text-muted">
                            REPLIQ
                          </span>
                          <h5 className="text-uppercase">{product.title}</h5>
                          <div className="price d-flex flex-row align-items-center">
                            {" "}
                            <span>Price: ${product.price}</span>
                          </div>
                        </div>
                        <p>Category: {product.category}</p>
                        <p>
                          Rating: {product.rating.rate} ({product.rating.count})
                        </p>
                        <div className="mt-5">
                          <h6 className="text-uppercase">Size</h6>{" "}
                          <label className="radio">
                            {" "}
                            <input
                              type="radio"
                              name="size"
                              value="S"
                              checked
                              onChange={(e) => {}}
                            />{" "}
                            <span>S</span>{" "}
                          </label>{" "}
                          <label className="radio">
                            {" "}
                            <input type="radio" name="size" value="M" />{" "}
                            <span>M</span>{" "}
                          </label>{" "}
                          <label className="radio">
                            {" "}
                            <input type="radio" name="size" value="L" />{" "}
                            <span>L</span>{" "}
                          </label>{" "}
                          <label className="radio">
                            {" "}
                            <input type="radio" name="size" value="XL" />{" "}
                            <span>XL</span>{" "}
                          </label>{" "}
                          <label className="radio">
                            {" "}
                            <input type="radio" name="size" value="XXL" />{" "}
                            <span>XXL</span>{" "}
                          </label>
                        </div>
                        <select
                          className="form-select mt-3"
                          aria-label="Default select example"
                          ref={productQtityRef}
                        >
                          {/* <option defaultValue="Quantity">
                          Quantity
                        </option> */}
                          <option defaultValue="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                        </select>
                        <div className="mt-4 align-items-center">
                          {" "}
                          <button
                            onClick={addToCartHandler}
                            className="btn btn-success text-uppercase mr-2 px-4"
                          >
                            Add to cart
                          </button>{" "}
                        </div>
                        <i className="fa fa-heart text-muted fa-lg"></i>{" "}
                        <i className="fa fa-share-alt text-muted fa-lg"></i>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {activeNotification && (
              <Notification
                title={activeNotification.title}
                message={activeNotification.message}
                status={activeNotification.status}
              />
            )}
          </div>
        </Modal>
      </div>
    </Fragment>
  );
};
