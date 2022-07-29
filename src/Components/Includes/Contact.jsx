import React, { useState } from "react";
import { Button, Row, Col, Container, InputGroup } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
// import CountryDropdown from "country-dropdown-with-flags-for-react";
import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import ReactCountryFlag from "react-country-flag"

const Contact = () => {
  const [formStatus, setformStatus] = useState("");
  const [value, setValue] = useState(false);
  const initialValues = {
    name: "",
    email: "",
    phone: "",
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().required("Required").email("Invalid email format"),
    phone: Yup.string()
      .required("Required")
      .matches(phoneRegExp, "Phone No is not valid")
      .min(10, "Phone No Minimum 10 Digits")
      .max(10, "Phone No Minimum 10 Digits"),
  });

  const onSubmit = (values) => {
    // console.log(values);
    // const data = "";
    setValue(true);

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

    // console.log(data);

    axios
      .post("https://buildeskapi.azurewebsites.net/api/Webhook", data)
      .then(function (response) {
        if (response.data.Success) {
          setformStatus(
            "Thanks for contacting us. We will get back to you soon."
          );
          setValue(false);
        } else {
          setformStatus("Sorry!!! Something went wrong. Please try again");
        }
      })
      .catch(function (error) {
        setformStatus("Sorry!!! Something went wrong. Please try again");
      });
  };
  return (
    <div className="sticky-top py-3">
      <Container>
        <Row className="justify-content-center">
          <Col md={12} className="px-0">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form className="py-2 rounded py-md-5 px-3" style={{ height: "70vh" }}>
                {/* <h4 className="p-2 rounded text-center text-white bg-primary fs-5">Enquiry Now</h4> */}
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
                      <InputGroup
                        className="mb-3 shadow rounded"
                        style={{ height: "50px" }}
                      >
                        <InputGroup.Text id="basic-addon1">
                          <i className="fa fa-envelope text-primary"></i>
                        </InputGroup.Text>
                        <Field
                          className="form-control"
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Email"
                        />
                      </InputGroup>
                    </div>
                  </Col>
                  <small className="text-danger">
                    <ErrorMessage name="email" />
                  </small>
                </Row>
                <Row className="mb-2">
                  <Col md={12}>
                    <div className="mb-2">
                      <InputGroup
                        className="mb-3 shadow rounded"
                        style={{ height: "50px" }}
                      >
                        {/* <InputGroup.Text id="basic-addon1">
                          <i className="fa fa-phone-volume text-primary"></i>
                        </InputGroup.Text> */}
                        <IntlTelInput
                          preferredCountries={['in']}
                          style={{ width: '100%' }}
                          containerClassName="intl-tel-input"
                          inputClassName="form-control"
                        />
                        {/* <Field
                          className="form-control"
                          type="tel"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          id="phone"
                          name="phone"
                          placeholder="Phone"
                        /> */}
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
                    {value ? (
                      <div
                        class="text-center spinner-border text-success"
                        role="status"
                      >
                        <span class="visually-hidden">Loading...</span>
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
            </Formik>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
