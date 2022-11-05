const express = require('express');

const router = express.Router();

const {
  emailValid,
  passwordValid,
  userValid,
  secretValid,
  topicValid,
} = require('../middleware/middle');

const {
  register,
  login,
  userData,
  setPhoto,
  createTopic,
  allTopics,
  singleTopic,
  updateProgress,
} = require('../controllers/mainController');

router.post('/register', emailValid, passwordValid, userValid, register);
router.post('/login', login);
router.get('/userProfile/:secret', secretValid, userData);
router.post('/setPhoto', secretValid, setPhoto);

router.post('/topicData', secretValid, topicValid, createTopic);
router.get('/allTopics/:secret', secretValid, allTopics);
router.get('/singleTopic/:id/:secret', secretValid, singleTopic);
router.get('/updateProgress/:id', updateProgress);

module.exports = router;
