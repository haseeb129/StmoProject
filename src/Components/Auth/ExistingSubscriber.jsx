import React, { Component } from "react";
import "./auth.css";
import axios from "axios";
import auth from "./authService";
import { Button, Form } from "react-bootstrap/";
export default class ExistingSubscriber extends Component {
  state = {
    // referralCode: "e01f8968-5ad7-4b4b-ada3-2761359dd2c2",
    // email: "test-account-with-referral@gmail.com",
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

    let header = {
      "Cache-Control": "no-cache",
      "Content-Type": "application/json",
    };
    await axios
      .get(
        `https://projectstomsapi.com/email?email=${this.state.email}`,
        { email: this.state.email },
        header
      )
      .then(async (response) => {
        console.log("Login response ", response.data.data.body);

        auth.addUser(response.data.data.body);

        // console.log("Geting Object ", auth.getUser());

        this.setState({
          alertProperty: {
            variant: "text-success",
            message: `Subscribed ,Referral Code:${response.data.data.body.referral}`,
          },
        });
        window.location = "/";
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
              Check Subscription
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
