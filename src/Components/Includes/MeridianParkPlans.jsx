import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image1 from "../../images/projects/meridian/master-plan.png";
import Image2 from "../../images/projects/meridian/numbering-plan.png";
import Image3 from "../../images/projects/meridian/3bhk-type-d2.png";
import Image4 from "../../images/projects/meridian/3bhk-type-E8.png";
import Image5 from "../../images/projects/meridian/3bhk-type-F1.png";
import Image6 from "../../images/projects/meridian/3bhk-type-F2.png";

const MeridianParkPlans = () => {
  const images = [
    { id: 1, imgName: Image1, alt: "", tag: "Master Plan" },
    { id: 2, imgName: Image2, alt: "", tag: "Numbering Plan" },
    { id: 3, imgName: Image3, alt: "", tag: "3BHK Type D2" },
    { id: 4, imgName: Image4, alt: "", tag: "3BHK Type E8" },
    { id: 5, imgName: Image5, alt: "", tag: "3BHK Type F1" },
    { id: 6, imgName: Image6, alt: "", tag: "3BHK Type F2" },
  ];
  return (
    <div>
      <SimpleReactLightbox>
          <SRLWrapper>
            <Row className="g-3">
              {images.map((item) => (
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
    </div>
  );
};

export default MeridianParkPlans;
