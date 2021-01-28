import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import ReactPlayer from "react-player";
import auth from "./Auth/authService";

class VerificationPage extends Component {
  state = { user: auth.getUser() };
  render() {
    return (
      <div>
        <div
          className="blueBackground "
          style={{ padding: "20px", minHeight: "100vh" }}
        >
          <Container fluid>
            <Row>
              <Col md={4} sm={12}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ textAlign: "center", marginTop: "2%" }}>
                    <p style={{ fontSize: "10vh", fontWeight: "bold" }}>
                      Referral Code
                      <br />
                      <span style={{ fontSize: "30px", color: "red" }}>
                        {this.state.user
                          ? this.state.user.referral
                          : "Not Available"}
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
          </Container>
        </div>
      </div>
    );
  }
}

export default VerificationPage;
