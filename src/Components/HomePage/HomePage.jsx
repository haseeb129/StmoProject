import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import ReactPlayer from "react-player";
import Leaderboard from "./Leaderboard";
import ListOfPrizes from "./ListOfPrizes";
// import { AwesomeButton } from "react-awesome-button";
// import "react-awesome-button/dist/styles.css";
import SignIn from "../Auth/SignIn";

class HomePage extends Component {
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  test = (e) => {
    console.log("EEE", e);
  };
  changeColor = (e) => {
    console.log("aaaaaaaaaaaaaa", e);
  };
  render() {
    return (
      <div>
        <div
          style={{
            textAlign: "center",
            fontSize: "60px",
            fontWeight: "bolder",
          }}
        >
          <p>Steve To One Million</p>
        </div>

        <Row>
          <Col md={4} sm={12}>
            <SignIn />
            <br />
          </Col>
          <Col md={8} sm={12}>
            <ReactPlayer
              width="100%"
              controls={true}
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            />
          </Col>
        </Row>
        <br />

        <br />
        <br />
        <Row>
          <Col md={6}>
            <h2>Leader Board</h2>
            <div className="homePageOverflow">
              <Leaderboard />
            </div>
          </Col>
          <Col md={6}>
            <h2>List of Prizes</h2>
            <ListOfPrizes />
            <br />
          </Col>
        </Row>
      </div>
    );
  }
}

export default HomePage;
