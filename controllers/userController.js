const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");


// create token
const createToken = (_id) => {
  return jwt.sign({ _id }, `${process.env.ACCESS_TOKEN_SECRET}`, {
    expiresIn: "3d",
  });
};

// secure password method
const securePassword = async (password) => {
  try {
    const passwordHash = await bcrypt.hash(password, 10);
    return passwordHash;
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

// signup controller
const signupUSer = async (req, res) => {
  // get info from body/user
  const { email, password, name, mobile_number} =
    req.body;

  try {
    const user = await userModel.signup(
      email,
      password,
      name,
      mobile_number,
      
    );
// const token = createToken(user._id);
 console.log(user);
    res.status(200).json({ user});
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error.message);
  }

};

// login controller
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.login(email, password);

    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get all user
// const allUser = async (req, res) => {
//   try {
//     const users = await UserModel.find({});
//     res.status(200).json({ users, message: "These are all users" });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// const userProfile = async (req, res) => {
//   try {
//     const user_id = req.user;
//     const userProfile = await UserModel.findById(user_id).select("-password");
//     res.status(200).json(userProfile);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // update user info
// const updateUser = async (req, res) => {
//   const user_id = req.user;
//   const { email, name, mobile_number, about, profile_image } = req.body;
//   try {
//     const user = await UserModel.findOneAndUpdate(
//       user_id,
//       {
//         email,
//         name,
//         mobile_number
       
//       },
//       {
//         returnOriginal: false,
//       }
//     ).select("-password");
//     res.status(200).json(user);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// change password
const changePassword = async (req, res) => {
  try {
    const user_id = req.user;
    const password = req.body.password;

    const newPassword = await securePassword(password);

    const user = await userModel.findOneAndUpdate(user_id, {
      password: newPassword,
    });
    res.status(200).json({ message: "Password change successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// export modules
module.exports = {
  signupUSer,
  loginUser,
 
};