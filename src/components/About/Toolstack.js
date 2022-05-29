import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiUbuntu,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiSublimetext,
} from "react-icons/si";
import { DiGit } from "react-icons/di";
// https://react-icons.github.io/react-icons/icons?name=di
// https://react-icons.github.io/react-icons/icons?name=di
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiUbuntu />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSublimetext />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Toolstack;
