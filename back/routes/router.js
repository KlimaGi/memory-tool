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
  updateTopic,
  deleteTopic,
  progressArr,
  todayTopics,
} = require('../controllers/mainController');

router.post('/register', emailValid, passwordValid, userValid, register);
router.post('/login', emailValid, login);
router.get('/userProfile/:secret', secretValid, userData);
router.post('/setPhoto', secretValid, setPhoto);

router.post('/topicData', secretValid, topicValid, createTopic);
router.get('/allTopics/:secret', secretValid, allTopics);
router.get('/singleTopic/:id/:secret', secretValid, singleTopic);
router.get('/updateProgress/:id', updateProgress);
router.post('/updateTopic', secretValid, updateTopic);
router.get('/deleteTopic/:id', deleteTopic);
router.get('/progressArr/:secret', progressArr);
router.post('/todayTopics/:secret', todayTopics);

module.exports = router;
