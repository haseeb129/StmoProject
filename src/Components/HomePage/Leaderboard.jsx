import React, { Component } from "react";
import { Table, Row, Col } from "react-bootstrap";
import axios from "axios";
class Leaderboard extends Component {
  state = {};
  compare = (a, b) => {
    if (a.position < b.position) {
      return -1;
    }
    if (a.position > b.position) {
      return 1;
    }
    return 0;
  };
  componentDidMount() {
    let array = [
      {
        position: "7",
        name: "Handwritten Thank You letter from Steven",
        points: 5,
      },
      {
        position: "7",
        name: "Handwritten Thank You letter from Steven",
        points: 5,
      },
      {
        position: "7",
        name: "Handwritten Thank You letter from Steven",
        points: 5,
      },
      {
        position: "7",
        name: "Handwritten Thank You letter from Steven",
        points: 5,
      },
      {
        position: "7",
        name: "Handwritten Thank You letter from Steven",
        points: 5,
      },
      {
        position: "1",
        name: "Handwritten Thank You letter from Steven",
        points: 100,
      },
      {
        position: "2",
        name: "Handwritten Thank You letter from Steven",
        points: 90,
      },
      {
        position: "5",
        name: "Handwritten Thank You letter from Steven",
        points: 30,
      },
    ];

    array = array.sort(this.compare);

    this.setState({ user: array });

    axios
      .post(
        "http://stombackendapi-env.eba-pqvtsdnw.us-east-2.elasticbeanstalk.com/email",
        {
          email: "test-account-with-referral@gmail.com",
          referral: "e01f8968-5ad7-4b4b-ada3-2761359dd2c2",
        }
      )
      .then((res) => {
        console.log("RES Leaderboard", res.data);
      })
      .catch((err) => {
        console.log("Error Leaderboard", err.response);
      });
  }

  render() {
    return (
      <div>
        {this.state.user && (
          <div className="homePageOverflow">
            {this.state.user.map((e, idx) => {
              return (
                <div key={idx} className="squareShape ml-4 mr-4 mb-4 mt-0">
                  <span style={{ color: "#dd1f58", marginRight: "5%" }}>
                    Position : {e.position}
                  </span>
                  Points: {e.points}
                  <div
                    style={{
                      paddingLeft: "2%",
                      fontSize: "20px",
                      marginTop: "5px",
                      marginBottom: "2%",
                    }}
                  >
                    Name: {e.name}
                  </div>
                </div>
              );
            })}
          </div>
          // <Table
          //   style={{ fontSize: "18px" }}
          //   variant="dark"
          //   striped
          //   bordered
          //   // size="sm"
          //   // cellspacing="0"
          //   // className="p-0,m-0"
          // >
          //   <thead className="tabelHeader">
          //     <tr>
          //       <th>Position</th>
          //       <th>Name</th>
          //       <th>Points</th>
          //     </tr>
          //   </thead>
          //   <tbody className="tabelBody">
          //     {this.state.user.map((e, idx) => {
          //       return (
          //         <tr key={idx}>
          //           <td>{e.position}</td>
          //           <td>{e.name}</td>
          //           <td>{e.points}</td>
          //         </tr>
          //       );
          //     })}
          //   </tbody>
          // </Table>
        )}
      </div>
    );
  }
}

export default Leaderboard;
