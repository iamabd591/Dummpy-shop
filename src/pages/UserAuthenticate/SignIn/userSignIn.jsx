import React from "react";
import "./userSignIn.css";
import { useFormik } from "formik";
import { FaEye } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "react-toastify/dist/ReactToastify.css";
import { SignInSchema } from "../VlidationSchema";
import { toast, ToastContainer } from "react-toastify";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const onSubmit = async (values, actions) => {
  try {
    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Submitted Successfully!", {
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

const UserSignIn = () => {
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
      email: "",
      password: "",
    },
    validationSchema: SignInSchema,
    onSubmit,
  });

  return (
    <div className="userSignIn-main">
      <div className="userSignIn-card">
        <div className="sign-heading">
          <h2>Sign In</h2>
          <div className="sign-form">
            <form autoComplete="off" onSubmit={handleSubmit}>
              <h4>Email Address</h4>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values?.email}
                id="email"
                placeholder="Enter Your Email"
                className="input-field"
              />
              <p
                className={errors?.email || touched?.email ? "input-error" : ""}
              >
                {errors?.email || touched?.email || errors?.email}
              </p>

              <h4>Password</h4>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values?.password}
                id="password"
                placeholder="Enter Your Password"
                className="input-field"
              />
              <p
                className={
                  errors?.password || touched?.password ? "input-error" : ""
                }
              >
                {errors?.password || touched?.password || errors?.password}
              </p>

              <p className="eye-icon">
                <FaEye />
              </p>
              <p className="forgot-password">
                <a href="./forgot-password/send-otp">Forgot Password</a>
              </p>

              <button
                disabled={isSubmitting}
                className="sign-btn"
                type="submit"
              >
                <p>Sign In</p>
                <span>
                  <LiaLongArrowAltRightSolid />
                </span>
              </button>
            </form>
          </div>

          <div className="other-sign">
            <p>or</p>
            <div className="google-sign">
              <a href="/sign-up">
                <p>Create An Account</p>
              </a>
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
      <ToastContainer />
    </div>
  );
};

export default UserSignIn;
