import React, { Component } from "react";
import TopHeading from "./TopHeading";
class PointChecker extends Component {
  state = { points: 50 };
  render() {
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <div style={{ textAlign: "center", marginTop: "15%" }}>
            <p style={{ fontSize: "90px", fontWeight: "bold" }}>
              Your Points
              <span style={{ color: "red" }}> {this.state.points}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default PointChecker;
