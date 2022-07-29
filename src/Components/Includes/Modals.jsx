import React, { useState } from "react";
import { Button, Modal, Row, Col, Image, InputGroup } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Logo from "../../images/logo-1.png";
import { useNavigate } from "react-router-dom";
import CountryDropdown from "country-dropdown-with-flags-for-react";
import IntlTelInput from "react-intl-tel-input";

const ContactModal = (props) => {
  const [formStatus, setformStatus] = useState("");
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    // email: "",
    phone: "",
    id: "",
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    // email: Yup.string().required("required").email("Invalid email format"),
    phone: Yup.string()
      .required("required")
      .matches(phoneRegExp, "Phone No is not valid")
      .min(10, "Phone No Minimum 10 Digits")
      .max(10, "Phone No Minimum 10 Digits"),
  });

  const onSubmit = (values) => {
    const data = {
      apikey: "897ec314-c85b-4291-96ee-48648d5dcfbd",
      firstname: values.name,
      lastname: "",
      source: "Prestige City",
      mobile: values.phone,
      CreatedDate: "17/02/2022",
      email: "",
      Remark: "Brochure Downloaded",
      ProjectUID: "2597B322-F920-442A-9050-127AFD565726",
    };

    axios
      .post("https://buildeskapi.azurewebsites.net/api/Webhook", data)
      .then(function (response) {
        if (response.data.Success) {
          setformStatus("Thank you for contacting us. We'll reach you soon.");
          navigate("/success");
        } else {
          setformStatus("Sorry!!! Something went wrong. Please try again");
        }
      })
      .catch(function (error) {
        setformStatus("Sorry!!! Something went wrong. Please try again");
      });
  };
  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose} centered id="cre">
        <Modal.Header closeButton className="bg-primary border-0">
          <Modal.Title className="text-white text-titlecase border-0 ms-auto"></Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          {/* <h6 className="py-1 text-center">{props.message}</h6> */}
          <div className="d-flex bd-highlight" id="form-setting">
            <div className="p-2 flex-fill bd-highlight bg-light">
              <div className="text-center">
                <p
                  className="text-primary text-center py-1"
                  style={{ fontWeight: "600" }}
                >
                  We Promise
                </p>
              </div>
              <div className="text-center">
                <i className="fas fa-headset fs-1 py-1 text-primary"></i>
                <p
                  className="text-primary text-center py-1"
                  style={{ fontWeight: "600" }}
                >
                  Instant Call Back
                </p>
              </div>
              <div className="text-center">
                <i className="fas fa-map-marked fs-1 py-1 text-primary"></i>
                <p
                  className="text-primary text-center py-1"
                  style={{ fontWeight: "600" }}
                >
                  Free Site Visit
                </p>
              </div>
              <div className="text-center">
                <i className="fas fa-comment-dollar fs-1 py-1 text-primary"></i>
                <p
                  className="text-primary text-center py-1"
                  style={{ fontWeight: "600" }}
                >
                  Unmatched Price
                </p>
              </div>
            </div>
            <div className="p-2 flex-fill bd-highlight align-self-center">
              <div className="text-center">
                <Image src={Logo} alt="" className="img-fluid"></Image>
              </div>
              <p className="text-center" style={{ fontWeight: "600" }}>
                Register Here And Avail The Best Offers!!
              </p>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                <Form className="py-1 rounded">
                  <Row className="mb-2">
                    <Col md={12}>
                      <div className="mb-2">
                        <InputGroup className="mb-3">
                          <InputGroup.Text id="basic-addon1">
                            <i className="fa fa-user text-primary"></i>
                          </InputGroup.Text>
                          <Field
                            className="form-control"
                            type="text"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            id="name"
                            name="name"
                            placeholder="Name"
                          />
                        </InputGroup>
                      </div>
                    </Col>
                    <small className="text-danger">
                      <ErrorMessage name="name" />
                    </small>
                  </Row>
                  <Row className="mb-2">
                    <Col md={12}>
                      <div className="mb-2">
                        <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">
                            <i className="fa fa-phone-volume text-primary"></i>
                          </InputGroup.Text>
                        {/* <IntlTelInput
                          preferredCountries={['in']}
                          style={{ width: '100%' }}
                          containerClassName="intl-tel-input"
                          inputClassName="form-control"
                        /> */}
                          <Field
                            className="form-control"
                            type="tel"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            id="phone"
                            name="phone"
                            placeholder="Phone"
                          />
                        </InputGroup>
                      </div>
                    </Col>
                    <small className="text-danger">
                      <ErrorMessage name="phone" />
                    </small>
                  </Row>
                  <Row className="">
                    <Col md={12}>
                      {formStatus ? (
                        <div className="alert alert-success p-3 text-center">
                          {formStatus}
                        </div>
                      ) : null}
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={12}>
                      <div className="text-center">
                        <Button
                          className="btn btn-primary text-white px-5"
                          style={{ fontWeight: "600" }}
                          type="submit"
                        >
                          {props.title}
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </Formik>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="bg-primary py-1 justify-content-center">
          <a
            href="tel:08095999000"
            className="text-white text-decoration-none"
            style={{ fontWeight: "600" }}
          >
            <i className="fa fa-phone-volume text-white pe-2"></i>+91 80959
            99000
          </a>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ContactModal;
