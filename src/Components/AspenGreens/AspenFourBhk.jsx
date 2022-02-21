
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image3 from "../../images/projects/aspen-greens/4BHK/type-a1-4-br-3344-sq-ft.jpeg";
import Image4 from "../../images/projects/aspen-greens/4BHK/type-a2-4-br-3364-sq-ft.jpeg";
import Image5 from "../../images/projects/aspen-greens/4BHK/type-b1-4-br-3612-sq-ft.jpeg";
import Image6 from "../../images/projects/aspen-greens/4BHK/type-b2-4-br-3593-sq-ft.jpeg";

const AspenFourBhk = () => {
  const ThreeBHKImages = [
    { id: 1, imgName: Image3, alt: "", tag: "Type A1 3344 Sq.ft" },
    { id: 2, imgName: Image4, alt: "", tag: "Type A1 3364 Sq.ft" },
    { id: 3, imgName: Image5, alt: "", tag: "Type A1 3612 Sq.ft" },
    { id: 4, imgName: Image6, alt: "", tag: "Type A1 3593 Sq.ft" },
  ];

  return (
    <div>
      <Container fluid className="ps-0 pe-0">
        <SimpleReactLightbox>
          <SRLWrapper>
            <Row className="g-3">
              {ThreeBHKImages.map((item) => (
                <Col md={3} xs={6} sm={6} key={item.id}>
                  <div className="m-1 text-center border border-dark p-1 rounded">
                    <a href={item.imgName}>
                      <Image
                        src={item.imgName}
                        alt={item.alt}
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <h6 className="text-center"> {item.tag} </h6>
                </Col>
              ))}
            </Row>
          </SRLWrapper>
        </SimpleReactLightbox>
      </Container>
    </div>
  );
};

export default AspenFourBhk;
