import React, { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import { Link } from "react-router-dom";
import Image1 from "../../images/slider/aspen-greens/aspen-greens-1.png";
import Image2 from "../../images/slider/avalon-park/avalon-park-1.png";
import Image3 from "../../images/slider/eden-park/eden-park-2.png";
import Image4 from "../../images/slider/meridian/image-1.png";
import Image5 from "../../images/slider/the-great-acres/the-great-acres-4.png";
import Modals from "../Includes/Modals";
import Logo from "../../images/logo-2.png";
import DownloadBrochure from "./DownloadBrochure";

const MainSlider = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const associations = [
    {
      id: 1,
      ImageUrl: Image2,
      alt: "",
      link: "/projects/avalon-park",
      title: "Avalon Park - Prestige City",
      specification: "3 & 4BHK Apartments",
      price: "79.99L* Onwards",
    },
    {
      id: 2,
      ImageUrl: Image4,
      alt: "",
      link: "/projects/meridian-park",
      title: "Meridian Park - Prestige City",
      specification: "Excl. 3BHK Apartments",
      price: "1.06Cr* Onwards",
    },
    {
      id: 3,
      ImageUrl: Image3,
      alt: "",
      link: "/projects/eden-park",
      title: "Eden Park - Prestige City",
      specification: "1 & 2BHK Apartments",
      price: "39.99L* Onwards",
    },
    {
      id: 4,
      ImageUrl: Image1,
      alt: "",
      link: "/projects/aspen-greens",
      title: "Aspen Greens - Prestige City",
      specification: "4BHK Villas",
      price: "3.2Cr* Onwards",
    },
    {
      id: 5,
      ImageUrl: Image5,
      alt: "",
      link: "/projects/great-acres",
      title: "Great Acres - Prestige City",
      specification: "Plots",
      price: "79.99L* Onwards",
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
    <div className="py-md-5">
      <OwlCarousel options={options}>
        {associations.map((item, index) => (
          <div className="mx-2" key={index}>
            <Row>
              <Col md={12}>
                {/* <Link to={item.link}> */}
                <div className="text-center">
                  <Image
                    src={item.ImageUrl}
                    alt={item.alt}
                    className="img-fluid"
                  />
                </div>
                {/* <div className="position-absolute bottom-0 start-50 translate-middle-x bg-dark text-white p-2 opacity-75 text-center">
                    <Link to={item.link} className="text-decoration-none text-white"><h2 className="opacity-100 fs-5 fw-bold">{item.title}</h2></Link>
                    <h3 className="opacity-100 fs-6 fw-bold">{item.price}</h3>
                    <h3 className="fs-6">{item.specification}</h3>
                  </div> */}
                {/* </Link> */}
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
                  <div className="text-start text-md-start">
                    <h1 className="text-primary fs-4">The Prestige City</h1>
                    <p className="m-0 fw-bold text-start text-md-start">
                      <p className=" text-start text-md-start mb-0 fs-6">
                        Sarjapur Main Road, Bangalore
                      </p>
                      <p className=" text-start text-md-start mb-0 fs-6">
                        1, 2, 3 & 4BR Apartments & 4BR Villas & Plots
                      </p>
                      <p className=" text-start text-md-start mb-0 fs-6">
                        Price Starts from 39L* to 6Cr*
                      </p>
                    </p>
                  </div>
                </Col>
                {/* <Col md={6} xs={6} className="align-self-center">
                  <div className="">
                    <p className="ms-1 text-start text-md-start mb-0 fs-6 fw-bold">
                      
                    </p>
                  </div>
                </Col> */}
                <Col md={4} xs={8} className="align-self-center">
                  <div className="text-start my-1 text-uppercase">
                    <DownloadBrochure />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <div className="bg-light position-relative rounded" id="custom-content">
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
            <Col md={8} className="">
              <Row className="">
                <Col md={6} className="">
                  <div className="m-1 text-center text-md-start">
                    <h2>Prestige City Projects</h2>
                    <p className="m-0 fw-bold text-center text-md-start">
                      {" "}
                      3 & 4 BHK Villas Starts @ 3.5 Cr* Onwards
                    </p>
                    <p className="text-center text-md-start">
                      {" "}
                      Sarjapur Rd, Bangalore
                    </p>
                  </div>
                </Col>
                <Col md={6} className="align-self-center">
                  <div className="text-center text-md-start">
                    <a
                      href="javascript"
                      className="btn btn-primary m-1 text-uppercase ps-5 pe-5 pt-2 pb-2"
                      data-bs-toggle="modal" 
                      data-bs-target="#modal" rel="noreferrer noopener"
                    >
                      Download Brochure
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div> */}
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

export default MainSlider;
