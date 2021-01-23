import React, { Component } from "react";
import "./auth.css";
import axios from "axios";
import auth from "./authService";
import TopHeading from "../TopHeading";
import { Alert, Button, Form } from "react-bootstrap/";
export default class SignUp extends Component {
  state = {
    // referralCode: "e01f8968-5ad7-4b4b-ada3-2761359dd2c2",
    // email: "test-account-with-referral@gmail.com",
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
        email: this.state.email,
        referral: this.state.referralCode,
      };
    else
      sendingObject = {
        email: this.state.email,
      };
    console.log("sendingObject", sendingObject);
    let header = {
      "Cache-Control": "no-cache",
      "Content-Type": "application/json",
    };
    await axios
      .post(
        "http://stombackendapi-env.eba-pqvtsdnw.us-east-2.elasticbeanstalk.com/email",
        sendingObject,
        header
      )
      .then(async (response) => {
        console.log("Login response ", response.data.data);
        this.setState({
          alertProperty: {
            variant: "success",
            message: `Subscribed ,Referral Code:${response.data.data.referral}`,
          },
        });
      })
      .catch((err) => {
        console.log("Login Error", err.response.data.data.message);
        this.setState({
          alertProperty: {
            variant: "danger",
            message: err.response.data.data.message,
          },
        });
      });
  };
  render() {
    return (
      <div>
        <Form
          style={{ fontStyle: "28px" }}
          className="inner"
          onSubmit={this.handleSubmit}
        >
          <Form.Group controlId="">
            <Form.Label>
              <h4> Email</h4>
            </Form.Label>
            <Form.Control
              // type="username"
              onChange={this.handleChange}
              required
              size="lg"
              name="email"
              value={this.state.email}
              placeholder="Enter Email"
            />
          </Form.Group>

          <Form.Group controlId="">
            <Form.Label>
              <h4> Referral Code</h4>
            </Form.Label>
            <Form.Control
              type="text"
              onChange={this.handleChange}
              size="lg"
              name="referralCode"
              value={this.state.referralCode}
              placeholder="Referral Code"
            />
          </Form.Group>

          <Button
            type="submit"
            size="lg"
            block
            variant="default"
            className="customButton"
          >
            <span style={{ color: "black" }}>Subscribe Now</span>
          </Button>

          <br />
          {this.state.alertProperty && (
            <Alert variant={this.state.alertProperty.variant}>
              {this.state.alertProperty.message}
            </Alert>
          )}
        </Form>
      </div>
    );
  }
}
