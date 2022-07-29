import React, { useState } from "react";
import { Col, Container, Row, Table, Image } from "react-bootstrap";
import About from "../Includes/AboutDeveloper";
import Contact from "../Includes/Contact";
import FixedIcons from "../Includes/FixedIcons";
import Info from "../Includes/Info";
import VirtualTour from "../Includes/VirtualTour";
import MeridianMasterPlan from "./MeridianMasterPlan";
import MeridianPrice from "./MeridianPrice";
import MeridianSlider from "./MeridianSlider";
import OtherProjectsMeridian from "./OtherProjectsMeridian";
import { Helmet } from "react-helmet";
import Costsheet from "../../images/projects/meridian/cost-sheet.png";
import MeridianModal from "./MeridianModal";
import TopHeader from "../Includes/TopHeader";

const MeridianPark = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Meridian park | Prestige City | Villas | Plots | Apartments{" "}
        </title>
        <link
          rel="canonical"
          href="https://theprestigecitysarjapur.com/projects/meridian-park"
        />
        <meta
          name="description"
          content="Meridian Park is a spacious high-rise homes located within the upcoming Prestige City township, which comprises Villa, Plots & Apartments, villas."
        />
      </Helmet>

      <div className="">
        <Container fluid>
              <MeridianSlider />
              <Container fluid>
                <Row>
                  <Col md={8}>
                    <div id="overview" className="py-3 py-md-5">
                      <Container fluid className="ps-0 pe-0">
                        <Row>
                          <Col md={12}>
                            <h2 className="pb-2 text-center text-primary py-2 py-md-5 fs-3">
                              Project Highlights
                            </h2>
                            <span className="bg-danger position-absolute start-50 span-line"></span>
                            <Table className="table table-bordered align-middle">
                              <tbody>
                                <tr>
                                  <th>RERA No</th>
                                  <td>PR/211008/004353</td>
                                </tr>
                                <tr>
                                  <th>Development Size</th>
                                  <td>18.2Acres</td>
                                </tr>
                                <tr>
                                  <th>Total No. of Towers</th>
                                  <td>16</td>
                                </tr>
                                <tr>
                                  <th>Number of Floors</th>
                                  <td>G+30 Floors</td>
                                </tr>
                                <tr>
                                  <th>Possession</th>
                                  <td>July 2025</td>
                                </tr>
                              </tbody>
                            </Table>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                    <div className="py-2 py-md-2">
                      <Container fluid className="ps-0 pe-0">
                        <Row>
                          <Col md={12}>
                            <h2 className="py-2 text-center text-primary fs-3">
                              Prestige Smart City - Meridian Park
                            </h2>
                            <p>
                              <a
                                href="/projects/meridian-park"
                                className="fw-bold text-decoration-none"
                              >
                                Prestige City Meridian Park
                              </a>{" "}
                              is a community of spacious and well-planned
                              high-rise homes located within the upcoming ‘The
                              Prestige City’ township, which comprises villa
                              plots, apartments, villas and a proposed Forum
                              retail mall.
                            </p>
                            <p>
                              Your home at Meridian Park is a spacious family
                              dwelling that is designed to enable convenient and
                              comfortable living.
                            </p>
                            <p>
                              Thanks to intelligent and innovative use of space,
                              you will find that you can make optimal use of
                              your rooms to fashion your life exactly the way
                              you want it to be. With abundant natural light and
                              ventilation, you will enjoy a deep sense of
                              well-being.
                            </p>
                            <p>
                              Meridian Park presents three bed homes in a range
                              of sizes. You can choose the home that suits your
                              needs the best.
                            </p>
                          </Col>
                        </Row>
                      </Container>
                    </div>

                    <Info />

                    <div id="master-plan">
                      <MeridianMasterPlan />
                    </div>

                    <div className="py-3 py-md-5" id="amenites">
                      <Container fluid className="ps-0 pe-0">
                        <Row>
                          <h2 className="text-center text-primary py-md-3 py-2 fs-3">
                            Meridian Park - Amenities
                          </h2>
                          <Col md={4} xs={6}>
                            <ul>
                              <li>Jogging Track</li>
                              <li>Amphitheatre</li>
                              <li>Foot Reflexology</li>
                              <li>Tennis Courts</li>
                              <li>Futsal Court</li>
                              <li>Function Lawn</li>
                            </ul>
                          </Col>
                          <Col md={4} xs={6}>
                            <ul>
                              <li>Party Zone</li>
                              <li>Pet's Corner</li>
                              <li>Senior's Corner</li>
                              <li>Urban Farming</li>
                              <li>Pool with deck</li>
                              <li>Pavilion</li>
                            </ul>
                          </Col>
                          <Col md={4} xs={12}>
                            <ul>
                              <li>Basement Parking - 2Level</li>
                              <li>Mixed Aged Kids Playground</li>
                              <li>Outdoor Exercise Station/Gym</li>
                              <li>Swimming Pool & Kids Pool</li>
                              <li>Cricket Practice Pitch</li>
                              <li>Multisports Court</li>
                            </ul>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                    <div className="py-3 py-md-5" id="pricing">
                      <Container fluid className="ps-0 pe-0">
                        <Row className="ms-0 me-0">
                          <Col md={8}>
                            <MeridianPrice />
                          </Col>
                          <Col md={4}>
                            <div className="sticky-top" id="contact1">
                              <div className="text-center">
                                <h4 className="text-primary">
                                  Download Pricesheet
                                </h4>
                                <Image
                                  src={Costsheet}
                                  alt=""
                                  onClick={handleShow}
                                  className="img-fluid"
                                  style={{ filter: "blur(2px)" }}
                                ></Image>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div id="contact" className="sticky-top py-md-5 my-md-5">
                      <Contact />
                    </div>
                  </Col>
                </Row>
              </Container>

              <VirtualTour />
              <OtherProjectsMeridian />
              <About />
        </Container>
      </div>

      <FixedIcons />

      <MeridianModal
        show={show}
        handleClose={handleClose}
        title="Download Pricesheet"
        message="Please Fill in your details & Download Price breakup"
        projectid="57a99891-ec20-472a-b230-187e20fee71f"
      />
    </div>
  );
};

export default MeridianPark;
