import React, { useState } from "react";
import { Container, Col, Image, Row, Button } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import Image1 from "../../images/slider/meridian/image-1.png";
import Image2 from "../../images/slider/meridian/image-2.png";
import Image3 from "../../images/slider/meridian/image-3.png";
import Image4 from "../../images/slider/meridian/image-4.png";
import Logo from "../../images/projects/meridian-park-@-the-prestige-city-logo.png";
import Modals from "../Includes/BrochureModals";
import DownloadBrochure from "../Includes/DownloadBrochure";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

const MeridianSlider = () => {
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
    {
      id: 3,
      ImageUrl: Image3,
      alt: "",
    },
    {
      id: 4,
      ImageUrl: Image4,
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
  return (
    <div>
      <OwlCarousel options={options}>
        {associations.map((item, index) => (
          <SimpleReactLightbox>
            <SRLWrapper>
              <div className="mx-2" key={index}>
                <Row>
                  <Col md={12}>
                    <div className="text-center">
                      <a href={item.ImageUrl}>
                        <Image
                          src={item.ImageUrl}
                          alt={item.alt}
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
              </div>
            </SRLWrapper>
          </SimpleReactLightbox>
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
                  <div className="m-1 text-start text-md-start">
                    <h1 className="text-primary fs-4">
                      Meridian Park @ The Prestige City
                    </h1>
                    <p className="m-0 fw-bold text-start text-md-start">
                      <p className=" text-start text-md-start mb-0 fs-6">
                        Sarjapur Main Road, Bangalore
                      </p>
                      <p className=" text-start text-md-start mb-0 fs-6">
                        1.06Cr* Onwards{" "}
                      </p>
                    </p>
                  </div>
                </Col>
                <Col md={6} xs={6} className="align-self-center">
                  <div className="text-start text-uppercase">
                    <Button
                      variant="primary"
                      onClick={handleShow}
                      className="my-1 btn text-white"
                    >
                      Download Price Sheet
                    </Button>
                  </div>
                </Col>
                <Col md={6} xs={6} className="align-self-center">
                  <div className="text-center text-uppercase">
                    <DownloadBrochure />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      <Modals
        show={show}
        handleClose={handleClose}
        title="Download Brochure"
        message="Please Fill in your details & Download the Complete Brochure"
        projectid="57a99891-ec20-472a-b230-187e20fee71f"
      />
    </div>
  );
};

export default MeridianSlider;
