import React, { Component } from "react";
import "./auth.css";
import axios from "axios";
import auth from "./authService";
import TopHeading from "../TopHeading";
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
            {/* <h3>Are you a new Subscriber ??</h3> */}

            <Button
              onClick={() => this.props.history.push("/VerificationPage")}
              size="lg"
              block
              variant="default"
              className="customButton"
            >
              <span style={{ color: "black" }}>Referral Code </span>
            </Button>
            <br />
            <Button
              onClick={() => this.props.history.push("/PointChecker")}
              size="lg"
              block
              variant="default"
              className="customButton"
            >
              <span style={{ color: "black" }}>Your Points</span>
            </Button>
          </div>
        </div>

        <br />
      </div>
    );
  }
}
