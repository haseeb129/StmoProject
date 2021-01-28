import axios from "axios";
import React, { Component } from "react";
import auth from "./authService";
class EmailConfirmation extends Component {
  state = {};
  componentDidMount() {
    try {
      console.log("EmailConfirmation", this.props.match.params.token);
      if (!this.props.match.params && !this.props.match.params.token) {
        this.props.history.push("/");
      }
      //   this.props.history.push("/VerificationPage");
    } catch (e) {
      console.log("Error in CDM of EmailConfirmation");
    }
  }

  render() {
    return (
      <div className="wordWrap">
        <div
          className="blueBackground"
          style={{ padding: "20px", minHeight: "100vh" }}
        >
          <div style={{ textAlign: "center" }}>
            <div style={{ textAlign: "center", marginTop: "15%" }}>
              <p style={{ fontSize: "10vh", fontWeight: "bold" }}>
                <span
                  style={{
                    color: "red",
                    marginLeft: "20px",
                    textAlign: "center",
                  }}
                >
                  Verifying Email
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EmailConfirmation;
