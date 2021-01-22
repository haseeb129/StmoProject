import React, { Component } from "react";
import { Navbar, Nav, NavLink, Form } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap/";
import logo from "../text.gif";
export default class SampleNavbar extends Component {
  state = {};
  handleLogout = () => {
    // auth.logout();
    // window.location = "/";
  };

  render() {
    return (
      <Navbar
        className="mb-2 color-nav pr-4 pl-4 "
        collapseOnSelect
        expand="lg"
      >
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="140"
            height="40"
            className="d-inline-block align-top p-0 m-0"
            alt="S T O M"
          />
          {/* <span className="brandSize">S T O M</span> */}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="ml-auto"
            // style={{
            //   marginLeft: "15%",
            // }}
          >
            <LinkContainer
              style={{
                marginLeft: "20px",
                marginRight: "20px",
                fontSize: "22px",
                // color: "white",
              }}
              to="/"
            >
              <NavLink>Home</NavLink>
            </LinkContainer>

            <LinkContainer
              style={{
                marginLeft: "20px",
                marginRight: "20px",
                fontSize: "22px",
                color: "black",
              }}
              to="/VerificationPage"
            >
              <NavLink>Verification Page</NavLink>
            </LinkContainer>

            <LinkContainer
              style={{
                // color: "white",
                color: "black",
                fontSize: "22px",
                marginLeft: "20px",
                marginRight: "20px",
              }}
              to="/PointChecker"
            >
              <NavLink>Point</NavLink>
            </LinkContainer>

            {/* <LinkContainer
              style={{
                color: "white",
              }}
              to="/signin"
            >
              <NavLink>Login</NavLink>
            </LinkContainer>

            <LinkContainer
              style={{
                color: "white",
              }}
              to="/register"
            >
              <NavLink>Register</NavLink>
            </LinkContainer> */}
          </Nav>
          {this.state.user && (
            <Form inline>
              <Form.Label
                style={{
                  fontSize: "22px",
                  color: "white",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                <h6>{this.state.user.username}</h6>
              </Form.Label>
            </Form>
          )}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
