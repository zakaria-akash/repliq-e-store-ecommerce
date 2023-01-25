/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { Button, Modal, Form, Input } from "antd";
import { Typography } from "antd";
const { Title } = Typography;
import { SnippetsTwoTone } from "@ant-design/icons";
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
      className={`card col-md-3 bg-transparent text-info ${classes.cardContainer}`}
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
      <button class="btn btn-success text-uppercase mr-2 px-4">
        Add to cart
      </button>
      <Button onClick={showModal}>
        <Title level={5}>DETAILS</Title>
      </Button>
      <Modal open={modalStatus} onOk={handleCancel} onCancel={handleCancel}>
        <div class="container m-0 p-0">
          <div class="row d-flex justify-content-center">
            <div class="col-md-12">
              <div class="card border-0">
                <div class="row">
                  <div class="col-md-6">
                    <div class="images p-0">
                      <div class="text-center p-2">
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
                  <div class="col-md-6">
                    <div class="p-4">
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex align-items-center">
                          {" "}
                          <i class="fa fa-long-arrow-left"></i>{" "}
                          <span class="ml-1">Back</span>{" "}
                        </div>{" "}
                        <i class="fa fa-shopping-cart text-muted"></i>
                      </div>
                      <div class="mt-4 mb-3">
                        {" "}
                        <span class="text-uppercase text-muted">REPLIQ</span>
                        <h5 class="text-uppercase">{product.title}</h5>
                        <div class="price d-flex flex-row align-items-center">
                          {" "}
                          <span>Price: ${product.price}</span>
                        </div>
                      </div>
                      <p>Category: {product.category}</p>
                      <p>
                        Rating: {product.rating.rate} ({product.rating.count})
                      </p>
                      <div class="mt-5">
                        <h6 class="text-uppercase">Size</h6>{" "}
                        <label class="radio">
                          {" "}
                          <input
                            type="radio"
                            name="size"
                            value="S"
                            checked
                          />{" "}
                          <span>S</span>{" "}
                        </label>{" "}
                        <label class="radio">
                          {" "}
                          <input type="radio" name="size" value="M" />{" "}
                          <span>M</span>{" "}
                        </label>{" "}
                        <label class="radio">
                          {" "}
                          <input type="radio" name="size" value="L" />{" "}
                          <span>L</span>{" "}
                        </label>{" "}
                        <label class="radio">
                          {" "}
                          <input type="radio" name="size" value="XL" />{" "}
                          <span>XL</span>{" "}
                        </label>{" "}
                        <label class="radio">
                          {" "}
                          <input type="radio" name="size" value="XXL" />{" "}
                          <span>XXL</span>{" "}
                        </label>
                      </div>
                      <select
                        class="form-select mt-3"
                        aria-label="Default select example"
                      >
                        <option selected>Quantity</option>
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
                      <div class="mt-4 align-items-center">
                        {" "}
                        <button class="btn btn-success text-uppercase mr-2 px-4">
                          Add to cart
                        </button>{" "}
                      </div>
                      <i class="fa fa-heart text-muted fa-lg"></i>{" "}
                      <i class="fa fa-share-alt text-muted fa-lg"></i>{" "}
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
