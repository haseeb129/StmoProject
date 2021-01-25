import React, { Component } from "react";
import "./auth.css";
import axios from "axios";
import auth from "./authService";
import TopHeading from "../TopHeading";
import { Alert, Button, Form } from "react-bootstrap/";
export default class SubscriptionAsking extends Component {
  componentDidMount() {
    console.log("SubscriptionAsking", this.props);
  }

  render() {
    return (
      <div>
        <div className="inner fontSizeSignInPage">
          <div className="p-4">
            <h3>Are you a new Subscriber ??</h3>

            <Button
              onClick={() => this.props.onMouseClick(true)}
              size="lg"
              block
              variant="default"
              className="customButton"
            >
              <span style={{ color: "black" }}>Yes, i'm a new Subscriber </span>
            </Button>
            <br />
            <Button
              onClick={() => {
                this.props.onMouseClick(false);
              }}
              size="lg"
              block
              variant="default"
              className="customButton"
            >
              <span style={{ color: "black" }}>
                No, i'm an Existing Subscriber
              </span>
            </Button>
          </div>
        </div>

        <br />
      </div>
    );
  }
}
