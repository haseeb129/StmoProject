import React, { Component } from "react";
import "./auth.css";
import axios from "axios";
import auth from "./authService";
import TopHeading from "../TopHeading";
import { Alert, Button, Form } from "react-bootstrap/";
export default class ResetPassword extends Component {
  state = {
    user: auth.getCurrentUser(),
    previousPassword: null,
    newPassword1: null,
    newPassword2: null,
    result: null,
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state);

    const userObject = {
      username: this.state.user.username,
      password: this.state.previousPassword,
      password1: this.state.newPassword1,
    };
    console.log("User Object", userObject);
    await axios
      .post("http://127.0.0.1:8000/api/jwtauth/resetPassword/", userObject)
      .then(async (response) => {
        await auth.logout();
        console.log("Login response ", response);

        await auth.loginWithJWT(response.data.token);
        window.location = "/";
      })
      .catch((err) => {
        console.log("Login Error", err.response.data.detail);
        this.setState({ result: err.response.data.detail });
      });
  };
  render() {
    console.log("User name:", this.state.user.username);
    return (
      <div>
        <TopHeading message="Manage Profile" />
        <Form className="inner" onSubmit={this.handleSubmit}>
          <h3>Reset Password</h3>

          <Form.Group controlId="">
            <Form.Label>Username</Form.Label>
            <Form.Control
              disabled={true}
              onChange={this.handleChange}
              required
              name="username"
              value={this.state.user.username}
              placeholder="Enter Username"
            />
          </Form.Group>

          <Form.Group controlId="">
            <Form.Label>Current Password</Form.Label>
            <Form.Control
              type="password"
              onChange={this.handleChange}
              required
              name="previousPassword"
              value={this.state.previousPassword}
              placeholder="Enter Current Password"
            />
          </Form.Group>

          <Form.Group controlId="">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              onChange={this.handleChange}
              required
              name="newPassword1"
              value={this.state.newPassword1}
              placeholder="Enter New Password"
            />
          </Form.Group>
          <Form.Group controlId="">
            <Form.Label>New Password (Again)</Form.Label>
            <Form.Control
              type="password"
              onChange={this.handleChange}
              required
              name="newPassword2"
              value={this.state.newPassword2}
              placeholder="Enter New Password"
            />
            {this.state.newPassword1 &&
              this.state.newPassword2 &&
              this.state.newPassword1 !== this.state.newPassword2 && (
                <Form.Text style={{ color: "red", fontWeight: "bold" }}>
                  Password Not Matching
                </Form.Text>
              )}
          </Form.Group>

          <Button type="submit" className="btn btn-dark btn-lg btn-block">
            Reset Password
          </Button>
          <br />
          {this.state.result && (
            <h5>
              <Alert variant="danger">{this.state.result}</Alert>
            </h5>
          )}
        </Form>
      </div>
    );
  }
}
