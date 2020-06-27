import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from 'react-router-dom'
import axiosWithAuth from '../utils/axiosWithAuth';
import "./RegisterForm.css";



const Login = () => {
    const history = useHistory();
    
  const onSubmit = (val) => {
    axiosWithAuth()
    .post( "/user/login" ,val)
    .then(resp => {
        console.log(resp.data)
        localStorage.setItem('token', resp.data.token) 
        history.push("/")
    })
    .catch(err => console.log(err))
};

  const initialValues = {
    email: "",
    password: ""
};


  const validationSchema = Yup.object().shape({
    email: Yup.string().required("*Please enter your email"),
    password: Yup.string().required("*Please enter your password")
  });

  return (
    <div className="login">
      <h1 className="title">Spotify Song Suggester</h1>
      <h2>Log In</h2>
      <Formik {...{initialValues, onSubmit}} 
      validationSchema={validationSchema}>
        {({touched, errors}) => (
          <Form className="form">
            <div className="field-wrap">
              <label htmlFor="email">Email</label>
              <Field 
                type="text" 
                id="email" 
                name="email"
                className="field"
                placeholder="email"
              />
              <div className="errors">
                {touched["email"] && errors["email"]}
              </div>
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
              <div className="errors">
                {touched["password"] && errors["password"]}  
              </div>  
            </div>
            <div>
              <button className="submit" type="submit">
                Submit
              </button>
            </div>
            <div className="redirect">
              <p>Don't have an account? <Link to="/register">Register</Link></p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}


export default Login;