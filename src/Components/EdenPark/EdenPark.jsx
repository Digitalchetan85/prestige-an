import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import About from '../Includes/AboutDeveloper'
import Contact from '../Includes/Contact'
import FixedIcons from '../Includes/FixedIcons'
import Info from '../Includes/Info'
import VirtualTour from '../Includes/VirtualTour'
import EdenMasterPlan from './EdenMasterPlan'
import EdenPrice from './EdenPrice'
import EdenSlider from './EdenSlider'
import OtherProjectsEden from './OtherProjectsEden'
import {Helmet} from 'react-helmet'

const EdenPark = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Eden Park | Prestige City | 1BHK | 2BHK Apartments</title>
        <link rel="canonical" href="https://theprestigecitysarjapur.com/projects/eden-park" />
        <meta
          name="description"
          content="Prestige City Eden Park is one of the blocks of the 2217 units in 9.7 acres of land. This township consists of 1BHK and 2BHK Apartments."
          name="Robots" content="INDEX,FOLLOW"
          name="allow-search" content="yes"
          name="search engines" content="ALL"
          name="expires" content="Never"
        />
      </Helmet>
      <EdenSlider />
      <Container fluid>
        <Row>
          <Col md={9}>
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
                          <td>9.7 Acres</td>
                        </tr>
                        <tr>
                          <th>Total No. of Units</th>
                          <td>2217 units</td>
                        </tr>
                        <tr>
                          <th>No. of Rooms</th>
                          <td>1 & 2 BHK</td>
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
                      About Eden Park @ Prestige City
                    </h2>
                    <p>
                      Your home at Eden Park is a snug and cosy dwelling that is
                      flush with fresh air and bright with natural light.
                    </p>
                    <p>
                      You have optimum floor space to plan your life the way you
                      feel most comfortable. And you look out onto the
                      pleasantest of views.
                    </p>
                    <p>
                      All of which contributes to a great sense of wellbeing and
                      has been made possible by some creative and astute
                      planning.
                    </p>
                    <p>
                      Finally, you have a choice of sizes in one-bed and two-bed
                      homes to perfectly suit your need.
                    </p>
                  </Col>
                </Row>
              </Container>
            </div>

            <EdenMasterPlan />

            <div className="py-3 py-md-5" id="amenites">
              <Container fluid className="ps-0 pe-0">
                <Row className="justify-content-center">
                  <h2 className="text-center text-primary py-md-3 py-2 fs-3">
                    Prestige City - Amenities
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
                  <EdenPrice />
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
      <OtherProjectsEden />
      <About />
      <FixedIcons />
    </div>
  )
}

export default EdenPark