import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
class ListOfPrizes extends Component {
  state = {
    user: [
      {
        title: " subscribers referred",
        description: "Handwritten Thank You letter from Steven",
        points: 5,
      },
      {
        title: " subscribers referred",
        description: "Handwritten Thank You letter from Steven",
        points: 5,
      },
      {
        title: " subscribers referred",
        description: "Handwritten Thank You letter from Steven",
        points: 5,
      },
      {
        title: " subscribers referred",
        description: "Handwritten Thank You letter from Steven",
        points: 5,
      },
      {
        title: " subscribers referred",
        description: "Handwritten Thank You letter from Steven",
        points: 10,
      },
      {
        title: " subscribers referred",
        description: "Handwritten Thank You letter from Steven",
        points: 25,
      },
    ],
  };

  componentDidMount() {
    axios
      .get(
        "http://stombackendapi-env.eba-pqvtsdnw.us-east-2.elasticbeanstalk.com/prizes"
      )
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
          {this.state.user.map((e, idx) => {
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
                        paddingLeft: "5px",
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
