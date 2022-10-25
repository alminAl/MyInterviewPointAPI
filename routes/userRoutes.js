const express = require('express');
const { signupUSer, loginUser, } = require('../controllers/userController');

const validation = require('../middlewares/validationMiddleware');
const { userSignupValidation, userLoginValidation } = require('../validations/userValidation');



// express router
const router = express();

// signup user
router.post("/signup", validation(userSignupValidation), signupUSer);


// login user 
router.post("/login", validation(userLoginValidation), loginUser);



// export modules
module.exports = router;