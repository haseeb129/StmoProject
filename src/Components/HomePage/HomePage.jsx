import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import ReactPlayer from "react-player";
import Leaderboard from "./Leaderboard";
import ListOfPrizes from "./ListOfPrizes";
import auth from "../Auth/authService";
import YoutubeSubscribe from "../YoutubeSubscribe";
import SubscriptionAsking from "../Auth/SubscriptionAsking";
import ExistingSubscriberOptions from "../Auth/ExistingSubscriberOptions";
import ExistingSubscriber from "../Auth/ExistingSubscriber";
// import FadeInAnimation from "../Fade Effect/FadeInAnimation";

// import { AwesomeButton } from "react-awesome-button";
// import "react-awesome-button/dist/styles.css";
import SignIn from "../Auth/SignIn";

class HomePage extends Component {
  state = { user: auth.getUser(), newSubscriber: null };

  setNewSubscriber = (e) => {
    this.setState({ newSubscriber: e });
  };

  render() {
    return (
      <div>
        <Container fluid>
          <Row className="blueBackground " style={{ padding: "20px" }}>
            <Col>
              {/* <FadeInAnimation direction="down" delay={0}>
                
              </FadeInAnimation> */}
              <div
                style={{
                  textAlign: "center",
                  fontSize: "60px",
                  fontWeight: "bolder",
                  marginTop: "2%",
                  marginBottom: "4%",
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

              {this.state.user && (
                <Row>
                  <Col md={4} sm={12}>
                    {this.state.newSubscriber === null && (
                      <ExistingSubscriberOptions {...this.props} />
                    )}
                    <br />
                  </Col>
                  <Col md={8} sm={12}>
                    <div className="pl-2 pr-2">
                      <ReactPlayer
                        width="100%"
                        controls={true}
                        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                      />
                    </div>
                  </Col>
                </Row>
              )}

              {!this.state.user && (
                <Row>
                  <Col md={4} sm={12}>
                    {this.state.newSubscriber === null && (
                      <SubscriptionAsking
                        onMouseClick={this.setNewSubscriber}
                      />
                    )}
                    {this.state.newSubscriber === true && <SignIn />}

                    {this.state.newSubscriber === false && (
                      <ExistingSubscriber />
                    )}

                    <br />
                  </Col>
                  <Col md={8} sm={12}>
                    <div className="pl-2 pr-2">
                      <ReactPlayer
                        width="100%"
                        controls={true}
                        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                      />
                    </div>
                  </Col>
                </Row>
              )}
              <div>
                <br />
                <br />
                <br />
                <br />
              </div>
              <div
                className="youtubeBackground"
                style={{
                  textAlign: "center",
                  backgroundColor: "yellow",
                  paddingTop: "10px",
                  paddingLeft: "15%",
                  paddingRight: "15%",
                }}
              >
                <YoutubeSubscribe
                  // channelName={channelName}
                  channelid="UCJv5T2W-D3K3fYO0prgv5uw"
                  // theme={"dark"}
                  layout={"full"}
                  count={"default"}
                />
              </div>
              <div>
                <br />
                <br />
                <br />
                <br />
              </div>
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
                {/* <div className="homePageOverflow">
                  <Leaderboard />
                </div> */}
                <Leaderboard />
              </div>
            </Col>
            <Col md={6}>
              <div className=" " style={{ padding: "20px" }}>
                <h2 style={{ fontWeight: "bolder" }}>List of Prizes</h2>
                {/* <div className="homePageOverflow">
                  <ListOfPrizes />
                </div> */}
                <ListOfPrizes />

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
