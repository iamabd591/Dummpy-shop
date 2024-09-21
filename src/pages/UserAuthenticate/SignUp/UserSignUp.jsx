import "./SignUp.css";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { SignUpSchema } from "../VlidationSchema";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { TbBrandAppleFilled } from "react-icons/tb";
import { toast, ToastContainer } from "react-toastify";
import { Field, Form, Formik, useFormik } from "formik";

const onSubmit = async (values, actions) => {
  // console.log(values);
  try {
    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Sign Up Successfully!", {
      autoClose: 5000,
      pauseOnHover: true,
      bodyClassName: "toast-body",
      className: "toast-success custom-toast-container",
    });

    actions.resetForm();
  } catch (error) {
    toast.error("Something Went Wrong!");
  }
};
const UserSignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfrimPassword, setShowConfrimPassword] = useState(false);

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
      name: "",
      email: "",
      password: "",
      confrimPassword: "",
      termsAndConditions: false,
    },
    validationSchema: SignUpSchema,
    onSubmit,
  });
  const toggolePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggoleConfrimPassword = () => {
    setShowConfrimPassword(!showConfrimPassword);
  };
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
                    errors?.name && touched?.name
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
                    errors?.email && touched?.email
                      ? "input-error"
                      : "display-none"
                  }
                >
                  {errors?.email}
                </p>
                <h6>Password</h6>
                <div className="password-wrapper">
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={values?.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your Password"
                    className="input-field"
                  />
                  <span className="sign-up-eye-icon" onClick={toggolePassword}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <p
                  className={
                    errors?.password && touched?.password
                      ? "input-error"
                      : "display-none"
                  }
                >
                  {errors?.password}
                </p>

                <h6>Confirm Password</h6>
                <div className="password-wrapper">
                  <Field
                    type={showConfrimPassword ? "text" : "password"}
                    name="confrimPassword"
                    value={values?.confrimPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Confirm Password"
                    className="input-field"
                  />
                  <span
                    className="sign-up-eye-icon"
                    onClick={toggoleConfrimPassword}
                  >
                    {showConfrimPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <p
                  className={
                    errors?.confrimPassword && touched?.confrimPassword
                      ? "input-error"
                      : "display-none"
                  }
                >
                  {errors?.confrimPassword}
                </p>
                <div className="checkbox-text">
                  <p>
                    <Field
                      type="checkbox"
                      name="termsAndConditions"
                      checked={values.termsAndConditions}
                      onChange={handleChange}
                      className="check-box"
                    />
                    I agree to the Clicon <span>Terms of Condition</span> and
                    <span> Privacy Policy</span>.
                  </p>
                </div>
                {errors?.termsAndConditions && touched?.termsAndConditions && (
                  <p className="input-error">{errors.termsAndConditions}</p>
                )}
                <button disabled={isSubmitting} className="signupbtn">
                  Sign up{" "}
                  <sapn>
                    <FaArrowRightLong />
                  </sapn>
                </button>
              </Form>
            </Formik>
          </div>
          <div className="Sign-up-other-links">
            <p className="other">or</p>
            <div className="create-account">
              <p>
                Already Have An Account?{" "}
                <a href="/sign-in">
                  <span>Sign In</span>
                </a>
              </p>
            </div>
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
        <ToastContainer />
      </div>
    </>
  );
};

export default UserSignUp;
