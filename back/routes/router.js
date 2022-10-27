const express = require('express');
const router = express.Router();

const {
  emailValid,
  passwordValid,
  userValid,
  photoValid,
  secretValid
} = require("../middleware/middle");

const {
  register,
  login,
  userData,
  setPhoto
} = require('../controllers/mainController');

router.post('/register', emailValid, passwordValid, userValid, register);
router.post('/login', login);
router.get('/userProfile/:secret', secretValid, userData);
router.post('/setPhoto', secretValid, setPhoto);

router.get('/profile/:secret', secretValid,)


module.exports = router; 