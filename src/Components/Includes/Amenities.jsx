import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Amenities = () => {
  return (
    <div id="amenities" className="py-3 py-md-5">
      <Container fluid className="ps-0 pe-0">
        <Row className="justify-content-center">
          <h2 className="text-primary text-center py-2 fs-3">Prestige City Amenities</h2>
          <Col md={4} xs={6} className="pt-2 pb-2 pt-md-0">
            <ul>
              <li>Fully Fledged Gymanasium</li>
              <li>Spa</li>
              <li>Billiards & Snooker</li>
              <li>Table Tennis</li>
              <li>Squash Court</li>
              <li>Badminton Court(Indoor)</li>
              <li>Cards Room</li>
            </ul>
          </Col>
          <Col md={4} xs={6} className="pt-2 pb-2 pt-md-0">
            <ul>
              <li>Yoga Room</li>
              <li>Bar</li>
              <li>Basketball Court</li>
              <li>Amphitheatre</li>
              <li>Barbeque Pavilions</li>
              <li>Toddlers Play facility</li>
              <li>Children's Play Area</li>
            </ul>
          </Col>
          <Col md={4} xs={12} className="pt-2 pb-2 pt-md-0">
            <ul>
              <li>Cafeteria</li>
              <li>Guest Rooms</li>
              <li>Full Size Swimming Pool</li>
              <li>Activity Pool</li>
              <li>Tennis courtKids Pool with jets</li>
              <li>Eco Lake Jogging Track</li>
              <li>Tennis Court</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Amenities;
