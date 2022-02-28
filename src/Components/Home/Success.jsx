import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Projects from "../Includes/Projects";

const Success = () => {
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col md={10}>
            <div className="alert alert-success my-3 text-center fs-4">
              Thanks for contacting us. We Will Take Care Of The Rest!!! Our
              Executives Will Get In Touch With You Shortly
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Projects />
      </Container>
    </div>
  );
};

export default Success;
