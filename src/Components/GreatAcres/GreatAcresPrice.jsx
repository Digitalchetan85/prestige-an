import React, { useState } from "react";
import { Button, Col,  Row, Table } from "react-bootstrap";
import GreatModal from "./GreatModal";

const GreatAcresPrice = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="pricing">
      <Row className="justify-content-center">
        <Col md={12} xs={12}>
          <div className="">
            <h2 className="text-primary text-center py-3 fs-3">Great Acres Pricing</h2>
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
          </div>
        </Col>
      </Row>

      <GreatModal
        show={show}
        handleClose={handleClose}
        title="Download Pricesheet"
        projectid="57a99891-ec20-472a-b230-187e20fee71f"
      />
    </div>
  );
};

export default GreatAcresPrice;
