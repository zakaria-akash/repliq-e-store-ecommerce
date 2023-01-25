import { Button, Modal, Form, Input } from "antd";
import { DeleteTwoTone, EditOutlined, WarningFilled } from "@ant-design/icons";
import React, { useState } from "react";
import classes from "./product-card-admin.module.css";
import Image from "next/legacy/image";

export const CardUser = (props) => {
  const { user } = props;
  const [updateModalStatus, setUpdateModalStatus] = useState(false);
  const [deleteModalStatus, setDeleteModalStatus] = useState(false);
  const [updatedProductInfo, setUpdatedProductInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    image: "",
    address: "",
    oderedItems: 0,
  });
  const [form] = Form.useForm();
  const showUpdateModal = () => {
    setUpdateModalStatus(true);
  };

  const showDeleteModal = () => {
    setDeleteModalStatus(true);
  };

  const handleDelete = () => {
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
    // fetch(`https://fakestoreapi.com/products/${product.id}`, {
    //   method: "PUT",
    //   body: JSON.stringify(updatedProductInfo),
    // })
    //   .then((res) => res.json())
    //   .then((json) => console.log(json));
    console.log(updatedProductInfo);
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
      style={{ height: 600 }}
    >
      <Image
        loader={() => user.image}
        alt={`${user.firstName}${user.lastName}`}
        src={user.image}
        width={250}
        height={300}
        layout="responsive"
      />
      <p className="fw-bold fs-3 mb-o">
        {user.firstName} {user.lastName}
      </p>
      <hr className="mt-0" />
      <p>Email: {user.email}</p>
      <p>Odered Items: {user.oderedItems}</p>
      <p>Address: {user.address}</p>
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
          name="user-update"
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
            <h4>Update User Info</h4>
          </center>
          <Form.Item // Form Item (First Name)
            label="First Name"
            name="firstName"
            required
            tooltip="This is a required field"
            rules={[
              {
                required: true,
                message: "Please enter user first name",
              },
            ]}
          >
            <Input type="string" placeholder="First Name" />
          </Form.Item>
          <Form.Item // Form Item (Last Name)
            label="Last Name"
            name="lastName"
            required
            tooltip="This is a required field"
            rules={[
              {
                required: true,
                message: "Please enter user last name",
              },
            ]}
          >
            <Input type="string" placeholder="Last Name" />
          </Form.Item>
          <Form.Item // Form Item (User Email)
            label="Email"
            name="email"
            required
            tooltip="This is a required field"
            rules={[
              {
                required: true,
                message: "Please enter user email address",
              },
            ]}
          >
            <Input type="email" placeholder="Email" />
          </Form.Item>
          <Form.Item // Form Item (User Odered Items)
            label="Odered Items"
            name="oderedItems"
            required
            tooltip="This is a required field"
            rules={[
              {
                required: true,
                message: "Please enter user odered items",
              },
            ]}
          >
            <Input type="number" placeholder="Odered Items" />
          </Form.Item>
          <Form.Item // Form Item (User Image Link)
            label="User Image Link"
            name="image"
            required
            tooltip="This is a required field"
            rules={[
              {
                required: true,
                message: "Please enter user image link",
              },
            ]}
          >
            <Input type="string" placeholder="User Image Link" />
          </Form.Item>
          <Form.Item // Form Item (User Address)
            label="Address"
            name="address"
            required
            tooltip="This is a required field"
            rules={[
              {
                required: true,
                message: "User address is a required field!",
              },
            ]}
          >
            <Input.TextArea
              placeholder="User Address ..."
              autoSize={{ minRows: 2, maxRows: 4 }}
            />
          </Form.Item>
          <Form.Item // Form Item (Submit Button)
          >
            <Button type="primary">Update</Button>
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
              This following user info will be removed:
            </div>
            <div className="card col-sm-12 border border-warning">
              <Image
                loader={() => user.image}
                alt={`${user.firstName}${user.lastName}`}
                src={user.image}
                width={250}
                height={300}
                layout="responsive"
              />
              <div className="card-body">
                <h5 className="card-title">
                  {user.firstName} {user.lastName}
                </h5>
                <p className="card-text">Address: {user.address}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Email: {user.email}</li>
                <li className="list-group-item">
                  Odered Items: {user.oderedItems}
                </li>
                <li className="list-group-item d-flex">
                  <button class="btn btn-success m-0">Show Odered Items</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
