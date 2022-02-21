import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import About from "../Includes/AboutDeveloper";
import Contact from "../Includes/Contact";
import FixedIcons from "../Includes/FixedIcons";
import Info from "../Includes/Info";
import MeridianMasterPlan from "./MeridianMasterPlan";
import MeridianPrice from "./MeridianPrice";
import MeridianSlider from "./MeridianSlider";
import OtherProjectsMeridian from "./OtherProjectsMeridian";

const MeridianPark = () => {
  return (
    <div>
      <MeridianSlider />
      <Container fluid>
        <Row>
          <Col md={9}>
            <div id="overview" className="py-3 py-md-5">
              <Container fluid className="ps-0 pe-0">
                <Row>
                  <Col md={12}>
                    <h2 className="pb-2 text-center text-primary py-2 py-md-5">
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
                    <h2 className="py-2 text-center text-primary">
                      About The Meridian Park @ Prestige City
                    </h2>
                    <p>
                      Meridian Park is a community of spacious and well-planned
                      high-rise homes located within the upcoming ‘The Prestige
                      City’ township, which comprises villa plots, apartments,
                      villas and a proposed Forum retail mall.
                    </p>
                    <p>
                      Your home at Meridian Park is a spacious family dwelling
                      that is designed to enable convenient and comfortable
                      living.
                    </p>
                    <p>
                      Thanks to intelligent and innovative use of space, you
                      will find that you can make optimal use of your rooms to
                      fashion your life exactly the way you want it to be. With
                      abundant natural light and ventilation, you will enjoy a
                      deep sense of well-being.
                    </p>
                    <p>
                      Meridian Park presents three bed homes in a range of
                      sizes. You can choose the home that suits your needs the
                      best.
                    </p>
                  </Col>
                </Row>
              </Container>
            </div>

            <div id="master-plan">
              <MeridianMasterPlan />
            </div>

            <div className="py-3 py-md-5" id="amenites">
              <Container fluid className="ps-0 pe-0">
                <Row>
                  <h2 className="text-center text-primary py-md-3">
                    Amenities
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
                <Row>
                  <MeridianPrice />
                  <Info />
                </Row>
              </Container>
            </div>
          </Col>
          <Col md={3}>
            <Contact />
          </Col>
        </Row>
      </Container>
      <OtherProjectsMeridian />
      <About />
      <FixedIcons />
    </div>
  );
};

export default MeridianPark;
