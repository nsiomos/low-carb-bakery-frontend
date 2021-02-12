import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import cheesecake from "./resources/img/cheesecake.jpg";

class SaleItem extends React.Component {
  render() {
    return (
      <Container className="SaleItem">
        <Row className="header">
          <Col xs={2} className="image">
            <Image src={cheesecake} rounded />
          </Col>
          <Col className="name">
            <h1>{this.props.fddbSaleItem.name.de_DE}</h1>
          </Col>
          <Col xs={2} className="price">
            <h1>{this.props.fddbSaleItem.price} €</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SaleItem;
