import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import About from "../Includes/AboutDeveloper";
import Contact from "../Includes/Contact";
import FixedIcons from "../Includes/FixedIcons";
import Info from "../Includes/Info";
import VirtualTour from "../Includes/VirtualTour";
import AspenMasterPlan from "./AspenMasterPlan";
import AspenPrice from "./AspenPrice";
import AspenSlider from "./AspenSlider";
import OtherProjectsAspen from "./OtherProjectsAspen";
import {Helmet} from "react-helmet";

const AspenGreens = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Aspen Greens | Luxury Villas | 4BHK Premium Villas </title>
        <link rel="canonical" href="https://theprestigecitysarjapur.com/projects/aspen-greens" />
        <meta
          name="description"
          content="Aspen Greens a Luxurious Villas with private garden area and covered space to park 2 cars comfortably built in 20.9 Acres."
          name="Robots" content="INDEX,FOLLOW"
          name="allow-search" content="yes"
          name="search engines" content="ALL"
          name="expires" content="Never"
        />
      </Helmet>
      <AspenSlider />
      <Container fluid>
        <Row>
          <Col md={9} className="bg-light">
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
                          <td>PR/211007/004346</td>
                        </tr>
                        <tr>
                          <th>Development Size</th>
                          <td>20.3 Acres</td>
                        </tr>
                        <tr>
                          <th>No. of Units</th>
                          <td>149</td>
                        </tr>
                        <tr>
                          <th>No. of Rooms</th>
                          <td>4BHK</td>
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
                    <h2 className="py-2 text-center text-primary fs-4">
                      About Aspen Greens - Prestige City
                    </h2>
                    <p>
                      Your villa at Aspen Greens confers a clear mark of
                      distinction on your address.
                    </p>
                    <p>
                      It comes to you with its own private garden area, and
                      covered space to park two cars comfortably.
                    </p>
                    <p>
                      Planned after the principles of Spanish architecture, its
                      layout enables you to entertain with aplomb and be the
                      perfect host while safeguarding your privacy. For
                      instance, its entrance is positioned so that your guests
                      can access your living area and its accompanying lawn
                      directly, without having to traverse your family’s
                      personal spaces.
                    </p>
                    <p>
                      Seamlessly skirted by grassy paths, it blurs the line
                      between the outdoors and in, enveloping you in nature’s
                      warm embrace.
                    </p>
                    <p>
                      With four spacious bedrooms as well as a maid’s room,
                      large balcony decks opening from the bedrooms, a central
                      family area, and a commodious kitchen, it promises you a
                      life that is convenient and comfortable even as it is
                      elegant and classy.
                    </p>
                  </Col>
                </Row>
              </Container>
            </div>

            <div className="py-3 py-md-5 bg-light" id="master-plan">
              <Container fluid className="ps-0 pe-0">
                <Row>
                  <Col md={12}>
                    <AspenMasterPlan />
                  </Col>
                </Row>
              </Container>
            </div>

            <div className="py-3 py-md-5" id="amenites">
              <Container fluid className="ps-0 pe-0">
                <Row className="justify-content-center">
                  <h2 className="text-center text-primary py-md-3 py-2 fs-3">
                    Aspen Greens Amenities
                  </h2>
                  <Col md={3} xs={6}>
                    <ul>
                      <li>Jogging Track</li>
                      <li>Amphitheatre</li>
                      <li>Foot Reflexology</li>
                      <li>Tennis Courts</li>
                      <li>Futsal Court</li>
                      <li>Function Lawn</li>
                    </ul>
                  </Col>
                  <Col md={3} xs={6}>
                    <ul>
                      <li>Party Zone</li>
                      <li>Pet's Corner</li>
                      <li>Senior's Corner</li>
                      <li>Urban Farming</li>
                      <li>Pool with deck</li>
                      <li>Pavilion</li>
                    </ul>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="py-3 py-md-5" id="pricing">
              <Container fluid className="ps-0 pe-0">
                <Row>
                  <AspenPrice />
                  <Info />
                  <VirtualTour />
                </Row>
              </Container>
            </div>
          </Col>
          <Col md={3}>
            <Contact />
          </Col>
        </Row>
      </Container>
      <OtherProjectsAspen />
      <About />
      <FixedIcons />
    </div>
  );
};

export default AspenGreens;
