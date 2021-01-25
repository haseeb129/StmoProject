import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
class ListOfPrizes extends Component {
  state = {
    user: [],
  };

  componentDidMount() {
    axios
      .get("https://projectstomsapi.com/prizes")
      .then((res) => {
        try {
          console.log("Response List Of Prices", res.data.data.body.prizes);
          this.setState({ user: res.data.data.body.prizes });
        } catch (err) {
          document.getElementById("demo").innerHTML = err.message;
        }
      })
      .catch((err) => {
        console.log("Errro Leader Board", err);
      });
  }

  render() {
    return (
      <div>
        <div className="homePageOverflow">
          {!this.state.user && (
            <h3 style={{ fontWeight: "bolder" }}>Loading....</h3>
          )}
          {this.state.user &&
            this.state.user.map((e, idx) => {
              return (
                <div key={idx}>
                  <Row>
                    <Col md={2} sm={2} xs={2}>
                      <div className="circularShape">{e.points}</div>
                    </Col>
                    <Col md={10} sm={10} xs={10}>
                      <div
                        style={{
                          fontSize: "25px",
                          fontWeight: "bold",
                          paddingLeft: "10px",
                          paddingTop: "10px",
                        }}
                      >
                        {e.title}
                      </div>
                    </Col>
                  </Row>

                  <div
                    style={{
                      paddingLeft: "2%",
                      fontSize: "20px",
                      marginTop: "5px",
                      marginBottom: "2%",
                    }}
                  >
                    {e.description}
                  </div>
                  {/* <div
                  style={{
                    paddingLeft: "2%",
                    fontSize: "22px",
                    color: "red",
                  }}
                >
                  Points:{e.points}
                </div> */}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default ListOfPrizes;
