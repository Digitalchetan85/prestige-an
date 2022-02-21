
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image1 from "../../images/projects/eden-park/2BHK/type-b1-2-br-944-sq-ft.jpeg";
import Image2 from "../../images/projects/eden-park/2BHK/type-b2-2-br-971-sq-ft.jpeg";
import Image3 from "../../images/projects/eden-park/2BHK/type-b3-2-br-974-sq-ft.jpeg";

const EdenTwoBhk = () => {
  const ThreeBHKImages = [
    { id: 1, imgName: Image1, alt: "", tag: "Type B1 - 944Sq.ft" },
    { id: 2, imgName: Image2, alt: "", tag: "Type B2 - 971Sq.ft" },
    { id: 3, imgName: Image3, alt: "", tag: "Type B3 - 974Sq.ft" },
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

export default EdenTwoBhk;
