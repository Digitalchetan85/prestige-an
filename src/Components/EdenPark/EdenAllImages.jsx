import { Container, Row, Col, Image } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import MasterPlan from "../../images/projects/eden-park/masterplan.png"
import NumberingPlan from "../../images/projects/eden-park/numbering-plan.png"
import Image1 from "../../images/projects/eden-park/1BHK/type-a1-1-br-634-sq-ft.jpeg";
import Image2 from "../../images/projects/eden-park/1BHK/type-a2-1-br-642-sq-ft.jpeg";
import Image3 from "../../images/projects/eden-park/1BHK/type-a3-1-br-643-sq-ft.jpeg";
import Image4 from "../../images/projects/eden-park/1BHK/type-a4-1-br-649-sq-ft.jpeg";
import Image5 from "../../images/projects/eden-park/1BHK/type-a5-1-br-666-sq-ft.jpeg";
import Image6 from "../../images/projects/eden-park/1BHK/type-a3-1-br-643-sq-ft.jpeg";
import Image7 from "../../images/projects/eden-park/2BHK/type-b1-2-br-944-sq-ft.jpeg";
import Image8 from "../../images/projects/eden-park/2BHK/type-b2-2-br-971-sq-ft.jpeg";
import Image9 from "../../images/projects/eden-park/2BHK/type-b3-2-br-974-sq-ft.jpeg";


const EdenAllImages = () => {
  const images = [
    { id: 1, imgName: MasterPlan, alt: "", tag: "Master Plan" },
    { id: 2, imgName: NumberingPlan, alt: "", tag: "Numbering Plan" },
    { id: 3, imgName: Image1, alt: "", tag: "Type A1 - 634Sq.ft" },
    { id: 4, imgName: Image2, alt: "", tag: "Type A2 - 642Sq.ft" },
    { id: 5, imgName: Image3, alt: "", tag: "Type A3 - 643Sq.ft" },
    { id: 6, imgName: Image4, alt: "", tag: "Type A4 - 649Sq.ft" },
    { id: 7, imgName: Image5, alt: "", tag: "Type A5 - 666Sq.ft" },
    { id: 8, imgName: Image6, alt: "", tag: "Type A3 - 643Sq.ft" },
    { id: 9, imgName: Image7, alt: "", tag: "Type B1 - 944Sq.ft" },
    { id: 10, imgName: Image8, alt: "", tag: "Type B2 - 971Sq.ft" },
    { id: 11, imgName: Image9, alt: "", tag: "Type B3 - 974Sq.ft" },
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

export default EdenAllImages;
