import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Modals from "../Includes/Modals";

const Blogs = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col md={3}>
            <div className="text-center py-3 py-md-5">
              <p className="text-center">
                <i className="far fa-file-pdf fs-1 border border-dark p-3 rounded-circle"></i>
              </p>
              <Button
                variant="primary"
                onClick={handleShow}
                className="custom-button"
              >
                Download Brochure
              </Button>
            </div>
          </Col>
          <Col md={3}>
            <div className="text-center py-3 py-md-5">
              <p className="text-center">
                <i className="fas fa-rupee-sign fs-1 border border-dark p-3 rounded-circle"></i>
              </p>
              <Button
                variant="primary"
                onClick={handleShow}
                className="custom-button"
              >
                Request Price
              </Button>
            </div>
          </Col>
          <Col md={3}>
            <div className="text-center py-3 py-md-5">
              <p className="text-center">
                <i className="fas fa-download fs-1 border border-dark p-3 rounded-circle"></i>
              </p>
              <Button
                variant="primary"
                onClick={handleShow}
                className="custom-button"
              >
                Get Master & Floor Plans
              </Button>
            </div>
          </Col>
          <Col md={3}>
            <div className="text-center py-3 py-md-5">
              <p className="text-center">
                <i className="fas fa-money-check-alt fs-1 border border-dark p-3 rounded-circle"></i>
              </p>
              <Button
                variant="primary"
                onClick={handleShow}
                className="custom-button"
              >
                Download Costsheet
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="py-3 py-md-5">
        <h2 className="fs-3 py-2 text-center">Prestige City Blogs</h2>
        <Row className="g-2">
          <Col md={12}>
            <div className="">
              <h2 className="fs-5">
                Why Should You Invest in Prestige City Sarjapur Road?
              </h2>
              <p>
                The prospect of purchasing a prime piece of commercial real
                estate is extremely exciting for investors. Unless you are very
                comfortable and familiar with the buying, selling, and
                maintenance of commercial properties.One important tip to
                remember when investing in commercial real estate is to buy a
                property with as many units as you are able to afford. This is
                important because your income ratio will increase with the more
                units you are renting out. While you do have to pay more
                upfront, your return on the investment will be much greater.
              </p>
            </div>
          </Col>
          <Col md={12}>
            <div className="">
              <h2 className="fs-5">
                Prestige Smart City Sarjapur Road | 1/2/3/4 BHK Apartments
              </h2>
              <p>
                Buy 1/2/3/4 Bhk apartments in new launch property at Sarjapur
                Road, Bangalore city by Prestige Smart City. Every apartment of
                the project is developed under the RERA acceptance and Rcc frame
                structure.Each Corner of the property is formed by Vaastu
                Shashtra and tress everywhere throughout the lofts to form a
                sound and regular habitat. Bangalore can the nice stage for
                having a pleasant existence with each one of the pleasantries
              </p>
            </div>
          </Col>
          <Col md={12}>
            <div className="">
              <h2 className="fs-5">Luxury apartments in Sarjapur Road</h2>
              <p>
                Sarjapur Road and its surrounding precincts have experienced
                transient growth in terms of residential and commercial
                interludes with the establishment of the Global Tech Village and
                BMIC corridor. The widening of roads and announcement of the
                metro’s extension and the Outer Ring Road have all contributed
                positively to the expansion of realty business in this region.
                There has been increased demand for high-end residential
                properties or luxury apartments in Sarjapur Road mainly due to
                its excellent infrastructure and proximity to IT clusters of
                Whitefield, Marathahalli, Koramangala and Electronic City. The
                Luxury segment focuses chiefly on providing exquisite homes in
                terms of outlines, interiors and specifications with
                state-of-the-art amenities and facilities.
              </p>
            </div>
          </Col>
          <Col md={12}>
            <div className="">
              <h2 className="fs-5">Driving distance to The Prestige City?</h2>
              <p>
                From Hebbal, travel south on the 6th main road until you reach
                NH44/ NH75, then turn left onto the Outer Ring Road or NH44 and
                continue on the Outer Ring Road. Turn left into Embassy Tech
                Square Main Road, then left onto the service road, then left
                onto New Horizon College Boulevard. Turn right into
                Doddakannelli-Kaadubeesanahalli road, left to Carmelram sub-post
                office, left, and right onto V.Kallahalli main road, and
                continue to the right to reach the destination.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <div id="tags" className="py-3 py-md-5">
        <Container>
          <h2 className="text-center fs-3 py-3 text-primary text-uppercase">Prestige City Tags</h2>
          <Row className="justify-content-center gy-3">
            <Col md={3}>
              <div className="text-center">
                <a href="/" className="text-decoration-none text-dark">Prestige Smart City</a>
              </div>
            </Col>
            <Col md={3}>
              <div className="text-center">
                <a href="/" className="text-decoration-none text-dark">Prestige Smart City Sarjapur Road</a>
              </div>
            </Col>
            <Col md={3}>
              <div className="text-center">
                <a href="/" className="text-decoration-none text-dark">Prestige City Sarjapur</a>
              </div>
            </Col><Col md={3}>
              <div className="text-center">
                <a href="/" className="text-decoration-none text-dark">Prestige Smart City Villa</a>
              </div>
            </Col>
            <Col md={3}>
              <div className="text-center">
                <a href="/" className="text-decoration-none text-dark">Prestige Smart City Plots</a>
              </div>
            </Col><Col md={3}>
              <div className="text-center">
                <a href="/" className="text-decoration-none text-dark">Prestige Smart Apratments</a>
              </div>
            </Col><Col md={3}>
              <div className="text-center">
                <a href="/" className="text-decoration-none text-dark">Prestige City Projects in Bangalore</a>
              </div>
            </Col><Col md={3}>
              <div className="text-center">
                <a href="/" className="text-decoration-none text-dark">1BHK Apartments in Bangalore</a>
              </div>
            </Col><Col md={3}>
              <div className="text-center">
                <a href="/" className="text-decoration-none text-dark">2BHK Apartments in Bangalore</a>
              </div>
            </Col><Col md={3}>
              <div className="text-center">
                <a href="/" className="text-decoration-none text-dark">3BHK Apartments in Bangalore</a>
              </div>
            </Col><Col md={3}>
              <div className="text-center">
                <a href="/" className="text-decoration-none text-dark">Prestige Smart City Location</a>
              </div>
            </Col>
            <Col md={3}>
              <div className="text-center">
                <a href="/" className="text-decoration-none text-dark">Prestige City Sarjapur Road</a>
              </div>
            </Col>
            <Col md={3}>
              <div className="text-center">
                <a href="/projects/avalon-park" className="text-decoration-none text-dark">Prestige City Avalon Park</a>
              </div>
            </Col>
            <Col md={3}>
              <div className="text-center">
                <a href="/projects/eden-park" className="text-decoration-none text-dark">Prestige City Eden Park</a>
              </div>
            </Col>
            <Col md={3}>
              <div className="text-center">
                <a href="/projects/meridian-park/" className="text-decoration-none text-dark">Prestige City Meridian Park</a>
              </div>
            </Col>
            <Col md={3}>
              <div className="text-center">
                <a href="/projects/aspen-greens" className="text-decoration-none text-dark">Prestige City Aspen Greens</a>
              </div>
            </Col>
            <Col md={3}>
              <div className="text-center">
                <a href="/projects/great-acres" className="text-decoration-none text-dark">Prestige City Great Acres</a>
              </div>
            </Col>
            <Col md={3}>
              <div className="text-center">
                <a href="/" className="text-decoration-none text-dark">Prestige Smart City Floor Plans</a>
              </div>
            </Col>
            <Col md={3}>
              <div className="text-center">
                <a href="/" className="text-decoration-none text-dark">Prestige City Location</a>
              </div>
            </Col>
            <Col md={3}>
              <div className="text-center">
                <a href="/" className="text-decoration-none text-dark">Prestige City Reviews</a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Modals
        show={show}
        handleClose={handleClose}
        title="Download Pricesheet"
        projectid="57a99891-ec20-472a-b230-187e20fee71f"
      />
    </div>
  );
};

export default Blogs;
