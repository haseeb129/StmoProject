import React, { Component } from "react";
// import { Table, Row, Col } from "react-bootstrap";
import axios from "axios";
class Leaderboard extends Component {
  state = { leaderboardList: [] };
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
    axios
      .get("https://projectstomsapi.com/leader-board")
      .then((res) => {
        try {
          console.log(
            "Response List Of Leaderboard",
            res.data.data.body.leaderBoard
          );
          this.setState({ leaderboardList: res.data.data.body.leaderBoard });
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
        {this.state.leaderboardList.length === 0 && (
          <h3 style={{ fontWeight: "bolder" }}>Loading....</h3>
        )}
        {this.state.leaderboardList && (
          <div className="">
            {this.state.leaderboardList.map((e, idx) => {
              return (
                <div key={idx} className="squareShape ml-4 mr-4 mb-4 mt-0">
                  Emial:
                  <span
                    style={{
                      color: "#dd1f58",
                      marginRight: "5%",
                      paddingLeft: "10px",
                    }}
                  >
                    {e.email}
                  </span>
                  Points:
                  <span
                    style={{
                      color: "#dd1f58",
                      marginRight: "5%",
                      paddingLeft: "10px",
                    }}
                  >
                    {e.points}
                  </span>
                  <div
                    style={{
                      paddingLeft: "2%",
                      fontSize: "18px",
                      marginTop: "5px",
                      marginBottom: "2%",
                    }}
                  >
                    Referral Code:
                    <span
                      style={{
                        color: "#dd1f58",
                        marginRight: "5%",
                        marginLeft: "10px",
                      }}
                    >
                      {e.referral}
                    </span>
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
