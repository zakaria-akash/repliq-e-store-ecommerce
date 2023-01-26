/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { Button, Modal } from "antd";
import { Typography } from "antd";
const { Title } = Typography;
import React, { useState } from "react";
import classes from "./product-card.module.css";
import Image from "next/legacy/image";

export const Card = (props) => {
  const { product } = props;
  const [modalStatus, setModalStatus] = useState(false);
  const showModal = () => {
    setModalStatus(true);
  };

  const handleCancel = () => {
    setModalStatus(false);
  };
  return (
    <div
      className={`card col-sm-6 col-md-3 bg-transparent text-info ${classes.cardContainer}`}
      style={{ height: 550 }}
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
      <button className="btn btn-success text-uppercase mr-2 px-4">
        Add to cart
      </button>
      <Button onClick={showModal}>
        <Title level={5}>DETAILS</Title>
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
                      >
                        <option defaultValue="Quantity">Quantity</option>
                        <option value="1">1</option>
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
                        <button className="btn btn-success text-uppercase mr-2 px-4">
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
        </div>
        ;
      </Modal>
    </div>
  );
};
