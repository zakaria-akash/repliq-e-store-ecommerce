import { Button, Modal, Form, Input } from "antd";
import { FormOutlined } from "@ant-design/icons";
import { Fragment, useState } from "react";

import "./new-account-form.module.css";

const NewAccountForm = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const [form] = Form.useForm();
  const showModal = () => {
    setModalStatus(true);
  };

  const handleSubmit = (values) => {
    alert(
      "New account has been created! First Name: " +
        values.firstName +
        ", Last Name: " +
        values.lastName +
        ", Email: " +
        values.email
    );
    console.log(values);
    form.resetFields();
    setModalStatus(false);
  };

  const handleCancel = () => {
    setModalStatus(false);
    form.resetFields();
  };

  return (
    <Fragment>
      <Button className="new-account-button" onClick={showModal}>
        <FormOutlined /> New Account Form
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
            <h4>Create New Account</h4>
          </center>
          <Form.Item // Form Item (Product Name)
            label="First Name"
            name="firstName"
            required
            tooltip="This is a required field"
            rules={[
              {
                required: true,
                message: "Please enter your first name",
              },
            ]}
          >
            <Input type="string" placeholder="First Name" />
          </Form.Item>
          <Form.Item // Form Item (Product Name)
            label="Last Name"
            name="lastName"
            required
            tooltip="This is a required field"
            rules={[
              {
                required: true,
                message: "Please enter your last name",
              },
            ]}
          >
            <Input type="string" placeholder="Last Name" />
          </Form.Item>
          <Form.Item // Form Item (Product Name)
            label="Email Address"
            name="email"
            required
            tooltip="This is a required field"
            rules={[
              {
                required: true,
                message: "Please enter your email address",
              },
            ]}
          >
            <Input type="string" placeholder="Email Address" />
          </Form.Item>
          <Form.Item // Form Item (Product Name)
            label="Password"
            name="password"
            required
            tooltip="This is a required field"
            rules={[
              {
                required: true,
                message: "Please enter your password",
              },
            ]}
          >
            <Input type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item // Form Item (Product Name)
            label="Confirm Password"
            name="confirmPassword"
            required
            tooltip="This is a required field"
            rules={[
              {
                required: true,
                message: "Please re-type your password",
              },
            ]}
          >
            <Input type="password" placeholder="Confirm Password" />
          </Form.Item>
          <Form.Item // Form Item (Submit Button)
          >
            <Button type="primary">Sign Up</Button>
          </Form.Item>
        </Form>
      </Modal>
    </Fragment>
  );
};

export default NewAccountForm;
