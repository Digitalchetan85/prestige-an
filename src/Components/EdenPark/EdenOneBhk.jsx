
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image1 from "../../images/projects/eden-park/1BHK/type-a1-1-br-634-sq-ft.jpeg";
import Image2 from "../../images/projects/eden-park/1BHK/type-a2-1-br-642-sq-ft.jpeg";
import Image3 from "../../images/projects/eden-park/1BHK/type-a3-1-br-643-sq-ft.jpeg";
import Image4 from "../../images/projects/eden-park/1BHK/type-a4-1-br-649-sq-ft.jpeg";
import Image5 from "../../images/projects/eden-park/1BHK/type-a5-1-br-666-sq-ft.jpeg";
import Image6 from "../../images/projects/eden-park/1BHK/type-a3-1-br-643-sq-ft.jpeg";

const EdenOneBhk = () => {
  const ThreeBHKImages = [
    
    { id: 1, imgName: Image1, alt: "", tag: "Type A1 - 634Sq.ft" },
    { id: 2, imgName: Image2, alt: "", tag: "Type A2 - 642Sq.ft" },
    { id: 3, imgName: Image3, alt: "", tag: "Type A3 - 643Sq.ft" },
    { id: 4, imgName: Image4, alt: "", tag: "Type A4 - 649Sq.ft" },
    { id: 5, imgName: Image5, alt: "", tag: "Type A5 - 666Sq.ft" },
    { id: 6, imgName: Image6, alt: "", tag: "Type A3 - 643Sq.ft" },
    
  ];

  return (
    <div>
      <Container>
        <SimpleReactLightbox>
          <SRLWrapper>
            <Row className="g-3">
              {ThreeBHKImages.map((item) => (
                <Col md={3} key={item.id}>
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

export default EdenOneBhk;
