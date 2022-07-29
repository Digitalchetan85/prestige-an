import React, { useEffect, useState } from "react";
import { Button, Row, Col, Container, InputGroup, Form } from "react-bootstrap";
import * as Yup from "yup";
import axios from "axios";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";

const FormTest = () => {
  const initialValues = { name: "", email: "", phone: "" };
  const [formStatus, setformStatus] = useState("");
  const [values, setValues] = useState(initialValues);
  const [Loading, setLoading] = useState(false);
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

    axios
      .post("https://buildeskapi.azurewebsites.net/api/Webhook", data)
      .then(function (response) {
        if (response.data.Success) {
          setformStatus(
            "Thanks for contacting us. We will get back to you soon."
          );
          setLoading(false);
        } else {
          setformStatus("Sorry!!! Something went wrong. Please try again");
        }
      })
      .catch(function (error) {
        setformStatus("Sorry!!! Something went wrong. Please try again");
      });
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
    <div className="sticky-top py-3">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} className="px-0">
            <Form
              className="py-2 rounded py-md-5 px-3"
              style={{ height: "70vh" }}
              onSubmit={handleSubmit}
            >
              <div className="text-center">
                <Button className="btn btn-primary text-white">
                  <i className="fa fa-phone-volume"></i> +91 80959 99000
                </Button>
              </div>
              <div className="text-center">
                <h5 className="text-center text-white fs-5 py-3">
                  Get in touch with us
                </h5>
              </div>
              <Row className="mb-2">
                <Col md={12}>
                  <div className="mb-2">
                    <InputGroup
                      className="mb-3 shadow rounded"
                      style={{ height: "50px" }}
                    >
                      <InputGroup.Text id="basic-addon1" className="bg-white">
                        <i className="fa fa-user text-primary"></i>
                      </InputGroup.Text>
                      <Form.Control
                        className="form-control"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={values.name}
                        onChange={handleChange}
                      />
                      <small className="text-danger">
                        {FormErrors.name}
                      </small>
                    </InputGroup>
                  </div>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col md={12}>
                  <div className="mb-2">
                    <InputGroup
                      className="mb-3 shadow rounded"
                      style={{ height: "50px" }}
                    >
                      <InputGroup.Text id="basic-addon1">
                        <i className="fa fa-envelope text-primary"></i>
                      </InputGroup.Text>
                      <Form.Control
                        className="form-control"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleChange}
                      />
                    </InputGroup>
                    <small className="text-danger">
                        {FormErrors.email}
                      </small>
                  </div>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col md={12}>
                  <div className="mb-2">
                    <InputGroup
                      className="mb-3 shadow rounded"
                      style={{ height: "50px" }}
                    >
                      <IntlTelInput
                        preferredCountries={["in"]}
                        style={{ width: "100%" }}
                        containerClassName="intl-tel-input"
                        inputClassName="form-control"
                        input
                        type="tel"
                        name="phoneNumber"
                        id="phoneNumber"
                        value={values.phoneNumber}
                        onPhoneNumberChange={handlePhoneChange}
                      />
                      <small className="text-danger">
                          {FormErrors.phone}
                        </small>
                    </InputGroup>
                  </div>
                </Col>
              </Row>
              <Row className="">
                <Col md={12}>
                  {formStatus ? (
                    <div className="alert alert-success p-3 text-center">
                      {formStatus}
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FormTest;
