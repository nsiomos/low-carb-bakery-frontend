import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Headline extends React.Component {
  render() {
    return (
      <Container className="Headline">
        <Row>
          <Col>
            <h1>nicole's zuckerfrei to go</h1>
            <h2>
              echtes low-carb, immer frisch zubereitet - für echten
              unbeschwerten Genuss.
            </h2>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Headline;
