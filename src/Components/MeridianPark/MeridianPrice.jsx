import React, { useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import MeridianModal from "./MeridianModal";

const MeridianPrice = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Row className="justify-content-center">
        <Col md={12} xs={12}>
          <div className="">
            <h2 className="text-primary text-center py-3 fs-3">Meridian Park - Pricing</h2>
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
                  <td>3 BHK <br/> 2T</td>
                  <td>1387</td>
                  <td>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={handleShow}
                      className="my-3 custom-button"
                    >
                      <i className="fa fa-spinner fa-flip fa-download"></i> Price Sheet
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>3 BHK <br/> 3T </td>
                  <td>1665</td>
                  <td>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={handleShow}
                      className="my-3 custom-button"
                    >
                      <i className="fa fa-spinner fa-flip fa-download"></i> Price Sheet
                    </Button>
                  </td>
                </tr>{" "}
                <tr>
                  <td>3 BHK <br/> 3T <br/> Maids Room</td>
                  <td>1865</td>
                  <td>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={handleShow}
                      className="my-3 custom-button"
                    >
                      <i className="fa fa-spinner fa-flip fa-download"></i> Price Sheet
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>

      <MeridianModal
        show={show}
        handleClose={handleClose}
        title="Download Pricesheet"
        projectid="57a99891-ec20-472a-b230-187e20fee71f"
      />
    </div>
  );
};

export default MeridianPrice;
