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
        <div className="">
          {!this.state.user.length === 0 && (
            <h3 style={{ fontWeight: "bolder" }}>Loading....</h3>
          )}
          {this.state.user &&
            this.state.user.map((e, idx) => {
              return (
                <div key={idx} className="mb-5">
                  <Row>
                    <Col md={2} sm={2} xs={2}>
                      <div className="circularShape">
                        <div className="centerPoints">{e.points}</div>
                      </div>
                    </Col>
                    <Col md={10} sm={10} xs={10}>
                      <div
                        style={{
                          fontSize: "25px",
                          fontWeight: "bolder",
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
                      marginTop: "20px",
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
