// 🚩 Dada Ki Jay Ho 🚩

import React from "react";
import { Container, Navbar, Col } from "react-bootstrap";

export default function Footer() {
  let year = new Date().getFullYear();
  return (
    <div>
      <Navbar fixed="bottom" bg="dark" variant="dark">
        <Container className="text-center text-muted">
          <Col lg={12} className="text-center text-light">
            All Rights Are Reserved @{year}!!!!
          </Col>
        </Container>
      </Navbar>
    </div>
  );
}
