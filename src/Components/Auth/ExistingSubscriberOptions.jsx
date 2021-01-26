import React, { Component } from "react";
import "./auth.css";
import axios from "axios";
import auth from "./authService";
import { Alert, Button, Form } from "react-bootstrap/";
export default class ExistingSubscriberOptions extends Component {
  componentDidMount() {
    console.log("ExistingSubscriberOptions", this.props);
  }

  render() {
    return (
      <div>
        <div className="inner fontSizeSignInPage">
          <div className="p-4">
            <h3 style={{ fontWeight: "bold" }}>Thanks For Your Subscription</h3>

            <Button
              onClick={() => this.props.history.push("/VerificationPage")}
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
                Referral Code{" "}
              </span>
            </Button>
            <br />
            <Button
              onClick={() => this.props.history.push("/PointChecker")}
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
                Your Points
              </span>
            </Button>
          </div>
        </div>

        <br />
      </div>
    );
  }
}
