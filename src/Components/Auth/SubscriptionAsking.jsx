import React, { Component } from "react";
import "./auth.css";
import axios from "axios";
import auth from "./authService";
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
            <h3 style={{ fontWeight: "bold" }}>Are you a new Subscriber ??</h3>

            <Button
              onClick={() => this.props.onMouseClick(true)}
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
                Yes, i'm a new Subscriber{" "}
              </span>
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
              style={{
                borderStyle: "groove",
                borderColor: "black",
                borderWidth: "3px",
              }}
            >
              <span style={{ color: "black", fontSize: "22px" }}>
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
