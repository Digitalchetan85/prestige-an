import { Container, Row, Col, Image } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image1 from "../../images/projects/aspen-greens/masterplan.jpeg";
import Image2 from "../../images/projects/aspen-greens/numbering-plan.jpeg";
import Image3 from "../../images/projects/aspen-greens/4BHK/type-a1-4-br-3344-sq-ft.jpeg";
import Image4 from "../../images/projects/aspen-greens/4BHK/type-a2-4-br-3364-sq-ft.jpeg";
import Image5 from "../../images/projects/aspen-greens/4BHK/type-b1-4-br-3612-sq-ft.jpeg";
import Image6 from "../../images/projects/aspen-greens/4BHK/type-b2-4-br-3593-sq-ft.jpeg";

const AspenAllImages = () => {
  const images = [
    { id: 1, imgName: Image1, alt: "", tag: "Master Plan" },
    { id: 2, imgName: Image2, alt: "", tag: "Numbering Plan" },
    { id: 3, imgName: Image3, alt: "", tag: "Type A1 3344 Sq.ft" },
    { id: 4, imgName: Image4, alt: "", tag: "Type A2 3364 Sq.ft" },
    { id: 5, imgName: Image5, alt: "", tag: "Type B1 3612 Sq.ft" },
    { id: 6, imgName: Image6, alt: "", tag: "Type B2 3593 Sq.ft" },
  ];

  return (
    <div>
      <Container fluid className="ps-0 pe-0">
        <SimpleReactLightbox>
          <SRLWrapper>
            <Row className="g-3 justify-content-center">
              {images.map((item) => (
                <Col md={4} xs={6} sm={6}key={item.id}>
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

export default AspenAllImages;
