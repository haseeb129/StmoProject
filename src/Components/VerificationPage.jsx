import React, { Component } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import ReactPlayer from "react-player";
import TopHeading from "./TopHeading";
class VerificationPage extends Component {
  state = { referralCode: "2352323596232" };
  render() {
    return (
      <div>
        <Row>
          <Col md={4} sm={12}>
            <div style={{ textAlign: "center" }}>
              <div style={{ textAlign: "center", marginTop: "2%" }}>
                <p style={{ fontSize: "70px", fontWeight: "bold" }}>
                  Referral Code
                  <br />
                  <span style={{ fontSize: "60px", color: "red" }}>
                    {this.state.referralCode}
                  </span>
                </p>
              </div>
            </div>
          </Col>
          <Col md={8} sm={12}>
            <ReactPlayer
              width="100%"
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default VerificationPage;
