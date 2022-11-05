/* eslint-disable consistent-return */
const isEmail = require('sane-email-validation');
const userSchema = require('../schemas/userSchema');
const sendRes = require('../modules/universalRes');

module.exports = {
  emailValid: (req, res, next) => {
    const { email } = req.body;
    if (!isEmail(email)) return sendRes(res, true, 'wrong email', null);
    next();
  },

  passwordValid: (req, res, next) => {
    const { password, password2 } = req.body;
    if (password !== password2) return sendRes(res, true, 'both passwords should match', null);

    if (password.length < 5) return sendRes(res, true, 'password should have at least 5 symbols', null);

    if (password.length > 20) return sendRes(res, true, 'password should have less than 20 symbols', null);

    next();
  },

  userValid: async (req, res, next) => {
    const { email } = req.body;
    const userExists = await userSchema.findOne({ email });
    if (userExists) return sendRes(res, true, 'user already exists', null);

    next();
  },

  photoValid: (req, res, next) => {
    const { photo } = req.body;
    if (!photo.includes('http')) return sendRes(res, true, 'bad photo url', null);

    next();
  },
  secretValid: async (req, res, next) => {
    let secret = '';
    if (req.params.secret) secret = req.params.secret;
    if (req.body.secret) secret = req.body.secret;

    // su email ir photo nurodau kokius laukus man grazinti is backo
    const user = await userSchema.findOne({ secret }, { email: 1, photo: 1 });
    if (!user) return sendRes(res, true, 'there is not such user', null);

    req.body.user = user;
    next();
  },
  topicValid: async (req, res, next) => {
    const { title, content } = req.body;
    if (title.trim().length === 0) return sendRes(res, true, 'empty title', null);
    if (content.trim().length === 0) return sendRes(res, true, 'empty content', null);
    next();
  },
};
