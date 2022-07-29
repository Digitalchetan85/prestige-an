import React, { useEffect, useState } from "react";
import { Button, Row, Col, Container, InputGroup, Form } from "react-bootstrap";
import * as Yup from "yup";
import axios from "axios";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";

const Contact = () => {
  const initialValues = { name: "", email: "", phone: "" };
  const [formStatus, setformStatus] = useState("");
  const [display, setDisplay] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [Loading, setLoading] = useState(false);
  const [CustomError, setCustomError] = useState(false);
  const [FormErrors, setFormErrors] = useState({
    phone: "",
    email: "",
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log("values", values);
  };

  const handlePhoneChange = (status, phoneNumber, country) => {
    setValues({ ...values, phone: phoneNumber });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(values));
    console.log(values);

    if (Object.keys(FormErrors).length == 0) {
      let data = {
        apikey: "897ec314-c85b-4291-96ee-48648d5dcfbd",
        firstname: values.name,
        lastname: "",
        source: "Prestige City",
        mobile: values.phone,
        CreatedDate: "17/02/2022",
        email: values.email,
        Remark: "Brochure Downloaded",
        ProjectUID: "2597B322-F920-442A-9050-127AFD565726",
      };
      setformStatus(
        "You're All Set! Thanks you for expressing interest on our website. Our expert will get in touch with you shortly."
      );
      setLoading(false);
      setDisplay(true);

      axios
        .post("https://buildeskapi.azurewebsites.net/api/Webhook", data)
        .then(function (response) {
          if (response.data.Success) {
            // setformStatus(
            //   "Thanks for contacting us. We will get back to you soon."
            // );
          } else {
            setformStatus("Sorry!!! Something went wrong. Please try again");
          }
        })
        .catch(function (error) {
          setformStatus("Sorry!!! Something went wrong. Please try again");
        });
    } else {
      setCustomError(true);
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const phoneRegExp =
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    }
    if (!values.phone) {
      errors.phone = "Required";
    } else if (!phoneRegExp.test(values.phone)) {
      errors.phone = "Must be a valid phone number";
    }
    return errors;
  };

  // useEffect(() => {
  //   console.log("errors", FormErrors);
  //   if (Object.keys(FormErrors).length > 0) {
  //     console.log("values", values);
  //   }
  // }, [FormErrors]);

  return (
    <div className="sticky-top py-3 pt-md-5 bg-light">
      {display ? (
        <Row className="my-5">
          <Col md={12}>
            {formStatus ? (
              <div>
                <div className="alert alert-success p-3 fs-4 fw-bold text-center">
                  {formStatus}
                </div>
                <div className="text-center">
                  <a
                    className="btn btn-lg btn-primary fs-4 text-white"
                    href="https://theprestigecitysarjapur.com/prestige-meridian-park.pdf"
                    target="_blank"
                  >
                    Download Brochure Here
                  </a>
                </div>
              </div>
            ) : null}
            {Loading ? (
              <div
                className="text-center spinner-border text-success"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : null}
          </Col>
        </Row>
      ) : (
        <Form
          className="py-2 rounded border border-primary pt-md-5 px-3"
          style={{ height: "80vh" }}
          onSubmit={handleSubmit}
        >
          <div className="text-center">
            <a className="btn btn-primary text-white" href="tel:08095999000">
              <i className="fa fa-phone-volume"></i> +91 80959 99000
            </a>
          </div>
          <div className="text-center">
            <h5 className="text-center text-primary fs-5 py-3">
              Get in touch with us for best offers!
            </h5>
          </div>
          <Row className="mb-2">
            <Col md={12}>
              <div className="">
                <InputGroup className="mb-3 shadow rounded">
                  <InputGroup.Text id="basic-addon1" className="bg-white">
                    <i className="fa fa-user text-primary"></i>
                  </InputGroup.Text>
                  <Form.Control
                    className="form-control"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name*"
                    value={values.name}
                    onChange={handleChange}
                  />
                </InputGroup>
                {/* <small className="text-danger">{FormErrors.name}</small> */}
              </div>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col md={12}>
              <div className="">
                <InputGroup className="mb-3 shadow rounded">
                  <InputGroup.Text id="basic-addon1">
                    <i className="fa fa-envelope text-primary"></i>
                  </InputGroup.Text>
                  <Form.Control
                    className="form-control"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email*"
                    value={values.email}
                    onChange={handleChange}
                  />
                </InputGroup>
                {/* <small className="text-danger">{FormErrors.email}</small> */}
              </div>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col md={12}>
              <div className="">
                <IntlTelInput
                  preferredCountries={["in"]}
                  style={{ width: "100%", height: "50px" }}
                  containerClassName="intl-tel-input"
                  inputClassName="form-control shadow "
                  input
                  type="tel"
                  placeholder="9876543210"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={values.phoneNumber}
                  onPhoneNumberChange={handlePhoneChange}
                />
                {/* <small className="text-danger">{FormErrors.phone}</small> */}
              </div>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col md={12}>
              <div className="mb-2">
                <InputGroup className="mb-3 shadow rounded">
                  <InputGroup.Text
                    id="basic-addon1"
                    className="bg-white align-self-center"
                  >
                    <i className="fa fa-edit text-primary"></i>
                  </InputGroup.Text>
                  <Form.Control
                    style={{ height: "100px" }}
                    className="form-control"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Hi I'm Interested In Prestige City Sarjapur"
                  />
                </InputGroup>
              </div>
            </Col>
          </Row>
          <div className="d-flex justify-content-between">
            <div className="text-center">
              {CustomError ? (
                <p className="text-danger pb-2 text-center mb-0">
                  Please Enter the valid details
                </p>
              ) : null}
            </div>
          </div>
          <Row className="mb-3">
            <Col md={12}>
              <div className="text-center">
                <Button
                  className="btn btn-primary text-white px-5"
                  type="submit"
                >
                  Pre-Register here
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      )}
    </div>
  );
};

export default Contact;
