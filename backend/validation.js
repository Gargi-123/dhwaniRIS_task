const yup = require("yup");

const registerSchema = yup.object().shape({
  name: yup
    .string()
    .min(4, "First name should be miniumum 4 characters!")
    .required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  password: yup
    .string()
    .min(5, "Password should have miniumum 5 characters!")
    .required("Required"),
});

const loginSchema = yup.object().shape({
  username: yup.string().required("Give username"),
  password: yup.string().required("Give password"),
});

module.exports = { loginSchema, registerSchema };
