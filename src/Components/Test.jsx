import React, { Component } from "react";
// import Leaderboard from "./HomePage/Leaderboard";

import { Row, Col } from "react-bootstrap";
class Test extends Component {
  state = {
    user: [
      {
        title: "5 subscribers referred",
        description: "Handwritten Thank You letter from Steven",
        points: 5,
      },
      {
        title: "10 subscribers referred",
        description: "Handwritten Thank You letter from Steven",
        points: 10,
      },
      {
        title: "25 subscribers referred",
        description: "Handwritten Thank You letter from Steven",
        points: 25,
      },
    ],
  };
  render() {
    return (
      <div>
        <Row>
          <Col md={6}></Col>
        </Row>
      </div>
    );
  }
}

export default Test;
