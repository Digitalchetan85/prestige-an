import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Modals from "./Modals";

const About = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setTimeout(function () {
      setShow(true);
    }, 7000);
  }, []);

  return (
    <div id="about" className="py-3 py-md-5">
      <Container>
        <Row>
          <Col md={12} className="align-self-center">
            <div className="">
              <h2 className="py-2 text-primary text-uppercase text-center">
                About Developer
              </h2>
              <p className="justify-content">
                Over the last decade, the Prestige Group has firmly established
                itself as one of the leading and most successful developers of
                real estate in India by imprinting its indelible mark across all
                asset classes. Founded in 1986, the group’s turnover is today in
                excess of Rs 3518 Cr (for FY 15); a leap that has been inspired
                by CMD Irfan Razack and marshaled by his brothers Rezwan Razack
                and Noaman Razack. As of 30th June 2020, the group has completed
                247 projects covering 134 million sft, and currently has 45
                ongoing projects covering over 53 million sft, 56 mn sft of
                upcoming projects, and holds a land bank of 262 acres with
                potential developable area of 27 mn sft.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Modals
        show={show}
        handleClose={handleClose}
        title="Get More Details."
      />
    </div>
  );
};

export default About;
