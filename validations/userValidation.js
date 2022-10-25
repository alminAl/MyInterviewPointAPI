const yup = require("yup");

// signup user validation
const userSignupValidation = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  mobile_number: yup.string().required(),
});

// login user validation
const userLoginValidation = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

module.exports = {
  userSignupValidation,
  userLoginValidation,
};
