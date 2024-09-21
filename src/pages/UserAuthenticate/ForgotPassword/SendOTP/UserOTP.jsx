import "./SendOTP.css";
import React from "react";
import { SendOtpSchema } from "../../VlidationSchema";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const UserOTP = () => {
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    setTimeout(() => {
      actions.resetForm();
      navigate(`/verify-otp?email=${encodeURIComponent(values.email)}`);
    }, 1000);
  };

  const {
    errors,
    values,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: SendOtpSchema,
    onSubmit,
  });

  return (
    <div className="send-otp-email">
      <div className="send-otp-card">
        <div className="otp-heading">
          <h2>Forgot Password</h2>
        </div>
        <div className="description">
          <p>Enter the email address associated with your Clicon account.</p>
        </div>

        <div className="email-form">
          <h6>Email Address</h6>
          <form onSubmit={handleSubmit} autoComplete="off">
            <input
              id="email"
              type="email"
              name="email"
              onBlur={handleBlur}
              value={values?.email}
              onChange={handleChange}
              className="input-field"
              placeholder="Enter Your Email"
            />
            <p
              className={
                errors?.email && touched?.email ? "input-error" : "display-none"
              }
            >
              {errors?.email}
            </p>
            <button disabled={isSubmitting} type="submit">
              Send OTP{" "}
              <span>
                <HiMiniArrowLongRight />
              </span>
            </button>
          </form>
        </div>

        <div className="other-links">
          <p>
            Already have an account? <a href="/sign-in">Sign In</a>
          </p>
          <p>
            Don’t have an account? <a href="/sign-up">Sign Up</a>
          </p>
        </div>
        <hr />
        <div className="term-and-service">
          <p>
            You may contact <a href="/">Customer Service</a> for help restoring
            access to your account.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserOTP;
