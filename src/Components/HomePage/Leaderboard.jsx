import React, { Component } from "react";
import { Table } from "react-bootstrap";
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
  }

  render() {
    return (
      <div>
        {this.state.user && (
          <Table
            style={{ fontSize: "18px" }}
            variant="dark"
            striped
            bordered
            // size="sm"
            // cellspacing="0"
            // className="p-0,m-0"
          >
            <thead className="tabelHeader">
              <tr>
                <th>Position</th>
                <th>Name</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody className="tabelBody">
              {this.state.user.map((e, idx) => {
                return (
                  <tr key={idx}>
                    <td>{e.position}</td>
                    <td>{e.name}</td>
                    <td>{e.points}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
      </div>
    );
  }
}

export default Leaderboard;
