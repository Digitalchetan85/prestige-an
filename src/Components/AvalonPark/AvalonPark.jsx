import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import About from "../Includes/AboutDeveloper";
import Contact from "../Includes/Contact";
import FixedIcons from "../Includes/FixedIcons";
import Info from "../Includes/Info";
import VirtualTour from "../Includes/VirtualTour";
import AvalonMasterPlan from "./AvalonMasterPlan";
import AvalonPrice from "./AvalonPrice";
import AvalonSlider from "./AvalonSlider";
import OtherProjectsAvalon from "./OtherProjectsAvalon";
import {Helmet} from "react-helmet";

const AvalonPark = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Avalon Park | Prestige City | 3BHK | 4BHK Apartments </title>
        <link rel="canonical" href="https://theprestigecitysarjapur.com/projects/avalon-park" />
        <meta
          name="description"
          content="Avalon Park well developed Prestige City project in 6.8 Acres, Homes are built as 3, 4BHK Apartments with open windows."
          name="Robots" content="INDEX,FOLLOW"
          name="allow-search" content="yes"
          name="search engines" content="ALL"
          name="expires" content="Never"
        />
      </Helmet>
      <AvalonSlider />
      <Container fluid>
        <Row>
          <Col md={9}>
            <div id="overview" className="py-3 py-md-5">
              <Container fluid className="ps-0 pe-0">
                <Row>
                  <Col md={12}>
                    <h2 className="pb-2 text-center text-primary py-2 py-md-5 fs-3">
                      Avalon Park Project Highlights
                    </h2>
                    <span className="bg-danger position-absolute start-50 span-line"></span>
                    <Table className="table table-bordered align-middle">
                      <tbody>
                        <tr>
                          <th>RERA No</th>
                          <td>PR/210928/004316</td>
                        </tr>
                        <tr>
                          <th>Development Size</th>
                          <td>6.8 Acres</td>
                        </tr>
                        <tr>
                          <th>Total No. of Units</th>
                          <td>950 units</td>
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
                    <h2 className="py-2 text-center text-primary fs-3">
                      About Avalon Park Prestige City
                    </h2>
                    <p>
                      Your home at Avalon Park is a well designed haven that is
                      abundant with natural light and ventilation, thanks to
                      imaginative and intelligent planning.
                    </p>
                    <p>
                      Open the windows and allow Mother Nature herself to keep
                      your home cool and ventilated. The savings on power aside,
                      there’s nothing quite like breathing in fresh air, is
                      there? What’s more, look out of any window and you will
                      see a tapestry of green pleasantness.
                    </p>
                    <p>
                      Finally, you have a choice of sizes and room
                      configurations to perfectly suit your need across
                      three-bed and four-bed homes.
                    </p>
                  </Col>
                </Row>
              </Container>
            </div>

            <div id="master-plan">
              <AvalonMasterPlan />
            </div>

            <div className="py-3 py-md-5" id="amenites">
              <Container fluid className="ps-0 pe-0">
                <Row className="justify-content-center">
                  <h2 className="text-center text-primary py-2 py-md-3 fs-3">
                  Avalon Park Amenities
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
                  <AvalonPrice />
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
      <OtherProjectsAvalon />
      <About />
      <FixedIcons />
    </div>
  );
};

export default AvalonPark;
