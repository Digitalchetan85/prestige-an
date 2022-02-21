import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"
import Image1 from "../../images/projects/avalon-park/masterplan.png";
import Image2 from "../../images/projects/avalon-park/numbering-plan.png";
import Image3 from "../../images/projects/avalon-park/3bhk/type-d1-3-bed-1361-sq-ft.png";
import Image4 from "../../images/projects/avalon-park/3bhk/type-e1-3-bed-1536-sq-ft.png";
import Image5 from "../../images/projects/avalon-park/3bhk/type-e2-3-bed-1599-sq-ft.png";
import Image6 from "../../images/projects/avalon-park/3bhk/type-e3-3-bed-1620-sq-ft.png";
import Image7 from "../../images/projects/avalon-park/3bhk/type-e7-3-bed-1657-sq-ft.png";
import Image8 from "../../images/projects/avalon-park/3bhk/type-f3-3-bed-1898-sq-ft.png";
import Image9 from "../../images/projects/avalon-park/3bhk/type-f4-3-bed-1898-sq-ft.png";
import Image10 from "../../images/projects/avalon-park/4bhk/type-g1-4-bed-2204-sq-ft.png";
import Image11 from "../../images/projects/avalon-park/4bhk/type-g2-4-bed-2290-sq-ft.png";

const AvalonParkPlans = () => {
  const FourBHKImages = [
    { id: 1, imgName: Image1, alt: "", tag: "Master Plan" },
    { id: 2, imgName: Image2, alt: "", tag: "Numbering Plan" },
    { id: 3, imgName: Image3, alt: "", tag: "Type D1 - 1361Sq.ft" },
    { id: 4, imgName: Image4, alt: "", tag: "Type D1 - 1536Sq.ft" },
    { id: 5, imgName: Image5, alt: "", tag: "Type D1 - 1599Sq.ft" },
    { id: 6, imgName: Image6, alt: "", tag: "Type D1 - 1620Sq.ft" },
    { id: 7, imgName: Image7, alt: "", tag: "Type D1 - 1657Sq.ft" },
    { id: 8, imgName: Image8, alt: "", tag: "Type D1 - 1898Sq.ft" },
    { id: 9, imgName: Image9, alt: "", tag: "Type D1 - 1898Sq.ft" },
    { id: 10, imgName: Image10, alt: "", tag: "Type G1 - 1898Sq.ft" },
    { id: 11, imgName: Image11, alt: "", tag: "Type G2 - 2290Sq.ft" },
  ];
  return (
    <div>
      <SimpleReactLightbox>
          <SRLWrapper>
            <Row className="g-3">
              {FourBHKImages.map((item) => (
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

export default AvalonParkPlans;
