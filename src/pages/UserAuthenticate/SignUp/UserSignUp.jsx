import { Field, Form, Formik } from "formik";
import React from "react";

const UserSignUp = () => {
  return (
    <>
      <div className="user-sign-up-main">
        <div className="user-sign-up-card">
          <div className="user-sign-up-heading">
            <h2>Sign up</h2>
          </div>
          <div className="sign-up-form">
            <Formik>
              <Form>
                <h6>Name</h6>
                <Field type="text" name="name" placeholder="Your Name" />
                <h6>Email</h6>
                <Field type="text" name="name" placeholder="Your Email" />
                <h6>Password</h6>
                <Field type="text" name="name" placeholder="Your Password" />
                <h6>Confrim Password</h6>
                <Field type="text" name="name" placeholder="Confrim Password" />
                <p>
                  <Field type="checkbox" />
                  Are you agree to Clicon <span>Terms of Condition</span> and
                  <span> Privacy Policy</span>.
                </p>
                <button>
                  Sign up <sapn></sapn>
                </button>
              </Form>
            </Formik>
          </div>
          <div className="other-links">
            <p>or</p>

            <div className="third-party-sign-up">
              <p>
                Sign up with google <span></span>
              </p>
            </div>

            <div className="third-party-sign-up">
              <p>
                Sign up with apple <span></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSignUp;
