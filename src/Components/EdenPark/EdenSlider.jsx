import React, { useState } from "react";
import { Container, Col, Image, Row, Button } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import Image1 from "../../images/slider/eden-park/eden-park-1.png";
import Image2 from "../../images/slider/eden-park/eden-park-2.png";
import Logo from "../../images/projects/eden-park-@-the-prestige-city-logo.png"
import EdenModal from "./EdenModal";


const EdenSlider = () => {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const associations = [
    {
      id: 1,
      ImageUrl: Image1,
      alt: "",
    },
    {
      id: 2,
      ImageUrl: Image2,
      alt: "",
    },
  ];

  const options = {
    rewind: true,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 2,
        nav: false,
        loop: false,
      },
    },
  };
  return ( <div>
    <OwlCarousel options={options}>
      {associations.map((item, index) => (
        <div className="mx-2" key={index}>
          <Row>
            <Col md={12}>
              <div className="text-center">
                <Image
                  src={item.ImageUrl}
                  alt={item.alt}
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
        </div>
      ))}
    </OwlCarousel>
    <div className="bg-light position-relative rounded" id="custom-content">
      <Container className="bg-white shadow p-3 position-absolute top-50 start-50 translate-middle">
        <Row className="justify-content-center">
          <Col
            md={4}
            className="col-md-4 align-self-center d-none d-md-block"
          >
            <div className="text-center">
              <Image
                src={Logo}

                alt=""
                className="img-fluid"
                style={{ height: "125px" }}
              />
            </div>
          </Col>
          <Col md={8} className="align-self-center">
            <Row className="">
              <Col md={8} className="">
                <div className="m-1 text-center text-md-start">
                  <h1 className="fs-4 text-primary">Eden Park @ The Prestige City</h1>
                  <p className="m-0">
                    {" "}
                    <p className="text-center text-md-start mb-0">Sarjapur Main Road, Bangalore</p>
                    <p className="text-center text-md-start mb-0">39.99* Lac Onwards</p>
                  </p>
                </div>
              </Col>
              <Col md={4} className="align-self-center">
                <div className="text-center text-uppercase">
                  <Button
                    variant="primary"
                    onClick={handleShow}
                    className="my-1"
                  >
                    Download Brouchure
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>

    <EdenModal
      show={show}
      handleClose={handleClose}
      title="Download Brouchure"
    />
  </div>
  )
}

export default EdenSlider
