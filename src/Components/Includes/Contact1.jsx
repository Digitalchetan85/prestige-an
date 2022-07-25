import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, InputGroup } from "react-bootstrap";
import CountryDropdown from "country-dropdown-with-flags-for-react";
import IntlTelInput from "react-intl-tel-input";

const Contact1 = () => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <Form onSubmit={handleSubmit} className="p-2">
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              <i className="fa fa-user text-primary"></i>
            </InputGroup.Text>
            <Field
              type="text"
              aria-label="Username"
              aria-describedby="basic-addon1"
              id="name"
              name="name"
              placeholder="Name"
              className="form-control"
            />
          </InputGroup>
          {errors.name && touched.name && errors.name}

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              <i className="fa fa-envelope text-primary"></i>
            </InputGroup.Text>
            <Field
              type="email"
              aria-label="Username"
              aria-describedby="basic-addon1"
              id="email"
              name="email"
              placeholder="Email"
              className="form-control"
            />
          </InputGroup>
          {errors.email && touched.email && errors.email}

          <InputGroup className="mb-3">
            <CountryDropdown
              id=""
              className="form-control w-100"
              preferredCountries={["in", "in"]}
              value=""
              handleChange={(e) => console.log(e.target.value)}
            ></CountryDropdown>
          </InputGroup>

          <InputGroup className="mb-3">
            {/* <InputGroup.Text id="basic-addon1">
              <i className="fa fa-phone-volume text-primary"></i>
            </InputGroup.Text>
            <Field
              type="tel"
              aria-label="Username"
              aria-describedby="basic-addon1"
              id="phone"
              name="phone"
              placeholder="Phone"
              className="form-control"
            /> */}
            <IntlTelInput
                          preferredCountries={['in']}
                          style={{ width: '100%' }}
                          containerClassName="intl-tel-input"
                          inputClassName="form-control"
                        />
          </InputGroup>
          {errors.phone && touched.phone && errors.phone}
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Contact1;
