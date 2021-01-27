import React, { Component } from "react";
import "./auth.css";
import axios from "axios";
import auth from "./authService";
import { Button, Form } from "react-bootstrap/";
export default class SignUp extends Component {
  state = {
    // referralCode: "e01f8968-5ad7-4b4b-ada3-2761359dd2c2",
    // email: "test-account-with-referral@gmail.com",
    name: "",
    referralCode: "",
    email: "",
    alertProperty: null,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ alertProperty: null });
    console.log("This is state", this.state);

    let sendingObject = null;
    if (this.state.referralCode !== null && this.state.referralCode !== "")
      sendingObject = {
        name: this.state.name,
        email: this.state.email,
        referral: this.state.referralCode,
      };
    else
      sendingObject = {
        name: this.state.name,
        email: this.state.email,
      };
    console.log("sendingObject", sendingObject);
    let header = {
      "Cache-Control": "no-cache",
      "Content-Type": "application/json",
    };
    await axios
      .post("https://projectstomsapi.com/email", sendingObject, header)
      .then(async (response) => {
        alert("subscribed successfully");
        auth.addUser(response.data.data.body);
        console.log("Login response ", response.data.data);
        window.location = "/";
        // this.setState({
        //   alertProperty: {
        //     variant: "text-success",
        //     message: `Subscribed ,Referral Code:${response.data.data.body.referral}`,
        //   },
        // });
      })
      .catch((err) => {
        console.log("Login Error", err.response.data.data.message);
        this.setState({
          alertProperty: {
            variant: "text-danger",
            message: err.response.data.data.message,
          },
        });
      });
  };
  render() {
    return (
      <div>
        <Form className="inner fontSizeSignInPage" onSubmit={this.handleSubmit}>
          <Form.Group controlId="" className="fontSizeSignInPage">
            <Form.Label>Name</Form.Label>
            <Form.Control
              // type="username"
              onChange={this.handleChange}
              required
              className="fontSizeSignInPage"
              name="name"
              value={this.state.name}
              placeholder="Enter Name"
            />
          </Form.Group>

          <Form.Group controlId="" className="fontSizeSignInPage">
            <Form.Label>Email</Form.Label>
            <Form.Control
              // type="username"
              onChange={this.handleChange}
              required
              size="lg"
              name="email"
              className="fontSizeSignInPage"
              value={this.state.email}
              placeholder="Enter Email"
            />
          </Form.Group>

          <Form.Group controlId="" className="fontSizeSignInPage">
            <Form.Label>Referral Code</Form.Label>
            <Form.Control
              type="text"
              onChange={this.handleChange}
              size="lg"
              name="referralCode"
              className="fontSizeSignInPage"
              value={this.state.referralCode}
              placeholder="Referral Code"
            />

            {this.state.alertProperty && (
              <Form.Text className={this.state.alertProperty.variant}>
                {this.state.alertProperty.message}
              </Form.Text>
            )}
          </Form.Group>

          <Button
            type="submit"
            size="lg"
            block
            variant="default"
            className="customButton"
            style={{
              borderStyle: "groove",
              borderColor: "black",
              borderWidth: "3px",
            }}
          >
            <span style={{ color: "black", fontSize: "22px" }}>
              Subscribe Now
            </span>
          </Button>
          <br />
          {/* 
          {this.state.alertProperty && (
            <Alert variant={this.state.alertProperty.variant}>
              {this.state.alertProperty.message}
            </Alert>
          )} */}
        </Form>
      </div>
    );
  }
}
