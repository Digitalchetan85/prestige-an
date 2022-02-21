import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import About from "../Includes/AboutDeveloper";
import Amenities from "../Includes/Amenities";
import Contact from "../Includes/Contact";
import FixedIcons from "../Includes/FixedIcons";
import MainSlider from "../Includes/MainSlider";
import MasterPlan from "../Includes/MasterPlan";
import Modals from "../Includes/Modals";
import Pricing from "../Includes/Pricing";
import Projects from "../Includes/Projects";
import VirtualTour from "../Includes/VirtualTour";

const Home = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <MainSlider />
      <Container fluid className="ps-0 pe-0 ps-md-4 pe-md-4 bg-light">
        <Row className="ms-0 me-0">
          <Col md={9}>
            <Container fluid className="ps-0 pe-0">
              <Row>
                <Col md={12}>
                  <div className="p-2">
                    <h2 className="text-center text-primary"> Prestige City</h2>
                    <p className="py-3 py-md-2">
                      The Prestige City is a futuristic residential project by
                      the Prestige Group off Sarjapur Road in Bangalore. People
                      who wish to buy a home in Bangalore can now relish their
                      time to come, buy an apartment at The Prestige City of the
                      Prestige Group in Bangalore. It is solely an upcoming
                      project, and many buyers are on the lookout for purchasing
                      a dream home. It also mentions the availability of many
                      payment plans that would be construction linked.
                    </p>
                    <p>
                      Prestige Group has given you an opportunity to own your
                      dream house in the most prominent area of the real estate
                      market in Bengaluru i.e., East Bengaluru. The Prestige
                      City is an upcoming premium residential project by the
                      esteemed Prestige Group located in Ittangur, Marathalli
                      off Sarjapur road in East Bengaluru. The Prestige City is
                      a pre-launch project in Sarjapur road with a mixed
                      residential development theme. It includes premium
                      apartments Eden Park Having 1 & 2 Bed Rooms, Avalon Park
                      Having 3 & 4 Bed Rooms and Villas in Aspen Greens Having 4
                      Bed Room And The Great Acres Plotted Development Sizes;
                      best in class luxurious villas, and plots of various sizes
                      wherein people can build their homes as per their
                      requirement and desire. The Prestige S City in Ittangur is
                      scattered across a huge land area of 168+ acres with
                      greenery profusely spread within the area, making it
                      suitable for a better residential space. Add its
                      best-in-class amenities to the picture you will realize
                      how peaceful a life you can lead if you own an apartment,
                      villa, or a plot at The Prestige City. This huge project
                      will receive the RERA approved Project.
                    </p>
                    <div className="text-center">
                      <Button
                        variant="primary"
                        onClick={handleShow}
                        className="my-3"
                      >
                        Contact Us For More Details
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>

            <Projects />

            <MasterPlan />

            <Pricing />

            <Amenities />

            <VirtualTour />
          </Col>
          <Col md={3}>
            <Contact />
          </Col>
        </Row>
      </Container>
      <About />
      <FixedIcons />
      <Modals
        show={show}
        handleClose={handleClose}
        title="Contact Us For More Details"
        projectid="57a99891-ec20-472a-b230-187e20fee71f"
      />
    </div>
  );
};

export default Home;
