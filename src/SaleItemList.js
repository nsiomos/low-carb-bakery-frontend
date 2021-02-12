import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SaleItem from "./SaleItem";
import fddb from "./fddb.json";

class SaleItemList extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <SaleItem fddbSaleItem={fddb["sale-items"]["biscuit-cake-nuts"]} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SaleItemList;
