import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import About from "../Includes/AboutDeveloper";
import Contact from "../Includes/Contact";
import FixedIcons from "../Includes/FixedIcons";
import Info from "../Includes/Info";
import VirtualTour from "../Includes/VirtualTour";
import GreatAcresMasterPlan from "./GreatAcresMasterPlan";
import GreatAcresPrice from "./GreatAcresPrice";
import GreatAcresSlider from "./GreatAcresSlider";
import OtherProjectsGreatAcre from "./OtherProjectsGreatAcre";
import { Helmet } from "react-helmet";

const GreatAcres = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Great Acres | Residential Plots | Prestige City</title>
        <link
          rel="canonical"
          href="https://theprestigecitysarjapur.com/projects/great-acres"
        />
        <meta
          name="description"
          content="Great Acres is a Residential Plots are Developed in 81 Acres with 801 Plots by Prestige City."
          name="Robots" content="INDEX,FOLLOW"
          name="allow-search" content="yes"
          name="search engines" content="ALL"
          name="expires" content="Never"
        />
      </Helmet>
      <GreatAcresSlider />
      <Container fluid>
        <Row>
          <Col md={9}>
            <div id="overview" className="py-3 py-md-5">
              <Container fluid className="ps-0 pe-0">
                <Row>
                  <Col md={12}>
                    <h2 className="pb-2 text-center text-primary py-2 py-md-5 fs-3">
                      Greate Acres Project Highlights
                    </h2>
                    <span className="bg-danger position-absolute start-50 span-line"></span>
                    <Table className="table table-bordered align-middle">
                      <tbody>
                        <tr>
                          <th>RERA No</th>
                          <td>1251/308/PR/210928/004316</td>
                        </tr>
                        <tr>
                          <th>Development Size</th>
                          <td>81 Acres</td>
                        </tr>
                        <tr>
                          <th>Total No. of Plots</th>
                          <td>808 Plots</td>
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
                      About The Great Acres @ Prestige City
                    </h2>
                    <p>
                      The Prestige City is located on Sarjapur road consisting
                      of residential apartments, plotted development, and retail
                      spaces. It is situated in East Bengaluru with good
                      connectivity to the rest of the city. Prestige Great Acres
                      is a plotted layout within The Prestige City with a site
                      area of around 81 acres.
                    </p>
                    <p>
                      This Prestige development boasts a variety of plot sizes
                      that cater to all requirements. The plotted development
                      has a grand entrance with a 20M wide road, dedicated
                      pedestrian zones, and lush gardens that greet its
                      residents. Three main entrances on all sides of the
                      property make accessing the site convenient for all users.
                    </p>
                    <p>
                      Lavish green spaces provide ample space to create a
                      healthy natural environment. The elaborate pedestrian
                      pathways with a green buffer space make a stroll through
                      the community pleasant and safe. Almost all of the plots
                      are oriented towards the east and the west with internal
                      roads of a comfortable width of 12M and 9M depending on
                      the varying requirements of the size of the plots.
                    </p>
                  </Col>
                </Row>
              </Container>
            </div>

            <GreatAcresMasterPlan />

            <div className="py-3 py-md-5" id="amenites">
              <Container fluid className="ps-0 pe-0">
                <Row className="justify-content-center">
                  <h2 className="text-center text-primary py-md-3 py-2 fs-3">
                    Great Acres Amenities
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

            <Container fluid className="ps-0 pe-0">
              <Row>
                <GreatAcresPrice />
                <Info />
                <VirtualTour />
              </Row>
            </Container>
          </Col>
          <Col md={3}>
            <Contact />
          </Col>
        </Row>
      </Container>
      <OtherProjectsGreatAcre />
      <About />
      <FixedIcons />
    </div>
  );
};

export default GreatAcres;
