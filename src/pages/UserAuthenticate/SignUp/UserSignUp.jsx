import "./SignUp.css";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Field, Form, Formik } from "formik";
import { FaArrowRightLong } from "react-icons/fa6";
import { TbBrandAppleFilled } from "react-icons/tb";
const UserSignUp = () => {
  return (
    <>
      <div className="user-sign-up-main">
        <div className="user-sign-up-card">
          <div className="sign-up-form">
            <div className="user-sign-up-heading">
              <h2>Sign up</h2>
            </div>
            <Formik>
              <Form>
                <h6>Name</h6>
                <Field
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input-field"
                />
                <h6>Email</h6>
                <Field
                  type="text"
                  name="name"
                  placeholder="Your Email"
                  className="input-field"
                />
                <h6>Password</h6>
                <Field
                  type="password"
                  name="name"
                  placeholder="Your Password"
                  className="input-field"
                />
                <h6>Confrim Password</h6>
                <Field
                  type="password"
                  name="name"
                  placeholder="Confrim Password"
                  className="input-field"
                />
                <p className="checkbox">
                  <Field type="checkbox" />
                  <p>
                    Are you agree to Clicon <span>Terms of Condition</span> and
                    <span> Privacy Policy</span>.
                  </p>
                </p>
                <button>
                  Sign up{" "}
                  <sapn>
                    <FaArrowRightLong />
                  </sapn>
                </button>
              </Form>
            </Formik>
          </div>
          <div className="other-links">
            <p>
              Already Have An Account?{" "}
              <a href="/sign-in">
                <span>Sign In</span>
              </a>
            </p>
            <p>or</p>

            <div className="third-party-sign-up">
              <p>
                Sign up with google{" "}
                <span>
                  <FcGoogle />
                </span>
              </p>
            </div>

            <div className="third-party-sign-up">
              <p>
                Sign up with apple{" "}
                <span>
                  <TbBrandAppleFilled />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSignUp;
