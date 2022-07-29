import React, { useState } from "react";
import { Button, Modal, Row, Col, Image, InputGroup, Form } from "react-bootstrap";
import * as Yup from "yup";
import axios from "axios";
import Logo from "../../images/logo-1.png";
import { useNavigate } from "react-router-dom";
import CountryDropdown from "country-dropdown-with-flags-for-react";
import IntlTelInput from "react-intl-tel-input";

const ContactModal = (props) => {
  const initialValues = { name: "", email: "", phone: "" };
  const [formStatus, setformStatus] = useState("");
  const [display, setDisplay] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [Loading, setLoading] = useState(false);
  const [CustomError, setCustomError] = useState(false);
  const [FormErrors, setFormErrors] = useState({
    phone: "",
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

  const onSubmit = (e) => {
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
      setLoading(false);
      setformStatus(
        "Thanks for contacting us. We will get back to you soon."
      );
      axios
        .post("https://buildeskapi.azurewebsites.net/api/Webhook", data)
        .then(function (response) {
          if (response.data.Success) {
            
            setLoading(false);
            setDisplay(true);
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
              <h3 className="text-center" style={{ fontWeight: "600" }}>
                {props.utitle}
              </h3>
              <p className="text-center" style={{ fontWeight: "600" }}>
                Register Here And Avail The Best Offers!!
              </p>
              <Form className="py-1 rounded" onSubmit={onSubmit}>
                <Row className="mb-2">
                  <Col md={12}>
                    <div className="mb-2">
                      <InputGroup className="mb-3rounded">
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
                      <small className="text-danger">{FormErrors.name}</small>
                    </div>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col md={12}>
                    <div className="mb-2">
                      <IntlTelInput
                        preferredCountries={["in"]}
                        style={{ width: "100%", height: "50px" }}
                        containerClassName="intl-tel-input"
                        inputClassName="form-control"
                        input
                        type="tel"
                        placeholder="9876543210"
                        name="phoneNumber"
                        id="phoneNumber"
                        value={values.phoneNumber}
                        onPhoneNumberChange={handlePhoneChange}
                      />
                      <small className="text-danger">{FormErrors.phone}</small>
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
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md={12}>
                    <div className="text-center">
                      <Button
                        className="btn btn-primary text-white px-2 px-md-5"
                        style={{ fontWeight: "600" }}
                        type="submit"
                      >
                        {props.title}
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>
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
