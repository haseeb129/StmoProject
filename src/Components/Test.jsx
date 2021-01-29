import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";

class Test extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col md={6} xs={4} className="circularShapeOutside">
            {/* <div className="circularShapeOutside"> */}
            <div className="circularShapeNew">
              <div className="circularShapeInsideWord">45</div>
            </div>
            {/* </div> */}
          </Col>

          <Col md={6} xs={8}>
            asajshas asdasd asd asd as
            <div>sd</div>
            <div>sd</div>
            <div>sd</div>
            <div>sd</div>
            <div>sd</div>
            <div>sd</div>
            <div>sd</div>
            <div>sd</div>
            <div>sd</div>
            <div>sd</div>
            <div>sd</div>
            <div>sd</div>
            <div>sd</div>
            <div>sd</div>
            <div>sd</div>
            <div>sd</div>
            <div>sd</div>
          </Col>
        </Row>
        <br />
        <br />
      </div>
    );
  }
}

export default Test;
