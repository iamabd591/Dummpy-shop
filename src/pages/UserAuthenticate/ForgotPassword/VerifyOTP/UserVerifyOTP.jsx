import "./VerifyOTP.css";
import React from "react";
import { useFormik } from "formik";
import { VerifyOtpSchema } from "../../VlidationSchema";
import { useLocation } from "react-router";

const onSubmit = async (values, actions) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
  } catch (error) {
    console.log(error);
  }
};
const UserVerifyOTP = () => {
  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    touched,
  } = useFormik({
    initialValues: {
      userOtp: "",
    },
    validationSchema: VerifyOtpSchema,
    onSubmit,
  });
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");
  return (
    <>
      <div className="verified-otp-main">
        <div className="verified-otp-card">
          <div className="verified-otp-heading">
            <h2>Verify Your OTP</h2>
          </div>
          <div className="verified-otp-description">
            <p>Enter 6 Digit OTP Which Has Been Sent To Your Email {email}</p>
          </div>
          <div className="verified-otp-form">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="userOtp"
                name="userOtp"
                value={values?.userOtp}
                onBlur={handleBlur}
                onChange={handleChange}
                className="verified-otp-input"
                placeholder="Enter 6-Digit OTP"
              />
              <p
                className={
                  errors?.userOtp && touched?.userOtp
                    ? "input-error"
                    : "display-none"
                }
              >
                {errors?.userOtp}
              </p>
              <button type="submit" disabled={isSubmitting}>
                Verify
              </button>
            </form>
          </div>
          <div className="re-send-otp">
            <p>
              Don’t Recived <span>Click Here</span>To Re-Send OTP
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserVerifyOTP;
