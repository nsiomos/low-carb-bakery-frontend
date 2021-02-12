import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

class SaleItem extends React.Component {
  render() {
    return (
      <Container className="SaleItem">
        <Row>
          <Col xs={2}>
            <Image src="holder.js/171x180" rounded />
          </Col>
          <Col className="name">
            <h1>Nusskuchen</h1>
          </Col>
          <Col xs={2} className="price">
            <h1>2,99 €</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SaleItem;
