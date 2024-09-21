import React, { useState } from "react";
import "./NewPassword.css";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import { ResetPasswordSchema } from "../../VlidationSchema";

const UserNewPassword = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfrimPassword, setShowConfrimPassword] = useState(false);
  const onSubmit = async (values, actions) => {
    try {
      console.log(values);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Password Updated Successfully!", {
        autoClose: 5000,
        pauseOnHover: true,
        bodyClassName: "toast-body",
        className: "toast-success custom-toast-container",
        onClose: () => {
          navigate("/");
        },
      });
      actions.resetForm();
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong!");
    }
  };
  const toggolePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggoleConfrimPassword = () => {
    setShowConfrimPassword(!showConfrimPassword);
  };
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
      newPassword: "",
      confrimNewPassword: "",
    },
    validationSchema: ResetPasswordSchema,
    onSubmit,
  });
  return (
    <>
      <div className="new-password-main">
        <div className="new-password-card">
          <div className="new-password-heading">
            <h2>New Password</h2>
          </div>
          <div className="new-password-description">
            <p>Please Enter Your New Password</p>
          </div>
          <div className="new-password-form">
            <form onSubmit={handleSubmit}>
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="newPassword"
                  name="newPassword"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values?.newPassword}
                  placeholder="New Password"
                  className="new-password-update"
                />
                <span
                  className="update-password-eye-icon"
                  onClick={toggolePassword}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <p
                className={
                  errors?.newPassword && touched?.newPassword
                    ? "input-error"
                    : "display-none"
                }
              >
                {errors?.newPassword}
              </p>
              <div className="password-wrapper">
                <input
                  type={showConfrimPassword ? "text" : "password"}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  id="confrimNewPassword"
                  name="confrimNewPassword"
                  className="new-password-update"
                  value={values?.confrimNewPassword}
                  placeholder="Confrim New Password"
                />
                <span
                  className="update-password-eye-icon"
                  onClick={toggoleConfrimPassword}
                >
                  {showConfrimPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <p
                className={
                  errors?.confrimNewPassword && touched?.confrimNewPassword
                    ? "input-error"
                    : "display-none"
                }
              >
                {errors?.confrimNewPassword}
              </p>
              <button type="submit" disabled={isSubmitting}>
                Update Password
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default UserNewPassword;
