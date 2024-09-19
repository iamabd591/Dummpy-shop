import "./SendOTP.css";
import React from "react";
import { Form, Field, Formik } from "formik";
import { HiMiniArrowLongRight } from "react-icons/hi2";

const UserOTP = () => {
  return (
    <>
      <div className="send-otp-email">
        <div className="send-otp-card">
          <div className="send-otp-heding">
            <h2>Forgot Password</h2>
            <div className="description">
              <p>
                Enter the email address associated with your Clicon account.
              </p>
            </div>
            <div className="email-form">
              <h6>Email Address</h6>
              <Formik>
                <Form>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="input-field"
                  />
                  <button>
                    <p>
                      Send Otp{" "}
                      <span>
                        <HiMiniArrowLongRight />
                      </span>
                    </p>
                  </button>
                </Form>
              </Formik>
            </div>
            <div className="other-links">
              <p>
                Already have account?<span>Sign In</span>
              </p>
              <p>
                Don’t have account?<span>Sign Up</span>
              </p>
            </div>
            <hr />
            <div className="term-&-service">
              <p>
                You may contact <span>Customer Service</span> for help restoring
                access to your account.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserOTP;
