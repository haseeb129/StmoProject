import React, { Component } from "react";
import "./auth.css";

import axios from "axios";
// import auth from "./authService";
// import TopHeading from "../TopHeading";
import { Button, Form } from "react-bootstrap/";

export default class Register extends Component {
  state = {
    username: "",
    // first_name: "",
    // last_name: "",
    email: "",
    password: "",
    result: null,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();

    const userObject = {
      username: this.state.username,
      email: this.state.email,
      // first_name: this.state.first_name,
      password: this.state.password,
      // last_name: this.state.last_name,
    };
    console.log("User Object", userObject);

    await axios
      .post("http://127.0.0.1:8000/api/jwtauth/register/", userObject)
      .then(async (response) => {
        console.log("Login Response", response);
        // await auth.logout();
        // await auth.loginWithJWT(response.data.token);

        // window.location = "/";
      })
      .catch((err) => {
        console.log("Login Error", err.response);
        this.setState({ result: err.response.data.message });
      });
  };
  render() {
    return (
      <div>
        <TopHeading message="Welcome in User Registration" />
        <Form className="inner" onSubmit={this.handleSubmit}>
          <h3>Register</h3>

          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              onChange={this.handleChange}
              required
              name="username"
              value={this.state.username}
              placeholder="Enter UserName"
            />
          </Form.Group>
          <Form.Group controlId="">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              onChange={this.handleChange}
              required
              name="email"
              value={this.state.email}
              placeholder="Enter Email"
            />
          </Form.Group>

          <Form.Group controlId="">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              onChange={this.handleChange}
              required
              name="password"
              value={this.state.password}
              placeholder="Enter Password"
            />
          </Form.Group>

          <Button type="submit" className="btn btn-dark btn-lg btn-block">
            Register
          </Button>
        </Form>
      </div>
    );
  }
}
