import React from "react";
import { Col, Container, Ratio, Row } from "react-bootstrap";

const VirtualTour = () => {
  return (
    <div id="virtual-tour" className="py-3 py-md-5 bg-light">
      <Container>
        <h2 className="py-3 text-primary text-center">Virtual Tour</h2>
        <Row className="justify-content-center gy-3">
          <Col md={6}>
            <Ratio aspectRatio="16x9">
              <embed
                type="image/svg+xml"
                src="http://webmillionservices.com/now/video-1.mp4"
              />
            </Ratio>
          </Col>
          <Col md={6}>
            <Ratio aspectRatio="16x9">
              <embed
                type="image/svg+xml"
                src="http://webmillionservices.com/now/video-2.mp4"
              />
            </Ratio>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default VirtualTour;
