import * as yup from "yup";
const passwordRegx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

export const SignInSchema = yup.object().shape({
  email: yup.string().email("Please Enter Valid Email").required("Required"),
  password: yup
    .string()
    .min(8)
    .matches(passwordRegx, { message: "Please Enter Valid Password" })
    .required("Required"),
});

export const SignUpSchema = yup.object().shape({
  name: yup.string().min(5).max(25).required("Required"),
  email: yup.string().email("Please Enter Valid Email").required("Required"),
  password: yup
    .string()
    .min(8)
    .matches(passwordRegx, { message: "Please Enter Strong Password" })
    .required("Required"),
  confrimPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must be matched")
    .required("Required"),
  termsAndConditions: yup
    .boolean()
    .oneOf([true], "You must accept the Terms and Conditions")
    .required("Required"),
});

export const SendOtpSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter the vaild email")
    .required("Required"),
});

export const VerifyOtpSchema = yup.object().shape({
  number: yup.number("Please Valid OTP").required("Required"),
});

export const ResetPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .matches(passwordRegx, { message: "Please Enter Strong Password" })
    .required("Required"),
  confrimPasword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must be matched")
    .required("Required"),
});
