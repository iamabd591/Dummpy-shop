import React from "react";
import "./userSignIn.css";
import { FaEye } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
const userSignIn = () => {
  return (
    <>
      <div className="userSignIn-main">
        <div className="userSignIn-card">
          <div className="sign-heading">
            <h2>Sign In</h2>
            <div className="sign-form">
              <Formik>
                <Form>
                  <h4>Email Address</h4>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="input-field"
                  />
                  <h4>Password</h4>
                  <Field
                    type="Password"
                    name="password"
                    placeholder="Enter Your Password"
                    className="input-field"
                  />
                  <p className="eye-icon">
                    <FaEye />
                  </p>
                  <p className="forgot-password">
                    <a href="./forgot-password/send-otp">Forgot Password</a>
                  </p>
                  <button className="sign-btn">
                    <p>Sign In</p>{" "}
                    <span>
                      <LiaLongArrowAltRightSolid />
                    </span>
                  </button>
                </Form>
              </Formik>
            </div>
            <div className="other-sign">
              <p>or</p>
              <div className="google-sign">
                <p>Create An Account</p>
              </div>
              <div className="google-sign">
                <p>
                  Login with google
                  <span>
                    <FcGoogle />
                  </span>
                </p>
              </div>
              <div className="apple-sign">
                <p>
                  Login with apple
                  <span>
                    <FaApple />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default userSignIn;
