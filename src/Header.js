import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Headline from "./Headline";

class Header extends React.Component {
  render() {
    //    return <input className="testReact" value={this.props.value} readOnly />;
    return (
      <Container className="Header" fluid="true">
        <Row>
          <Col>
            <Headline />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Header;
