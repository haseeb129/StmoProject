import React, { Component } from "react";

class UserName extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <div
            className="blueBackground "
            style={{ padding: "20px", minHeight: "100vh" }}
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ textAlign: "center", marginTop: "15%" }}>
                <p style={{ fontSize: "90px", fontWeight: "bold" }}>
                  Hi,
                  <span style={{ color: "red" }}> {this.state.points}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserName;
