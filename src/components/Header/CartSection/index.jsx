import React from "react";
import Search from "./Search";
import AccountIcon from "./AccountIcon";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./CartSection.module.scss";

export default function CartSection() {
  return (
    <div className={styles.cartSection}>
      <Container fluid>
        <Row>
          <Col sm={4}></Col>
          <Col sm={4}></Col>
          <Col sm={4}>
            <Search />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
