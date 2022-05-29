import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiAngularSimple,
  DiRuby,
  DiPython,
  DiRor,
  DiCode,
  DiCss3,
  DiPhotoshop,
} from "react-icons/di";
import { SiMysql } from "react-icons/si";
// https://react-icons.github.io/react-icons/icons?name=di
// https://react-icons.github.io/react-icons/icons?name=di
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiCode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiRuby />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiRor />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
    </Row>
  );
}

export default Techstack;
