
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image3 from "../../images/projects/meridian/3bhk-type-d2.png";
import Image4 from "../../images/projects/meridian/3bhk-type-E8.png";
import Image5 from "../../images/projects/meridian/3bhk-type-F1.png";
import Image6 from "../../images/projects/meridian/3bhk-type-F2.png";

const MeridianFloorplan = () => {
  const ThreeBHKImages = [
    { id: 3, imgName: Image3, alt: "", tag: "3BHK Type D2" },
    { id: 4, imgName: Image4, alt: "", tag: "3bhk Type E8" },
    { id: 5, imgName: Image5, alt: "", tag: "3BHK Type F1" },
    { id: 6, imgName: Image6, alt: "", tag: "3BHK Type F2" },
  ];

  return (
    <div>
      <Container>
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

export default MeridianFloorplan;
