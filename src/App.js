import React, { Component } from "react";
import "./App.css";
import { Row, Col } from "react-bootstrap";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import logo4 from "./11.png";
import HomePage from "./Components/HomePage/HomePage";
import VerificationPage from "./Components/VerificationPage";
import PointChecker from "./Components/PointChecker";
import Test from "./Components/Test";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <div className="mb-4 appClass">
            <Navbar />
            <div className="container">
              <Switch>
                {/* <Route
                  exact
                  path="/PredictionForm"
                  render={(props) => (
                    <PredictionForm Definations={Definations} {...props} />
                  )}
                /> */}

                <Route exact path="/" component={HomePage} />
                <Route exact path="/test" component={Test} />

                <Route
                  exact
                  path="/VerificationPage"
                  component={VerificationPage}
                />
                <Route exact path="/PointChecker" component={PointChecker} />
              </Switch>
            </div>
            {/* 
            <Row
              style={{
                backgroundColor: "#343a40",
                height: "10vh",
                margin: "5% 0% 0% 0%",

                textAlign: "center",
              }}
            >
              <Col>
                <div className="wrapperMainDiv">
                  <div div className="wrapperChildDiv">
                    <img
                      src={logo4}
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                      alt="React Bootstrap logo"
                    />
                    <span
                      style={{
                        color: "white",
                        padding: "1%",
                        fontWeight: "bold",
                      }}
                    >
                      Data-driven Predictions of Software Attributes in Future
                      Products
                    </span>
                  </div>
                </div>
              </Col>
            </Row> */}
            <br />
            <br />
            <br />
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
