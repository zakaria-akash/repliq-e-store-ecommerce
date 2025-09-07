// Disabling eslint rule for using img element.
/* eslint-disable @next/next/no-img-element */
// Disabling eslint rule for unescaped entities.
/* eslint-disable react/no-unescaped-entities */
// Importing the Button and Modal components from the antd library.
import { Button, Modal } from "antd";
// Importing the Typography component from the antd library.
import { Typography } from "antd";
// Destructuring the Title component from the Typography component.
const { Title } = Typography;
// Importing the React, Fragment, useRef, and useState hooks from the react library.
import React, { Fragment, useRef, useState } from "react";
// Importing the useDispatch and useSelector hooks from the react-redux library.
import { useDispatch, useSelector } from "react-redux";
// Importing the css module for the component.
import classes from "./product-card.module.css";
// Importing the Image component from the next/legacy/image library.
import Image from "next/legacy/image";

// Importing the addItemToCart and sendCartNotification action creators from the cartSlice.js file.
import { addItemToCart, sendCartNotification } from "@/store/redux/cartSlice";
// Importing the Notification component.
import Notification from "../product-cart/notification";

// The Card component.
export const Card = (props) => {
  // Destructuring the product object from the props.
  const { product } = props;
  // Getting the dispatch function from the useDispatch hook.
  const dispatch = useDispatch();
  // A state variable to control the modal status.
  const [modalStatus, setModalStatus] = useState(false);
  // A ref to get the value of the product quantity input.
  const productQtityRef = useRef();

  // Getting the active notification from the Redux store.
  const activeNotification = useSelector((state) => state.cart.cartNotification);

  // A function to show the modal.
  const showModal = () => {
    setModalStatus(true);
  };

  // A function to handle the cancel event of the modal.
  const handleCancel = () => {
    setModalStatus(false);
  };

  // A function to handle the add to cart button click event.
  const addToCartHandler = () => {
    // Getting the entered quantity from the input ref.
    const enteredQuantity = productQtityRef.current.value;

    // Creating the item data object to add to the cart.
    const addTocartItemData = {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      quantity: parseInt(enteredQuantity),
    };

    // Creating the notification data object.
    const cartNotificationData = {
      title: "adding...",
      message: `${product.title} is added to your shopping-cart`,
      status: "added",
    };

    // Dispatching the addItemToCart action with the item data as the payload.
    dispatch(addItemToCart(addTocartItemData));
    // Dispatching the sendCartNotification action with the notification data as the payload.
    dispatch(sendCartNotification(cartNotificationData));
  };

  // Returning the JSX for the component.
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
            {/* If there is an active notification, render the Notification component. */}
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