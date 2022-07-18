import { Container, Row, Col, Image } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image1 from "../../images/projects/meridian/master-plan.png";
import Image2 from "../../images/projects/meridian/numbering-plan.png";
import Image3 from "../../images/projects/meridian/3bhk-type-d2.png";
import Image4 from "../../images/projects/meridian/3bhk-type-E8.png";
import Image5 from "../../images/projects/meridian/3bhk-type-F1.png";
import Image6 from "../../images/projects/meridian/3bhk-type-F2.png";
import Image7 from "../../images/projects/meridian/3bhk-type-e6.jpg";
import Image8 from "../../images/projects/meridian/3bhk-type-e4.jpg";

const MeridianAllImages = () => {
  const images = [
    { id: 1, imgName: Image1, alt: "", tag: "Master Plan" },
    { id: 2, imgName: Image2, alt: "", tag: "Numbering Plan" },
    { id: 3, imgName: Image3, alt: "", tag: "3BHK 1387 Sqft." },
    { id: 8, imgName: Image8, alt: "", tag: "3BHK 1629 Sqft." },
    { id: 7, imgName: Image7, alt: "", tag: "3BHK 1641 Sqft." },
    { id: 4, imgName: Image4, alt: "", tag: "3bhk 1665 Sqft." },
    { id: 5, imgName: Image5, alt: "", tag: "3BHK 1851 Sqft." },
    { id: 6, imgName: Image6, alt: "", tag: "3BHK 1865 Sqft." },
  ];

  return (
    <div>
      <Container fluid className="ps-0 pe-0">
        <SimpleReactLightbox>
          <SRLWrapper>
            <Row className="g-3 justify-content-center">
              {images.map((item) => (
                <Col md={4} xs={6} sm={6} key={item.id}>
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

export default MeridianAllImages;
