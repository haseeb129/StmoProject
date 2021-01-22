import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class TopHeading extends Component {
  state = {
    message: "FYP",
  };
  componentDidMount() {
    if (this.props.message) {
      this.setState({ message: this.props.message });
    } else this.setState({ message: "FYP" });
  }
  render() {
    return (
      <Row className="mb-5 ">
        <Col style={{ margin: "0%" }}>
          <p
            className="pageStartHeading"
            style={{
              color: "white",
              background: "linear-gradient(to left,#1a5865 50%, #009688 100%)",
            }}
          >
            {this.state.message}
          </p>
        </Col>
      </Row>
    );
  }
}

export default TopHeading;
