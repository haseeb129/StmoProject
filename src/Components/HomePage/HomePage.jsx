import React, { Component } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import ReactPlayer from "react-player";
import Leaderboard from "./Leaderboard";
import ListOfPrizes from "./ListOfPrizes";
import YoutubeSubscribe from "../YoutubeSubscribe";
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
        <Container fluid>
          <Row className="blueBackground " style={{ padding: "20px" }}>
            <Col>
              <div
                style={{
                  textAlign: "center",
                  fontSize: "60px",
                  fontWeight: "bolder",
                }}
              >
                <p>Steve To One Million</p>
              </div>

              {/* <div
          className="g-ytsubscribe"
          data-channelid="UCJv5T2W-D3K3fYO0prgv5uw"
          data-layout="full"
          data-count="default"
        >
          <Button
            onClick={(e) => {
              console.log("AS", e);
            }}
          >
            hghg
          </Button>
        </div> */}

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
              <YoutubeSubscribe
                // channelName={channelName}
                channelid="UCJv5T2W-D3K3fYO0prgv5uw"
                theme={"default"}
                layout={"full"}
                count={"default"}
              />

              <br />
              <br />
            </Col>
          </Row>
        </Container>

        {/* <div className="blueBackground " style={{ padding: "20px" }}>
        </div> */}

        {/* <div className="pinkBackground " style={{ padding: "20px" }}>
          <h2>Leader Board</h2>
          <div className="homePageOverflow">
            <Leaderboard />
          </div>
          <br />
          <br />
          <br />
        </div>
        <div className="blueBackground " style={{ padding: "20px" }}>
          <h2>List of Prizes</h2>
          <ListOfPrizes />
          <br />
          <br />
          <br />
        </div> */}
        <Container fluid>
          <Row className="pinkBackground ">
            <Col md={6}>
              <div className=" " style={{ padding: "20px" }}>
                <h2 style={{ fontWeight: "bolder" }}>Leader Board</h2>
                <div className="homePageOverflow">
                  <Leaderboard />
                </div>
                {/* <br />
              <br />
              <br /> */}
              </div>
            </Col>
            <Col md={6}>
              <div className=" " style={{ padding: "20px" }}>
                <h2 style={{ fontWeight: "bolder" }}>List of Prizes</h2>
                <div className="homePageOverflow">
                  <ListOfPrizes />
                </div>
                <br />
                <br />
                <br />
              </div>
            </Col>
            {/* <br />
          <br />
          <br /> */}
          </Row>
        </Container>
      </div>
    );
  }
}

export default HomePage;
