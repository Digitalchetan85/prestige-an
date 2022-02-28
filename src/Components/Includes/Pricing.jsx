import React, { useState } from "react";
import { Button, Col, Container, Row, Tab, Table, Tabs } from "react-bootstrap";
import Modals from "./Modals";

const Pricing = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div id="pricing" className="bg-light">
      <Container fluid className="ps-0 pe-0">
        <h2 className="text-primary text-center py-2 fs-3">Prestige City Pricing</h2>
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Apartments">
          <Table
                responsive="sm"
                className="align-middle text-center border-transparent"
                striped
                bordered
                hover
              >
                <thead>
                  <tr>
                    <th>BHK</th>
                    <th>Area (Sq.ft)</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      1 BHK 
                    </td>
                    <td>650</td>
                    <td>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={handleShow}
                        className="custom-button"
                      >
                        <i className="fa fa-spinner fa-flip fa-download"></i>{" "}
                        Price Sheet
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      2 BHK 
                    </td>
                    <td>950</td>
                    <td>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={handleShow}
                        className="custom-button"
                      >
                        <i className="fa fa-spinner fa-flip fa-download"></i>{" "}
                        Price Sheet
                      </Button>
                    </td>
                  </tr>{" "}
                  <tr>
                    <td>
                      3 BHK 
                    </td>
                    <td>1400 - 1900</td>
                    <td>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={handleShow}
                        className="custom-button"
                      >
                        <i className="fa fa-spinner fa-flip fa-download"></i>{" "}
                        Price Sheet
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      4 BHK 
                    </td>
                    <td>2200</td>
                    <td>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={handleShow}
                        className="custom-button"
                      >
                        <i className="fa fa-spinner fa-flip fa-download"></i>{" "}
                        Price Sheet
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
          </Tab>
          <Tab eventKey="profile" title="Villas">
          <Table
                responsive="sm"
                className="align-middle text-center border-transparent"
                striped
                bordered
                hover
              >
                <thead>
                  <tr>
                    <th>BHK</th>
                    <th>Area (Sq.ft)</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      4 BHK 
                    </td>
                    <td>On Request</td>
                    <td>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={handleShow}
                        className="custom-button"
                      >
                        <i className="fa fa-spinner fa-flip fa-download"></i>{" "}
                        Price Sheet
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
          </Tab>
          <Tab eventKey="contact" title="Plots">
          <Table
                responsive="sm"
                className="align-middle text-center border-transparent"
                striped
                bordered
                hover
              >
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Area (Sq.ft)</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      30 X 40
                    </td>
                    <td>1200</td>
                    <td>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={handleShow}
                        className="custom-button"
                      >
                        <i className="fa fa-spinner fa-flip fa-download"></i>{" "}
                        Sold Out
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      40 X 40
                    </td>
                    <td>1600</td>
                    <td>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={handleShow}
                        className="custom-button"
                      >
                        <i className="fa fa-spinner fa-flip fa-download"></i>{" "}
                        Sold Out
                      </Button>
                    </td>
                  </tr>{" "}
                  <tr>
                    <td>
                      60 X 50
                    </td>
                    <td>3000</td>
                    <td>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={handleShow}
                        className="custom-button"
                      >
                        <i className="fa fa-spinner fa-flip fa-download"></i>{" "}
                        Price Sheet
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      40 X 70
                    </td>
                    <td>2800</td>
                    <td>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={handleShow}
                        className="custom-button"
                      >
                        <i className="fa fa-spinner fa-flip fa-download"></i>{" "}
                        Price Sheet
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Odd Sizes
                    </td>
                    <td>On Request</td>
                    <td>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={handleShow}
                        className="custom-button"
                      >
                        <i className="fa fa-spinner fa-flip fa-download"></i>{" "}
                        Price Sheet
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
          </Tab>
        </Tabs>
      </Container>

      <Modals
        show={show}
        handleClose={handleClose}
        title="Download Pricesheet"
        projectid="57a99891-ec20-472a-b230-187e20fee71f"
      />
    </div>
  );
};

export default Pricing;
