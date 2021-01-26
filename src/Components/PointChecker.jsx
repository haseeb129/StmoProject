import React, { Component } from "react";
import auth from "./Auth/authService";
class PointChecker extends Component {
  state = { user: auth.getUser() };
  render() {
    return (
      <div>
        <div
          className="blueBackground "
          style={{ padding: "20px", minHeight: "100vh" }}
        >
          <div style={{ textAlign: "center" }}>
            <div style={{ textAlign: "center", marginTop: "15%" }}>
              <p style={{ fontSize: "90px", fontWeight: "bold" }}>
                Your Points:
                <span
                  style={{
                    color: "red",
                    marginLeft: "20px",
                    textAlign: "center",
                  }}
                >
                  {this.state.user ? this.state.user.points : "Not Available"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PointChecker;
