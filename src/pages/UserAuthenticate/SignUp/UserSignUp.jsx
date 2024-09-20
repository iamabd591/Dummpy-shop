import "./SignUp.css";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Field, Form, Formik, useFormik } from "formik";
import { FaArrowRightLong } from "react-icons/fa6";
import { TbBrandAppleFilled } from "react-icons/tb";
import { SignUpSchema } from "../VlidationSchema";

const onSubmit = (values, actions) => {
  console.log(values);
};
const UserSignUp = () => {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      namr: "",
      email: "",
      password: "",
      confrimPassword: "",
    },
    validationSchema: SignUpSchema,
    onSubmit,
  });
  return (
    <>
      <div className="user-sign-up-main">
        <div className="user-sign-up-card">
          <div className="sign-up-form">
            <div className="user-sign-up-heading">
              <h2>Sign up</h2>
            </div>
            <Formik>
              <Form autoComplete="off" onSubmit={handleSubmit}>
                <h6>Name</h6>
                <Field
                  type="text"
                  name="name"
                  value={values?.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your Name"
                  className="input-field"
                />
                <p
                  className={
                    errors?.name || touched?.name
                      ? "input-error"
                      : "display-none"
                  }
                >
                  {errors?.name}
                </p>
                <h6>Email</h6>
                <Field
                  type="text"
                  name="email"
                  value={values?.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your Email"
                  className="input-field"
                />
                <p
                  className={
                    errors?.email || touched?.email
                      ? "input-error"
                      : "display-none"
                  }
                >
                  {errors?.email}
                </p>
                <h6>Password</h6>
                <Field
                  type="password"
                  name="password"
                  value={values?.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your Password"
                  className="input-field"
                />
                <p
                  className={
                    errors?.password || touched?.password
                      ? "input-error"
                      : "display-none"
                  }
                >
                  {errors?.password}
                </p>
                <h6>Confrim Password</h6>
                <Field
                  type="password"
                  name="confrimPassword"
                  value={values?.confrimPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Confrim Password"
                  className="input-field"
                />
                <p
                  className={
                    errors?.confrimPassword || touched?.confrimPassword
                      ? "input-error"
                      : "display-none"
                  }
                >
                  {errors?.confrimPassword}
                </p>
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
