import { Button, Modal, Form, Input } from "antd";
import { EditOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import classes from "./card.component.module.css";
import Image from "next/legacy/image";

export const Card = (props) => {
  const { product } = props;
  const [modalStatus, setModalStatus] = useState(false);
  const [updatedProductInfo, setUpdatedProductInfo] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });
  const [form] = Form.useForm();
  const showModal = () => {
    setModalStatus(true);
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
    setModalStatus(false);
  };

  const handleCancel = () => {
    setModalStatus(false);
    form.resetFields();
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
      <p>{product.description.slice(0, 80)}...</p>
      <p>
        Rating: {product.rating.rate} ({product.rating.count})
      </p>
      <Button onClick={showModal}>
        <EditOutlined />
        Update
      </Button>
      <Modal open={modalStatus} onOk={form.submit} onCancel={handleCancel}>
        <Form
          form={form}
          onFinish={handleSubmit}
          name="contact-us"
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
            <h4>Product Details</h4>
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
    </div>
  );
};
