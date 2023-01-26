import { Button, Modal, Form, Input } from "antd";
import { DeleteTwoTone, EditOutlined, WarningFilled } from "@ant-design/icons";
import React, { useState } from "react";
import classes from "./product-card-admin.module.css";
import Image from "next/legacy/image";

export const CardAdmin = (props) => {
  const { product } = props;
  const [updateModalStatus, setUpdateModalStatus] = useState(false);
  const [deleteModalStatus, setDeleteModalStatus] = useState(false);
  const [updatedProductInfo, setUpdatedProductInfo] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });
  const [form] = Form.useForm();
  const showUpdateModal = () => {
    setUpdateModalStatus(true);
  };

  const showDeleteModal = () => {
    setDeleteModalStatus(true);
  };

  const handleDelete = () => {
    fetch(`https://fakestoreapi.com/products/${product.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => console.log(json));

    setDeleteModalStatus(false);
  };
  const handleSubmit = (values) => {
    setUpdatedProductInfo({
      title: values.productName,
      price: values.price,
      description: values.description,
      image: values.image,
      category: values.productCategory,
    });
    fetch(`https://fakestoreapi.com/products/${product.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedProductInfo),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
    console.log(values);
    form.resetFields();
    setUpdateModalStatus(false);
  };

  const handleUpdateCancel = () => {
    setUpdateModalStatus(false);
    form.resetFields();
  };
  const handleDeleteModalCancel = () => {
    setDeleteModalStatus(false);
  };
  return (
    <div
      className={`card col-sm-6 col-md-3 bg-transparent text-info ${classes.cardContainer}`}
      style={{ height: 650 }}
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
      <p>{product.description.slice(0, 80)}...</p>
      <p>
        Rating: {product.rating.rate} ({product.rating.count})
      </p>
      <Button
        onClick={showUpdateModal}
        style={{ margin: 5, padding: 2, width: "100%" }}
      >
        <EditOutlined style={{ fontSize: "200%" }} />
      </Button>
      <Button
        onClick={showDeleteModal}
        style={{ margin: 5, padding: 2, width: "100%" }}
      >
        <DeleteTwoTone style={{ fontSize: "200%" }} />
      </Button>
      <Modal
        open={updateModalStatus}
        onOk={form.submit}
        onCancel={handleUpdateCancel}
      >
        <Form
          form={form}
          onFinish={handleSubmit}
          name="product-update"
          layout="vertical"
          wrapperCol={{
            span: 20,
          }}
          style={{
            marginTop: 20,
            paddingBottom: 10,
            paddingLeft: 30,
            paddingRight: 30,
          }}
        >
          <center>
            <h4>Update Product Info (ID: {product.id})</h4>
          </center>
          <Form.Item // Form Item (Product Name)
            label="Product Name"
            name="productName"
            required
            tooltip="This is a required field"
            rules={[
              {
                required: true,
                message: "Please enter your product name!",
              },
            ]}
          >
            <Input type="string" placeholder="Product Name" />
          </Form.Item>
          <Form.Item // Form Item (Price)
            label="Price"
            name="price"
            required
            tooltip="This is a required field"
            rules={[
              {
                required: true,
                message: "Please enter product price",
              },
            ]}
          >
            <Input type="number" placeholder="Price" />
          </Form.Item>
          <Form.Item // Form Item (Product Category)
            label="Product Category"
            name="productCategory"
            required
            tooltip="This is a required field"
            rules={[
              {
                required: true,
                message: "Please enter product category",
              },
            ]}
          >
            <Input type="string" placeholder="Product Category" />
          </Form.Item>
          <Form.Item // Form Item (Image Link)
            label="Image Link"
            name="imageLink"
            required
            tooltip="This is a required field"
            rules={[
              {
                required: true,
                message: "Please enter product image link",
              },
            ]}
          >
            <Input type="string" placeholder="Image Link" />
          </Form.Item>
          <Form.Item // Form Item (Product Description)
            label="Product Description"
            name="description"
            required
            tooltip="This is a required field"
            rules={[
              {
                required: true,
                message: "Description is a required field!",
              },
            ]}
          >
            <Input.TextArea
              placeholder="Product Description ..."
              autoSize={{ minRows: 4, maxRows: 6 }}
            />
          </Form.Item>
          <Form.Item // Form Item (Submit Button)
          >
            <Button type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        open={deleteModalStatus}
        onOk={handleDelete}
        onCancel={handleDeleteModalCancel}
      >
        <div className="container">
          <div className="row m-2">
            <div
              className="alert alert-warning alert-dismissible fade show col-sm-12"
              role="alert"
            >
              <strong>
                WARNING!{" "}
                <WarningFilled style={{ fontSize: "200%", color: "orrange" }} />{" "}
              </strong>{" "}
              This following product will be removed (Product ID: {product.id}):
            </div>
            <div className="card col-sm-12 border border-warning">
              <Image
                loader={() => product.image}
                alt={`${product.title}`}
                src={product.image}
                width={250}
                height={300}
                layout="responsive"
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">
                  {product.description.slice(0, 80)}...
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Category: {product.category}
                </li>
                <li className="list-group-item">Price: ${product.price}</li>
                <li className="list-group-item">
                  Rating: {product.rating.rate} ({product.rating.count})
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
