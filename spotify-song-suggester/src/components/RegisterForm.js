import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";

const RegisterForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const history = useHistory([]);
  // https://spotifysongsbw.herokuapp.com/api/user/register
  // https://reqres.in/api/users
  const onSubmit = (values) => {
    axios
      .post("https://spotifysongsbw.herokuapp.com/api/user/register", values)
      .then((res) => {
        console.log(res);
        history.push("/login");
      })
      .catch((err) => console.log(err.message));
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("*Enter your name"),
    email: Yup.string()
      .email("*Invalid email address")
      .required("*Must enter email"),
    password: Yup.string().required("*Must enter password"),
  });

  return (
    <div className="register">
      <h2>Register</h2>
      <Formik
        {...{ initialValues, onSubmit }}
        validationSchema={validationSchema}
      >
        {({ values, handleChange, touched, handleBlur, errors }) => (
          <Form className="form">
            <div className="field-wrap">
              <label htmlFor="name">Username</label>
              <Field
                type="text"
                id="name"
                className="field"
                name="name"
                placeholder="username"
              />
              <span className="errors">
                {touched["name"] && errors["name"]}
              </span>
            </div>

            <div className="field-wrap">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                className="field"
                name="email"
                placeholder="email"
              />
              <span className="errors">
                {touched["email"] && errors["email"]}
              </span>
            </div>

            <div className="field-wrap">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                id="password"
                className="field"
                name="password"
                placeholder="password"
              />
              <span className="errors">
                {touched["password"] && errors["password"]}
              </span>
            </div>

            <div>
              <button className="register-submit" type="submit">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
