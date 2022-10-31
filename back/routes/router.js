const express = require('express');
const router = express.Router();

const {
  emailValid,
  passwordValid,
  userValid,
  photoValid,
  secretValid,
  topicValid
} = require("../middleware/middle");

const {
  register,
  login,
  userData,
  setPhoto,
  createTopic
} = require('../controllers/mainController');

router.post('/register', emailValid, passwordValid, userValid, register);
router.post('/login', login);
router.get('/userProfile/:secret', secretValid, userData);
router.post('/setPhoto', secretValid, setPhoto);

router.post('/topicData', secretValid, topicValid, createTopic)


module.exports = router; 