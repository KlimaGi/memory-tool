const keygen = require("keygenerator");
const bcrypt = require('bcrypt');
const userSchema = require('../schemas/userSchema');
const postSchema = require('../schemas/postSchema');
const sendRes = require('../modules/universalRes');

module.exports = {

  register: async (req, res) => {
    const { password } = req.body;

    const hash = await bcrypt.hash(password, 15);

    const secret = keygen._();
    const newUser = new userSchema({ ...req.body, password: hash, secret });
    console.log('newUser', newUser);

    await newUser.save();

    return sendRes(res, false, 'all good', null);
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    //todo: create middle to check if user exist
    const userExists = await userSchema.findOne({ email });

    if (userExists) {
      const compare = await bcrypt.compare(password, userExists.password);

      if (compare) return sendRes(res, false, 'all good', { secret: userExists.secret });
    }

    return sendRes(res, true, "bad credentials", null);
  },
  userData: async (req, res) => {
    const { user } = req.body;
    console.log('user', user);

    // const userExists = await userSchema.findOne({ secret });

    return sendRes(res, false, 'all good', user);
  },
  setPhoto: async (req, res) => {
    const { secret, photo } = req.body;

    const userData = await userSchema.findOneAndUpdate(
      { secret: secret },
      { $set: { photo: photo } },
      { new: true }
    );

    return sendRes(res, false, 'ok-photo', { photo: userData.photo });
  }

}