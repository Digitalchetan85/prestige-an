import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Modals from "./Modals"

const Info = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div
      id="information"
      className="pt-3 pb-3 pt-md-3 pb-md-3 px-3 rounded"
    >
      <Container fluid className="ps-0 pe-0">
        <Row className="border-start border-5 bg-white shadow border-dark py-4 ">
          <Col md={8}>
            <h2>Need more information?</h2>
            <p className="m-0">
              Don't hesitate to download the brochure to know more details of
              this project.
            </p>
          </Col>
          <Col md={4} className="align-self-center text-center">
            <Button variant="primary" onClick={handleShow} className="my-3 text-white">
            Schedule My Free Site Visit
            </Button>
          </Col>
        </Row>
      </Container>
      <Modals
        show={show}
        handleClose={handleClose}
        title="Schedule My Site Visit"
        message="Please Fill in Your details & Save Your time. We will reach you shortly"
        projectid="57a99891-ec20-472a-b230-187e20fee71f"
      />
    </div>
  );

};

export default Info;
