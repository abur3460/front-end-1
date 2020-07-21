import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import { FaSearch, FaHeart, FaSpotify } from "react-icons/fa";

const LoginForm = () => {
  const history = useHistory();

  const onSubmit = (val) => {
    axiosWithAuth()
      .post("/user/login", val)
      .then((resp) => {
        console.log(resp.data);
        localStorage.setItem("token", resp.data.token);
        history.push("/home");
      })
      .catch((err) => console.log(err));
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const SignupSchema = Yup.object().shape({
    email: Yup.string().required("Email field is required"),
    password: Yup.string().required("Password field is required"),
  });

  return (
    <main className="landing">
      <div className="intro">
        <FaSpotify className="landing-icon title" />
        <h1>Spotify Song Suggester</h1>
        <div className="about-wrapper">
          <div>
            <h3 className="info-title">
              <FaSearch className="landing-icon" />
              Find New Music
            </h3>
            <p className="info">
              Just found a new favorite and wish you had more like it? <br />
              Just tell us the track and we'll do the rest!
            </p>
          </div>
          <div>
            <h3 className="info-title">
              <FaHeart className="landing-icon" />
              Save Your Favorites
            </h3>
            <p className="info">
              Easily add your newly found songs to your favorites and we'll keep
              them safe!
            </p>
          </div>
        </div>
      </div>
      <div className="login-form">
        <div className="line"></div>
        <h1>Log In</h1>
        <div className="sign-up">
          Don't have an account? <Link to="/register">Sign Up!</Link>
        </div>
        <Formik
          {...{ initialValues, onSubmit }}
          validationSchema={SignupSchema}
        >
          {() => (
            <Form className="form">
              <div className="input-box">
                <label htmlFor="email">email</label>
                <Field type="text" id="email" name="email" />
              </div>

              <div className="input-box">
                <label htmlFor="password">Password</label>
                <Field type="password" id="password" name="password" />
              </div>
              <div className="submit-cont">
                <button type="submit" className="btn">
                  Log in
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div className="forgot">
          Forgot email or password? <Link to="/reset">Click here!</Link>
        </div>
        <div className="guest-cont" id="guest">
          <Link to="/songs">
            <button className="btn">Continue as guest</button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default LoginForm;
